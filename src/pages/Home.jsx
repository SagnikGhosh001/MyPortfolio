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
      <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#004d40' }}>
        SAGNIK GHOSH
      </Typography>
      <Divider sx={{ marginBottom: '20px', borderColor: '#004d40', width: '60px' }} />
      <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', color: '#00796b' }}>
        I'm a creative software developer based in India, and I'm very passionate and dedicated to my work. My goal is to build innovative solutions that make a difference.
      </Typography>
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
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<DownloadIcon />}
        onClick={() => downloadResume(resume_URL)}
        sx={{ mt: 4 }}
      >
        Download Resume
      </Button>
    </Box>
  );
}

export default Home;
