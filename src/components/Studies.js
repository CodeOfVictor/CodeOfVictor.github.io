import React from "react";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useTranslation } from 'react-i18next';

const Studies = () => {
    const useStyles = makeStyles({
        textInfo:
        {
            textAlign:"center",
            paddingTop: 6,
            color: "white"
        }
    });
    
    const { t } = useTranslation();

    const classes = useStyles();
    
    return (
        <Grid id="studies" container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12} style={{marginTop: 18}}>
            <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                {t('studies.title')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    {t('studies.title1')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    {t('studies.university')} (2019 - 2024)
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('studies.title2')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    SAN VALERO (2017 - 2019)
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    {t('studies.title3')}
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    SAN VALERO (2015 - 2017)
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Studies;