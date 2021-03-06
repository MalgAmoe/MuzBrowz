import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Router } from '@reach/router';

import colors from './colors';
import SearchPage from './pages/searchPage';
import PlayerPage from './pages/playerPage';

function App() {
  return (
    <div className={css(styles.app)}>
      <h3>MuzBrowz</h3>
      <Router>
        <SearchPage path='/' />
        <PlayerPage path='player/' />
      </Router>
    </div>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.primary.dark,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(10px + 2vmin)',
    color: colors.primary.light,
    padding: '20px'
  }
});

export default App;
