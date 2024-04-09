import { Pressable, StyleSheet, Text, View } from "react-native";



interface YellowBProps {
    text: string
    onPress: () => void
}

export default function YellowB( { text, onPress } : YellowBProps ){
    return(
        <View style={styles.rectangle}> 
            <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View> 
    );
}

const styles = StyleSheet.create({
    rectangle: {
        marginBottom: 12,
        width: 232,
        height: 40,
        borderWidth: 2,
        borderColor: '#ffd358',
        borderRadius: 5,
        marginHorizontal: 12, // 12dp de distância horizontal entre os botões

        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.8,
        elevation: 10,
        shadowOffset: { width: 0, height: 2}
    },

    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#434343',
    },

    button: {
        flex: 1,
        backgroundColor: '#ffd358',
        alignItems: 'center',
        justifyContent: 'center',
    },
});