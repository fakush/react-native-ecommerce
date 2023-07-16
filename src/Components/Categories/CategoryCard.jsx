import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import CardComponent from '../Common/CardComponent'
import { texts } from '../../Global/texts'

const CategoryCard = ({ item, navigation }) => {

  return (
    <Pressable onPress={() => navigation.navigate('Products', { category: item })} style={styles.container}>
      <CardComponent>
        <Text style={texts.categories}>{item}</Text>
      </CardComponent>
    </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
})