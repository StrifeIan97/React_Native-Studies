import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, TextInput, Alert } from 'react-native';
import Resultados from './src/Resultados';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      inputgasolina: '',
      inputalcool: '',
      melhorOpcao: '',
    };
    this.abrirModal = this.abrirModal.bind(this);
    this.sair = this.sair.bind(this);
    this.verificaCampos = this.verificaCampos.bind(this);
    this.calculoCombustivel = this.calculoCombustivel.bind(this);
  }

  calculoCombustivel(){
    const alcool = parseFloat(this.state.inputalcool);
    const gasolina = parseFloat(this.state.inputgasolina);

    if(alcool / gasolina < 0.7){
        this.setState({
           melhorOpcao: 'Álcool'
        });
    }else{
      this.setState({
        melhorOpcao: 'Gasolina'
      })
    }
  }

  verificaCampos(){
    if(this.state.inputalcool === '' || this.state.inputgasolina === ''){
      Alert.alert("O App diz:", "Os campos não podem ficar Vazios")
    }else{
      this.abrirModal();
      this.calculoCombustivel();
    }
  }

  abrirModal(){
    this.setState({
      modalVisible: true
    });
  }

  sair(){
    this.setState({
      modalVisible: false
    });
  }

  render() {
    const {melhorOpcao,inputalcool,inputgasolina } = this.state;

    return (
      <View style={styles.container}>
        <Image source={require('./img/logo.png')} style={styles.logostyle}></Image>
        <Text style={styles.textochamada}>Qual é a Melhor Opção?</Text>

        <View style={styles.areaInput}>
          <Text style={styles.labelinput}>Álcool - Preço por Litro</Text>
          <TextInput style={styles.inputStyle} placeholder='R$'
            onChangeText={(novovaloralcool)=> this.setState({inputalcool: novovaloralcool})}
          ></TextInput>


          <Text style={styles.labelinput}>Gasolina - Preço por Litro</Text>
          <TextInput style={styles.inputStyle} placeholder='R$' 
            onChangeText={(novovalorgas) => this.setState({inputgasolina: novovalorgas})}
          ></TextInput>
        </View>


        <View>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.textobotao} onPress={this.verificaCampos}>Calcular</Text>
          </TouchableOpacity>

          <Modal animationType='slide' visible={this.state.modalVisible}>
          <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Resultados fechar={() => this.sair(false)} dataToDisplay={{melhorOpcao,inputalcool,inputgasolina}}></Resultados>      
        </View>
          </Modal>

        </View>
      </View>
    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cortexto: {
    color: '#fff'
  },
  inputStyle: {
    width: 300,
    height: 50,
    borderColor: '#fff',
    borderWidth: 3,
    backgroundColor: '#fff',
    fontSize: 25
  },
  logostyle: {
    width: 150,
    height: 150,
    marginTop: -50
  },

  areaInput:{
    marginTop: 40,
   
  },
  textochamada:{
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold'
  },

  labelinput:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  styleButton:{
    width: 300,
    height: 50,
    backgroundColor: '#ff0000',
    marginTop: 40,
    color: '#fff',
    borderRadius: 5

  },
  textobotao:{
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});

export default App;
