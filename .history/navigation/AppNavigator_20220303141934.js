import Constants from "expo-constants"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from "../screens/ArticleScreen";
// import ClipScreen from "../screens/ClipScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
         name="Home"
         component={HomeScreen} 
         options={{headerShown:false}} />
        <Stack.Screen 
         name="Article"
         component={ArticleScreen} 
        />
      </Stack.Navigator>
  )
}

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Clip" 
        // component={ClipScreen} 
      />
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        {/* <Tab.Screen name="Clip" component={ClipStack} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}