import React from 'react';
import {Button, Alert} from 'react-native';

// It Return Normal Button on the React Native
// Buttons have title and onpress properties is mandatory.
// This Button is colored by the Colored Property.

const ColoredButton = () => {
  return (
    <Button
      title="Colored Button"
      color={'#f194ff'}
      onPress={() => Alert.alert('Colored Button')}
    />
  );
};

export default ColoredButton;
