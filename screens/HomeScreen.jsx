import React from "react";
import { View, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BarsMenu } from "../components/HomeScreen/BarsMenu";
import { TotalAmount } from "../components/HomeScreen/TotalAmount";
import Categories from "../components/HomeScreen/Categories";
import DataList from "../components/HomeScreen/DataList";

export default function HomeScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // const dataTest = [
  //   {
  //     key: 1,
  //     value: 'Всё',
  //     svg: 'Всё',
  //   },
  //   {
  //     key: 2,
  //     value: 'Молоко',
  //     svg: <IconCategory name='beer-outline' size={25}/>,
  //     svgActive: <IconCategory name='beer-outline' size={20} style={{color: '#d4d656'}}/>,
  //   },
  //   {
  //     key: 3,
  //     value: 'Выпечка',
  //     svg: <IconCategory name='baguette' size={25}/>,
  //     svgActive: <IconCategory name='baguette' size={20} style={{color: '#d4d656'}}/>,
  //   },
  //   {
  //     key: 4,
  //     value: 'Мясо',
  //     svg: <IconCategory name='food-steak' size={25}/>,
  //     svgActive: <IconCategory name='food-steak' size={20} style={{color: '#d4d656'}}/>,
  //   },
  // ];

  // const [categoryTest, setCategory] = useState(dataTest[0].value);

  // const { categories } = useSelector(state => state);
  // console.log(categories);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <BarsMenu navigation={navigation}/>

        <Categories />
      </View>

      <View style={styles.main}>
        <DataList />
      </View>

      <TotalAmount />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 240,
  },
  main: {
    width: '100%',
    height: 540,
    position: 'relative',
  },
});


