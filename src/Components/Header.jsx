import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { texts } from '../Global/texts'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={[texts.title, styles.text]}>Coder Commerce</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'yellow',
    }
})