import React from "react";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    textInfo:
    {
        textAlign:"center",
        paddingTop: 6,
        color: "white"
    }
});

const Projects = () => {

    const classes = useStyles();

    const { t } = useTranslation();
    
    return (
        <Grid id='projects' container spacing={4} justifyContent={'center'} alignItems={'center'} style={{ marginTop: 18 }}>
            <Grid container justifyContent={'center'} item xs={12} style={{ marginTop: 18 }}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32 }}>
                {t('projects.title')}
                </Typography>
            </Grid>

            {/* Primer proyecto */}
            <Grid item xs={12} sm={7}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52 }}>
                {t('projects.title1')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle1-1')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle1-2')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle1-3')}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} style={{ display: "flex", justifyContent: "center" }}>
                <img src='VideogameShopTycoon.gif' style={{ maxWidth: '100%' }} />
            </Grid>

            {/* Segundo proyecto */}
            <Grid item xs={12} sm={5} style={{ display: "flex", justifyContent: "center" }}>
                <img src='CodeLyokoVR.gif' style={{ maxWidth: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={7}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52 }}>
                {t('projects.title2')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle2-1')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle2-2')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle2-3')}
                </Typography>
            </Grid>

            {/* Tercer proyecto */}
            <Grid item xs={12} sm={7}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52 }}>
                {t('projects.title3')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle3-1')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle3-2')}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} style={{ display: "flex", justifyContent: "center" }}>
                <img src='FarmProject.gif' style={{ maxWidth: '100%' }} />
            </Grid>

            {/* Cuarto proyecto */}
            <Grid item xs={12} sm={5} style={{ display: "flex", justifyContent: "center" }}>
                <img src='sondaproject.png' style={{ maxWidth: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={7}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52 }}>
                {t('projects.title4')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle4-1')}
                </Typography>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22 }}>
                {t('projects.subtitle4-2')}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Projects;