import React from 'react'
import { View, Text } from 'react-native'
import Maps from './src/container/Maps'
import Tabnavigation from './src/navigation/Tabnavigation'
// import { NavigationContainer } from '@react-navigation/native';
// import Stacknavigation from './src/navigation/Stacknavigation'

const App = () => {
  return (
    <View>
      <Tabnavigation />
    </View>
  )
}

export default App
