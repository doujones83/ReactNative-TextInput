import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import ButtonControl from './Button';

const TextInput1 = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="enter text"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="enter text"
        keyboardType="numeric"
      />
      <ButtonControl/>
    </View>
  )
}

export default TextInput1

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})