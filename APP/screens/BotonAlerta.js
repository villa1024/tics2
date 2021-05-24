import React, { useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//redux
import { connect } from 'react-redux';

class BotonAlerta extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      token:'123'
    };
    //para no perder contexto del componente
    this.handlefortuna = this.handlefortuna.bind(this);

  }
  //funcion que modifica el valor del alerta
  handlefortuna(valor){

        const {token} = this.state;
        this.setState({token:valor});
        console.log('handle:Token',valor,' esta en estado de emergencia')
      }
  render(){
    
    const fortunas=[];
    //aqui guardar el token desde el login con redux
    const {token}= this.state;
    
    //despliegues
    
    const buttonClickedHandler = () => {
        console.log('Boton:ALerta Activada!!! desde');
        //traigo el token de redux y se lo entrego a el boton
        this.handlefortuna(this.props.alarma.usuario);
        console.log(this.props.alarma);
        
    }
    return(
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton}>
          <Text style={styles.texto}>Alarma</Text>
        </TouchableOpacity>
        <Text style={styles.textoFortuna}>{token}</Text>
      </View>
    );
  }
}
/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto:{
    color:'white',
    fontSize:20
  },
  textoFortuna:{
    color:'black',
    fontSize:20
  },
  roundButton: {
    color:'red',
    marginTop: 20,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 300,
    backgroundColor:'red',
  },
});

//redux
const mapStateToProps = (state) => {
  const { alarma} = state
  return { alarma }
};

export default connect(mapStateToProps)(BotonAlerta);
