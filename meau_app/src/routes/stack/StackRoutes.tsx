import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../../screens/Cadastro';
import HomeTeste from '../../screens/HomeTeste';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Home" component={HomeTeste} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Cadastro" component={Cadastro} />

    </Stack.Navigator>
  );
}