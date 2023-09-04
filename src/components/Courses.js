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

const Courses = () => {

    const classes = useStyles();

    const { t } = useTranslation();
    
    return (
        <Grid id='courses' container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12} style={{marginTop: 18}}>
            <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    {t('courses.title')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    {t('courses.title1')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('courses.title2')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('courses.title3')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('courses.title4')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('courses.title5')}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Courses;