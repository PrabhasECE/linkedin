import { useState } from 'react';
import {
  Box,
  Grid, Paper, Container, Divider, Button, Avatar, Typography, IconButton, TextField
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


import LinkedInHeader from '../components/Header.jsx';
import MessagingWidget from '../components/MessagingWidget';

// Import dummy data
import { dummyProfileData as initialDummyProfileData } from '../dummyData.js';

// --- REMOVED COMPONENT IMPORTS ---
// import ProfileNavigationCard from '../components/ProfileNavigationCard';
// import LeftProfileSummaryCard from '../components/LeftProfileSummaryCard';
// --- END REMOVED COMPONENT IMPORTS ---


function ProfilePage() {
  const [profileData, setProfileData] = useState(initialDummyProfileData);
  const [isHeadlineEditing, setIsHeadlineEditing] = useState(false);
  const [tempHeadline, setTempHeadline] = useState(profileData.headline);
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [tempAbout, setTempAbout] = useState(profileData.about);

  // Handlers for Headline
  const handleHeadlineEditToggle = () => {
    setIsHeadlineEditing(!isHeadlineEditing);
    setTempHeadline(profileData.headline);
  };

  const handleHeadlineSave = () => {
    setProfileData(prevData => ({ ...prevData, headline: tempHeadline }));
    setIsHeadlineEditing(false);
  };

  const handleHeadlineCancel = () => {
    setTempHeadline(profileData.headline);
    setIsHeadlineEditing(false);
  };

  // Handlers for About section
  const handleAboutEditToggle = () => {
    setIsAboutEditing(!isAboutEditing);
    setTempAbout(profileData.about);
  };

  const handleAboutSave = () => {
    setProfileData(prevData => ({ ...prevData, about: tempAbout }));
    setIsAboutEditing(false);
  };

  const handleAboutCancel = () => {
    setTempAbout(profileData.about);
    setIsAboutEditing(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Fixed Header */}
      <LinkedInHeader />

      {/* Top spacing below fixed AppBar */}
      <Box sx={{ mt: { xs: '70px', sm: '70px', md: '70px' } }} />


      {/* Main Content Area - Container uses 12-column grid */}
      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Grid container spacing={3}>

          {/* --- LEFT SIDEBAR COLUMN HAS BEEN REMOVED --- */}
          {/* Main Profile Content Column (ADJUSTED TO md={8}) */}
          {/* It takes full width on extra small/small screens (xs={12}) */}
          <Grid item xs={12} md={8}> {/* md={8} to take up space formerly occupied by md={2} left sidebar */}
            {/* Profile Card */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Avatar
                  alt={profileData.name}
                  src="https://cdn-useast1.kapwing.com/static/templates/custom-background-profile-picture-maker-full-75577a19.webp" // Placeholder for avatar
                  sx={{ width: 80, height: 80, mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}
                />
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flexGrow: 1 }}>
                  <Typography variant="h5" component="h1">{profileData.name}</Typography>

                  {/* Editable Headline Section */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {isHeadlineEditing ? (
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={tempHeadline}
                        onChange={(e) => setTempHeadline(e.target.value)}
                        sx={{ my: 1 }}
                      />
                    ) : (
                      <Typography variant="body1" color="text.secondary">{profileData.headline}</Typography>
                    )}
                    {!isHeadlineEditing && (
                      <IconButton size="small" onClick={handleHeadlineEditToggle} aria-label="edit headline">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                  {isHeadlineEditing && (
                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleHeadlineSave}
                        startIcon={<SaveIcon />}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handleHeadlineCancel}
                        startIcon={<CancelIcon />}
                      >
                        Cancel
                      </Button>
                    </Box>
                  )}
                  {/* End Editable Headline Section */}

                  <Typography variant="body2" color="text.secondary">{profileData.location}</Typography>
                </Box>
                <Box sx={{ ml: { xs: 0, sm: 'auto' }, textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 2, sm: 0 } }}>
                  <Button variant="contained" color="primary" sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}>Open to</Button>
                  <Button variant="outlined" color="primary" sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}>Add section</Button>
                  <Button variant="outlined" color="primary">More</Button>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />

              {/* Editable About Section */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">About</Typography>
                {!isAboutEditing && (
                  <IconButton size="small" onClick={handleAboutEditToggle} aria-label="edit about">
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
              {isAboutEditing ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={tempAbout}
                  onChange={(e) => setTempAbout(e.target.value)}
                  sx={{ my: 1 }}
                />
              ) : (
                <Typography variant="body1">{profileData.about}</Typography>
              )}
              {isAboutEditing && (
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleAboutSave}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleAboutCancel}
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
              {/* End Editable About Section */}
            </Paper>

            {/* Analytics Section - Inline for now, can be extracted to component */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>Analytics</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VisibilityIcon color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2">Profile views</Typography>
                      <Typography variant="h6">{profileData.views}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ConnectWithoutContactIcon color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2">Connections</Typography>
                      <Typography variant="h6">{profileData.connections}+</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SearchIcon color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2">Search appearances</Typography>
                      <Typography variant="h6">{profileData.searchAppearances}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DescriptionIcon color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2">Post impressions</Typography>
                      <Typography variant="h6">{profileData.postImpressions}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>

            {/* Experience Section - Inline for now, can be extracted to component */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>Experience</Typography>
              {profileData.experience.map((exp) => (
                <Box key={exp.id} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <WorkIcon color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{exp.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{exp.company}</Typography>
                      <Typography variant="caption" color="text.secondary">{exp.years}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2">{exp.description}</Typography>
                  <Divider sx={{ my: 1 }} />
                </Box>
              ))}
            </Paper>

            {/* Education Section - Inline for now, can be extracted to component */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>Education</Typography>
              {profileData.education.map((edu) => (
                <Box key={edu.id} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SchoolIcon color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{edu.degree} in {edu.field}</Typography>
                      <Typography variant="body2" color="text.secondary">{edu.university}</Typography>
                      <Typography variant="caption" color="text.secondary">{edu.years}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                </Box>
              ))}
            </Paper>

          </Grid>

          {/* Right Sidebar Column (takes 4 columns on medium/large, 12 on small) */}
          <Grid item xs={12} md={4}>
            {/* Nested Grid to arrange sidebar items side-by-side on larger screens */}
            <Grid container spacing={3}>

              {/* Recent Activity Widget */}
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>Recent Activity</Typography>
                  <Box sx={{ maxHeight: 200, overflowY: 'auto' }}>
                    {profileData.recentActivities.map((activity) => (
                      <Box key={activity.id} sx={{ mb: 1, py: 0.5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                          {activity.type === 'post' ? 'Posted: ' : 'Activity: '}
                          {activity.text}
                        </Typography>
                        <Divider sx={{ my: 1 }} />
                      </Box>
                    ))}
                  </Box>
                  <Button size="small" variant="text" fullWidth sx={{ mt: 1 }}>Show all activity</Button>
                </Paper>
              </Grid>

              {/* Skills Widget */}
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>Skills</Typography>
                  {profileData.skills.map((skill, index) => (
                    <Button key={index} variant="outlined" size="small" sx={{ mr: 1, mb: 1, textTransform: 'none' }}>
                      {skill}
                    </Button>
                  ))}
                </Paper>
              </Grid>

              {/* People You Might Know (full width within md=4 sidebar) */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6">People You Might Know</Typography>
                    <IconButton size="small" aria-label="close">
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  {profileData.peopleYouMayKnow.map((person) => (
                    <Paper key={person.id} elevation={0} sx={{ p: 1.5, mb: 1, border: '1px solid #e0e0e0', borderRadius: '4px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar src={person.avatar} alt={person.name} sx={{ width: 48, height: 48, mr: 1.5 }} />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{person.name}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>{person.headline}</Typography>
                        </Box>
                      </Box>
                      <Button variant="outlined" size="small" startIcon={<PersonAddIcon />} fullWidth>Connect</Button>
                    </Paper>
                  ))}
                  <Button size="small" variant="text" fullWidth sx={{ mt: 1 }}>View more suggestions</Button>
                </Paper>
              </Grid>

              {/* LinkedIn Learning / Recommended Courses (full width within md=4 sidebar) */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>Learning for you</Typography>
                  {profileData.recommendedCourses.map((course) => (
                    <Paper key={course.id} elevation={0} sx={{ p: 1.5, mb: 1, border: '1px solid #e0e0e0', borderRadius: '4px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
                        <PlayCircleOutlineIcon color="primary" sx={{ mr: 1.5, mt: 0.5 }} />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>{course.title}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>{course.provider}</Typography>
                        </Box>
                      </Box>
                      <Button variant="text" size="small" fullWidth sx={{ textTransform: 'none', mt: 0.5 }}>View Course</Button>
                    </Paper>
                  ))}
                  <Button size="small" variant="text" fullWidth sx={{ mt: 1 }}>Browse all courses</Button>
                </Paper>
              </Grid>

              {/* People Also Viewed Widget (full width within md=4 sidebar) */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>People Also Viewed</Typography>
                  <Typography variant="body2" color="text.secondary">Placeholder for suggested profiles.</Typography>
                </Paper>
              </Grid>

            </Grid> {/* End of nested Grid container */}
          </Grid>
        </Grid>
      </Container>

      {/* Messaging Widget - Placed outside the main Grid/Container to float */}
      <MessagingWidget />

    </Box>
  );
}

export default ProfilePage;