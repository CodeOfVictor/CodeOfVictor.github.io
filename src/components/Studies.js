import React from "react";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textInfo:
    {
        textAlign:"center",
        paddingTop: 6,
        color: "white"
    }
});

const Studies = () => {

    const classes = useStyles();
    
    return (
        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12}>
            <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    Estudios
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    DOBLE GRADO: INGENIERÍA INFORMÁTICA + DISEÑO Y DESARROLLO DE VIDEOJUEGOS
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    UNIVERSIDAD SAN JORGE (2019 - ACTUALMENTE)
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    GRADO SUPERIOR EN DAM: DESARROLLO DE APLICACIONES MULTIPLATAFORMA
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    SAN VALERO (2017 - 2019)
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    GRADO MEDIO DE TELECOMUNICACIONES
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    SAN VALERO (2015 - 2017)
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Studies;