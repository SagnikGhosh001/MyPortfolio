import { Box, Button, Divider, Tab, Typography } from '@mui/material';
import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Link } from 'react-router-dom';
function Qualification() {
    const certificate_URL = 'https://sagnikghosh.netlify.app/Internship_Certificate.pdf';
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const downloadCertificate = (url) => {
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
                Qualification
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '20px',
                    color: '#004d40',

                }}
            >
                My personal journey
            </Typography>
            <Divider
                sx={{
                    marginBottom: '20px',
                    borderColor: '#004d40',
                    width: '60px',
                }}
            />

            <TabContext value={value}>
                <Box sx={{ borderBottom: 2, borderColor: '#004d40', width: '100%', maxWidth: '600px' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="qualification tabs"
                        sx={{
                            '& .MuiTab-root': {
                                fontWeight: 'bold',
                                color: '#004d40',
                                transition: 'color 0.3s',
                            },
                            '& .MuiTab-root.Mui-selected': {
                                color: '#00695c',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#00695c',
                                height: '4px',
                            },
                        }}
                    >
                        <Tab
                            label="Education"
                            value="1"
                            icon={<SchoolOutlinedIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            label="Experience"
                            value="2"
                            icon={<WorkOutlineOutlinedIcon />}
                            iconPosition="start"
                        />
                    </TabList>
                </Box>

                <TabPanel
                    value="1"
                    sx={{
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginTop: '20px',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                        Madhyamik
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        Garden Reach Mudiali High School
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Achieved 75.7% overall, demonstrating a solid academic foundation in core subjects.
                    </Typography>
                </TabPanel>

                <TabPanel
                    value="1"
                    sx={{
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginTop: '20px',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                        Higher Secondary Education (Science)
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        Garden Reach Mudiali High School
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Achieved 89.4% overall, reflecting strong academic performance in Science subjects.
                    </Typography>
                </TabPanel>
                <TabPanel
                    value="1"
                    sx={{
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginTop: '20px',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                        Diploma in Computer Science and Technology
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        Central Calcutta Polytechnic
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            <li>1st Semester: GPA 9.1, Percentage 86.9%</li>
                            <li>2nd Semester: GPA 9.2, Percentage 86.9%</li>
                            <li>3rd Semester: GPA 9.2, Percentage 90.0%</li>
                            <li>4th Semester: GPA 9.4, Percentage 92.3%</li>
                            <li>Currently in 5th Semester</li>
                        </ul>
                    </Typography>
                </TabPanel>
                <TabPanel
                    value="2"
                    sx={{
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginTop: '20px',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                        YCSAS Pvt. Ltd
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        Current Internship (Sep. 20,2024 to Present)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gained experience through the internship at YSS Company, covering a comprehensive curriculum including:

                        <strong>Front End Core Skills:</strong>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>MUI</li>
                        </ul>

                        <strong>Additional Tools & Concepts:</strong>
                        <ul>
                            <li>Confluence (Basic)</li>
                            <li>Jira (Basic)</li>
                            <li>Figma (Basic)</li>
                            <li>Excalidraw/Draw.io (Basic)</li>
                            <li>Git/GitHub (Basic)</li>
                        </ul>

                        <strong>Back End Core Skills:</strong>
                        <ul>
                            <li>Python</li>
                            <li>Django (Advanced)</li>
                            <li>MySQL</li>
                        </ul>
                    </Typography>
                </TabPanel>
                <TabPanel
                    value="2"
                    sx={{
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginTop: '20px',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >

                    <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                        YCSAS Pvt. Ltd
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        Internship in Web Development (Nov. 1,2023 to Dec. 15,2023)

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        To leverage my experience gained through the internship at YSS Company, where I acquired practical skills in frontend and backend development,
                        including HTML, CSS, Django, Bootstrap, and DBMS.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DownloadIcon />}
                        sx={{
                            marginBottom: '15px',
                            marginTop: '20px',
                            size: 'large',
                            backgroundColor: '#1976d2',
                            '&:hover': {
                                backgroundColor: '#115293'
                            }
                        }}
                        href="path/to/your/certificate.pdf"
                        download
                        onClick={() => downloadCertificate(certificate_URL)}
                    >
                        Download Certificate
                    </Button>
                </TabPanel>

            </TabContext>
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

export default Qualification;
