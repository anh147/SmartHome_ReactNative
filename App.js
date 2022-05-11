import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet,Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import room1 from './screens/room1';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="🏠 My Home" children={home} 
        options={{
          title: '🏠 My home',
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: '#fff',
          animationTypeForReplace: 'pop',
          justifyContent:'center', 
          alignItems: 'center',
        }}/>
        <Stack.Screen name="Room" children={room1} 
        options={{
          title: 'Room',
          animationEnabled: 'true',
          animationTypeForReplace: 'pop',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    
  },
  header:{
    flex : 0.1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    
  },
  center:{
    flexDirection : "column",
    flex : 0.8,
    backgroundColor: 'orange',
    
    
  },

  floor1:{
    flexDirection : "row",
    flex : 1,
    backgroundColor: '#f56642',
    justifyContent: 'center',
    
  },
  floor2:{
    flexDirection : "row",
    flex : 1,
    backgroundColor: '#f5c542',
    justifyContent: 'center',
    
  },
  floor3:{
    flexDirection : "row",
    flex : 1,
    backgroundColor: '#f56642',
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
  addroom: {
    
    flex : 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    
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
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    borderColor: 'black',
    justifyContent: 'center',
    
  },
});

