import React from "react";

import { Box, Button, Divider, Tab, Typography } from "@mui/material";

import {
  SchoolOutlined as SchoolIcon,
  WorkOutlineOutlined as WorkIcon,
  Download as DownloadIcon,
  ArrowOutward,
} from "@mui/icons-material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Qualification() {
  const [value, setValue] = React.useState("experience");

  const certificate_URL =
    "https://sagnikghosh.netlify.app/InternshipCertificate.pdf";

  const certificate_URL2 =
    "https://sagnikghosh.netlify.app/InternshipCertificate2.pdf";

  const downloadCertificate = (url) => {
    const fileName = url.split("/").pop();

    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);

    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const education = [
    {
      title: "Diploma in Computer Science and Technology",
      institution: "Central Calcutta Polytechnic",
      description:
        "Focused on computer science, software development, programming, databases, and practical application development.",
      result: "Strong academic performance throughout all six semesters.",
      score: "Average CGPA: 9.40 / 10.0",
    },
    {
      title: "Higher Secondary Education — Science",
      institution: "Garden Reach Mudiali High School",
      description:
        "Completed higher secondary education with a Science background.",
      result: "89.4% overall",
    },
    {
      title: "Madhyamik",
      institution: "Garden Reach Mudiali High School",
      description:
        "Completed secondary education with a strong foundation in core subjects.",
      result: "75.7% overall",
    },
  ];

  const experience = [
    {
      company: "ThoughtWorks",
      role: "Step Program",
      duration: "Jul 2025 – Present",
      description:
        "Worked in a developer role with hands-on experience in real-world project development. Contributed to designing, developing, testing, and improving project features while collaborating with the team and following professional software development practices.",
      technologies: [],
    },
    {
      company: "YCSAS Pvt. Ltd",
      role: "Current Internship",
      duration: "Sep 30, 2024 – Nov 11, 2024",
      description:
        "Gained practical experience in frontend and backend development through hands-on project work.",
      technologies: [
        "JavaScript",
        "React",
        "MUI",
        "Python",
        "Django",
        "MySQL",
        "Git / GitHub",
      ],
      certificate: certificate_URL2,
    },
    {
      company: "YCSAS Pvt. Ltd",
      role: "Internship in Web Development",
      duration: "Nov 1, 2023 – Dec 15, 2023",
      description:
        "Developed practical experience in frontend and backend development, including HTML, CSS, Django, Bootstrap, and DBMS.",
      technologies: ["HTML", "CSS", "Django", "Bootstrap", "DBMS"],
      certificate: certificate_URL,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 70px)",
        width: "100%",
        boxSizing: "border-box",
        background: "#f7f9fc",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 5, md: 7 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          mx: "auto",
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
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#00897b",
              mb: 1.5,
            }}
          >
            My Journey
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
            Education &
            <Box
              component="span"
              sx={{
                color: "#004d40",
              }}
            >
              {" "}
              Experience.
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
            A look at my academic background and practical development
            experience.
          </Typography>
        </motion.div>

        {/* Divider */}
        <Divider
          sx={{
            my: 5,
            borderColor: "#dfe5e9",
          }}
        />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: "1px solid #dfe5e9",
                mb: 2,
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="qualification tabs"
                sx={{
                  minHeight: "48px",

                  "& .MuiTabs-indicator": {
                    height: "2px",
                    backgroundColor: "#004d40",
                  },

                  "& .MuiTab-root": {
                    minHeight: "48px",
                    px: {
                      xs: 1.5,
                      sm: 3,
                    },
                    color: "#78909c",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.95rem",
                  },

                  "& .MuiTab-root.Mui-selected": {
                    color: "#004d40",
                  },
                }}
              >
                <Tab
                  value="experience"
                  label="Experience"
                  icon={<WorkIcon fontSize="small" />}
                  iconPosition="start"
                />

                <Tab
                  value="education"
                  label="Education"
                  icon={<SchoolIcon fontSize="small" />}
                  iconPosition="start"
                />
              </TabList>
            </Box>

            {/* EDUCATION */}
            <TabPanel
              value="education"
              sx={{
                px: 0,
                py: 3,
              }}
            >
              <Box>
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: "30px 1fr",
                        },
                        gap: {
                          xs: 2,
                          md: 3,
                        },
                        pb: 4,
                        mb: 4,
                        borderBottom:
                          index !== education.length - 1
                            ? "1px solid #dfe5e9"
                            : "none",
                      }}
                    >
                      {/* Timeline Dot */}
                      <Box
                        sx={{
                          display: {
                            xs: "none",
                            md: "flex",
                          },
                          justifyContent: "center",
                          pt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#00897b",
                            boxShadow: "0 0 0 5px #e0f2f1",
                          }}
                        />
                      </Box>

                      {/* Content */}
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#17202a",
                            fontWeight: 700,
                            mb: 0.8,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#00897b",
                            fontWeight: 600,
                            mb: 1.5,
                          }}
                        >
                          {item.institution}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#68737d",
                            lineHeight: 1.7,
                            maxWidth: "700px",
                            mb: 1.5,
                          }}
                        >
                          {item.description}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              color: "#455a64",
                            }}
                          >
                            {item.result}
                          </Typography>

                          {item.score && (
                            <Typography
                              sx={{
                                fontSize: "0.9rem",
                                color: "#78909c",
                              }}
                            >
                              {item.score}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </TabPanel>

            {/* EXPERIENCE */}
            <TabPanel
              value="experience"
              sx={{
                px: 0,
                py: 3,
              }}
            >
              <Box>
                {experience.map((item, index) => (
                  <motion.div
                    key={`${item.company}-${item.duration}`}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: "30px 1fr",
                        },
                        gap: {
                          xs: 2,
                          md: 3,
                        },
                        pb: 4,
                        mb: 4,
                        borderBottom:
                          index !== experience.length - 1
                            ? "1px solid #dfe5e9"
                            : "none",
                      }}
                    >
                      {/* Timeline Dot */}
                      <Box
                        sx={{
                          display: {
                            xs: "none",
                            md: "flex",
                          },
                          justifyContent: "center",
                          pt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#00897b",
                            boxShadow: "0 0 0 5px #e0f2f1",
                          }}
                        />
                      </Box>

                      {/* Content */}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: {
                              xs: "flex-start",
                              sm: "center",
                            },
                            justifyContent: "space-between",
                            gap: 2,
                            flexDirection: {
                              xs: "column",
                              sm: "row",
                            },
                            mb: 0.5,
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#17202a",
                              fontWeight: 700,
                            }}
                          >
                            {item.company}
                          </Typography>
                          {item.certificate && (
                            <Button
                              onClick={() =>
                                downloadCertificate(item.certificate)
                              }
                              startIcon={<DownloadIcon />}
                              sx={{
                                color: "#004d40",
                                textTransform: "none",
                                fontWeight: 600,
                                minWidth: "auto",
                                px: 1,

                                "&:hover": {
                                  backgroundColor: "#e0f2f1",
                                },
                              }}
                            >
                              Certificate
                            </Button>
                          )}
                        </Box>

                        <Typography
                          sx={{
                            color: "#00897b",
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {item.role}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#90a4ae",
                            fontSize: "0.85rem",
                            mb: 2,
                          }}
                        >
                          {item.duration}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#68737d",
                            lineHeight: 1.7,
                            maxWidth: "720px",
                            mb: 2,
                          }}
                        >
                          {item.description}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          {item.technologies.map((technology) => (
                            <Box
                              key={technology}
                              sx={{
                                px: 1.2,
                                py: 0.6,
                                borderRadius: "6px",
                                backgroundColor: "#eef3f4",
                                color: "#546e7a",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                              }}
                            >
                              {technology}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </TabPanel>
          </TabContext>
        </motion.div>

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
            delay: 0.7,
          }}
        >
          <Box
            sx={{
              mt: 3,
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
                Want to see what I build?
              </Typography>

              <Typography
                sx={{
                  color: "#87939b",
                  mt: 0.5,
                  fontSize: "0.9rem",
                }}
              >
                Explore my projects and technical work.
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
              View Projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Qualification;
