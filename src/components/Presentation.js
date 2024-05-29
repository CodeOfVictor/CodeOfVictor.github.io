import React from "react";
import { Avatar, Button, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@mui/styles';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    textInfo:
    {
        textAlign:"center",
        paddingTop: 6,
        color: "white"
    },
    buttonInfo:
    {
        marginLeft: '10px !important',
        width: '7rem'
    },
    linkButtons:
    {
        justifyContent: 'center'
    }
});

const Presentation = () => {

    const { t } = useTranslation();

    const classes = useStyles();

    const openLink = (src, name) => {
        var win = window.open(src, name);
        win.focus();
    }
    
    return (
        <Grid id="presentation" container spacing={4} justifyContent={'center'} alignItems={'center'}>
            <Grid container justifyContent={'center'} item xs={12}>
                <Avatar
                    style={{marginTop: 32}}
                    alt='Image cv'
                    src='redonda.png' // cvPhoto.jpg
                    sx={{ width: 225, height: 225 }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    Víctor José B.M.
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    
                </Typography>
            </Grid>
            <Grid container justifyContent={'center'} item xs={12}>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('https://www.linkedin.com/in/victor-jose/', 'linkedin')}><LinkedInIcon/>LinkedIn</Button>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('https://github.com/CodeOfVictor', 'github')}><GitHubIcon/>Github</Button>
                <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('mailto:correovictorb@gmail.com', 'email')}><EmailIcon/>Mail</Button>
            </Grid>
            <Grid container justifyContent={'center'} style={{marginLeft: '25px'}} item xs={12}>
                <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginRight: 12}}>
                    <Avatar
                        style={{width: 32, height: 32, marginRight: '5px'}}
                        src='http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg'
                    />
                    <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: '10px'}}>
                        {t('language.spanish')}
                    </Typography>
                </Grid>
                <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginRight: 12}}>
                    <Avatar
                        style={{width: 32, height: 32, marginRight: '5px'}}
                        src='http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
                    />
                    <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                        {t('language.english')}
                    </Typography>
                </Grid>
                <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginRight: 12}}>
                    <Avatar
                        style={{width: 32, height: 32, marginRight: '5px'}}
                        src='http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg'
                    />
                    <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: '10px'}}>
                        {t('language.german')}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Presentation;

// <Button variant="outlined" className={classes.buttonInfo} onClick={() => openLink('https://twitter.com/CodeOfVictor', 'twitter')}><TwitterIcon/>Twitter</Button>