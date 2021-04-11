import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import themes from './themes';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const themeModeHandler = () => {
    setDarkMode(!darkMode);
  };
  const useStyles = makeStyles({
    principalPaper: {
      background: /*(theme.palette.type === "dark")*/darkMode ? '#303030' : '#bdbdbd',
      minHeight: '100vh',
      minWidth: '100%',
      margin: '0',
      padding: '0'
    }
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkMode ? themes.darkTheme : themes.lightTheme}>
      <Paper square className={classes.principalPaper}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Pokedex darkMode={darkMode} themeModeHandler={themeModeHandler} {...props} />}
          />
          <Route
            exact
            path="/:pokemonId"
            render={(props) => <Pokemon {...props} />}
          />
          <Route render={(props) => <div>Not found</div>}/>
            
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
