import React, { useEffect, memo } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import CardProduct from "./CardProduct";
import { fetchProducts } from "../../store/products/productsSlice";

const DataList = () => {
  const { category } = useSelector(state => state.categories);
  const { products, status } = useSelector(state => state.products);

  const dispatch = useDispatch();

  const processedData = () => {
    if (products.length !== 0) {
      const arrMilkProducts = products[0].response.products;
      const arrMeatProducts = products[1].response.products;
      const arrBakeryProducts = products[2].response.products;

      const arrAllProducts = [
        ...arrMilkProducts,
        ...arrMeatProducts,
        ...arrBakeryProducts,
      ];

      return (category === 'Всё' ?
        arrAllProducts : category === 'Молоко' ?
          arrMilkProducts : category === 'Мясо' ?
            arrMeatProducts : category === 'Выпечка' ?
              arrBakeryProducts : '');

    }
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View style={styles.listProducts}>
      {status === 'resolved' && processedData() !== undefined ?
        (<FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={processedData()}
          keyExtractor={({id}) => id}
          decelerationRate={'normal'}
          renderItem={({item}) =>
            <CardProduct item={item}/>}
        />) :
        <ActivityIndicator size={100} color={'black'} style={styles.loadingIndicator}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  listProducts: {
    marginLeft: 10,
  },
  loadingIndicator: {
    marginVertical: 150,
  },
});

export default memo(DataList);

