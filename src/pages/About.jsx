import React from 'react';
import pic from '../asset/pic.jpg';
import { Box, Button, Grid, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion'; // Import framer-motion

const About = () => {
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
        padding: '40px',
        backgroundColor: '#e0f7fa',
      }}
    >
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#004d40' }}
        >
          About Me
        </Typography>
      </motion.div>

      {/* Divider Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Divider sx={{ marginBottom: '20px', borderColor: '#004d40', width: '60px' }} />
      </motion.div>

      {/* Grid Container for Image and Text */}
      <Grid container spacing={4} alignItems="center" maxWidth="md">
        {/* Image Animation */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Box
              component="img"
              src={pic}
              alt="Sagnik Ghosh - Full Stack Developer"
              sx={{
                width: '100%',
                maxWidth: { xs: '150px', sm: '200px' },
                borderRadius: '10%',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                },
              }}
            />
          </motion.div>
        </Grid>

        {/* Text Animation */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7',
                color: '#00796b',
                fontSize: '1.1rem',
              }}
            >
              Hi, I'm <strong>Sagnik Ghosh</strong>, a full-stack developer specializing in <strong>frontend</strong> and <strong>backend</strong> development. I turn ideas into functional web applications and focus on creating seamless user experiences.

              <br /><br />

              My passion for technology drives me to use <strong>cutting-edge tools</strong> to deliver <strong>exceptional</strong> results. Outside of coding, I enjoy <strong>exploring tech trends, contributing to open-source projects, and reading</strong>.

              <br /><br />

              Explore my portfolio and let's connect to create something amazing!
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Button Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <Link to="/skills" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#004d40',
                  color: '#ffffff',
                  ':hover': { bgcolor: '#00332a' },
                }}
              >
                My Skills
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<Download />}
              onClick={() => downloadResume(resume_URL)}
              sx={{
                bgcolor: '#00796b',
                color: '#ffffff',
                ':hover': { bgcolor: '#004d40' },
              }}
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default About;