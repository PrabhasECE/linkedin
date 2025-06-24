import React from 'react';
import {
  Box, Card, Avatar, InputBase, Button, Typography, IconButton, Link,
  CardHeader, CardContent, CardActions, CardMedia,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ArticleIcon from '@mui/icons-material/Article';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

import { currentUserProfile, dummyPosts } from '../dummyData.js';

import MessagingWidget from '../components/MessagingWidget.jsx';
import HomeLeftSidebarLinksCard from '../components/HomeLeftSidebarLinksCard.jsx';
import HomeUserProfileCard from '../components/HomeUserProfileCard.jsx';

/**
 * Renders the main home page layout, including a left sidebar with user profile and links,
 * a central feed for posts, and a right sidebar for various widgets.
 * It also incorporates a floating messaging widget.
 */
function HomePage() {
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
      {/* Left Sidebar Content */}
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
        <HomeUserProfileCard userProfile={currentUserProfile} />

        {/* Connections Card */}
        <Card sx={{
          p: 2,
          mb: 0,
          borderRadius: '8px',
          boxShadow: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
        }}>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Connections
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Connect with alumni
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <PersonAddAlt1Icon fontSize="small" />
          </IconButton>
        </Card>

        <HomeLeftSidebarLinksCard />
      </Box>

      {/* Central Content (Post Feed) */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          height: { md: '100%' },
          overflowY: { md: 'auto' },
        }}
      >
        {/* Start Post Input Section */}
        <Card sx={{ p: 2, mb: 2, borderRadius: '8px', boxShadow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              src="https://cdn-useast1.kapwing.com/static/templates/custom-background-profile-picture-maker-full-75577a19.webp"
              alt="Your Profile"
              sx={{ width: 48, height: 48, mr: 2 }}
            />
            <InputBase
              placeholder="Start a post"
              sx={{
                flexGrow: 1,
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: '24px',
                p: '8px 16px',
                '&:hover': {
                  borderColor: (theme) => theme.palette.text.secondary,
                },
                '&.Mui-focused': {
                  borderColor: (theme) => theme.palette.primary.main,
                  boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.light}`,
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Button startIcon={<PlayArrowIcon sx={{ color: '#54B435' }} />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
              Video
            </Button>
            <Button startIcon={<PhotoCameraIcon sx={{ color: '#33A6B4' }} />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
              Photo
            </Button>
            <Button startIcon={<ArticleIcon sx={{ color: '#E06B22' }} />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
              Write article
            </Button>
          </Box>
        </Card>

        {/* Dynamic Post Feed */}
        {dummyPosts.map((post) => (
          <Card key={post.id} sx={{ mb: 2, borderRadius: '8px', boxShadow: 1 }}>
            <CardHeader
              avatar={
                <Avatar src={post.avatar} aria-label="profile pic" />
              }
              action={
                <Box>
                  <IconButton aria-label="settings" sx={{ mr: 0.5 }}>
                    <MoreHorizIcon />
                  </IconButton>
                  <IconButton aria-label="close">
                    <CloseIcon />
                  </IconButton>
                </Box>
              }
              title={
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {post.author}
                    {post.verified && <LightbulbIcon sx={{ fontSize: '0.9em', verticalAlign: 'middle', ml: 0.5, color: '#FFD700' }} />}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.followers} followers
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {post.timeAgo}
                  </Typography>
                </Box>
              }
              sx={{ pb: 1 }}
            />
            <CardContent sx={{ pt: 0 }}>
              {post.content.map((paragraph, index) => (
                <Typography key={index} variant="body2" color="text.primary" component="p" sx={{ mb: 1 }}>
                  {/* Render hashtags as links */}
                  {paragraph.split(/(#\w+)/g).map((part, i) =>
                    part.startsWith('#') ? (
                      <Link key={i} href="#" color="primary" sx={{ textDecoration: 'none' }}>{part}</Link>
                    ) : (
                      part
                    )
                  )}
                </Typography>
              ))}
              {post.image && (
                <Box sx={{ mt: 2, borderRadius: '4px', overflow: 'hidden' }}>
                  <img src={post.image} alt="Post content" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </Box>
              )}
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'column', pt: 0, pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 2, mb: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  {<Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {post.reactions && post.reactions.length > 0 && (
                      <Box sx={{
                        display: 'flex',
                        position: 'relative',
                        height: 16,
                        width: `${16 + (post.reactions.length - 1) * 10 + 2}px`,
                        mr: 0.5,
                      }}>
                        {post.reactions.map((reaction, idx) => (
                          <Avatar
                            key={idx}
                            sx={{
                              width: 16,
                              height: 16,
                              position: 'absolute',
                              left: `${idx * 10}px`,
                              border: (theme) => `1px solid ${theme.palette.background.paper}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor:
                                reaction === 'like' ? '#0A66C2' :
                                  reaction === 'message' ? '#0A66C2' :
                                    reaction === 'love' ? '#E0245E' :
                                      'grey.400',
                            }}
                          >
                            {reaction === 'like' && <ThumbUpIcon sx={{ fontSize: 10, color: 'white' }} />}
                            {reaction === 'message' && <ChatBubbleIcon sx={{ fontSize: 10, color: 'white' }} />}
                            {reaction === 'love' && <FavoriteIcon sx={{ fontSize: 10, color: 'white' }} />}
                          </Avatar>
                        ))}
                      </Box>
                    )}
                    <Typography variant="caption" color="text.secondary">
                      {post.reactionsCount}
                    </Typography>
                  </Box>
                  }
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.commentsCount} comments · {post.repostsCount} reposts
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', borderTop: (theme) => `1px solid ${theme.palette.divider}`, width: '100%', pt: 1 }}>
                <Button fullWidth startIcon={<ThumbUpOutlinedIcon />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
                  Like
                </Button>
                <Button fullWidth startIcon={<ChatBubbleOutlineOutlinedIcon />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
                  Comment
                </Button>
                <Button fullWidth startIcon={<ShareOutlinedIcon />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
                  Repost
                </Button>
                <Button fullWidth startIcon={<SendOutlinedIcon />} sx={{ textTransform: 'none', color: 'text.secondary' }}>
                  Send
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Right Sidebar Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '300px' },
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
        {/* Puzzle Game Card */}
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Take a break with a LinkedIn puzzle game
        </Typography>
        <Card sx={{ p: 2, borderRadius: '8px', boxShadow: 0, bgcolor: 'background.default' }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Zip - a quick brain teaser
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            Solve in 60s or less!
          </Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ textTransform: 'none', borderRadius: '20px' }}>
            Solve now
          </Button>
        </Card>

        {/* Hiring Ad Card */}
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          See who's hiring on LinkedIn
        </Typography>
        <Card sx={{ borderRadius: '8px', boxShadow: 0 }}>
          <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCINhpU5UPY3ROJgCJzuvou155ihkSvZpb9w&s"
            alt="Hiring Ad"
            sx={{ borderRadius: '8px' }}
          />
        </Card>
      </Box>

      <MessagingWidget />
    </Box>
  );
}

export default HomePage;