import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

/* Generally, we create state variables in the most
   parent component that needs to either read or
   change a state value.
   In this case we are going to initialize the state
   values inside the "SquareScreen" and because 
   "ColorCounter" needs to change those values, we 
   are going to pass down a callback function ("onIncrease"
   or "onDecrease"), from "SquareScreen" down to 
   "ColorCounter" that will allow them to modify those state values.
                  ~~~~~~~~~~
   Passing the callbacks, what really means is passing 
   the expression ----->  setRed(red + 1). 
   Or else passing down to "ColorCounter", the ability 
   to call the "setRed" function in order to change the state value.
*/
/*              Most basic example:

    #----------- On "SquareScreen" --------------#
      <ColorCounter 
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red" 
      />
    #---------- on "ColorCounter" ---------------#
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
*/

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15

    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    } else if (color === 'green') {
      if (green + change > 255 || green + change < 0) {
        return;
      } else {
        setGreen(green + change);
      }
    } else if (color === 'blue') {
      if (blue + change > 255 || blue + change < 0) {
        return;
      } else {
        setBlue(blue + change);
      }
    }
  };

  return (
    <View>
      <ColorCounter 
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red" 
      />
      <ColorCounter 
        onIncrease={() => setColor('blue', + COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue" 
      />
      <ColorCounter 
        onIncrease={() => setColor('green', + COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green" 
      />
      <View 
        style={{ 
          height: 150, 
          width: 150, 
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;