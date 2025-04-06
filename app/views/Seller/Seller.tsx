import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Seller() {  
    return (
        <View className="w-full h-full bg-white p-[25] flex">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View className="w-full h-[10%] flex justify-center">
                    <Image source={require("../../assets/icons/Back.png")} className="w-[30] h-[30]"/>
                </View>
                <View className="w-full flex justify-start gap-20">
                    <View className="w-[70%]">
                        <Text className="text-4xl text-blackPrimary font-syne-bold">Devenir un Acheteur</Text>
                        <Text className="text-sm font-lato-regular mt-3">Veuillez remplir tous les champs, en entrant des informations valides</Text>
                    </View>
                    <View className="w-full h-full flex gap-5">
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />
                        <TextInput placeholder="" className="border border-gray-300 rounded-xl p-3 text-base text-black bg-white w-270 h-16" />

                        <TouchableOpacity className="bg-lime-500 font-lato-bold rounded-xl w-270 h-16 justify-center items-center">
                            <Text className="text-black">Confirmer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-blackPrimary text-white font-lato-bold rounded-xl w-270 h-16 flex-row justify-center items-center ">
                            <Image source={require("../../assets/icons/Google.png")} className="w-[30] h-[30]"/>
                            <Text className="text-white">Se connecter avec Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}