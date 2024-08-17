import { Box, Button, Card, CardContent, Divider, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  const skills = {
    frameworks: [
      { name: 'React Js', level: 80 },
      { name: 'SpringBoot', level: 90 },
      { name: 'Node Js', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'Bootstrap', level: 90 },
    ],
    programmingLanguages: [
      { name: 'C Programming', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'SQL', level: 85 },
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
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#004d40',textAlign:'center' }}
      >

        Skills
      </Typography>
      <Typography
        variant="body"
        sx={{ marginBottom: '20px', color: '#004d40',textAlign:'center' }}
        
      >
        My technical level
      </Typography>
      <Divider sx={{ marginBottom: '20px', borderColor: '#004d40', width: '60px' }} />

      <Grid container spacing={4} alignItems="center" maxWidth="md">
        {/* Frameworks Card */}
        <Grid item xs={12} md={6} sm={6}>
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
                <Box key={index} sx={{ marginBottom: '15px' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: '10px',
                      borderRadius: '5px',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#004d40',
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Programming Languages Card */}
        <Grid item xs={12} md={6} sm={6}>
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
                <Box key={index} sx={{ marginBottom: '15px' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: '10px',
                      borderRadius: '5px',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#004d40',
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
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
    </Box>
  );
}

export default Skills;
