import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet,Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function home({navigation}) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.paragraph}>
        
        
        </Text>
      </View>

      <View style={styles.center}>
        <View style={styles.floor1}>
          <View style={styles.room1}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Room')}>
              <Text style={styles.paragraph}>😉</Text>
              <Text style={styles.paragraph}>Room 1</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.room2}>
            <TouchableOpacity
              style={styles.button}
              >
              <Text style={styles.paragraph}> 😊 </Text>
              <Text style={styles.paragraph}>Room 2</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.floor2}>
          <View style={styles.room}>
            <TouchableOpacity
              style={styles.button}
              >
              <Text style={styles.paragraph}>😁</Text>
              <Text style={styles.paragraph}>Room 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.room}>
            <TouchableOpacity
              style={styles.button}
              >
              <Text style={styles.paragraph}> 😇 </Text>
              <Text style={styles.paragraph}>Room 4</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.floor3}>
           
           <View style={styles.add_room}>
            <TouchableOpacity
              style={styles.button}
              >
              <Text style={styles.paragraph}>➕</Text>
              <Text style={styles.paragraph}>Add New Room</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.paragraph}>
        
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ecf0f1',
    backgroundColor: 'pink',
  },
  header:{
    flex : 0.05,
    backgroundColor: 'pink',
    justifyContent: 'center',
    
  },
  center:{
    flexDirection : "column",
    flex : 0.8,
    backgroundColor: 'pink',
    
    
  },

  floor1:{
    flexDirection : "row",
    flex : 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    
  },
  floor2:{
    flexDirection : "row",
    flex : 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    
  },
  floor3:{
    flexDirection : "row",
    flex : 1,
    backgroundColor: 'pink',
    justifyContent: 'flex-start',
    
  },
  room:{
    
    flex : 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
  room1:{
    
    flex : 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    backgroundColor: '#cffc03'
  },
  room2:{
    
    flex : 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    backgroundColor: '#cffc03'
  },
  add_room: {
    
    flex : 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    marginRight:28,
    
  },
  bottom:{
    flex : 0.1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    
  },
  paragraph: {
    
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }, 
  button: {
    flex : 1,
    alignItems: "center",
    backgroundColor: "#adfc03",
    borderRadius: 20,
    borderColor: '#adfc03',
    justifyContent: 'center',
    
  },
});

