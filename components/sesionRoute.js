
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';


  const sesionRoute = () =>  {
    return (
      <View>
        <SafeAreaView style={styles.container}>
            <Text> {'\n'}</Text>
            <Text> {'\n'}</Text>
            <Text style={{fontSize: 40, color: '#2081d8'}}>Inicio de sesion</Text>
            <Text> {'\n'}</Text>
            <Text> {'\n'}</Text>
            <Text style={{fontSize: 20}}>Usuario</Text>
            <TextInput
              style={{ height: 110, width: 200, borderColor: '#a5ebcf', borderWidth: 1, backgroundColor: '#f8efc8' }}
            />
            <Text> {'\n'}</Text>
            <Text style={{fontSize: 20}}>Contraseña</Text>
            <TextInput
              style={{ height: 110, width: 200, borderColor: '#a5ebcf', borderWidth: 1, backgroundColor: '#f8efc8' }}
            />
        </SafeAreaView>
        <View style={styles.container}>
          <Button
            style={styles.button}
            title="Iniciar sesion"
            paddingBottom="20"
          ></Button>
        </View>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 100,
    },
    button: { margin: 5, backgroundColor: "#a5ebcf", borderRadius: 5, color: "#103f4d"},
    text: { fontWeight: "bold", textAlign: "center", color: "brown" },
    paddingTop: 0,

  
  });

export default  sesionRoute;
