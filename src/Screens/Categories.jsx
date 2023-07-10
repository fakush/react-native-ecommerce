import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryCard from '../Components/Categories/CategoryCard'
import { colors } from '../Global/colors'

const Categories = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={category => category}
        renderItem={({ item }) => CategoryCard({ item, setCategorySelected })}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primaryAccent,
    padding: 10,
  }
})