import { useCallback, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import Checkbox from "@/app/components/checkbox/checkbox";

export default function OnboardBuyer(){

    const BestCuisine = 'Italian'

    const Cuisines = new Array(10).fill(BestCuisine).map((cuisine, i) => ({
        id: i,
        name: cuisine,
        selected: false
    }))

    const [cuisines, setCuisines] = useState(Cuisines)

    const toggleCuisine = useCallback((id : number) => {
        setCuisines((prevCuisines) => {
            return prevCuisines.map((cuisine) => {
                if (cuisine.id === id) {
                    return {
                        ...cuisine,
                        selected : !cuisine.selected
                    }
                }
                return cuisine
            })
        })
    }, [])

    return(
        <View className="w-full h-full bg-white p-[25] flex gap-10">
            <View className="w-full h-[10%] flex justify-center">
                <Image source={require("../../assets/icons/Back.png")} className="w-[30] h-[30]"/>
            </View>
            <View className="w-full h-[70%] flex items-start gap-20">
                <View className="w-[70%]">
                    <Text className="text-5xl text-blackPrimary font-syne-bold">Préférence de produits</Text>
                    <Text className="mt-3 text-xl">Choisis les produits que vous aimez pour que DropShop vous les recommande</Text>
                </View>
                <View className="w-full flex">
                    <View className="h-fit w-full flex flex-row flex-wrap gap-[14]">
                        {cuisines.map((cuisine) => {
                            return (
                                <Checkbox 
                                    key={cuisine.id} 
                                    label={cuisine.name} 
                                    checked={cuisine.selected}
                                    onPress={() => {
                                        toggleCuisine(cuisine.id)
                                    }}
                                />
                            )
                        })}
                    </View>
                </View>
            </View>
            <View className="w-full h-[10%] flex justify-center items-center">
                <Pressable className="w-full h-[60] flex justify-center items-center bg-vert px-6 py-5 rounded-xl">
                    <Text className="font-lato-bold text-lg">Confirmer</Text>
                </Pressable>
            </View>
        </View>
    )
}