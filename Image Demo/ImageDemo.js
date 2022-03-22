import React from 'react';
import {Image} from 'react-native';


// It Return Normal Image on the Website
// But Gif and webp animated files not viewed this method 
// Please Check the GifDemo.js or WebpDemo.js file for more information.

const ImageDemo = () => {
  return (
    <Image
      style={{width: 100, height: 100}} // width and height is mandatory you didn't give that it gives an error
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
  );
};

export default ImageDemo;
