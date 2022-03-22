import React from 'react';
import {Button, Alert} from 'react-native';

// It Return Normal Button on the React Native
// Buttons have title and onpress properties is mandatory.
// This Button is display Alert Box with title on "Button Pressed"

const SimpleButton = () => {
  return (
    <Button title="Click Me" onPress={() => Alert.alert('Button Pressed')} />
  );
};

export default SimpleButton;
