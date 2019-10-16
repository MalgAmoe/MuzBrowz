import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';

import colors from '../colors';
import { searchSongs } from '../actions/search';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  performSearch() {
    const { dispatch } = this.props;
    const { searchTerm } = this.state;
    if (searchTerm.length > 1) {
      dispatch(searchSongs(searchTerm));
    }
  }

  setInput(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
        <div className={css(styles.searchContainer)}>
          <input 
            className={css(styles.searchInput)}
            onChange={(e) => this.setInput(e)}
            value={this.state.searchTerm}
          />
          <FaSearch className={css(styles.searchIcon)} onClick={() => this.performSearch()}/>
        </div>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    height: 30,
    width: 200,
    border: '1px solid white',
    borderRadius: 20,
    background: colors.primary.dark,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 36,
    ':focus': {
      outline: 'none'
    }
  },
  searchContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    position: 'absolute',
    left: 212,
    fontSize: 24,
    margin: 'auto',
    ':hover': {
      cursor: 'pointer'
    },
    color: colors.tertiary.light
  }
});

export default connect()(Search);
