import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

// It Return Dynamic Button on the React Native
// Buttons have title and onpress properties is mandatory.
// This Button is Used to change the Value Dynamically by User.

const DynamicButton = () => {
    const [name, setName] = useState("Bismillah");
    const [person, setPerson] = useState({name : "mohamed", age : 27});
    const clickhandler = () => {
        setName("Alhamthulillah");
    };
  return (
    <View>
      <Text style={{padding:20,fontWeight:'bold',fontSize:20}}>{name}</Text>
      <Text style={{padding:20,fontWeight:'bold',fontSize:20}}>I'm {person.name} and I'm {person.age}</Text>
      <Button
        title="Change The Text"
        onPress={clickhandler}
      />
    </View>
  );
};

export default DynamicButton;
