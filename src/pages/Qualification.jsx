import { Box, Button, Divider, Tab, Typography } from '@mui/material';
import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Link } from 'react-router-dom';
function Qualification() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        internship
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        To leverage my experience gained through the internship at YSS Company, where I acquired practical skills in frontend and backend development,
                        including HTML, CSS, Django, Bootstrap, and DBMS.
                    </Typography>
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
