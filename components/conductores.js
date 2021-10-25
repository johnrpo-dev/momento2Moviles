
import * as React from 'react';
import { SafeAreaView, StyleSheet,View, Image } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const vehiculosRuta = () => {
  return(
    <View style={styles.container} >
          <Text style={{fontSize: 40, color: '#2081d8'}}>Vehiculos</Text>
        <SafeAreaView>
            <Text>{'\n'}</Text>
            <View style={ {flexDirection: 'row', flexWrap: 'wrap'} } >
                <View>
                    <Image
                    source={require('../img/driver1.jpg')}
                    style= { {width: 120, height: 120, borderRadius: 10, borderColor: 'blue', borderWidth: 1, resizeMode: 'stretch', margin: 20} }
                    />
                    <Text>      Andrés Perez</Text>
                    <Text>      ⭐⭐⭐⭐</Text>
                </View>
                <View>
                    <Image
                    source={require('../img/driver2.jpg')}
                    style= { {width: 120, height: 120, borderRadius: 10, borderColor: 'blue', borderWidth: 1, resizeMode: 'stretch', margin: 20} }
                    />
                    <Text>      Carlos Lopez</Text>
                    <Text>      ⭐⭐⭐⭐</Text>

                </View>
            </View>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <View style={ {flexDirection: 'row', flexWrap: 'wrap'} } >
                <View>
                  <Image
                  source={require('../img/driver3.jpg')}
                  style= { {width: 120, height: 120, borderRadius: 10, borderColor: 'blue', borderWidth: 1, resizeMode: 'stretch', margin: 20} }
                  />
                  <Text>      Arturo Villa</Text>
                  <Text>      ⭐⭐⭐⭐</Text>
                </View>
                <View>
                  <Image
                  source={require('../img/driver4.jpg')}
                  style= { {width: 120, height: 120, borderRadius: 10, borderColor: 'blue', borderWidth: 1, resizeMode: 'stretch', margin: 20} }
                  />
                  <Text>      Maria Antonieta</Text>
                  <Text>      ⭐⭐⭐⭐</Text>
                </View>
            </View>
            
        </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default vehiculosRuta;