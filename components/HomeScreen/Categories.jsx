import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import IconCategory from "react-native-vector-icons/MaterialCommunityIcons";

import { useActions } from "../../hooks/useActions";

const Categories = () => {
  const { category, categories } = useSelector(state => state.categories);

  const { changeCategory } = useActions();

  return (
    <View style={styles.categories}>
      {
        React.Children.toArray(
          categories.map((item) => {
            return (
              <Pressable
                onPress={() => changeCategory(item.value)}
                style={item.value === category ? styles.categorySelected : styles.categoryUnselected}
              >
                <Text
                  style={item.value === category ? styles.categoryNameSelected : styles.categoryNameUnselected}
                >
                  {item.value === category ?
                    <IconCategory size={20} style={{color: '#d4d656'}} name={item.nameSvg} /> :
                    item.nameSvg ?
                      <IconCategory name={item.nameSvg} size={25}/> : item.value}
                  {item.value === category ? ' ' + item.value : ''}
                </Text>
              </Pressable>
            );
          })
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  categoryUnselected: {
    backgroundColor: '#E8E8E8',
    width: 70,
    height: 65,
    borderRadius: 40,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorySelected: {
    backgroundColor: 'black',
    width: 110,
    height: 65,
    borderRadius: 40,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryNameSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: 'white',
  },
  categoryNameUnselected: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'black',
  },
});

export default memo(Categories);