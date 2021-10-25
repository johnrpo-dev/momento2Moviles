import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const rutaDestino = () => {
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: '#2081d8'}}>Rutas Vehiculos</Text>
      <Text> {'\n'}</Text>
      <Text> {'\n'}</Text>
      <View>
        <Text style={{fontSize: 22}}>Recorrido 1</Text>
        <Text style={{fontSize: 15}}>Bello => universidad =>Parque Berrio</Text>
      </View>
      <Text> {'\n'}</Text>
      <Text> {'\n'}</Text>
      <View>
        <Text style={{fontSize: 22}}>Recorrido 2</Text>
        <Text style={{fontSize: 15}}>San Javier => Estadio => San Antonio</Text>
      </View>
      <Text> {'\n'}</Text>
      <Text> {'\n'}</Text>
      <View>
        <Text style={{fontSize: 22}}>Recorrido 3</Text>
        <Text style={{fontSize: 15}}>San Antonio => Poblado => Sabaneta</Text>
      </View>
      <Text> {'\n'}</Text>
      <Text> {'\n'}</Text>
      <View>
        <Text style={{fontSize: 22}}>Recorrido 4</Text>
        <Text style={{fontSize: 15}}>San Antonio => Itagüi => S.A de Prado</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default rutaDestino;