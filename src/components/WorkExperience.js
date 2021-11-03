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

const WorkExperience = () => {

    const classes = useStyles();
    
    return (
        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12}>
            <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    Experiencia Laboral
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    VICEPRESIDENTE Y PROGRAMADOR DE 4 FREAKS FICTION
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    Compañia junnior con el objetivo de programar en el sector de videojuegos para una mayor experiencia durante la carrera universitaria.
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    PROGRAMADOR EN REALIDAD AUMENTADA Y WEB (NODE JS) EN HIBERUS
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    Desarrollador en realidad aumentada con el dispositivo Microsoft Hololens y Unity.
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    Desarrollador web con Node JS para la visualizacion de modelos 3D
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", marginTop: 30, fontSize: 22}}>
                    PROGRAMADOR EN .NET EN HIBERUS
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat"}}>
                    Formacion en .net durante 3 meses
                </Typography>
            </Grid>
        </Grid>
    );
}

export default WorkExperience;