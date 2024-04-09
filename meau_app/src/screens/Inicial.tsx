
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import MenuButton from '../components/MenuButton';
import YellowB from '../components/YellowB';

import Constants from 'expo-constants';
import * as Font from 'expo-font';

import { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const PlaceLogoImage = require('../assets/images/Meau_marca_2.png');

type StackRoutesParametros = {
    Inicial: undefined;
    AvisoCadastro: undefined;
    Login: undefined;
    CadastroPessoal: undefined;
};

type InicialProps = {
    navigation: NativeStackNavigationProp<StackRoutesParametros, 'Inicial'>;
};



export default function Inicial({ navigation } : InicialProps) {

    const [fonteCarregada, setFonteCarregada] = useState(false);

    const handleMenuPress = () => {
        alert('Você pressionou o botão de menu.');
    };

    useEffect(() => {
        async function carregarFontes() {
            await Font.loadAsync({
                'Courgette-Regular': require('../assets/fonts/Courgette-Regular.ttf'),
            });
            setFonteCarregada(true);
        }

        carregarFontes();
        console.log('Rodou fonts inicial');
    }, []);

    console.log("fonteCarregada: inicial: " + fonteCarregada);

    return (

        <View style={styles.container}>

            <View style={styles.menuIcon}>
                <MenuButton onPress={handleMenuPress} />
            </View>

            {fonteCarregada ? (
                <Text style={ [styles.welcomeText, {fontFamily: 'Courgette-Regular'}]}>
                    Olá!
                </Text>
            ) : (
                <Text style={ [styles.welcomeText]}>
                    Olá!
                </Text>
            )}

            <View style={styles.middleView}>
                <Text style={styles.middleText}>Bem vindo ao Meau! {'\n'}
                Aqui você pode adotar, doar e ajudar
                cães e gatos com facilidade.  {'\n'}
                Qual o seu interesse?</Text>
            </View>

            <View style={styles.menuCenter}>
                <YellowB onPress={() => navigation.navigate("AvisoCadastro")} text="ADOTAR"/>
                <YellowB onPress={() => navigation.navigate("AvisoCadastro")} text="AJUDAR"/>
                <YellowB onPress={() => navigation.navigate("AvisoCadastro")} text="CADASTRAR ANIMAL"/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.login}>login</Text>
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image source={PlaceLogoImage} style={styles.image}/>
            </View>

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
    menuIcon: {
        marginLeft: 12, // Distância da esquerda
        marginTop: 12, // Distância do topo
        width: '100%',
    },
    welcomeText: {
        marginTop: 20,  // Distancia ate o topo da tela -> 56, 
                            // Total -> 56 - 12(marginTop icone) - 24(tamanho do icone) == 20
        marginBottom: 52,
        //fontFamily: 'Courgette-Regular',
        fontSize: 72,
        textAlign: 'center',
        color: '#ffd358'
    },
    middleView : {
        paddingHorizontal: 48,
        marginBottom: 48,
    },
    middleText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#757575',
        textAlign: 'center',
    },
    menuCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    login : {
        marginTop: 32, // 44 :: total -> 44 - 12(marginBottom YellowB)
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#88c9bf',
        marginBottom : 68,
    },
    imageContainer: {
        marginBottom: 32
    },
    image: {
        width: 122,
        height: 44,
        // borderRadius: 18,
    },
});