import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography, Grid, Button, Link, Card, CardMedia, CardContent, CardActions, CardActionArea, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import utils from './utils';
import axios from 'axios';

const styles = makeStyles((theme) => ({
    loadingContainer: {
        minHeight: '100vh'
    },
    loaderColor: {
        color: theme.palette.type === "dark" ? '#fff' : theme.palette.primary
    },
    pokedexContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
        maxWidth: '100%',
        margin: '0'
    },
    cardStyle: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary
    }
}));

const Pokemon = (props) => {
    const classes = styles();
    const { match, history } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
            .catch(function (error) {
                setPokemon(false);
            });
    }, [pokemonId]);

    const generateNotFound = () => {
        return (
            <>
                <Typography>Pokemon not found</Typography>
                <Button variant="contained" onClick={() => history.push("/")}>
                    back to pokedex
                </Button>
            </>
        )
    }

    const generatePokemonJSX = (pokemon) => {
        const { id, name, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <Grid container justify="center" alignItems="center" className={classes.pokedexContainer}>
                    <Grid item xs={6}>
                        <Card className={classes.cardStyle}>
                            <CardMedia
                                component="img"
                                alt={utils.toFirstCharUpperCase(name)}
                                //height="300"
                                //width="300"
                                image={fullImageUrl}
                                title={utils.toFirstCharUpperCase(name)}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {`${id}.`} {utils.toFirstCharUpperCase(name)}
                                </Typography>
                                <List component="nav" className={classes.root} aria-label="contacts">
                                    <ListItem >
                                        <ListItemText primary={`Height: ${height}`} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary={`Weight: ${weight}`} />
                                    </ListItem>
                                    <ListItem  >
                                        <ListItemText >
                                            {'Species: '}
                                            <Link href={species.url} target="_blank" rel="noopener">{species.name} </Link>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary={`Types: `} />
                                    </ListItem>
                                    {types.map((typeInfo) => {
                                        const { type } = typeInfo;
                                        const { name } = type;
                                        return <ListItem key={name}> <ListItemText inset primary={utils.toFirstCharUpperCase(name)} /></ListItem>;
                                    })}
                                </List>
                            </CardContent>

                            <CardActions>
                                <Button color="primary" variant="contained" onClick={() => history.push("/")}>
                                    back to pokedex
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </>
        )
    }

    return (
        <>
            {pokemon === undefined &&
                <Grid className={classes.loadingContainer} container xs={12} justify={'center'} alignContent={'center'} direction={'column'} >
                    <CircularProgress className={classes.loaderColor} />
                </Grid>}
            {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
            {(pokemon === false) && (generateNotFound())}

        </>
    );
}

export default Pokemon;