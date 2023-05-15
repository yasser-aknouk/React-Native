import React from 'react'
import { Button, TextInput } from 'react-native'
import { View } from 'react-native-web'

export default function SearchFilm() {
  return (
    <View>
        <Text>Which movie do you feel like watching ?</Text>
        <TextInput/>
        <Button title='Search'/>
    </View>
  )
}
