import "./global.css"
import { ActivityIndicator, Text, View } from "react-native";
import { useFonts } from 'expo-font';

import Welcome from "./views/welcome/welcome";
import SelectAccount from "./views/select_account/selectAccount";
import BuyerForm from "./views/buyer_form/buyerForm";
import OnboardBuyer from "./views/onboardBuyer/onboardBuyer";
import Seller from "./views/Seller/Seller";
import AccountUser from "./views/AccountUser/AccountUser";

export default function Index() {
  //Chargement de la police avant d'affiche l'ui
  const [fontsLoaded] = useFonts({
    "Syne-Regular": require('./assets/fonts/Syne-Regular.ttf'),
    "Syne-Bold": require('./assets/fonts/Syne-Bold.ttf'),
    "Syne-SemiBold": require('./assets/fonts/Syne-SemiBold.ttf'),
    "Lato-Bold": require('./assets/fonts/Lato-Bold.ttf'),
    "Lato-Regular": require('./assets/fonts/Lato-Regular.ttf')
  })

  if(!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff"/>
  }

  return (
      <View className="w-screen h-screen">
        {/* <Welcome></Welcome> */}
        {/* <SelectAccount></SelectAccount> */}
        {/* <BuyerForm></BuyerForm> */}
        {/* <OnboardBuyer></OnboardBuyer> */}
        {/* <Seller></Seller> */}
        <AccountUser></AccountUser>
      </View>
  );
}
