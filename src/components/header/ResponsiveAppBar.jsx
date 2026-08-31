import * as React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import { Link, useLocation } from 'react-router-dom';

const resume_URL =
  'https://sagnikghosh.netlify.app/SagnikGhoshResume.pdf';

const navigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/aboutme',
  },
  {
    label: 'Skills',
    path: '/skills',
  },
  {
    label: 'Qualification',
    path: '/qualification',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation();

  const downloadResume = () => {
    const fileName = resume_URL.split('/').pop();

    const aTag = document.createElement('a');
    aTag.href = resume_URL;
    aTag.setAttribute('download', fileName);

    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path;
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #e6ebed',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: '70px !important',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: '#004d40',
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                mr: 4,
              }}
            >
              Sagnik
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                alignItems: 'center',
                gap: 0.5,
                flexGrow: 1,
              }}
            >
              {navigation.map((item) => {
                const active = isActive(item.path);

                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      position: 'relative',
                      px: 1.6,
                      py: 1,
                      borderRadius: '8px',
                      color: active ? '#004d40' : '#607078',
                      textTransform: 'none',
                      fontSize: '0.92rem',
                      fontWeight: active ? 700 : 500,

                      '&:hover': {
                        backgroundColor: '#f0f5f5',
                        color: '#004d40',
                      },

                      '&::after': active
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: '4px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '18px',
                            height: '2px',
                            borderRadius: '5px',
                            backgroundColor: '#00897b',
                          }
                        : {},
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Desktop Actions */}
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Button
                onClick={downloadResume}
                startIcon={<DownloadIcon />}
                sx={{
                  px: 1.8,
                  py: 1,
                  borderRadius: '8px',
                  color: '#455a64',
                  textTransform: 'none',
                  fontWeight: 600,

                  '&:hover': {
                    backgroundColor: '#f0f5f5',
                    color: '#004d40',
                  },
                }}
              >
                Resume
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                startIcon={<ContactMailIcon />}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  backgroundColor: '#004d40',
                  color: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 700,
                  boxShadow: 'none',

                  '&:hover': {
                    backgroundColor: '#00695c',
                    boxShadow: 'none',
                  },
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open navigation menu"
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                color: '#004d40',
                border: '1px solid #dfe5e9',
                borderRadius: '8px',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: {
              xs: '85%',
              sm: '360px',
            },
            backgroundColor: '#f7f9fc',
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 2,
            borderBottom: '1px solid #dfe5e9',
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '1.25rem',
              color: '#004d40',
            }}
          >
            Sagnik.
          </Typography>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: '#455a64',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation */}
        <List sx={{ px: 2, py: 3 }}>
          {navigation.map((item) => {
            const active = isActive(item.path);

            return (
              <ListItem
                key={item.path}
                disablePadding
                sx={{ mb: 0.5 }}
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: '9px',
                    py: 1.4,
                    backgroundColor: active
                      ? '#e0f2f1'
                      : 'transparent',

                    '&:hover': {
                      backgroundColor: '#e0f2f1',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: active ? 700 : 500,
                      color: active
                        ? '#004d40'
                        : '#455a64',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ mx: 3 }} />

        {/* Mobile Actions */}
        <Box
          sx={{
            px: 3,
            py: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={() => {
              handleDrawerToggle();
              downloadResume();
            }}
            sx={{
              py: 1.3,
              borderRadius: '9px',
              color: '#004d40',
              borderColor: '#004d40',
              textTransform: 'none',
              fontWeight: 700,

              '&:hover': {
                borderColor: '#00695c',
                backgroundColor: '#e0f2f1',
              },
            }}
          >
            Download Resume
          </Button>

          <Button
            fullWidth
            component={Link}
            to="/contact"
            variant="contained"
            startIcon={<ContactMailIcon />}
            onClick={handleDrawerToggle}
            sx={{
              py: 1.3,
              borderRadius: '9px',
              backgroundColor: '#004d40',
              textTransform: 'none',
              fontWeight: 700,
              boxShadow: 'none',

              '&:hover': {
                backgroundColor: '#00695c',
                boxShadow: 'none',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;