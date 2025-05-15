// components/PublicationAccueil.tsx
import { View, Text, Image } from "react-native";

const PublicationAccueil = () => {
    return (
        <View className="w-full h-[420]">
            <View className="w-full h-[70] flex flex-row justify-between items-center">
                <View className="w-fit h-full flex flex-row justify-center items-center">
                    <Image source={require("../../assets/icons/userWoman.png")} className="w-[50] h-[50]" />
                    <View className="w-fit h-full justify-center items-start">
                        <Text className="text-2xl px-[16] text-blackPrimary font-lato-bold">Lisa Moore</Text>
                        <Text className="text-xl px-[16] text-blackPrimary font-lato-light">Californie, USA</Text>
                    </View>
                </View>
                <View className="w-fit h-full justify-center items-end">
                    <Text className="text-2xl text-blackPrimary font-lato-bold">02 Janv</Text>
                    <Text className="text-xl text-blackPrimary font-lato-light">14:30 pm</Text>
                </View>
            </View>
            <View className="w-full h-[270] flex justify-center items-start gap-[10]">
                <Text className="text-2xl text-blackPrimary font-lato-regular">Chaussure en cuir, fabriqué en tissu fin</Text>
                <View className="w-full h-[230] flex justify-center items-center bg-lime-50 rounded-xl">
                    <Image source={require("../../assets/images/shoes.png")} className="w-[180] h-[180]" />
                </View>
            </View>
            <View className="w-full h-[80] flex flex-row justify-between items-center">
                <View className="w-fit h-full flex justify-center items-start gap-[8]">
                    <View className="w-fit h-fit flex flex-row justify-center items-center gap-[8]">
                        <Image source={require("../../assets/icons/Star.png")} className="w-[20] h-[20]" />
                        <Text className="text-2xl text-blackPrimary font-lato-bold">4.6</Text>
                    </View>
                    <View className="w-fit h-fit flex flex-row justify-center items-center gap-[8]">
                        <Image source={require("../../assets/icons/Heart.png")} className="w-[30] h-[30]" />
                        <Text className="text-xl text-blackPrimary font-lato-bold">24 réactions</Text>
                    </View>
                </View>
                <View className="w-fit h-full justify-center items-end gap-[8]">
                    <Text className="text-2xl text-blackPrimary font-lato-bold">$45.32</Text>
                    <View className="w-fit h-fit flex flex-row justify-center items-center gap-[8]">
                        <Image source={require("../../assets/icons/Comments.png")} className="w-[30] h-[30]" />
                        <Text className="text-xl text-blackPrimary font-lato-bold">15 commantaires</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PublicationAccueil;