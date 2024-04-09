import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

function MenuButton({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="menu" size={24} color="#88c9bf" />
    </Pressable>
  );
};

function YellowB({text, onPress}){
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
        width: 232,
        height: 40,
        borderWidth: 2,
        borderColor: '#ffd358',
        borderRadius: 5,
        marginHorizontal: 12, // 12dp de distância horizontal entre os botões
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        flex: 1,
        backgroundColor: 'yellow',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MenuButton;
export default YellowB;
