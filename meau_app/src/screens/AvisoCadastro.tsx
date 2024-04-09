import { StyleSheet, Text, View } from "react-native";

import Constants from 'expo-constants';
import { TopBar } from "../components/TopBar";

import { fonteCarregada  } from "../utils/FontsLoad";
import BotaoUsual from "../components/BotaoUsual";

export default function AvisoCadastro() {

    console.log(fonteCarregada);

    return(
        <View style={styles.container}>

            <TopBar
                nome = 'Cadastro'
                icone = 'voltar'
            />

            {fonteCarregada ? (
                <Text style={ [styles.welcomeText, {fontFamily: 'Courgette-Regular'}]}>
                    Ops!
                </Text>
            ) : (
                <Text style={ [styles.welcomeText]}>
                    Ops!
                </Text>
            )}

            <View style={styles.middleView}>
                <Text style={styles.middleText}>
                    Você não pode realizar esta ação sem {'\n'}
                    possuir um cadastro.
                </Text>
            </View>

            <BotaoUsual texto='FAZER CADASTRO' marginTop={52}/>

            <View style={[styles.middleView, {marginTop: 44}]}>
                <Text style={styles.middleText}>
                    Já possui cadastro?
                </Text>
            </View>

            <BotaoUsual texto='FAZER LOGIN' marginTop={16}/>

        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fafafa',
        alignItems: 'center',
    },
    welcomeText: {
        marginTop: 52,
        fontSize: 53,
        textAlign: 'center',
        color: '#88c9bf'
    },
    middleView : {
        paddingHorizontal: 48,
        marginTop: 52,
    },
    middleText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#757575',
        textAlign: 'center',
    },
});