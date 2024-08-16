
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../../src/components/LoginPage';
import AdminHomePage from '../../src/components/AdminHomePage';
import UserDetailsPage from '../../src/components/UserDetailsPage';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="AdminHomePage" component={AdminHomePage} />
      {/* <Stack.Screen name="UserDetailsPage" component={UserDetailsPage} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
