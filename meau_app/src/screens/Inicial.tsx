import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuButton from '../../componets/button';
import YellowB from '../../componets/button';

const PlaceLogoImage = require('../../assets/Meau_marca_2.png')

function App() {
  const handleMenuPress = () => {
    alert('Você pressionou o botão de menu.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <MenuButton onPress={handleMenuPress} />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>olá</Text>
      </View>
      <View style={styles.middleView}>
        <Text style={styles.middleText}>Bem vindo ao Meau!
        Aqui você pode adotar, doar e ajudar
        cães e gatos com facilidade.
        Qual o seu interesse?</Text>
    </View>
      <View style={styles.menuCenter}>
        <YellowB onPress={handleMenuPress} text={"Adotar"}/>
        <YellowB onPress={handleMenuPress} text={"Ajudar"}/>
        <YellowB onPress={handleMenuPress} text={"Cadastrar Animal"}/>
      </View>
        <Text style={styles.login}>login</Text>
        <View style={styles.imageContainer}>
          <Image source={PlaceLogoImage} style={styles.image}/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12, // Distância da esquerda
    marginTop: 12, // Distância do topo
  },
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  menuCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 56, // 56dp de distância da parte superior da tela
    paddingHorizontal: 26, // Espaçamento horizontal para garantir que o texto caiba
  },
  welcomeText: {
    fontSize: 72,
    textAlign: 'center',
    marginBottom: 52, // 52dp de distância do texto até o fim da view
  },
  middleText: {
    fontSize: 16,
    textAlign: 'center',
  },
  middleView : {
    paddingHorizontal: 48,
    marginTop: 'auto', // Isso alinha a view na parte inferior da tela
    marginBottom: 48,
  },
  login : {
    marginTop: 44,
    textAlign: 'center',
    fontSize: 16,
    marginBottom : 68,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default App;
