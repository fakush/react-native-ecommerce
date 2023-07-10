import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../Global/colors'
import productList from '../Data/products.json'
import ProductListCard from '../Components/Products/ProductListCard'
import ProductsSearchBar from '../Components/Products/ProductsSearchBar'
import DefaultModal from '../Components/Common/Modals/DefaultModal'

const searchValidation = (keyword) => {
    if (keyword.length < 3) {
        console.log('reyected test');
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
    const [modalVisible, setModalVisible] = useState(false)

    const onCloseError = () => {
        setModalVisible(false)
        setKeywordError("")
        setKeyword("")
    }

    useEffect(() => {
        const filterProducts = productList.filter(product => product.category === category && product.title.toLowerCase().includes(keyword.toLowerCase()))
        setProducts(filterProducts)
    }, [category, keyword])

    const onSearch = (keyword) => {
        if (searchValidation(keyword)) {
            setKeywordError("")
            setKeyword(keyword)
        } else {
            setModalVisible(true)
            setKeywordError("Keyword must be at least 3 characters long and only contain letters, numbers and spaces")
        }
    }

    const onClear = () => {
        setKeyword("")
    }


    return (
        <View style={styles.container}>
            <ProductsSearchBar onSearch={onSearch} onClear={onClear} goBack={() => setCategorySelected("")} />
            <FlatList
                data={products}
                keyExtractor={product => product.id}
                renderItem={({ item }) => ProductListCard({ item })} />
            {keywordError && <DefaultModal title='Error' body={keywordError} modalVisible={modalVisible} onClose={onCloseError} />}
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