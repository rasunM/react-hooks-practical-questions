import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PreviousStateExample = () => {
  const [text, setText] = useState('');
  const prevTextRef = useRef<string>('');

  useEffect(() => {
    prevTextRef.current = text;
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={setText} placeholder="Type here..." />
      <Text>Current: {text}</Text>
      <Text>Previous: {prevTextRef.current}</Text>
    </View>
  );
};

export default PreviousStateExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
