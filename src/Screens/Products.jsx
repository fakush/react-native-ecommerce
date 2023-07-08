import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../Global/colors'
import productList from '../Data/products.json'
import ProductListCard from '../Components/Products/ProductListCard'
import ProductsSearchBar from '../Components/Products/ProductsSearchBar'

const searchValidation = (keyword) => {
    if (keyword.length < 3) {
        return false
    }
    const regex = /^[a-zA-Z0-9 ]+$/
    return regex.test(keyword)
}

const Products = ({ categorySelected, setCategorySelected }) => {
    const [category, setCategory] = useState(categorySelected)
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [keywordError, setKeywordError] = useState("")

    useEffect(() => {
        const filterProducts = productList.filter(product => product.category === category && product.title.toLowerCase().includes(keyword.toLowerCase()))
        setProducts(filterProducts)
    }, [category, keyword])

    const onSearch = (keyword) => {
        if (searchValidation(keyword)) {
            setKeywordError("")
            setKeyword(keyword)
        } else {
            setKeywordError("Keyword must be at least 3 characters long and only contain letters, numbers and spaces")
        }
    }


    return (
        <View style={styles.container}>
            <ProductsSearchBar onSearch={onSearch} error={keywordError} goBack={() => setCategorySelected("")} />
            <FlatList
                data={products}
                keyExtractor={product => product.id}
                renderItem={({ item }) => ProductListCard({ item })} />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.primaryAccent,
        padding: 10,
    }
})