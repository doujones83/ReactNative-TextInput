import { StyleSheet, Text, View, onPress, Pressable } from 'react-native'
import React from 'react'

const ButtonControl = () => {
  return (
    <View>
     <Pressable
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.button}
      />
    </View>
  )
}

export default ButtonControl

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
})