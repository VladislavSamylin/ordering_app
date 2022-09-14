import React from "react";
import {Header} from "../components/Cart/Header";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

export default function Cart() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Header />


    </SafeAreaView>
  );
}