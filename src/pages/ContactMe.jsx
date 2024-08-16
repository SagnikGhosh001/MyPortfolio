import React from 'react';
import { Typography, IconButton, Divider, Box, Container, Grid } from '@mui/material';
import { Facebook, Instagram, LinkedIn, GitHub, Email } from '@mui/icons-material';

function ContactMe() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#e0f7fa',
        backgroundImage: 'url("https://source.unsplash.com/random/1600x900?technology")', // Example background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#004d40',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            color: 'inherit',
            backgroundColor: 'e0f7fa', 
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            textAlign: 'center',
            backgroundColor: 'e0f7fa', // Background for better readability
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          Connect with me on social media:
        </Typography>
        <Divider
          sx={{
            marginBottom: '40px',
            borderColor: '#004d40',
            width: '60px',
            marginX: 'auto',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px', // Space between icons
            marginBottom: '40px',
          }}
        >
          <a href="https://www.facebook.com/sagnik.ghosh.31337" target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                color: '#004d40',
                '&:hover': {
                  color: '#3b5998', // Facebook brand color on hover
                },
                fontSize: '2rem',
              }}
            >
              <Facebook />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/sagnik_ghosh_01?igsh=MWk4NGdnOGl3YmxpeQ==" target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                color: '#004d40',
                '&:hover': {
                  color: '#C13584', // Instagram brand color on hover
                },
                fontSize: '2rem',
              }}
            >
              <Instagram />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/sagnik-ghosh-445b86303/" target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                color: '#004d40',
                '&:hover': {
                  color: '#0077b5', // LinkedIn brand color on hover
                },
                fontSize: '2rem',
              }}
            >
              <LinkedIn />
            </IconButton>
          </a>
          <a href="mailto:sagnikghosh904@gmail.com" target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                color: '#004d40',
                '&:hover': {
                  color: '#d44638', // Gmail brand color on hover
                },
                fontSize: '2rem',
              }}
            >
              <Email />
            </IconButton>
          </a>
          <a href="https://github.com/SagnikGhosh001" target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                color: '#004d40',
                '&:hover': {
                  color: '#333', // GitHub brand color on hover
                },
                fontSize: '2rem',
              }}
            >
              <GitHub />
            </IconButton>
          </a>
        </Box>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', textAlign: 'center' }}>
          Email: <a href="mailto:sagnikghosh904@gmail.com" style={{ color: '#004d40' }}>sagnikghosh904@gmail.com</a>
        </Typography>
        <Box
          sx={{
            marginTop: '40px',
            textAlign: 'center',
            backgroundColor: 'e0f7fa', // Background for better readability
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#004d40',
            }}
          >
            Additional Information
          </Typography>
          <Typography variant="body1" sx={{ color: '#004d40' }}>
            Feel free to reach out for any inquiries or collaboration opportunities.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactMe;
