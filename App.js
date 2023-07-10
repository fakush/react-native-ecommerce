import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/Components/Header';
import Categories from './src/Screens/Categories';
import Products from './src/Screens/Products';
import { fonts } from './src/Global/fonts';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log('No se han cargado las fuentes');
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
