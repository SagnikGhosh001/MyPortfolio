import React from 'react';
import {
  Box,
  Button,
  Chip,
  Typography,
} from '@mui/material';

import {
  GitHub,
  LinkedIn,
  Instagram,
  Download as DownloadIcon,
  ArrowOutward,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const resume_URL =
    'https://sagnikghosh.netlify.app/SagnikGhoshResume.pdf';

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
        minHeight: 'calc(100vh - 70px)',
        width: '100%',
        boxSizing: 'border-box',
        background: '#f7f9fc',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Label */}
          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#00897b',
              mb: 2,
            }}
          >
            Hello, I'm
          </Typography>

          {/* Name */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: '3.2rem',
                sm: '4.5rem',
                md: '6rem',
              },
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-3px',
              color: '#17202a',
              mb: 2,
            }}
          >
            Sagnik
            <Box
              component="span"
              sx={{
                color: '#004d40',
              }}
            >
              {' '}Ghosh.
            </Box>
          </Typography>

          {/* Role */}
          <Typography
            sx={{
              fontSize: {
                xs: '1.3rem',
                md: '1.7rem',
              },
              fontWeight: 600,
              color: '#455a64',
              mb: 2.5,
            }}
          >
            AI & Full-Stack Developer
          </Typography>

          {/* Introduction */}
          <Typography
            sx={{
              maxWidth: '700px',
              color: '#68737d',
              fontSize: {
                xs: '1rem',
                md: '1.1rem',
              },
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            I build intelligent applications by combining AI,
            modern web technologies, and scalable backend systems.
            I enjoy working with AI Agents, RAG, Computer Vision,
            and full-stack development.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              mb: 5,
            }}
          >
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              endIcon={<ArrowOutward />}
              sx={{
                px: 3,
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
              View Projects
            </Button>

            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={() => downloadResume(resume_URL)}
              sx={{
                px: 2.5,
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
              component={Link}
              to="/contact"
              variant="text"
              sx={{
                px: 2,
                py: 1.3,
                borderRadius: '9px',
                color: '#455a64',
                textTransform: 'none',
                fontWeight: 700,

                '&:hover': {
                  backgroundColor: '#eef2f3',
                  color: '#004d40',
                },
              }}
            >
              Contact Me
            </Button>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: '#90a4ae',
                fontSize: '0.8rem',
                mr: 1,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Find me
            </Typography>

            <Box
              component="a"
              href="https://github.com/SagnikGhosh001"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #dfe5e9',
                borderRadius: '9px',
                color: '#263238',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#eef2f3',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <GitHub fontSize="small" />
            </Box>

            <Box
              component="a"
              href="https://www.linkedin.com/in/sagnik-ghosh-445b86303/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #dfe5e9',
                borderRadius: '9px',
                color: '#263238',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#eef2f3',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <LinkedIn fontSize="small" />
            </Box>

            <Box
              component="a"
              href="https://www.instagram.com/sagnik_ghosh_01/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #dfe5e9',
                borderRadius: '9px',
                color: '#263238',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#eef2f3',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Instagram fontSize="small" />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Home;