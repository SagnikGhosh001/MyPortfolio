import React from 'react';

import {
  Box,
  Button,
  Typography,
} from '@mui/material';

import {
  ArrowBack,
  HomeOutlined,
  WorkOutline,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 70px)',
        width: '100%',
        boxSizing: 'border-box',
        background: '#f7f9fc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          {/* 404 */}
          <Typography
            sx={{
              fontSize: {
                xs: '7rem',
                sm: '9rem',
                md: '11rem',
              },
              lineHeight: 0.9,
              fontWeight: 800,
              letterSpacing: '-8px',
              color: '#e0f2f1',
              mb: 1,
            }}
          >
            404
          </Typography>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#17202a',
              mb: 1.5,
            }}
          >
            Page not found.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: '#68737d',
              lineHeight: 1.7,
              maxWidth: '480px',
              mx: 'auto',
              mb: 4,
            }}
          >
            The page you're looking for doesn't exist or may have
            been moved. Let's get you back on track.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.5,
              flexWrap: 'wrap',
            }}
          >
            <Button
              component={Link}
              to="/"
              variant="contained"
              startIcon={<HomeOutlined />}
              sx={{
                px: 2.8,
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
              Back Home
            </Button>

            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              startIcon={<WorkOutline />}
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
              View Projects
            </Button>
          </Box>

          {/* Small Back Link */}
          <Button
            onClick={() => window.history.back()}
            startIcon={<ArrowBack />}
            sx={{
              mt: 3,
              color: '#90a4ae',
              textTransform: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,

              '&:hover': {
                backgroundColor: 'transparent',
                color: '#004d40',
              },
            }}
          >
            Go back to previous page
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default NotFound;