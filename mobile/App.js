import React from 'react';
import { Text, View } from 'react-native';
import Routes from './src/routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection'
])

export default function App() {
  return <Routes />

}

