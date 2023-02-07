import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

/* Anytime I work in an application when I've got multiple 
   state values that 
   1) they are very closed related and 
   2) there is a precise set of well-known ways in which we
      update these values
   this makes our state a good candidate for being managed
   by a "reducer".
*/

/* A "reducer" is simply a function that manages changes to an
   object. It gets called with 2 objects as arguments.
   - Argument #1: An object that has all of our initial state in it
                  for example {red: 0, green: 0, blue: 0}
   - Argument #2: An object that describes the update we want to make
                  for example {colorToChange: 'red', amount: 15}

   Two Important Technicalities: 
   1) We never change Argument #1 directly. (Just as in the "useState" case)
   2) The "reducer" function must always return a value to be used as Argument #1
*/

// "action" is just an object that tells me how I need to change the state object
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const ReducerSquareScreen = () => {
  // "dispatch" is the equivalent to setter functions in "useState".
  // You use it to run the "reducer" function and change the state values.
  // In order to do that you pass it the "action" object values as arguments
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})  
  const {red, green, blue} = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
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

export default ReducerSquareScreen;