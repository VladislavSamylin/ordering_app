import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import IconBasket from "react-native-vector-icons/MaterialCommunityIcons";

export const BarsMenu = ({ navigation }) => {
  return (
    <View style={styles.barsMenuView}>
      <Text style={styles.title}>
        Закажи Лучшие <Text style={styles.boldTitle}>Продукты</Text>
      </Text>

      <TouchableOpacity style={styles.barsBtn} onPress={() => navigation.navigate('Cart')}>
        <IconBasket name='basket-outline' size={35} color={'black'}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '75%',
    fontFamily: "Montserrat-Light",
    fontSize: 25,
    lineHeight: 35,
  },
  boldTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
  },
  barsMenuView: {
    flexDirection: 'row',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 20,
    alignItems: 'center',
    height: 140,
    justifyContent: 'space-between',
  },
  barsBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 100,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderRadius: 40,
  },
});
