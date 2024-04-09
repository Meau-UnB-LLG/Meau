import { View, Text, StyleSheet, useWindowDimensions } from "react-native"

import { Entypo, Ionicons } from '@expo/vector-icons'


interface TopBarProps {
    nome: string,
    icone: string
}

export function TopBar( {nome, icone} : TopBarProps) {

    const { width } = useWindowDimensions();

    interface iconesMap {
        [key: string]: React.ReactNode;
      }
    
    const iconesMap: iconesMap = {
        menu: <Entypo name="menu" size={24} color="#434343" style={styles.icones}/>,
        voltar: <Ionicons name="arrow-back" size={24} color="#434343" style={styles.icones}/>
    };

    if (!iconesMap.hasOwnProperty(icone)) {
        throw new Error(`O ícone/componente "${icone}" não existe`);
    }
    
    return (

        <View style = { [styles.barra, {width: width }] }>

            { iconesMap[icone] }

            <Text style={styles.texto} > {nome} </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    barra: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        backgroundColor: '#cfe9e5',
    },
    icones: {
        marginTop: 16,
        marginLeft: 16,
        marginBottom: 16,
    },
    texto: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#434343',
        marginLeft: 30
    }
});