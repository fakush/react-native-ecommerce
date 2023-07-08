import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardComponent from '../Common/CardComponent'
import { texts } from '../../Global/texts'

const ProductListCard = ({ item }) => {
    return (
        <View style={styles.container}>
            {/* <Pressable onPress={() => setProductSelected(item)} style={styles.container}> */}
                <CardComponent aditionalStyles={styles.cardStyles}>
                    <Text style={texts.categories}>{item.title}</Text>
                    <Image resizeMode='cover' style={styles.image} source={{ uri: item.thumbnail }} />
                </CardComponent>
            {/* </Pressable> */}
        </View>
    )
}

export default ProductListCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardStyles: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        margin: 10,
        alignContent: 'center',
    },
    image: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})