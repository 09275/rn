import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

/* To add custom details to each "ImageDetail" component,
   I need to pass a "props" Object from the parent "ImageScreen"
   down to its children.
   In contrast to the primitive components like "View" or 
   "TouchableOpacity", "ImageDetail" is a custom component,
   so I can name the props I want to pass whatever I like. 
   In this case I chose to name the Image text "title".
*/
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg')} 
        score={9}
      />
      <ImageDetail 
        title="Beach" 
        imageSource={require('../../assets/beach.jpg')} 
        score={7}
      />
      <ImageDetail 
        title="Mountain" 
        imageSource={require('../../assets/mountain.jpg')} 
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;