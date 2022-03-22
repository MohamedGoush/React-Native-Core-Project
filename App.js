import {Text, View} from 'react-native';
import React from 'react';
import ImageDemo from './Source/ImageDemo';
import GifDemo from './Source/GifDemo';
import SimpleButton from './Source/SimpleButton';
import DisabledButton from './Source/DisabledButton';
import ColoredButton from './Source/ColoredButton';

const App = () => {
  return (
    <View>
      <Text>Alhamthulillah</Text>
      <ImageDemo />
      <GifDemo />
      <SimpleButton />
      <DisabledButton />
      <ColoredButton />
    </View>
  );
};

export default App;
