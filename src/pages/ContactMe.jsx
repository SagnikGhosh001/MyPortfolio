import React, { useState } from "react";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import {
  EmailOutlined,
  GitHub,
  LinkedIn,
  SendRounded,
  ArrowOutward,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailSubject = subject || `Portfolio Contact from ${name}`;

    const mailBody = `
Hi Sagnik,

Name: ${name}
Email: ${email}

Message:
${message}
  `.trim();

    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent("sagnikghosh904@gmail.com")}` +
      `&su=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(mailBody)}`;

    window.open(gmailURL, "_blank", "noopener,noreferrer");
  };

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
            Get In Touch
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
            Let's work
            <Box
              component="span"
              sx={{
                color: "#004d40",
              }}
            >
              {" "}
              together.
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
            Have a project, opportunity, or just want to say hello? Feel free to
            reach out. I'm always open to interesting conversations and new
            opportunities.
          </Typography>
        </motion.div>

        <Divider
          sx={{
            my: 5,
            borderColor: "#dfe5e9",
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.75fr 1.25fr",
            },
            gap: {
              xs: 5,
              md: 8,
            },
            alignItems: "start",
          }}
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#17202a",
                  mb: 1,
                }}
              >
                Contact information
              </Typography>

              <Typography
                sx={{
                  color: "#68737d",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                The easiest way to reach me is by email. You can also find me on
                GitHub and LinkedIn.
              </Typography>

              {/* Email */}
              <Box
                component="a"
                href="mailto:sagnikghosh904@gmail.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  textDecoration: "none",
                  mb: 3,
                  p: 2,
                  border: "1px solid #dfe5e9",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  transition: "all 0.25s ease",

                  "&:hover": {
                    borderColor: "#80cbc4",
                    backgroundColor: "#f3fafa",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9px",
                    backgroundColor: "#e0f2f1",
                    color: "#00695c",
                  }}
                >
                  <EmailOutlined />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#90a4ae",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Email
                  </Typography>

                  <Typography
                    sx={{
                      color: "#263238",
                      fontWeight: 600,
                      fontSize: {
                        xs: "0.85rem",
                        sm: "0.95rem",
                      },
                    }}
                  >
                    sagnikghosh904@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Social Links */}
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#90a4ae",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Find me online
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  component="a"
                  href="https://github.com/SagnikGhosh001"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHub />}
                  sx={{
                    color: "#455a64",
                    border: "1px solid #dfe5e9",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 1.5,

                    "&:hover": {
                      backgroundColor: "#eef2f3",
                      color: "#004d40",
                    },
                  }}
                >
                  GitHub
                </Button>

                <Button
                  component="a"
                  href="https://www.linkedin.com/in/sagnik-ghosh-445b86303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedIn />}
                  sx={{
                    color: "#455a64",
                    border: "1px solid #dfe5e9",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 1.5,

                    "&:hover": {
                      backgroundColor: "#eef2f3",
                      color: "#004d40",
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "#ffffff",
                border: "1px solid #dfe5e9",
                borderRadius: "14px",
                p: {
                  xs: 3,
                  md: 4,
                },
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#17202a",
                  mb: 3,
                }}
              >
                Send me a message
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                  mb: 2,
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />

                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Box>

              <TextField
                required
                fullWidth
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />

              <TextField
                required
                fullWidth
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={5}
                variant="outlined"
                sx={{
                  mb: 2.5,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                endIcon={<SendRounded />}
                sx={{
                  py: 1.4,
                  borderRadius: "8px",
                  backgroundColor: "#004d40",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#00695c",
                    boxShadow: "none",
                  },
                }}
              >
                Open Gmail
              </Button>

              <Typography
                sx={{
                  textAlign: "center",
                  color: "#90a4ae",
                  fontSize: "0.75rem",
                  mt: 1.5,
                }}
              >
                Gmail will open with your message ready to send.
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                  color: "#90a4ae",
                  fontSize: "0.75rem",
                  mt: 1.5,
                }}
              >
                This will open your default email application.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <Box
            sx={{
              mt: 5,
              pt: 3,
              borderTop: "1px solid #dfe5e9",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              component={Link}
              to="/projects"
              endIcon={<ArrowOutward />}
              sx={{
                color: "#68737d",
                textTransform: "none",
                fontWeight: 600,

                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#004d40",
                },
              }}
            >
              Or explore my projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default ContactMe;
