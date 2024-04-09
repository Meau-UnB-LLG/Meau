
import { View, Text, StyleSheet, Button } from "react-native";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BotaoUsual from "../components/BotaoUsual";

type StackRoutesParametros = {
    Home: undefined;
    Login: undefined;
    Cadastro: undefined;
  };

type Props = {
    navigation: NativeStackNavigationProp<StackRoutesParametros, 'Home'>;
};

export default function HomeTeste({ navigation } : Props) {

    return(
        <View style={styles.container}>
            <Text>Teste home</Text>

            <BotaoUsual
                texto='LOGIN'
                marginTop={52}
                irParaPagina={() => navigation.navigate("Login")}
            />
            
            <BotaoUsual
                texto='CADASTRO'
                marginTop={20}
                irParaPagina={() => navigation.navigate("Cadastro")}
            />

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});