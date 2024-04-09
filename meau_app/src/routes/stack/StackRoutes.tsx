import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../../screens/Cadastro';
import HomeTeste from '../../screens/HomeTeste';
import Login from '../../screens/Login';
import Inicial from '../../screens/Inicial';
import AvisoCadastro from '../../screens/AvisoCadastro';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Inicial" component={Inicial} />

      <Stack.Screen name="AvisoCadastro" component={AvisoCadastro} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Cadastro" component={Cadastro} />

    </Stack.Navigator>
  );
}