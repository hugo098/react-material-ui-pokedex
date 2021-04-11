import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    searchContainer: {
        display: 'flex',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
    },
    searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
    },
    searchInput: {
        width: "200px",
        margin: "5px",
    },
    inputTextColor: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
}));

const Search = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField 
                InputProps={{
                    classes: {
                        input: classes.inputTextColor
                    }
                }}
                className={classes.searchInput} 
                onChange={props.handleSearchChange} 
                label="Pokemon" 
                variant="standard" 
            />
        </div>
    );
}
export default Search;