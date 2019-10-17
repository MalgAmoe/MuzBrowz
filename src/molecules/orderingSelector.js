import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { changeOrdering } from '../actions/search';
import colors from '../colors';

class OrderingSelector extends Component {
  handleChangeOrdering(order) {
    const { dispatch } = this.props;
    dispatch(changeOrdering(order))
  }

  render() {
    const { ordering } = this.props;

    const colorStyleGenre = ordering === 'genre' ? styles.selected : styles.unselected;
    const colorStyleYear = ordering === 'year' ? styles.selected : styles.unselected;
    const colorStylePrice = ordering === 'price' ? styles.selected : styles.unselected;

    return <div className={css(styles.ordering)}>
      <span 
        className={css(styles.orderingChoice, styles.leftChoice, colorStyleGenre)}
        onClick={() => this.handleChangeOrdering('genre')}
      >Genre</span>
      <span
        className={css(styles.orderingChoice, colorStyleYear)}
        onClick={() => this.handleChangeOrdering('year')}
      >Year</span>
      <span
        className={css(styles.orderingChoice, styles.rightChoice, colorStylePrice)}
        onClick={() => this.handleChangeOrdering('price')}
      >Price</span>
    </div>
  }
}

const styles = StyleSheet.create({
  ordering: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  orderingChoice: {
    padding: 5,
    fontSize: 'calc(10px + 0.2em)',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.secondary.light,
      color: colors.secondary.dark
    }
  },
  leftChoice: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 2
  },
  rightChoice:{
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 2
  },
  selected: {
    backgroundColor: colors.tertiary.light,
    color: colors.tertiary.dark
  },
  unselected: {
    backgroundColor: colors.primary.light,
    color: colors.primary.dark,
  }
});

const mapStateToProps = ({ search }) => ({
  ordering: search.ordering
});

export default connect(mapStateToProps)(OrderingSelector)
