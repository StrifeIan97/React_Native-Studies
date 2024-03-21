import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component} from 'react';

export default class Resultados extends Component {



  render(){
    const {dataToDisplay} = this.props;
    const { melhorOpcao, inputalcool, inputgasolina } = dataToDisplay;

  return (
        <View style={styles.container}>
            <View style={styles.areaLogo}>
        <Image source={require('../img/gas.png')} style={styles.imgStyle}></Image>
          <Text style={styles.textocompensa}>Compensa usar {melhorOpcao}</Text>
          </View>

          <View style={styles.areaResult}>
            <Text style={styles.resul1}>Com os preços </Text>
            <Text style={styles.resul2}>Álcool: R$ {inputalcool} </Text>
            <Text style={styles.resul2}>Gasolina: R$ {inputgasolina} </Text>
          </View>

            <View style={styles.areaButton}>
          <TouchableOpacity onPress={this.props.fechar} style={styles.buttonStyle}>
            <Text style={styles.textoBotao}>Calcular Novamente</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
}
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
        width: 500,
        height: 700,
    },

    textoModal:{
        color: '#fff'
    },

    buttonStyle:{
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#141414',
        borderColor: '#FF0000',
        borderWidth: 3

    },

    textoBotao:{
        color: '#ff0000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'

    },

    textocompensa:{
        color: '#90EE90',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20
    },

    imgStyle:{
        width: 150,
        height: 150
    },
    areaLogo:{
        marginTop: -50,
        alignItems: 'center'
    },
    areaButton:{
        marginTop: 60
    },

    areaResult:{
        marginTop: 20,
        alignItems: 'center',
        
    },
    
    resul1:{
        color: '#fff',
        fontSize: 25
    },

    resul2:{
        color: '#fff',
        fontSize: 20
    }
})