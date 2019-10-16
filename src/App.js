import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <div className={css(styles.app)}>
      Welcome to MuzBrowz
    </div>
  );
}

const colors = {
  primary: {
    dark: '#0E3A5C',
    medium: '#346388',
    light: '#7FA4C0'
  },
  secondary: {
    dark: '#780A3E',
    medium: '#B03B72',
    light: '#E290B7'
  },
  tertiary: {
    dark: '#8F8B0D',
    medium: '#D3CE47',
    light: '#FFFCA3'
  }
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.primary.dark,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
})

export default App;
