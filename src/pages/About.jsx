import React from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  Typography,
} from '@mui/material';

import {
  Download as DownloadIcon,
  ArrowOutward,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
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

  const technologies = [
    'AI Agent',
    'RAG',
    'OpenRouter',
    'Ollama',
    'Computer Vision',
    'MediaPipe',
    'Azure AI Foundry',
    'Prompt Engineering',
    'Java',
    'JavaScript',
    'TypeScript',
    'Spring Boot',
    'React',
  ];

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 70px)',
        width: '100%',
        boxSizing: 'border-box',
        background: '#f7f9fc',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 5, md: 7 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#00897b',
              mb: 1.5,
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              color: '#17202a',
              fontSize: {
                xs: '2.7rem',
                md: '4rem',
              },
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Building with
            <br />
            <Box
              component="span"
              sx={{
                color: '#004d40',
              }}
            >
              technology & curiosity.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: '700px',
              color: '#68737d',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            I'm Sagnik Ghosh, an AI and full-stack developer
            interested in building practical software that combines
            intelligent systems with modern web technologies.
          </Typography>
        </motion.div>

        {/* Divider */}
        <Divider
          sx={{
            my: 5,
            borderColor: '#dfe5e9',
          }}
        />

        {/* Main About */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1.4fr 0.6fr',
            },
            gap: {
              xs: 5,
              md: 8,
            },
          }}
        >
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#17202a',
                  mb: 2,
                }}
              >
                A little about me
              </Typography>

              <Typography
                sx={{
                  color: '#68737d',
                  lineHeight: 1.9,
                  mb: 2.5,
                }}
              >
                I enjoy turning ideas into useful applications.
                My development journey has taken me across both
                frontend and backend development, giving me experience
                building complete applications from the user interface
                to the server-side logic.
              </Typography>

              <Typography
                sx={{
                  color: '#68737d',
                  lineHeight: 1.9,
                  mb: 2.5,
                }}
              >
                More recently, I've been exploring AI development,
                particularly AI Agents, Retrieval-Augmented Generation
                (RAG), Computer Vision, local and routed LLMs, and
                Azure AI technologies.
              </Typography>

              <Typography
                sx={{
                  color: '#68737d',
                  lineHeight: 1.9,
                }}
              >
                I like learning by building. Whether it is experimenting
                with a new AI workflow or developing a full-stack
                application, I focus on understanding how the pieces
                work together and turning them into something practical.
              </Typography>
            </Box>
          </motion.div>

          {/* Focus */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <Box
              sx={{
                borderLeft: {
                  xs: 'none',
                  md: '2px solid #b2dfdb',
                },
                borderTop: {
                  xs: '2px solid #b2dfdb',
                  md: 'none',
                },
                pl: {
                  xs: 0,
                  md: 3,
                },
                pt: {
                  xs: 3,
                  md: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  letterSpacing: '2px',
                  fontWeight: 700,
                  color: '#00897b',
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                Currently focused on
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#17202a',
                  lineHeight: 1.4,
                  mb: 2,
                }}
              >
                AI-powered applications
              </Typography>

              <Typography
                sx={{
                  color: '#68737d',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                }}
              >
                Exploring ways to combine AI systems with
                reliable backend services and intuitive interfaces.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
        >
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#17202a',
                mb: 1,
              }}
            >
              Technologies I work with
            </Typography>

            <Typography
              sx={{
                color: '#68737d',
                mb: 2.5,
              }}
            >
              A mix of AI, backend and frontend technologies.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {technologies.map((technology) => (
                <Chip
                  key={technology}
                  label={technology}
                  sx={{
                    backgroundColor: '#eef3f4',
                    color: '#455a64',
                    fontWeight: 600,
                    borderRadius: '7px',
                    '&:hover': {
                      backgroundColor: '#e0f2f1',
                      color: '#00695c',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '1px solid #dfe5e9',
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
            }}
          >
            <Button
              component={Link}
              to="/skills"
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
              Explore Skills
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
              to="/projects"
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
              View Projects →
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;