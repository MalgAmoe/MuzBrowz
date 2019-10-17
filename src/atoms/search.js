import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';

import colors from '../colors';
import { searchSongs, searchInput } from '../actions/search';

class Search extends Component {
  performSearch() {
    const { dispatch, searchTerm } = this.props;
    if (searchTerm.length > 1) {
      dispatch(searchSongs(searchTerm));
    }
  }

  setInput(e) {
    const { dispatch } = this.props;
    dispatch(searchInput(e.target.value));
  }

  render() {
    return (
        <div className={css(styles.searchContainer)}>
          <input 
            className={css(styles.searchInput)}
            onChange={(e) => this.setInput(e)}
            onKeyPress={(e) => {if(e.key === 'Enter') this.performSearch()}}
            value={this.props.searchTerm}
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
    border: `1px solid ${colors.primary.light}`,
    borderRadius: 20,
    background: colors.primary.dark,
    color: colors.primary.light,
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
      cursor: 'pointer',
      color: colors.secondary.light
    },
    color: colors.primary.light
  }
});

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm
});

export default connect(mapStateToProps)(Search);
