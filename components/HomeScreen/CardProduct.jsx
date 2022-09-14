import React, { memo, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import IconBasket from "react-native-vector-icons/MaterialCommunityIcons";
import { MinusIcon } from "react-native-heroicons/outline";

let arrTotalAmount = 0;

const CardProduct = ({ item }) => {
  const defaultPrice = 50;
  if (item.price === undefined) item.price = defaultPrice + ' ';

  const [numberProducts, setNumberProducts] = useState(0);
  const [visibleMinus, setVisibleMinus] = useState(false);

  const addProductToCart = () => {
    setNumberProducts(numberProducts + 1);
    setVisibleMinus(true);

    arrTotalAmount += Number(item.price.split(' ')[0].split('.')[0]);
  };

  const deleteProductFromCart = () => {
    if(numberProducts > 0) setNumberProducts(numberProducts - 1);
    if(numberProducts === 1) setVisibleMinus(false);
    arrTotalAmount -= Number(item.price.split(' ')[0].split('.')[0]);
  };

  // console.log(arrTotalAmount);

  return (
    <View>
      <TouchableOpacity onPress={() => addProductToCart()} style={styles.cardProduct} elevation={8}>
        <Image source={{uri: item.thumbnail}} style={styles.cardImage}/>
      </TouchableOpacity>

      {numberProducts !== 0 ?
        (<View style={styles.cardNumberProducts}>
          <Text style={styles.cardNumberProductsText}>{numberProducts}</Text>
        </View>) : ''}

      <View style={styles.cardPrice}>
        <Text style={styles.cardPriceText}>{item.price ? item.price.split(' ')[0].split('.')[0] : `${defaultPrice} `} ₽</Text>
      </View>

      <TouchableOpacity
        style={styles.cardCart}
        onPress={() => visibleMinus ? deleteProductFromCart() : addProductToCart()}>
        {visibleMinus ?
          <MinusIcon size={20} color={'white'}/> :
          <IconBasket name='basket-outline' size={18} color="white"/>}
      </TouchableOpacity>

      <Text style={styles.cardText} ellipsizeMode='tail' numberOfLines={2}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProduct: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 165,
    height: 200,
    borderRadius: 50,
    borderLeftWidth: 3,
    borderColor: '#d4d656',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    position: 'relative',
  },
  cardImage: {
    width: 155,
    height: 150,
    borderRadius: 50,
  },
  cardText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 15,
    width: 170,
    height: 32,
  },
  cardPrice: {
    position: 'absolute',
    width: 135,
    height: 50,
    marginVertical: 40,
    backgroundColor: 'rgba(232, 232, 232, 0.8)',
    marginTop: 150,
    marginLeft: 25,
    borderRadius: 80,
  },
  cardCart: {
    position: 'absolute',
    width: 50,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 80,
    marginTop: 155,
    marginLeft: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPriceText: {
    marginVertical: 15,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  cardNumberProducts: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#d4d656',
    borderRadius: 30,
    marginHorizontal: 130,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNumberProductsText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});

export default memo(CardProduct);
