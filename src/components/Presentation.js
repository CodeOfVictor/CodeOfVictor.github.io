import React from "react";
import { Avatar, Button, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textInfo:
    {
        paddingTop: 6
    },
    buttonInfo:
    {
        marginTop: '10px !important',
        width: '7rem'
    }
});

const Presentation = () => {

    const classes = useStyles();

    const openLink = (src, name) => {
        var win = window.open(src, name);
        win.focus();
    }
    
    return (
        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>
            <Grid container justifyContent={'center'} item xs={2}>
                <Avatar
                    alt='Image cv'
                    src='' // cvPhoto.jpg
                    sx={{ width: 150, height: 150 }}
                />
            </Grid>
            <Grid item xs={8}>
                <Typography className={classes.textInfo}>
                    Víctor José B.M.
                </Typography>
                <Typography className={classes.textInfo}>
                    29/09/1998
                </Typography>
                <Typography className={classes.textInfo}>
                    Zaragoza 50018
                </Typography>
                <Typography className={classes.textInfo}>
                    correovictorb@gmail.com
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('https://www.linkedin.com/in/v%C3%ADctor-jos%C3%A9/', 'linkedin')}><LinkedInIcon/>LinkedIn</Button><br/>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('https://github.com/CodeOfVictor', 'github')}><GitHubIcon/>Github</Button><br/>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('https://github.com/CodeOfVictor', 'twitter')}><TwitterIcon/>Twitter</Button><br/>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('mailto:correovictorb@gmail.com', 'email')}><EmailIcon/>Mail</Button>
            </Grid>
        </Grid>
    );
}

export default Presentation;