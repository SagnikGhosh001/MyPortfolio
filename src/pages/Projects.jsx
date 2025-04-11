import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#004d40',
            textAlign: 'center',
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            color: '#004d40',
            textAlign: 'center',
          }}
        >
          My personal projects
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Divider
          sx={{
            marginBottom: '20px',
            borderColor: '#004d40',
            width: '60px',
            textAlign: 'center',
          }}
        />
      </motion.div>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center" maxWidth="lg">
        {/* Project 1: Virtual Academy */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.0 }}
          >
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ color: '#004d40' }}>
                Virtual Academy
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ color: '#004d40' }}>
                <Link to={'https://virtualacademy.netlify.app/'} style={{ textDecoration: 'none' }}>
                  https://virtualacademy.netlify.app/
                </Link>
                <br />
                <b>Git: </b>
                <Link to={'https://github.com/SagnikGhosh001/virtual-academy-backend'} style={{ textDecoration: 'none', paddingRight: '10px' }}>
                  Backend
                </Link>
                <Link to={'https://github.com/SagnikGhosh001/virtual-academy-frontend'} style={{ textDecoration: 'none' }}>
                  Frontend
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#004d40' }}>
                <ul>
                  <li>
                    <b>Features:</b> Allows teachers to upload and manage notes by semester and department, assign and track assignments, and take attendance.
                  </li>
                  <li>
                    <b>User Functions:</b> Enables students and teachers to create and update profiles, access educational materials, and receive OTP-based verification for enhanced security.
                  </li>
                  <li>
                    <b>Framework Used:</b> Spring Boot, React Js.
                  </li>
                </ul>
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Project 2: Mystery Feedback */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.0 }}
          >
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ color: '#004d40' }}>
                Mystery Feedback
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ color: '#004d40' }}>
                {/* Add your GitHub link here if available */}
                <Link to={'https://mystery-feedback-using-next-js.vercel.app/'} style={{ textDecoration: 'none' }}>
                  https://mystery-feedback-using-next-js.vercel.app/
                </Link>
                <br />
                <b>Git: </b>
                <Link to={'https://github.com/SagnikGhosh001/mysteryFeedbackUsingNextJs'} style={{ textDecoration: 'none', paddingRight: '10px' }}>
                  Repository
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#004d40' }}>
                <ul>
                  <li>
                    <b>Features:</b> Enables users to send anonymous messages to others, with recipients having the option to enable or disable receiving messages.
                  </li>
                  <li>
                    <b>User Functions:</b> Provides a platform for anonymous feedback with user-controlled message reception settings.
                  </li>
                  <li>
                    <b>Framework Used:</b> Next.js, Zod.
                  </li>
                </ul>
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Project 3: Course Mate */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ color: '#004d40' }}>
                Course Mate
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ color: '#004d40' }}>
                {/* Add your GitHub link here if available */}
                <b>Git: </b>
                <Link to={'https://github.com/SagnikGhosh001/course-mate'} style={{ textDecoration: 'none', paddingRight: '10px' }}>
                  Repository
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#004d40' }}>
                <ul>
                  <li>
                    <b>Features:</b> Allows users to download courses, creators to add courses with reviews, cart functionality, and categorization.
                  </li>
                  <li>
                    <b>User Functions:</b> Enables users to browse, download, and review courses, while creators can manage course content and categories.
                  </li>
                  <li>
                    <b>Framework Used:</b> Next.js, Zod, Prisma.
                  </li>
                </ul>
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        {/* Project 1: Student Management System */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ color: '#004d40' }}>
                Student Management System
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ color: '#004d40' }}>
                <Link to={'https://ourstudentmanagement.netlify.app/'} style={{ textDecoration: 'none' }}>
                  https://ourstudentmanagement.netlify.app/
                </Link>
                <br />
                <b>Git: </b>
                <Link to={'https://github.com/SagnikGhosh001/studentManagement'} style={{ textDecoration: 'none', paddingRight: '10px' }}>
                  Backend
                </Link>
                <Link to={'https://github.com/SagnikGhosh001/React_studentManagement'} style={{ textDecoration: 'none' }}>
                  Frontend
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#004d40' }}>
                <ul>
                  <li>
                    <b>Features:</b> Allows students to download available courses and enables administrators to upload and manage course content.
                  </li>
                  <li>
                    <b>User Functions:</b> Provides a user-friendly interface for students to access and download course materials, while offering administrators efficient tools for course uploads and management.
                  </li>
                  <li>
                    <b>Framework Used:</b> Spring Boot, React js.
                  </li>
                </ul>
              </Typography>
            </Box>
          </motion.div>
        </Grid>


        {/* Project 5: Food Blogging Website */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ color: '#004d40' }}>
                Food Blogging Website
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ color: '#004d40' }}>
                <b>Git: </b>
                <Link to={'https://github.com/SagnikGhosh001/NodejsFoodBlog'} style={{ textDecoration: 'none', paddingRight: '10px' }}>
                  Backend
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#004d40' }}>
                <ul>
                  <li>
                    <b>Features:</b> Allows users to access recipes for various food items and upload their own recipes. Includes OTP verification for secure user interactions.
                  </li>
                  <li>
                    <b>User Functions:</b> Enables users to browse and view recipes, as well as contribute their own recipes to the platform.
                  </li>
                  <li>
                    <b>Framework Used:</b> Node js.
                  </li>
                </ul>
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Project 6: Contact Manager */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ color: '#004d40' }}>
                Contact Manager
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ color: '#004d40' }}>
                <b>Git: </b>
                <Link to={'https://github.com/SagnikGhosh001/NodejsContactManager'} style={{ textDecoration: 'none', paddingRight: '10px' }}>
                  Backend
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#004d40' }}>
                <ul>
                  <li>
                    <b>Features:</b> Allows users to upload, access, and manage their contact information.
                  </li>
                  <li>
                    <b>User Functions:</b> Provides a secure and efficient way for users to store and retrieve their contact details.
                  </li>
                  <li>
                    <b>Framework Used:</b> Nodejs.
                  </li>
                </ul>
              </Typography>
            </Box>
          </motion.div>
        </Grid>


      </Grid>

      {/* Contact Me Section */}
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
          Contact me if you like my project{' '}
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#3949ab',
                color: '#ffffff',
                ':hover': { bgcolor: '#303f9f' },
              }}
              startIcon={<ContactMailIcon />}
            >
              Contact Me
            </Button>
          </Link>
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Projects;