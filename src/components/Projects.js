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


            <Grid item xs={6}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    VIDEOGAME SHOP TYCOON
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Videojuego creado en Unity de genero tycoon.
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Tienes que construir y gestionar una tienda con sus compras, ventas,
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    clientes, misiones y empleados para llevarla al exito.
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <img src='VideogameShopTycoon.gif' width="75%" height="75%"/>
            </Grid>


            <Grid item xs={3}>
                <img src='CodeLyokoVR.gif' />
            </Grid>
            <Grid item xs={8}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    CODIGO LYOKO VR
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Videojuego VR creado en Unity y con la biblioteca de Oculus 
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Hecho en 2 dias basado en la serie de animacion Codigo Lyoko para
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    las gafas de realidad virtual Oculus 2.
                </Typography>
            </Grid>


            <Grid item xs={6}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    PRUEBAS EN VR
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Pruebas de proyectos realizado en Unity para VR
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <img src='FarmProject.gif' />
            </Grid>


            <Grid item xs={3}>
            </Grid>
            <Grid item xs={8}>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 36, marginBottom: 52}}>
                    ADRIFT
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    Videojuego creado en Unity, en el que tienes que poner planetas
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    para que cuando la nave se encienda cambie la rura
                </Typography>
                <Typography  className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 22}}>
                    segun la gravedad y fisicas de los planetas.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Projects;