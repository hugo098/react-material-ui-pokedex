import React, { useEffect, useState } from 'react';
import utils from './utils';
import {
    AppBar,
    Toolbar,
    Grid,
    CircularProgress,
    IconButton,
    Card,
    CardMedia,
    CardContent,    
    Typography,
    CardActionArea,
} from '@material-ui/core';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import axios from 'axios';
import Search from './Search';
import pokedexStyles from './Pokedex.styles';
import PokemonCard from './PokemonCard';
import { fade, makeStyles } from '@material-ui/core/styles';

const Pokedex = (props) => {
    const classes = pokedexStyles();
    const [pokemonData, setPokemonData] = useState(undefined);
    const [filter, setFilter] = useState("");
    const {history} = props;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`)
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`
                    }
                });
                setPokemonData(newPokemonData);
            });
    }, []);

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };

    const getPokemonCard = (pokemonId) => {
        const { id, name, sprite } = pokemonData[pokemonId];
        return (
            <PokemonCard                
                history={history}
                classes={classes}
                key={pokemonId}
                id={id}
                name={name}
                sprite={sprite}
            />
        );
    }
    return (
        <>
            <AppBar position="static" className={classes.appBarStyle}>
                <Toolbar>
                    <Grid className={classes.toolbarContainer} container justify="space-between" alignItems="center" >
                        <Grid item >
                            <Search handleSearchChange={handleSearchChange} />
                        </Grid>
                        <Grid item >
                            <IconButton aria-label="mode" className={classes.margin} onClick={props.themeModeHandler}>
                                <Brightness6Icon className={classes.darkModeIcon} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemonData).map(
                        (pokemonId) => (
                            pokemonData[pokemonId].name.includes(filter) &&
                            getPokemonCard(pokemonId)
                        )
                    )}
                </Grid>
            ) : (
                    <Grid className={classes.loadingContainer} container justify={'center'} alignContent={'center'} direction={'column'} >
                        <Grid item xs={12}>
                            <CircularProgress className={classes.loaderColor} />
                        </Grid>
                    </Grid>
                )
            }
        </>
    );
}
export default Pokedex;