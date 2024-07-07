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

const Achievements = () => {

    const classes = useStyles();

    const { t } = useTranslation();
    
    return (
        <Grid id='achievements' container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12} style={{marginTop: 18}}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    {t('achievements.title')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    {t('achievements.title3')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    {t('achievements.title1')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    {t('achievements.title2')}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Achievements;