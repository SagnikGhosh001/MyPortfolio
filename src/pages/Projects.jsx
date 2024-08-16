import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
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
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#004d40',
        }}
      >
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '20px',
          color: '#004d40',
        }}
      >
        My personal projects
      </Typography>
      <Divider
        sx={{
          marginBottom: '20px',
          borderColor: '#004d40',
          width: '60px',
        }}
      />
      <Grid container spacing={4} alignItems="center" maxWidth="md">
        {/* Frameworks Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 500,
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
                Student Management System
              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <Link to={'https://ourstudentmanagement.netlify.app/'} style={{ textDecoration: 'none' }}>https://ourstudentmanagement.netlify.app/</Link><br />
                <b>Git: </b><Link to={'https://github.com/SagnikGhosh001/studentManagement'} style={{ textDecoration: 'none', paddingRight: '10px' }}>Backend</Link>
                <Link to={'https://github.com/SagnikGhosh001/React_studentManagement'} style={{ textDecoration: 'none' }}>Frontend</Link>

              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <ul>
                  <li><b>Features:</b>Allows students to download available courses and enables administrators to upload and manage course content.
                  </li>
                  <li><b>User Functions:</b>Provides a user-friendly interface for students to access and download course materials, while offering administrators efficient tools for
                    course uploads and management.
                  </li>
                  <li><b>Framework Used:</b>Spring Boot, React js.</li>
                </ul>

              </Typography>

            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 500,
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
                Virtual Academy
              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <b>Git: </b><Link to={'https://github.com/SagnikGhosh001/virtual-academy'} style={{ textDecoration: 'none', paddingRight: '10px' }}>Backend</Link>

              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <ul>
                  <li><b>Features:</b>Allows teachers to upload and manage notes by semester and department, assign and track assignments, and take attendance.</li>
                  <li><b>User Functions:</b> Enables students and teachers to create and update profiles, access educational materials, and receive OTP-based verification for 
                  enhanced security.
                  </li>
                  <li><b>Framework Used:</b>Spring Boot.</li>
                </ul>

              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 500,
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
              Food Blogging Website
              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <b>Git: </b><Link to={'https://github.com/SagnikGhosh001/NodejsFoodBlog'} style={{ textDecoration: 'none', paddingRight: '10px' }}>Backend</Link>
                
              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <ul>
                  <li><b>Features:</b> Allows users to access recipes for various food items and upload their own recipes. Includes OTP verification for secure user interactions</li>
                  <li><b>User Functions:</b> Enables users to browse and view recipes, as well as contribute their own recipes to the platform.
                  </li>
                  <li><b>Framework Used:</b>Node js.</li>
                </ul>

              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 500,
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
              Contact Manager
              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <b>Git: </b><Link to={'https://github.com/SagnikGhosh001/NodejsContactManager'} style={{ textDecoration: 'none', paddingRight: '10px' }}>Backend</Link>
                
              </Typography>
              <Typography gutterBottom variant="body" component="div" sx={{ color: '#004d40' }}>
                <ul>
                  <li><b>Features:</b> Allows users to upload, access, and manage their contact information</li>
                  <li><b>User Functions:</b> Provides a secure and efficient way for users to store and retrieve their contact details.
                  </li>
                  <li><b>Framework Used:</b>Nodejs.</li>
                </ul>

              </Typography>

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Projects