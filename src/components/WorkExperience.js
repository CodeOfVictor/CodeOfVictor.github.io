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

const WorkExperience = () => {

    const classes = useStyles();
    
    const { t } = useTranslation();
    
    return (
        <Grid id='works' container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12} style={{marginTop: 18}}>
            <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    {t('works.title')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    {t('works.title1')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    {t('works.subtitle1-1')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('works.title2')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    {t('works.subtitle2-1')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    {t('works.subtitle2-2')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    {t('works.subtitle2-3')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('works.title3')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    {t('works.subtitle3-1')}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default WorkExperience;