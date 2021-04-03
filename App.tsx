import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import {ligthTheme} from './src/styles/themes.style'
import Routes from './src/routes'

export default function App() {
  return (
    <>
      <ThemeProvider
        theme={ligthTheme}
      >
        <NavigationContainer>
          <StatusBar
            hidden={true}
          />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}