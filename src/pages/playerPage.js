import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { navigate } from "@reach/router";

import colors from '../colors';
import Player from '../organisms/player';
import Share from '../organisms/share';

class PlayerPage extends Component {
  render() {
    return <div className={css(styles.container)}>
        <div
          onClick={() => navigate('/')}
          className={css(styles.back)}
        >Go back to search</div>
        <Player />
        <Share />
      </div>
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  back: {
    padding: 5,
    fontSize: 'calc(10px + 0.2em)',
    backgroundColor: colors.primary.light,
    color: colors.primary.dark,
    borderRadius: 5,
    width: '8em',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.secondary.light,
      color: colors.secondary.dark
    }
  }
});

export default PlayerPage;
