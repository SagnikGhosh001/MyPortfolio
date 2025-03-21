import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Skills() {
  const skills = {
    frameworks: [
      { name: 'React Js' },
      { name: 'Next.js' },
      { name: 'SpringBoot' },
      { name: 'Node Js' },
      { name: 'MySQL' },
      { name: 'Bootstrap' },
    ],
    programmingLanguages: [
      { name: 'C Programming' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'PHP' },
      { name: 'HTML & CSS' },
      { name: 'SQL' },
    ],
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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#004d40', textAlign: 'center' }}
        >
          Skills
        </Typography>

        <Typography
          variant="body"
          sx={{ marginBottom: '20px', color: '#004d40', textAlign: 'center' }}
        >
          My technical expertise
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Divider sx={{ marginBottom: '20px', borderColor: '#004d40', width: '60px' }} />
      </motion.div>
      <Grid container spacing={4} alignItems="center" maxWidth="md">
        {/* Frameworks Card */}
        <Grid item xs={12} md={6} sm={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Card
              sx={{
                maxWidth: 345,
                padding: '20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#004d40' }}>
                  Frameworks
                </Typography>
                {skills.frameworks.map((skill, index) => (
                  <Typography key={index} variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                    {skill.name}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Programming Languages Card */}
        <Grid item xs={12} md={6} sm={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Card
              sx={{
                maxWidth: 345,
                padding: '20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#004d40' }}>
                  Programming Languages
                </Typography>
                {skills.programmingLanguages.map((skill, index) => (
                  <Typography key={index} variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                    {skill.name}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: '#1a237e',
            paddingTop: '2%',
          }}
        >
          Check out my project{' '}
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#3949ab',
                color: '#ffffff',
                ':hover': { bgcolor: '#303f9f' },
              }}
            >
              Projects
            </Button>
          </Link>
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Skills;