import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/Components/Header';
import Categories from './src/Screens/Categories';
import Products from './src/Screens/Products';
import { fonts } from './src/Global/fonts';


export default function App() {
  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      {
        categorySelected === "" ?
          <Categories setCategorySelected={setCategorySelected} /> :
          <Products categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
