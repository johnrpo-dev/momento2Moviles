
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { BottomNavigation, Text, TextInput } from "react-native-paper";
import rutaDestino from './components/rutaDestino'
import sesionRoute from './components/sesionRoute'
import vehiculosRuta from './components/conductores'

export default function App() {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "sesion", title: "Iniciar Sesión", icon: "login" },
    { key: "rutas", title: "Rutas", icon: "shuffle" },
    { key: "vehiculos", title: "Vehiculos", icon: "car" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    sesion: sesionRoute,
    rutas: rutaDestino,
    vehiculos: vehiculosRuta
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }} 
      onIndexChange={setIndex} //Este cambia el valor de las opciones que tenemos
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
});



// https://oblador.github.io/react-native-vector-icons/

