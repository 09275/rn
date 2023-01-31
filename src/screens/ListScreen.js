import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 23},
    { name: 'Friend #2', age: 96},
    { name: 'Friend #3', age: 74},
    { name: 'Friend #4', age: 27},
    { name: 'Friend #5', age: 75},
    { name: 'Friend #6', age: 44},
    { name: 'Friend #7', age: 83},
    { name: 'Friend #8', age: 32},
    { name: 'Friend #9', age: 45}
  ];
  return (
    /* The renderItem prop is going to be called with each 
       individual element of the array. 
       The argument I am going to pass to the function call
       is a bit misleading. Let's say the argument is called
       'element'and this is how I would use it:
       renderItem={(element)} => {}}. 
       Then you might think that the element will represent 
       the first object {name: 'Friend #1'} then the second
       and so on. This is not the case.
       element has a couple of different properties in it.
       element === {item: {name: 'Friend #1'}, index: 0}
       I want only the item property which I can extract using
       destructuring: renderItem={({ item })} => {}}. 
       So now If I would do a console.log for the item I would
       get: item === {name: 'Friend #1'}
    */ 
    <FlatList 
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }} 
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;