import React, {useRef, useState, useEffect} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default function App() {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  useEffect(() => {
    if (input1.length === 5) {
      input2Ref.current?.focus();
    }
  }, [input1]);

  return (
    <View style={styles.container}>
      <TextInput
        ref={input1Ref}
        style={styles.input}
        placeholder="Enter 5 characters..."
        maxLength={5}
        value={input1}
        onChangeText={setInput1}
      />
      <TextInput
        ref={input2Ref}
        style={styles.input}
        placeholder="Next field"
        value={input2}
        onChangeText={setInput2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
