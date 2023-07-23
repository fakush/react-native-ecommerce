import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { texts } from '../Global/texts'
import { colors } from '../Global/colors'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={texts.title}>Cart</Text>
      <Text style={texts.subtitle}>Coming Soon</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.primaryAccent,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
    }
})