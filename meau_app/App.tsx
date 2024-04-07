import {View, Text, StyleSheet, TextInput} from 'react-native'

export default function App(){
  return(
    <View style = {styles.container}>
        <View style = {styles.viewTitle}>
          <Text style={styles.title}>Cadastro Pessoal</Text>
        </View>

        <View style = {styles.messageView}> 
          <Text style = {styles.message}> As informações preenchidas serão divulgadas apenas para 
            a pessoa com a qual você realizar o processo de adoção e/ou apadrinhamento, 
            após a formalização do processo.
          </Text>
        </View>

        <Text style = {styles.info}> Informações Pessoais</Text>

        <View style = {styles.information}>
          
          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Nome </TextInput>
          </View>
          
          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Idade </TextInput>
          </View>

          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> e-mail </TextInput>
          </View>

          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Estado </TextInput>
          </View>

          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Cidade </TextInput>
          </View>

          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Logradouro </TextInput>
          </View>

          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Telefone </TextInput>
          </View>

          <View style = {styles.containerName}>
            <TextInput style = {styles.textName}> Telefone </TextInput>
          </View>
        </View>

        <Text style = {styles.info}> Informações de Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#f9f9f9',
    },
    viewTitle: { 
      marginTop:30,
      backgroundColor: '#cfe8e5',
      width: "100%",
      height: 57
    },
    title:{
      marginLeft: 70,
      marginTop: 16
    },
    messageView:{
      height: 81,
      width:329,
      backgroundColor: '#cfe8e5',
      marginTop: 15,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    },
    message:{
      marginLeft: 35,
      marginRight: 33, 
      fontSize: 10,
      textAlign: 'center',
  
    },
    info: {
      marginTop: 24,
      marginLeft: 24,
      color: '#589b9b',
      fontWeight: 'bold',
    },
    information: {
      width: 332,
      height: 480,
      backgroundColor: '#f9f9f9'
    },
    containerName:{
      width: "90%",
      height: 36,
      backgroundColor: "#f9f9f9",
      marginLeft: 27,
      marginTop: 25,
      borderWidth: 1,
      borderColor: "#cfe8e5", 
      borderRadius: 8, 
      justifyContent: 'flex-start',
    
    },
    textName: {
      opacity: 0.5,
      marginLeft: 8,
      marginTop: 4
    }
})