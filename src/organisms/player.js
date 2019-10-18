import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import CoverThumbnail from '../atoms/coverThumbnail';

class Player extends Component {
  render() {
    const { songs, selectedSong } = this.props;
    if (songs.length > 0 ) {
      const songInfo = songs[selectedSong];
      return <div>
        <CoverThumbnail 
          thumbnailUrl={songInfo.artworkUrl100}
          collectionName={songInfo.collectionName}
        />
      </div>
    } else {
      return <div>There are no songs, go back to search page.</div>
    }
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

const mapStateToProps = ({ search }) => ({
  songs: search.songs,
  selectedSong: search.selectedSong
});

export default connect(mapStateToProps)(Player)
