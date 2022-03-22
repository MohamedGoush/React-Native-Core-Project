import React from 'react';
import {Image} from 'react-native';


/**
 * 
 * Gif Images is not directly view on React Native Appllications.
 * It Only Views Images without animation to display on react app
 * 
 * ********************************
 * GIF and WebP support on Android
 * ********************************
 * 
 * When building your own native code, GIF and WebP are not supported by default on Android. 
 * You will need to add some optional modules in android/app/build.gradle, depending on the needs of your app.
 * 
 *  If your app supports Android versions before Ice Cream Sandwich (API level 14)
 *  implementation 'com.facebook.fresco:animated-base-support:1.3.0' 
 * 
 * // For animated GIF support
 * implementation 'com.facebook.fresco:animated-gif:2.5.0'
 * implementation 'com.facebook.fresco:animated-base-support:1.3.0'
 *  
 * 
 */
const GifDemo = () => {
  return (
    <Image
      style={{width: 300, height: 300}} // width and height is mandatory you didn't give that it gives an error
      source={{uri:'http://img0.joyreactor.com/pics/comment/gif-heart-polygon-1093860.gif'}}
    />
  );
};

export default GifDemo;
