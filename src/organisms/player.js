import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward, IoIosPause, IoIosPlay } from "react-icons/io";

import colors from '../colors';
import CoverThumbnail from '../atoms/coverThumbnail';
import { changeSelectedSong, changePlaying } from '../actions/search';

class Player extends Component {
  handleChangeSong(songsLength, selectedSong, direction) {
    const { dispatch } = this.props;
    const newSelectedSong = selectedSong + direction;

    if (newSelectedSong >= songsLength) {
      dispatch(changeSelectedSong(0))
    } else if (newSelectedSong < 0) {
      dispatch(changeSelectedSong(songsLength - 1))
    } else {
      dispatch(changeSelectedSong(newSelectedSong))
    }
  }

  async handlePlay() {
    const { dispatch, audio } = this.props;
    await audio.play();
    dispatch(changePlaying(true))
  }

  async handlePause() {
    const { dispatch, audio } = this.props;
    await audio.pause();
    dispatch(changePlaying(false))
  }

  render() {
    const { songs, selectedSong, audio, isPlaying } = this.props;
    if (songs.length > 0 ) {
      const songInfo = songs[selectedSong];
      audio.src = songInfo.previewUrl;
      if (isPlaying) this.handlePlay();
      return <div className={css(styles.container)}>
          <div className={css(styles.artistName)}>{songInfo.artistName}</div>
          <div className={css(styles.otherInfo)}>{songInfo.trackName}</div>
          <div className={css(styles.otherInfo)}>{songInfo.collectionName}</div>
          <div className={css(styles.playerBox)}>
            <IoIosArrowBack
              className={css(styles.changeSong)}
              onClick={() => this.handleChangeSong(songs.length, selectedSong, -1)}
            />
            <div className={css(styles.playContainer)}>
              { isPlaying
                ? <IoIosPause size={100} className={css(styles.pause)} onClick={() => this.handlePause()} />
                : <IoIosPlay size={100} className={css(styles.play)} onClick={() => this.handlePlay()} />
              }
              <CoverThumbnail
                thumbnailUrl={songInfo.artworkUrl100}
                collectionName={songInfo.collectionName}
              />
            </div>
            <IoIosArrowForward
              className={css(styles.changeSong)}
              onClick={() => this.handleChangeSong(songs.length, selectedSong, 1)}
            />
          </div>
        </div>
    } else {
      return <div className={css(styles.container)}>There are no songs, go back to the search page.</div>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 40
  },
  playerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 20
  },
  changeSong: {
    ':hover': {
      color: colors.secondary.light,
      cursor: 'pointer',
      userSelect: 'none'
    }
  },
  otherInfo: {
    fontSize: '0.5em',
    marginTop: 10
  },
  playContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
      cursor: 'pointer'
    }
  },
  play: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: colors.primary.dark,
    opacity: 0.9,
    zIndex: 1000,
    ':hover': {
      color: colors.secondary.dark
    }
  },
  pause: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: colors.tertiary.dark,
    opacity: 0.9,
    zIndex: 1000,
    ':hover': {
      color: colors.secondary.dark
    }
  }
});

const mapStateToProps = ({ search }) => ({
  songs: search.songs,
  selectedSong: search.selectedSong,
  audio: search.audio,
  isPlaying: search.isPlaying
});

export default connect(mapStateToProps)(Player)
