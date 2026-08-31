import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import {
  ArrowBackIosNew,
  ArrowForwardIos,
  ContactMailOutlined,
  GitHub,
  OpenInNew,
  TouchAppOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const carouselRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const projects = [
    {
      title: "RAG",
      category: "AI & ML",
      description:
        "A Retrieval-Augmented Generation application for intelligent document-based information retrieval and context-aware response generation. Implemented an end-to-end pipeline for document processing, relevant context retrieval, and response generation using a language model.",
      technologies: ["RAG", "LLM", "AI", "Ollama"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/RAG",
        },
      ],
    },

    {
      title: "AI Resume Generator",
      category: "AI & ML",
      description:
        "An AI-powered resume generator that fetches repositories, programming languages, and contribution statistics using GitHub tools. The collected information is processed through an LLM using OpenRouter to generate a structured resume that can be reviewed, edited, and downloaded as a PDF.",
      technologies: ["AI", "OpenRouter", "LLM", "GitHub"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/ai-resume-generator",
        },
      ],
    },

    {
      title: "AI Arena",
      category: "AI & ML",
      description:
        "An AI debate system featuring two autonomous agents that argue opposing viewpoints on a given topic, followed by an AI judge that evaluates their arguments and determines the winner. The system implements multi-agent interaction, structured debate rounds, and automated evaluation based on argument quality and relevance.",
      technologies: ["AI Agents", "LLM", "Ollama"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/ai_debate",
        },
      ],
    },

    {
      title: "Fancy Snap",
      category: "Computer Vision",
      description:
        "A minimal browser-based camera application that captures live video and applies filter effects inside a hand-based selection rectangle. It uses p5.js for canvas rendering and MediaPipe Hands for real-time hand landmark detection.",
      technologies: ["p5.js", "MediaPipe", "Computer Vision"],
      live: "https://sagnikghosh001.github.io/fancy-snap/",
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/fancy-snap",
        },
      ],
    },

    {
      title: "Cluedo",
      category: "Games",
      description:
        "A digital version of the classic Cluedo mystery game implementing core gameplay mechanics, player interactions, game logic, and a clue-based deduction system. Designed to provide an interactive and engaging multiplayer experience.",
      technologies: ["JavaScript", "Game Development"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/cluedo-the-deductives",
        },
      ],
    },

    {
      title: "Readit",
      category: "Full Stack",
      description:
        "A full-stack social media platform that enables users to create and share posts, interact through likes and comments, and engage with content. The landing page uses shader-based visual effects to create an immersive and engaging user experience.",
      technologies: ["Full Stack", "Social Media", "Shaders", "JavaScript"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/readit-SagnikGhosh001",
        },
      ],
    },

    {
      title: "Virtual Academy",
      category: "Full Stack",
      description:
        "An educational platform where teachers can upload notes, manage assignments, track attendance, and students can access learning materials.",
      technologies: ["Spring Boot", "React", "MySQL"],
      github: [
        {
          label: "Backend",
          url: "https://github.com/SagnikGhosh001/virtual-academy-backend",
        },
        {
          label: "Frontend",
          url: "https://github.com/SagnikGhosh001/virtual-academy-frontend",
        },
      ],
    },

    {
      title: "Mystery Feedback",
      category: "Full Stack",
      description:
        "An anonymous messaging platform that allows users to receive feedback while controlling whether they want to receive messages.",
      technologies: ["Next.js", "Zod"],
      live: "https://mystery-feedback-using-next-js.vercel.app/",
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/mysteryFeedbackUsingNextJs",
        },
      ],
    },

    {
      title: "Course Mate",
      category: "Full Stack",
      description:
        "A course platform where users can browse and download courses, while creators can publish courses, manage content, reviews, categories, and carts.",
      technologies: ["Next.js", "Zod", "Prisma"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/SagnikGhosh001/course-mate",
        },
      ],
    },

    {
      title: "Student Management System",
      category: "Full Stack",
      description:
        "A student management platform for accessing course materials, with administrative functionality for uploading and managing content.",
      technologies: ["Spring Boot", "React"],
      live: "https://ourstudentmanagement.netlify.app/",
      github: [
        {
          label: "Backend",
          url: "https://github.com/SagnikGhosh001/studentManagement",
        },
        {
          label: "Frontend",
          url: "https://github.com/SagnikGhosh001/React_studentManagement",
        },
      ],
    },

    {
      title: "Food Blogging Website",
      category: "Full Stack",
      description:
        "A recipe platform where users can explore recipes and contribute their own recipes, with OTP verification for secure user interactions.",
      technologies: ["Node.js"],
      github: [
        {
          label: "Backend",
          url: "https://github.com/SagnikGhosh001/NodejsFoodBlog",
        },
      ],
    },

    {
      title: "Contact Manager",
      category: "Full Stack",
      description:
        "A web application that allows users to securely store, access, and manage their contact information.",
      technologies: ["Node.js"],
      github: [
        {
          label: "Backend",
          url: "https://github.com/SagnikGhosh001/NodejsContactManager",
        },
      ],
    },
  ];

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  /*
   * Duplicate the projects so the carousel
   * can continuously move.
   */
  const carouselProjects = [...filteredProjects, ...filteredProjects];

  /*
   * Automatic movement.
   */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    let animationFrame;

    const animate = () => {
      if (!isPaused) {
        carousel.scrollLeft += 0.5;

        const halfWidth = carousel.scrollWidth / 2;

        if (carousel.scrollLeft >= halfWidth) {
          carousel.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused]);

  /*
   * Move carousel using arrow buttons.
   */
  const moveCarousel = (direction) => {
    if (!carouselRef.current) return;

    // Pause automatic scrolling
    setIsPaused(true);

    // Clear previous resume timer
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    carouselRef.current.scrollBy({
      left: direction * 390,
      behavior: "smooth",
    });

    // Resume after 2.5 seconds
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  /*
   * Open project details.
   */
  const handleProjectClick = (project) => {
    setIsPaused(true);
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
    setIsPaused(false);
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 70px)",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#f7f9fc",
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
        py: {
          xs: 5,
          md: 7,
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#00897b",
              mb: 1.5,
            }}
          >
            My Work
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              color: "#17202a",
              fontSize: {
                xs: "2.7rem",
                md: "4rem",
              },
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            Projects
            <Box
              component="span"
              sx={{
                color: "#004d40",
              }}
            >
              .
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: "650px",
              color: "#68737d",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            A selection of applications and systems I've built using modern
            technologies.
          </Typography>
        </motion.div>

        <Divider
          sx={{
            my: 5,
            borderColor: "#dfe5e9",
          }}
        />

        {/* Project Categories */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.2,
            mb: 3,
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                px: 2.2,
                py: 1,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.85rem",

                color: selectedCategory === category ? "#ffffff" : "#546e7a",

                backgroundColor:
                  selectedCategory === category ? "#004d40" : "#ffffff",

                border: "1px solid",
                borderColor:
                  selectedCategory === category ? "#004d40" : "#dfe5e9",

                "&:hover": {
                  backgroundColor:
                    selectedCategory === category ? "#00695c" : "#e0f2f1",

                  borderColor: "#80cbc4",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Carousel Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#90a4ae",
            }}
          >
            <TouchAppOutlined fontSize="small" />

            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Click a project to explore
            </Typography>
          </Box>

          {/* Arrows */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              aria-label="Previous projects"
              onClick={() => moveCarousel(-1)}
              sx={{
                width: 42,
                height: 42,
                border: "1px solid #dfe5e9",
                color: "#004d40",
                backgroundColor: "#ffffff",

                "&:hover": {
                  backgroundColor: "#e0f2f1",
                  borderColor: "#80cbc4",
                },
              }}
            >
              <ArrowBackIosNew fontSize="small" />
            </IconButton>

            <IconButton
              aria-label="Next projects"
              onClick={() => moveCarousel(1)}
              sx={{
                width: 42,
                height: 42,
                border: "1px solid #dfe5e9",
                color: "#004d40",
                backgroundColor: "#ffffff",

                "&:hover": {
                  backgroundColor: "#e0f2f1",
                  borderColor: "#80cbc4",
                },
              }}
            >
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Project Carousel */}
        <Box
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            display: "flex",
            gap: 3,

            overflowX: "auto",
            overflowY: "hidden",

            pb: 3,

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",

            scrollSnapType: {
              xs: "x mandatory",
              md: "none",
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <Box
              key={`${project.title}-${index}`}
              sx={{
                flex: "0 0 auto",

                width: {
                  xs: "82vw",
                  sm: "340px",
                  md: "360px",
                },

                scrollSnapAlign: "start",
              }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Box
                  onClick={() => handleProjectClick(project)}
                  sx={{
                    height: "350px",
                    p: 3.5,
                    boxSizing: "border-box",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    backgroundColor: "#ffffff",
                    border: "1px solid #dfe5e9",
                    borderRadius: "14px",

                    cursor: "pointer",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      borderColor: "#80cbc4",
                      boxShadow: "0 15px 40px rgba(0, 77, 64, 0.12)",
                    },
                  }}
                >
                  {/* Project Content */}
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "#17202a",
                        mb: 2,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#68737d",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,

                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  {/* Bottom */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.8,
                        mb: 2,
                      }}
                    >
                      {project.technologies.map((technology) => (
                        <Chip
                          key={technology}
                          label={technology}
                          size="small"
                          sx={{
                            backgroundColor: "#e0f2f1",
                            color: "#00695c",
                            fontWeight: 600,
                            borderRadius: "6px",
                          }}
                        />
                      ))}
                    </Box>

                    {/* Click Hint */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid #edf0f2",
                        pt: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#004d40",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                        }}
                      >
                        View details
                      </Typography>

                      <Typography
                        sx={{
                          color: "#00897b",
                          fontSize: "1.1rem",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        →
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Carousel Status */}
        <Box
          sx={{
            textAlign: "center",
            mt: 1,
          }}
        >
                  <Typography
          sx={{
            textAlign: "center",
            color: "#68737d",
            fontSize: "0.9rem",
            mt: 2,
          }}
        >
          Want to explore more projects?{" "}
          <Box
            component="a"
            href="https://github.com/SagnikGhosh001"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#004d40",
              fontWeight: 700,
              textDecoration: "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Visit my GitHub →
          </Box>
        </Typography>
        </Box>
        {/* Contact CTA */}
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
            delay: 0.5,
          }}
        >
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: "1px solid #dfe5e9",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              gap: 3,

              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#17202a",
                  fontSize: "1.2rem",
                }}
              >
                Have a project in mind?
              </Typography>

              <Typography
                sx={{
                  color: "#87939b",
                  mt: 0.5,
                  fontSize: "0.9rem",
                }}
              >
                Let's discuss how we can build something together.
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/contact"
              startIcon={<ContactMailOutlined />}
              sx={{
                px: 3,
                py: 1.3,
                borderRadius: "9px",
                backgroundColor: "#004d40",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 700,
                boxShadow: "none",
                whiteSpace: "nowrap",

                "&:hover": {
                  backgroundColor: "#00695c",
                  boxShadow: "none",
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </motion.div>
      </Box>

      {/* Project Details Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "14px",
            backgroundColor: "#ffffff",
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                color: "#17202a",
                fontWeight: 800,
                fontSize: "1.6rem",
                pb: 1,
              }}
            >
              {selectedProject.title}
            </DialogTitle>

            <DialogContent>
              <Typography
                sx={{
                  color: "#68737d",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {selectedProject.description}
              </Typography>

              <Typography
                sx={{
                  color: "#90a4ae",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Technologies
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 3,
                }}
              >
                {selectedProject.technologies.map((technology) => (
                  <Chip
                    key={technology}
                    label={technology}
                    sx={{
                      backgroundColor: "#e0f2f1",
                      color: "#00695c",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>

              <Divider sx={{ mb: 2.5 }} />

              <Typography
                sx={{
                  color: "#90a4ae",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Links
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {selectedProject.live && (
                  <Button
                    component="a"
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<OpenInNew />}
                    sx={{
                      color: "#004d40",
                      borderColor: "#004d40",
                      textTransform: "none",
                      borderRadius: "8px",
                      fontWeight: 600,

                      "&:hover": {
                        borderColor: "#00695c",
                        backgroundColor: "#e0f2f1",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                )}

                {selectedProject.github.map((repo) => (
                  <Button
                    key={repo.url}
                    component="a"
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<GitHub />}
                    sx={{
                      color: "#455a64",
                      borderColor: "#dfe5e9",
                      textTransform: "none",
                      borderRadius: "8px",
                      fontWeight: 600,

                      "&:hover": {
                        borderColor: "#80cbc4",
                        backgroundColor: "#f3fafa",
                      },
                    }}
                  >
                    {repo.label}
                  </Button>
                ))}
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                px: 3,
                pb: 3,
              }}
            >
              <Button
                onClick={handleCloseDialog}
                sx={{
                  color: "#68737d",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default Projects;
