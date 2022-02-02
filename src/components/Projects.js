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

const Projects = () => {

    const classes = useStyles();
    
    return (
        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12}>
                <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    Proyectos
                </Typography>
            </Grid>


            <Grid item xs={7}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    VIDEOGAME SHOP TYCOON
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Videojuego creado en Unity de género tycoon.
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Tienes que construir y gestionar una tienda con sus compras, ventas,
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    clientes, misiones y empleados para llevarla al éxito.
                </Typography>
            </Grid>
            <Grid item xs={5} style={{display: "flex", justifyContent: "left"}}>
                <img src='VideogameShopTycoon.gif' width="75%" height="75%" style={{maxWidth: '100%'}} />
            </Grid>


            <Grid item xs={5} style={{display: "flex", justifyContent: "right"}}>
                <img src='CodeLyokoVR.gif' style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={7}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    CODIGO LYOKO VR
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Videojuego VR creado en Unity y con la herramienta de Oculus 
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Hecho en 2 días basado en la serie de animación Codigo Lyoko en la que tienes que
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                sobrevivir a rondas de enemigos para las gafas de realidad virtual Oculus 2.
                </Typography>
            </Grid>


            <Grid item xs={7}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    PRUEBAS EN VR
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Pruebas de proyectos realizado en Unity para VR
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    usando diferentes herramientas de VR.
                </Typography>
            </Grid>
            <Grid item xs={5} style={{display: "flex", justifyContent: "left"}}>
                <img src='FarmProject.gif' style={{maxWidth: '100%'}} />
            </Grid>


            <Grid item xs={5}>
            </Grid>
            <Grid item xs={7}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    ADRIFT
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Videojuego creado en Unity, en el que tienes que poner planetas
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    para que cuando la nave se encienda siga la ruta
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    segun la gravedad y físicas de los planetas.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Projects;