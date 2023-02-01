import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/* You have props which are passed into primitive components
   like View, Text, Button etc. 
   But you can also pass props into your custom made components
   like HomeScreen and ListScreen. 
   REMEMBER: props are just properties that allow you to 
             configure some components, custom or primitive.
*/
/* If I pass the "props" argument when I create the component, I 
   will get an Object with many properties inside it that I can use. 
   One of them is the "navigation" property which points to 
   another object with properties, one of which is named "navigate". 
   The "navigation" property is added in specifically by the 
   "createStackNavigator" we have made use of. So a normal React Native
   component is not going to magically have access to the "navigation"
   Object. It is specifically given to me because this component is 
   been shown by the "createStackNavigator".
   Because I do not want to use all of them I can choose just 
   the one I need, (in this case navigation) and use destructuring
   instead of writting props.navigation.navigate
*/
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
