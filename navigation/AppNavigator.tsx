import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/index';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
