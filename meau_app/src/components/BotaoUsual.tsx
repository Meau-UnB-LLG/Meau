import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotaoProps {
    texto: string;
    marginTop: number;
    irParaPagina?: () => void;
    cor?: string;
    largura?: number;
    altura?: number;
    marginDown?: number;
    raio?: number;
    corTexto?: string;
}

export default function BotaoUsual( {texto, marginTop, irParaPagina, cor, largura, altura, marginDown, raio, corTexto} : BotaoProps ) {

    const fecharTeclado = () => {

        if(irParaPagina != undefined) {
            irParaPagina();
        }
        
        Keyboard.dismiss();
    };

    return (
        <>
            <TouchableOpacity
                style={[styles.botao, {borderRadius: raio, marginBottom: marginDown, marginTop: marginTop, backgroundColor: cor, width: largura, height: altura}]}
                onPress={fecharTeclado}
            >
                    <Text style={[styles.botao_texto, {color: corTexto}]}> {texto} </Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({

    botao: {
        width: 232,
        height: 40,
        backgroundColor: '#88c9bf',
        justifyContent: 'center',
        alignItems: 'center',
        
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 10,
        shadowOffset: { width: 0, height: 2},
        margin: 2

    },

    botao_texto: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#434343',
    }

});