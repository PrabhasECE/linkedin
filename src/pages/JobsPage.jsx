import { useState, useMemo } from 'react';
import {
  Box, Typography, Card, InputBase, Button, Avatar, IconButton,
  List, ListItem, ListItemIcon, ListItemText, Divider, Chip,
  Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';

import { dummyJobs } from '../dummyData.js';

/**
 * Renders the Jobs page, providing job search functionality, filter options,
 * and a list of job postings. It includes sections for job alerts, saved jobs,
 * and related skills/learning content.
 */
function JobsPage() {
  // State for controlling the open/close state and anchor element of the experience level dropdown menu.
  const [experienceAnchorEl, setExperienceAnchorEl] = useState(null);
  //State for controlling the open/close state and anchor element of the job type dropdown menu.
  const [jobTypeAnchorEl, setJobTypeAnchorEl] = useState(null);
  // State for controlling the open/close state and anchor element of the on-site/remote dropdown menu.
   
  const [onSiteRemoteAnchorEl, setOnSiteRemoteAnchorEl] = useState(null);

  // State for controlling the open/close state of the "All Filters" dialog.
  
  const [allFiltersDialogOpen, setAllFiltersDialogOpen] = useState(false);

  // State to store the currently selected experience level filter.
  const [selectedExperience, setSelectedExperience] = useState('');

  // State to store the currently selected job type filter.
  const [selectedJobType, setSelectedJobType] = useState('');

  //State to store the currently selected on-site/remote filter.
  const [selectedOnSiteRemote, setSelectedOnSiteRemote] = useState('');

  // State to store the current search term entered by the user.
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleClickExperience = (event) => setExperienceAnchorEl(event.currentTarget);
  
  const handleClickJobType = (event) => setJobTypeAnchorEl(event.currentTarget);

  const handleClickOnSiteRemote = (event) => setOnSiteRemoteAnchorEl(event.currentTarget);

  const handleOpenAllFiltersDialog = () => setAllFiltersDialogOpen(true);

  const handleCloseExperience = () => setExperienceAnchorEl(null);
  
  
  const handleCloseJobType = () => setJobTypeAnchorEl(null);
 
  const handleCloseOnSiteRemote = () => setOnSiteRemoteAnchorEl(null);
 
  const handleCloseAllFiltersDialog = () => setAllFiltersDialogOpen(false);

 
  const handleSelectExperience = (level) => {
    setSelectedExperience(level);
    handleCloseExperience();
  };

  /**
   * Sets the selected job type and closes the dropdown.
   * @param {string} type - The job type to select.
   */
  const handleSelectJobType = (type) => {
    setSelectedJobType(type);
    handleCloseJobType();
  };

 
  const handleSelectOnSiteRemote = (status) => {
    setSelectedOnSiteRemote(status);
    handleCloseOnSiteRemote();
  };

 
  const handleClearFilter = (filterName) => {
    if (filterName === 'experience') setSelectedExperience('');
    if (filterName === 'jobType') setSelectedJobType('');
    if (filterName === 'onSiteRemote') setSelectedOnSiteRemote('');
    if (filterName === 'searchTerm') setSearchTerm('');
  };

  /**
   * Memoized array of jobs filtered based on the current search term and selected filter values.
   */
  const filteredJobs = useMemo(() => {
    return dummyJobs.filter(job => {
      if (selectedExperience && job.experienceLevel !== selectedExperience) {
        return false;
      }

      if (selectedJobType && job.jobType !== selectedJobType) {
        return false;
      }

      if (selectedOnSiteRemote && job.onSiteRemote !== selectedOnSiteRemote) {
        return false;
      }

      if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(lowerCaseSearchTerm);
        const matchesCompany = job.company.toLowerCase().includes(lowerCaseSearchTerm);
        const matchesDescription = job.description.toLowerCase().includes(lowerCaseSearchTerm);
        const matchesSkills = job.skills.some(skill => skill.toLowerCase().includes(lowerCaseSearchTerm));
        if (!matchesTitle && !matchesCompany && !matchesDescription && !matchesSkills) {
          return false;
        }
      }

      return true;
    });
  }, [selectedExperience, selectedJobType, selectedOnSiteRemote, searchTerm]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100%',
        width: '100%',
        bgcolor: 'background.default',
        p: { xs: 2, md: 3 },
        overflowY: { xs: 'auto', md: 'hidden' },
      }}
    >
      {/* Left Sidebar for Job Alerts and Saved Jobs */}
      <Box
        sx={{
          width: { xs: '100%', md: '260px' },
          flexShrink: 0,
          mr: { md: 3 },
          mb: { xs: 2, md: 0 },
          height: { md: '100%' },
          overflowY: { md: 'auto' },
          p: 2,
          borderRadius: '8px',
          boxShadow: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Job Alerts
        </Typography>
        <List disablePadding>
          <ListItem button sx={{ py: 0.5, px: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}><NotificationsActiveIcon fontSize="small" /></ListItemIcon>
            <ListItemText primary="Create job alert" primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium', color: 'primary.main' }} />
          </ListItem>
        </List>
        <Divider sx={{ my: 2, borderColor: 'divider' }} />
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Saved Jobs
        </Typography>
        <List disablePadding>
          <ListItem button sx={{ py: 0.5, px: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}><BookmarkIcon fontSize="small" /></ListItemIcon>
            <ListItemText primary="Manage saved jobs" primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium', color: 'primary.main' }} />
          </ListItem>
        </List>
        <Divider sx={{ my: 2, borderColor: 'divider' }} />
        <Button fullWidth variant="outlined" sx={{ textTransform: 'none', borderRadius: '20px' }}>
          Find your next job
        </Button>
      </Box>

      {/* Central Content - Job Search & Listings */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          height: { md: '100%' },
          overflowY: { md: 'auto' },
        }}
      >
        {/* Job Search and Filter Section */}
        <Card sx={{ p: 2, mb: 2, borderRadius: '8px', boxShadow: 1, bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InputBase
              placeholder="Search by title, skill, or company"
              value={searchTerm}
              height="40px"
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                flexGrow: 1,
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: '4px',
                p: '8px 12px',
                mr: 1,
              }}
            />
            <Button variant="contained" sx={{ textTransform: 'none', height: '40px', px: 3, borderRadius: '4px' }}>
              Search
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {/* All filters Chip (opens a Dialog) */}
            <Chip
              label="All filters"
              onClick={handleOpenAllFiltersDialog}
              icon={<ArrowDropDownIcon />}
              variant="outlined"
            />
            <Dialog open={allFiltersDialogOpen} onClose={handleCloseAllFiltersDialog} fullWidth maxWidth="sm">
              <DialogTitle>All Filters</DialogTitle>
              <DialogContent>
                <Typography variant="body1">
                  This is where you would build out more advanced filter options.
                  You could add:
                </Typography>
                <ul>
                  <li>Salary Range sliders</li>
                  <li>Industry checkboxes (multi-select)</li>
                  <li>Company size radio buttons</li>
                  <li>Date Posted options</li>
                </ul>
                <Typography variant="body2" color="text.secondary">
                  (For this example, it's just a placeholder dialog. You'd add your actual filter components here.)
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAllFiltersDialog}>Cancel</Button>
                <Button onClick={handleCloseAllFiltersDialog} variant="contained">Apply Filters</Button>
              </DialogActions>
            </Dialog>

            {/* Experience Level Chip with Menu */}
            <Chip
              label={selectedExperience ? `Experience: ${selectedExperience}` : "Experience Level"}
              onClick={handleClickExperience}
              onDelete={selectedExperience ? () => handleClearFilter('experience') : undefined}
              deleteIcon={selectedExperience ? <ClearIcon /> : undefined}
              icon={<ArrowDropDownIcon />}
              variant="outlined"
            />
            <Menu
              anchorEl={experienceAnchorEl}
              open={Boolean(experienceAnchorEl)}
              onClose={handleCloseExperience}
              MenuListProps={{
                'aria-labelledby': 'experience-level-chip',
              }}
            >
              <MenuItem onClick={() => handleSelectExperience('')}>All Experience Levels</MenuItem>
              <MenuItem onClick={() => handleSelectExperience('Internship')}>Internship</MenuItem>
              <MenuItem onClick={() => handleSelectExperience('Entry Level')}>Entry Level</MenuItem>
              <MenuItem onClick={() => handleSelectExperience('Associate')}>Associate</MenuItem>
              <MenuItem onClick={() => handleSelectExperience('Mid-Senior Level')}>Mid-Senior Level</MenuItem>
              <MenuItem onClick={() => handleSelectExperience('Director')}>Director</MenuItem>
              <MenuItem onClick={() => handleSelectExperience('Executive')}>Executive</MenuItem>
            </Menu>

            {/* Job Type Chip with Menu */}
            <Chip
              label={selectedJobType ? `Job Type: ${selectedJobType}` : "Job Type"}
              onClick={handleClickJobType}
              onDelete={selectedJobType ? () => handleClearFilter('jobType') : undefined}
              deleteIcon={selectedJobType ? <ClearIcon /> : undefined}
              icon={<ArrowDropDownIcon />}
              variant="outlined"
            />
            <Menu
              anchorEl={jobTypeAnchorEl}
              open={Boolean(jobTypeAnchorEl)}
              onClose={handleCloseJobType}
              MenuListProps={{
                'aria-labelledby': 'job-type-chip',
              }}
            >
              <MenuItem onClick={() => handleSelectJobType('')}>All Job Types</MenuItem>
              <MenuItem onClick={() => handleSelectJobType('Full-time')}>Full-time</MenuItem>
              <MenuItem onClick={() => handleSelectJobType('Part-time')}>Part-time</MenuItem>
              <MenuItem onClick={() => handleSelectJobType('Contract')}>Contract</MenuItem>
              <MenuItem onClick={() => handleSelectJobType('Temporary')}>Temporary</MenuItem>
              <MenuItem onClick={() => handleSelectJobType('Volunteer')}>Volunteer</MenuItem>
            </Menu>

            {/* On-site/Remote Chip with Menu */}
            <Chip
              label={selectedOnSiteRemote ? `Location: ${selectedOnSiteRemote}` : "On-site/Remote"}
              onClick={handleClickOnSiteRemote}
              onDelete={selectedOnSiteRemote ? () => handleClearFilter('onSiteRemote') : undefined}
              deleteIcon={selectedOnSiteRemote ? <ClearIcon /> : undefined}
              icon={<ArrowDropDownIcon />}
              variant="outlined"
            />
            <Menu
              anchorEl={onSiteRemoteAnchorEl}
              open={Boolean(onSiteRemoteAnchorEl)}
              onClose={handleCloseOnSiteRemote}
              MenuListProps={{
                'aria-labelledby': 'on-site-remote-chip',
              }}
            >
              <MenuItem onClick={() => handleSelectOnSiteRemote('')}>Any Location Type</MenuItem>
              <MenuItem onClick={() => handleSelectOnSiteRemote('On-site')}>On-site</MenuItem>
              <MenuItem onClick={() => handleSelectOnSiteRemote('Remote')}>Remote</MenuItem>
              <MenuItem onClick={() => handleSelectOnSiteRemote('Hybrid')}>Hybrid</MenuItem>
            </Menu>
          </Box>
        </Card>

        {/* Job Listings */}
        <Typography variant="h6" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
          {filteredJobs.length > 0 ? `Recommended Jobs (${filteredJobs.length})` : 'No Jobs Found'}
        </Typography>
        {filteredJobs.map((job) => (
          <Card key={job.id} sx={{ mb: 2, p: 2, borderRadius: '8px', boxShadow: 1, display: 'flex', bgcolor: 'background.paper' }}>
            <Avatar src={job.companyLogo} variant="square" sx={{ width: 48, height: 48, mr: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {job.company}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} /> {job.location}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} /> {job.timePosted}
                {job.easyApply && (
                  <Chip
                    label="Easy Apply"
                    size="small"
                    icon={<CheckCircleOutlineIcon fontSize="small" />}
                    sx={{ ml: 1, bgcolor: 'success.light', color: 'success.dark', fontWeight: 'bold', height: 18, fontSize: '0.6rem' }}
                  />
                )}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                {job.applicants} applicants
              </Typography>
            </Box>
            <IconButton sx={{ alignSelf: 'flex-start', color: 'text.secondary' }}>
              <BookmarkIcon fontSize="small" />
            </IconButton>
          </Card>
        ))}
        {filteredJobs.length === 0 && (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
            No jobs match your current filters. Try adjusting them.
          </Typography>
        )}
      </Box>

      {/* Right Sidebar for Skills, Promoted, etc. */}
      <Box
        sx={{
          width: { xs: '100%', md: '280px' },
          flexShrink: 0,
          ml: { md: 3 },
          mt: { xs: 2, md: 0 },
          height: { md: '100%' },
          overflowY: { md: 'auto' },
          p: 2,
          borderRadius: '8px',
          boxShadow: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Skills you may have
        </Typography>
        <List disablePadding>
          {['React.js', 'Project Management', 'Data Analysis', 'Cloud Computing'].map((skill, index) => (
            <ListItem key={index} button sx={{ py: 0.5, px: 0 }}>
              <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body2', color: 'primary.main', fontWeight: 'medium' }} />
              <ArrowForwardIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2, borderColor: 'divider' }} />
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          LinkedIn Learning
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Discover courses to help you land your next job.
        </Typography>
        <Button variant="outlined" fullWidth sx={{ textTransform: 'none', borderRadius: '20px' }}>
          Explore Learning
        </Button>
      </Box>
    </Box>
  );
}

export default JobsPage;