import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.boldTitle}>Корзина</Text>

      <View style={styles.circleNumberProducts}>
        <Text style={styles.circleNumberProductsText}>3</Text>
      </View>
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
    fontSize: 30,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 35,
    alignItems: 'center',
    height: 140,
    justifyContent: 'space-between',
  },
  circleNumberProducts: {
    width: 50,
    height: 50,
    backgroundColor: '#d4d656',
    borderRadius: 30,
    marginHorizontal: 130,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleNumberProductsText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
});