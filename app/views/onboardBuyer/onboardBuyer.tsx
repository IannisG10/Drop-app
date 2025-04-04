import { Checkbox } from "@/app/components/checkbox/checkbox";
import { useCallback, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

export default function OnboardBuyer(){

    const BestCuisine = 'Italian'

    const Cuisines = new Array(20).fill(BestCuisine).map((cuisine, i) => ({
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
            <View className="w-full h-[90%] flex justify-start gap-20">
                <View className="w-[70%]">
                    <Text className="text-4xl text-blackPrimary font-syne-bold">Préférence de produits</Text>
                    <Text className="text-sm font-lato-regular mt-3">Choisis les produits que vous aimez pour que DropShop vous les recommande</Text>
                </View>
                <View className="w-full h-full flex">
                    <View className="h-full w-full flex flex-row flex-wrap gap-[14]">
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
        </View>
    )
}