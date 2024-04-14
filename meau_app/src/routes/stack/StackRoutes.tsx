import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/Login';
import Inicial from '../../screens/Inicial';
import AvisoCadastro from '../../screens/AvisoCadastro';
import CadastroPessoal from '../../screens/CadastroPessoal';
import CadastroAnimal from '../../screens/CadastroAnimal';
import PreencherCadastroAnimal from '../../screens/PreencherCadastroAnimal';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Inicial" component={Inicial} />

      <Stack.Screen name="AvisoCadastro" component={AvisoCadastro} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="CadastroPessoal" component={CadastroPessoal} />

      <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} />

      <Stack.Screen name="PreencherCadastroAnimal" component={PreencherCadastroAnimal} />

    </Stack.Navigator>
  );
}