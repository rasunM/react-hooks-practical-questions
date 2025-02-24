import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const [input1Text, setInput1Text] = useState<string>('');
  const [input2Text, setInput2Text] = useState<string>('');
  const [input3Text, setInput3Text] = useState<string>('');

  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);

  const isNumeric = (str: string) => /^\d+$/.test(str);

  const handleInput1Submit = () => {
    if (input2Ref.current) {
      input2Ref.current.focus(); // Move focus to input2 when Enter is pressed
    }
  };

  const handleInput2Change = (text: string) => {
    if (isNumeric(text)) {
      if (text.length > 3) {
        Alert.alert('Limit Exceeded', 'You can enter up to 3 digits only.');
        return;
      }
      setInput2Text(text);
      if (text.length === 3 && input3Ref.current) {
        input3Ref.current.focus(); // Move focus to input3 when limit is reached
      }
    } else {
      setInput2Text(''); // Clear invalid input instantly
    }
  };

  return (
    <View style={styles.container}>
      <Text>Text input 1:</Text>
      <TextInput
        ref={input1Ref}
        style={styles.textInput}
        value={input1Text}
        placeholder="Enter text"
        onChangeText={setInput1Text}
        returnKeyType="next"
        onSubmitEditing={handleInput1Submit} // Handle Enter key
      />

      <Text>Text input 2 (Numbers Only):</Text>
      <TextInput
        ref={input2Ref}
        style={styles.textInput}
        value={input2Text}
        placeholder="Enter numbers"
        keyboardType="numeric"
        onChangeText={handleInput2Change}
      />

      <Text>Text input 3:</Text>
      <TextInput
        ref={input3Ref}
        style={styles.textInput}
        value={input3Text}
        placeholder="Final input"
        onChangeText={setInput3Text}
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

export default App;
