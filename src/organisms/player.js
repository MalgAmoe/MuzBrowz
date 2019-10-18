import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import colors from '../colors';
import CoverThumbnail from '../atoms/coverThumbnail';
import { changeSelectedSong } from '../actions/search';

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

  render() {
    const { songs, selectedSong } = this.props;
    if (songs.length > 0 ) {
      const songInfo = songs[selectedSong];
      return <div className={css(styles.container)}>
          <div className={css(styles.artistName)}>{songInfo.artistName}</div>
          <div className={css(styles.otherInfo)}>{songInfo.trackName}</div>
          <div className={css(styles.otherInfo)}>{songInfo.collectionName}</div>
          <div className={css(styles.playerBox)}>
            <IoIosArrowBack
              className={css(styles.changeSong)}
              onClick={() => this.handleChangeSong(songs.length, selectedSong, -1)}
            />
            <CoverThumbnail
              thumbnailUrl={songInfo.artworkUrl100}
              collectionName={songInfo.collectionName}
            />
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
  }
});

const mapStateToProps = ({ search }) => ({
  songs: search.songs,
  selectedSong: search.selectedSong
});

export default connect(mapStateToProps)(Player)
