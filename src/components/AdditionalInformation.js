import React from "react";
import { Grid, Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
    textInfo:
    {
        textAlign:"center",
        paddingTop: 6,
        color: "white"
    },
    ratingLanguaje:
    {
        textAlign:"center"
    }
});

const Additionalinformation = () => {

    const classes = useStyles();
    
    return (
        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'} style={{marginTop: 18}}>
            <Grid container justifyContent={'center'} item xs={12}>
            <Typography className={classes.textInfo} style={{ fontFamily: "Montserrat", fontSize: 32}}>
                    LENGUAJES DE PROGRAMACION
                </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent={'center'}>
                
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>UNITY</Box>
                    <Rating
                        readOnly
                        value={5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>UNREAL</Box>
                    <Rating
                        readOnly
                        value={2}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>C, C++</Box>
                    <Rating
                        readOnly
                        value={4}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>JS</Box>
                    <Rating
                        readOnly
                        value={4}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>Java</Box>
                    <Rating
                        readOnly
                        value={5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>
                
            </Grid>
            <Grid item xs={12} container justifyContent={'center'}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>.NET (C#)</Box>
                    <Rating
                        readOnly
                        value={4}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>PHP</Box>
                    <Rating
                        readOnly
                        value={4}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>SQL</Box>
                    <Rating
                        readOnly
                        value={3}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>Angular</Box>
                    <Rating
                        readOnly
                        value={1}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

            </Grid>
            <Grid item xs={12} container justifyContent={'center'}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>React</Box>
                    <Rating
                        readOnly
                        value={3}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    style={{justifyContent:'center'}}
                >
                    <Box sx={{ ml: 2 }} className={classes.textInfo} style={{ fontFamily: "Montserrat", marginRight: 5 }}>Python</Box>
                    <Rating
                        readOnly
                        value={4}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Additionalinformation;