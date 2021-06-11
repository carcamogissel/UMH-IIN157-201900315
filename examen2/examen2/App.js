import React, {useState} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,TextInput,TextInput2, View, Alert, Button,
} from 'react-native';

export default function App(){
const [entrada, setEntrada] =useState("");
const [entrada2, setEntrada2] =useState("");
const [conversion, setConversion] =useState("");

const showAlert = () =>
Alert.alert(
  "Conersion exitosa",
  "Resultado: "+conversion);


const convertir =(valor) =>{
  const resultado= valor;
  setEntrada(valor); 
  setConversion(resultado); 
}
const convertir2 =(valor2) =>{
  const resultado2= valor2;
  setEntrada2(valor2);
  setConversion(resultado2);
}
const convertir12 =(valor,valor2) =>{
  const resultado12= valor*valor2;
  setEntrada(valor);
  setEntrada2(valor2);
  setConversion(resultado12);

}

const convertir123 =(valor,valor2) =>{
  const resultado4= valor*valor2;
  setConversion(resultado4);

}

const inicializar =()=>{
setConversion(0); 
setEntrada(0);    
  
}

  return(
<>
    <SafeAreaView style={miEstilos.encabezado}>
      <Text></Text>
      <View>
        
        <Text style={miEstilos.sectionTitle}>Convertidor De Divisa </Text>
    
     </View>
       </SafeAreaView>
       <View>
       <Text style={miEstilos.sectionDescription}>  </Text>
       <TextInput
            style={miEstilos.imput}
            placeholder="Ingresar valor a convertir"
            keyboardType="numeric"
            onChange={(e)=> convertir(e.nativeEvent.text)}
         
            />
         <Text style={miEstilos.sectionDescription}>  </Text>   
         
         <TextInput
         style={miEstilos.imput}
         placeholder="Ingrese tasa de cambio"
         keyboardType="numeric"
         onChange={(e)=> convertir2(e.nativeEvent.text)}
         
         />

         <Button 
         Style={miEstilos.Boton}
         title="Convertir"
         color='CD5C5C'
         onPress={convertir123}
        

         ></Button> 
        
         <Text style={miEstilos.sectionDescription}>El resultado es: {entrada2*entrada}</Text>
         
        </View>
        
       </>
    )    
  }
  
const miEstilos = StyleSheet.create({
  encabezado:{
    
    backgroundColor: '#AF7AC5',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    padding: 25
    
  },

  Boton:{
  height: 40,
  margin: 12,
 


  },

imput:{
  height: 40,
  margin: 12,
  borderWidth: 1

} ,
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
 
});