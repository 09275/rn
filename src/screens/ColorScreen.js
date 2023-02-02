import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button 
        title="Add a Color" 
        onPress={() => {
          // The "...colors" means take a copy of everything 
          // inside that array and add it to this new one.
          // Then add a new entry by calling the "randomRgb()"
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View 
              style={{ 
                height: 100,
                width: 100,
                backgroundColor: item}}
            />
          );
        }}
      />
    </View>
  );
};

// A function that generates random rgb colors
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;