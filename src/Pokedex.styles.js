import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
        maxWidth: '100%',
        margin: '0'
    },
    toolbarContainer: {
        paddingLeft: '26px',
        paddingRight: '26px',
        maxWidth: '100%',
        margin: '0'
    },
    loadingContainer: {
        minHeight: '83vh'
    },
    cardMedia: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center'
    },
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
    appBarStyle: {
        backgroundColor: theme.palette.type === "dark" ? theme.palette.background.paper : theme.palette.primary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    darkModeIcon: {
        color: '#fff'
    },
    loaderColor: {
        color: theme.palette.type === "dark" ? '#fff' : theme.palette.primary
    },
    cardStyle: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary 
    }
}));

export default useStyles;