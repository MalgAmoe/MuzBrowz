import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { StyleSheet, css } from 'aphrodite';

class Share extends Component {
  render() {
    const { songs, selectedSong } = this.props;
    if (songs.length > 0) {
      const songInfo = songs[selectedSong];
      const url = 'http://amazing-url.com'
      return <div className={css(styles.container)}>
        <FacebookShareButton
          quote={`Listening to ${songInfo.trackName} by ${songInfo.artistName} and it's awesome!`}
          url={url}
        >
          <FacebookIcon size={32} round={true} className={css(styles.icon)} />
        </FacebookShareButton>
        <TwitterShareButton
          title={`Listening to ${songInfo.trackName} by ${songInfo.artistName} and it's awesome!`}
          url={url}
        >
          <TwitterIcon size={32} round={true} className={css(styles.icon)} />
        </TwitterShareButton>
        <EmailShareButton
          title={`Listening to ${songInfo.trackName} by ${songInfo.artistName} and it's awesome!`}
          url={url}
        >
          <EmailIcon size={32} round={true} className={css(styles.icon)} />
        </EmailShareButton>
      </div>
    }
    return <div></div>
  }
}

const styles =  StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  icon: {
    ':hover': {
      cursor: 'pointer'
    }
  }
})

const mapStateToProps = ({ search }) => ({
  songs: search.songs,
  selectedSong: search.selectedSong
});

export default connect(mapStateToProps)(Share)
