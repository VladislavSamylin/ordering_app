import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const TotalAmount = ({ price }) => {
  return (
    <TouchableOpacity style={styles.totalAmount}>
      <Text style={styles.totalAmountText}>{price} ₽</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  totalAmount: {
    width: 90,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 40,
    position: 'absolute',
    marginTop: 730,
    marginLeft: 290,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmountText: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 16,
  },
});