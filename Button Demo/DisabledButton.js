import React from 'react';
import {Button, Alert} from 'react-native';

// It Return Normal Button on the React Native
// Buttons have title and onpress properties is mandatory.
// This Button is dissebled not pressable by User.

const DisabledButton = () => {
  return (
    <Button
      title="Disabled Button"
      disabled
      onPress={() => Alert.alert('Button Pressed')}
    />
  );
};

export default DisabledButton;
