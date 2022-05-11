//React Native Switch
//https://aboutreact.com/react-native-switch/

//import React in our code
import React, { useState } from 'react';

//import all the components we are going to use
import { Switch, View, Text, SafeAreaView, StyleSheet, Button, Alert , TouchableOpacity} from 'react-native';
import CustomSwitch from './CustomSwitch';

export default function room1({navigation}) {
  const onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.paragraph}>
          Scan Device
        
        </Text>
      </TouchableOpacity>
        
      </View >

      <View style={styles.box1}>
        <Text style={styles.text1}>
          Device Name: #################
        </Text>
      </View>

      <View style={styles.light}>
        <Text style={styles.text1}>
          Auto Mode 
        </Text>

        <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'On'}
          option2={'Off'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#03fc56'}
        />
      </View>
      </View>

      <View style={styles.light}>
        <Text style={styles.text1}>
          Light 
        </Text>
        <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'On'}
          option2={'Off'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#03fc56'}
        />
      </View>
      </View>

      <View style={styles.light}>
        <Text style={styles.text1}>
          Color Light 
        </Text>
        
      </View>

      

      </View>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    
  },
  header:{
    marginTop: 20, 
    flex : 0.1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 90, 
  },
  box1:{

    marginTop: 20, 
    flex : 0.11,
    backgroundColor: 'pink',
    justifyContent: 'center', 
  },
  light:{
     
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    marginTop: 20, 
    flex : 0.11,
    backgroundColor: 'pink',
    alignItems: 'center', 
  },
  paragraph: {
    
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    
  }, 
  text1: {
    
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginLeft: 20,
  }, 
});
