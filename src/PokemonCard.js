import React from 'react';
import utils from './utils';
import {    
    Grid,
    Card,
    CardMedia,
    CardContent,    
    Typography,
    CardActionArea,    
} from '@material-ui/core';
const PokemonCard = (props)=>{       
    const classes = props.classes
    return(
        <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <Card onClick={() => props.history.push(`/${props.id}`)} className={classes.cardStyle}>
                        <CardMedia
                            image={props.sprite}
                            className={classes.cardMedia}
                            style={{ width: '130px', height: '130px' }}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography>{`${props.id}. ${utils.toFirstCharUpperCase(props.name)}`}</Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
    );
}
export default PokemonCard;