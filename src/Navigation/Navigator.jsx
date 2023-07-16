import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Categories from '../Screens/Categories'
import Products from '../Screens/Products'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetail from '../Screens/ProductDetail'

const Stack = createNativeStackNavigator()

export default function Navigator() {
    // const [categorySelected, setCategorySelected] = useState("")

    return (
        <SafeAreaView style={styles.container} >
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={({ route }) => ({ header: () => <Header/> })
                    }>
                    <Stack.Screen name='Home' component={Categories} />
                    <Stack.Screen name='Products' component={Products} />
                    <Stack.Screen name='ProductDetail' component={ProductDetail} />
            {/* <Header />
            {
                categorySelected === "" ?
                    <Categories setCategorySelected={setCategorySelected} /> :
                    <Products categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
            } */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})