import React from 'react';
import { Typography, Box, Button, Divider } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Download as DownloadIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import pic from '../asset/pic.jpg';

function Home() {
  const resume_URL = 'https://sagnikghosh.netlify.app/SagnikGhoshResume.pdf';

  const downloadResume = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#e0f7fa',
      }}
    >
      <Box
        component="img"
        src={pic}
        alt="Sagnik Ghosh"
        sx={{
          width: '150px',
          borderRadius: '50%',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.1)' },
        }}
      />
      <Typography variant="h2"
        sx={{
          fontWeight: 'bold',
          marginBottom: { xs: '10px', sm: '15px', md: '20px' },
          color: '#004d40',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }
        }}>
        SAGNIK GHOSH
      </Typography>
      <Divider sx={{ marginBottom: '20px', borderColor: '#004d40', width: '60px' }} />
      <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', color: '#00796b' }}>
        As a passionate web developer from India, I thrive on crafting cutting-edge digital solutions that truly stand out. My commitment to innovation and excellence drives me to create impactful web experiences that push boundaries and make a meaningful difference. </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Connect with me
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
          }}
        >
          <a href="https://github.com/SagnikGhosh001" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="large" sx={{ color: '#333' }} />
          </a>
          <a href="https://www.linkedin.com/in/sagnik-ghosh-445b86303/" target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="large" sx={{ color: '#0077b5' }} />
          </a>
          <a href="https://www.instagram.com/sagnik_ghosh_01?igsh=MWk4NGdnOGl3YmxpeQ==" target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="large" sx={{ color: '#e4405f' }} />
          </a>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>

        <Button
          component={Link}
          to='/aboutme'
          variant="contained"
          sx={{
            bgcolor: '#004d40',
            color: '#ffffff',
            ':hover': { bgcolor: '#00332a' },
          }}
        >
          About Me
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => downloadResume(resume_URL)}
          sx={{
            bgcolor: '#004d40',
            color: '#ffffff',
            ':hover': { bgcolor: '#00332a' },
          }}
        >
          Download Resume
        </Button>
      </Box>

    </Box>
  );
}

export default Home;
