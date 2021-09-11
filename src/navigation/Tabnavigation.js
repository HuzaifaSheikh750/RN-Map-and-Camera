import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Maps from '../container/Maps'
import Camera from '../container/Camera'
// import Start from '../container/Start';
// import Stacknavigation from './Stacknavigation'


const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Start" component={Start} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Map" component={Maps} />
      <Tab.Screen name="Camera" component={Camera} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default MyTabs;