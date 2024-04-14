import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotaoProps {
    texto: string
    marginTop: number
    irParaPagina?: () => void
}

export default function BotaoUsual( {texto, marginTop, irParaPagina, alignSelf} : BotaoProps ) {

    const fecharTeclado = () => {

        if(irParaPagina != undefined) {
            irParaPagina();
        }
        
        Keyboard.dismiss();
    };

    return (
        <>
            <TouchableOpacity
                style={[styles.botao, {marginTop: marginTop}]}
                onPress={fecharTeclado}
            >
                    <Text style={styles.botao_texto}> {texto} </Text>
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
        shadowOpacity: 0.8,
        elevation: 10,
        shadowOffset: { width: 0, height: 2}

    },

    botao_texto: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#434343',
    }

});