import React from "react";
import { Avatar, Button, Grid, Typography } from '@mui/material';
import "./Presentation.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

class Presentation extends React.Component
{
    render()
    {
        return (
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Avatar
                        alt="Image cv"
                        src="" // cvPhoto.jpg
                        sx={{ width: 324, height: 324 }}
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">
                        Víctor José Barneto Magen
                    </Typography>
                    <Typography variant="body2">
                        29/09/1998
                    </Typography>
                    <Typography variant="body2">
                        Zaragoza 50018
                    </Typography>
                    <Typography variant="body2">
                        correovictorb@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" onClick={openLinkedIn}><LinkedInIcon/>LinkedIn</Button><br/>
                    <Button variant="outlined" onClick={openGitHub}><GitHubIcon/>Github</Button><br/>
                    <Button variant="outlined" onClick={openTwitter}><TwitterIcon/>Twitter</Button><br/>
                    <Button variant="outlined" onClick={openMail}><EmailIcon/>Mail</Button>
                </Grid>
            </Grid>
            );
    }
}

function openLinkedIn()
{
    var win = window.open("https://www.linkedin.com/in/v%C3%ADctor-jos%C3%A9/", 'linkedin');
    win.focus();
}

function openGitHub()
{
    var win = window.open("https://github.com/CodeOfVictor", 'github');
    win.focus();
}

function openTwitter()
{
    var win = window.open("https://twitter.com/CodeOfVictor", 'twitter');
    win.focus();
}

function openMail()
{
    var win = window.open("mailto:correovictorb@gmail.com", 'mail');
    win.focus();
}

export default Presentation;