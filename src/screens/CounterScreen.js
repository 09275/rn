import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/* The important think to remember is that in order to perform
   some change to the "counter" variable you cannot do it by
   just changing the "counter". If you do try to change the
   "counter" the result will not appear on the screen (although
   it does perform the change). Every time you need to change
   the state variable you have to use the state function,
   in this case "setCounter".
*/

/* #--------------IMPORTANT NOTE 1---------------#
   When we update a state variable, the whole component rerenders.
   When a component is rerendered (re-run), all of its children
   components get rerendered too.
*/

/* #------------ IMPORTANT NOTE 2 ---------------#
   A state variable can be passed down to a child component. 
   At that point in time, that value is kind of simultaneously
   a piece of state and a prop as well.
*/

/* #------------ IMPORTANT NOTE 3 ---------------#
   If we show multiple copies (instances) of a child component 
   inside a screen component (like in the case of "ImageScreen"),
   and the child component has a state variable, then each instance
   of the child component will have its own separate state 
   variable.
*/

const CounterScreen = () => {
  // This is just destructuring
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button 
        title="Increase"
        onPress={() => { 
          setCounter(counter + 1);
        }}
      />
      <Button 
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;