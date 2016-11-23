// @flow

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { connect } from 'react-redux';

import Columns from '../components/Columns';
import Screen from '../components/Screen';
import { loadTheme } from '../reducers/config';
import type { State, ThemeObject } from '../utils/types';

type Props = {
  theme: ThemeObject,
};

const Page = ({ theme}: Props) => (
  <ThemeProvider theme={theme}>
    <Screen>
      <StatusBar
        backgroundColor={theme.base01}
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
      />

      <Columns />
    </Screen>
  </ThemeProvider>
);

const mapStateToProps = ({ config }: State) => ({ config, theme: loadTheme(config) });

export default connect(mapStateToProps)(Page);