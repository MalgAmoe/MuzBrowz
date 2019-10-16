import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { Router } from '@reach/router';

import colors from './colors';
import SearchPage from './pages/search';
import PlayerPage from './pages/player';

function App() {
  return (
    <div className={css(styles.app)}>
      <h3>MuzBrowz</h3>
      <Router>
        <SearchPage path='/' />
        <PlayerPage path='player' />
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
    color: 'white',
    padding: '20px'
  }
});

const mapStateToProps = ({ search }) => ({
  songs: search.songs
})

export default connect(mapStateToProps)(App);
