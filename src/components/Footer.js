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

const Footer = () => {

    const classes = useStyles();

    const { t } = useTranslation();
    
    return (
        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 16}}>
                        {t('footer.title')}
                    </Typography>
                    <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 16}}>
                        {t('footer.subtitle')}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;