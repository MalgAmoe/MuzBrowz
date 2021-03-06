import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { navigate } from "@reach/router";
import { connect } from 'react-redux';

import CoverThumbnail from '../atoms/coverThumbnail';
import { millisToSongLength } from '../utils/time';
import colors from '../colors';
import { changeSelectedSong } from '../actions/search';

class SongListElement extends Component {
  handleClick(songPosition) {
    const { dispatch } = this.props;
    dispatch(changeSelectedSong(songPosition));
    navigate('/player/')
  }

  render() {
    const { songInfo, position } = this.props;
    return <div
        className={css(styles.container)}
        onClick={() => this.handleClick(position)}
      >
      <CoverThumbnail 
        thumbnailUrl={songInfo.artworkUrl30}
        collectionName={songInfo.collectionName}
        className={css(styles.image)}
      />
      <div className={css(styles.infos)}>
        <span className={css(styles.textField)}>{songInfo.artistName} </span>
        <span className={css(styles.textField)}>{songInfo.trackName} </span>
        <span className={css(styles.numberField)}>{millisToSongLength(songInfo.trackTimeMillis)} </span>
        <span className={css(styles.textField)}>{songInfo.collectionName} </span>
        <span className={css(styles.textField)}>{songInfo.primaryGenreName} </span>
        <span className={css(styles.numberField)}>{songInfo.releaseDate.slice(0, 4)} </span>
        <span className={css(styles.numberField)}>{songInfo.trackPrice}$ </span>
      </div>
    </div>
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    fontSize: 'calc(1px + 2vmin)',
    backgroundColor: colors.primary.light,
    color: colors.primary.dark,
    ':hover': {
      backgroundColor: colors.secondary.light,
      color: colors.secondary.dark,
      cursor: 'pointer'
    },
    '@media (max-width: 850px)': {
      flexDirection: 'column'
    }
  },
  infos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '10px',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      fontSize: 'calc(10px + 1vmin)'
    }
  },
  textField: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '12vw',
    textAlign: 'center',
    '@media (max-width: 800px)': {
      width: '100%'
    }
  },
  numberField: {
    width: 100,
    textAlign: 'center'
  },
  image: {
    margin: 20
  }
});

export default connect()(SongListElement)
