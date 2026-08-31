import React from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  Typography,
} from '@mui/material';

import {
  ArrowOutward,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      description:
        'Technologies I use to explore and build intelligent applications.',
      skills: [
        'AI Agent',
        'RAG',
        'OpenRouter',
        'Ollama',
        'Computer Vision',
        'MediaPipe',
        'Azure AI Foundry',
        'Prompt Engineering',
      ],
    },
    {
      title: 'Programming Languages',
      description:
        'Languages I use for application and backend development.',
      skills: [
        'Java',
        'JavaScript',
        'TypeScript',
      ],
    },
    {
      title: 'Frameworks & Development',
      description:
        'Frameworks I use to build modern web applications.',
      skills: [
        'Spring Boot',
        'React',
      ],
    },
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
            My Toolkit
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
              mb: 1.5,
            }}
          >
            Skills &
            <Box
              component="span"
              sx={{
                color: '#004d40',
              }}
            >
              {' '}Technologies.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: '650px',
              color: '#68737d',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            Technologies and tools I use to build intelligent,
            scalable, and modern applications.
          </Typography>
        </motion.div>

        {/* Divider */}
        <Divider
          sx={{
            my: 5,
            borderColor: '#dfe5e9',
          }}
        />

        {/* Skills */}
        <Box>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15 + categoryIndex * 0.15,
              }}
            >
              <Box
                sx={{
                  py: 4,
                  borderBottom:
                    categoryIndex !== skillCategories.length - 1
                      ? '1px solid #dfe5e9'
                      : 'none',

                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: '0.8fr 1.2fr',
                  },
                  gap: {
                    xs: 2.5,
                    md: 6,
                  },
                }}
              >
                {/* Category Information */}
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#17202a',
                      mb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#87939b',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      maxWidth: '320px',
                    }}
                  >
                    {category.description}
                  </Typography>
                </Box>

                {/* Skills */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    alignContent: 'flex-start',
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay:
                          0.35 +
                          categoryIndex * 0.15 +
                          skillIndex * 0.05,
                      }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          height: '38px',
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          color: '#455a64',
                          border: '1px solid #dfe5e9',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          transition: 'all 0.25s ease',

                          '&:hover': {
                            backgroundColor: '#e0f2f1',
                            color: '#00695c',
                            borderColor: '#80cbc4',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Projects CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '1px solid #dfe5e9',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,

              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#17202a',
                  fontSize: '1.2rem',
                }}
              >
                Want to see them in action?
              </Typography>

              <Typography
                sx={{
                  color: '#87939b',
                  mt: 0.5,
                  fontSize: '0.9rem',
                }}
              >
                Explore some of the projects I've built.
              </Typography>
            </Box>

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
                color: '#ffffff',
                textTransform: 'none',
                fontWeight: 700,
                boxShadow: 'none',
                whiteSpace: 'nowrap',

                '&:hover': {
                  backgroundColor: '#00695c',
                  boxShadow: 'none',
                },
              }}
            >
              View Projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Skills;