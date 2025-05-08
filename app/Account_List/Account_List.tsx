import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SearchBar } from "react-native-screens";

export default function AccountList() {
    const router = useRouter();

    return (
        <View className="w-screen h-screen bg-white flex flex-col justify-between">
            <View>
                <Text className="font-bold">Messages</Text>
                <SearchBar></SearchBar>
            </View>
            <ScrollView className="flex-1 p-4" contentContainerStyle={{ paddingBottom: 20 }}>
                <TouchableOpacity className="w-full justify-center items-center display flex-row" onPress={() => router.push("/views/Chat/Chat")}>
                    <Image source={require("../../assets/images/react-logo.png")} className="w-[100] h-[100]"/>
                    <Text className="text-4xl text-blackPrimary font-syne-bold">Fanomezantsoa Ramaromisa</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-full justify-center items-center display flex-row" onPress={() => router.push("/views/Chat/Chat")}>
                    <Image source={require("../../assets/images/react-logo.png")} className="w-[100] h-[100]"/>
                    <Text className="text-4xl text-blackPrimary font-syne-bold">Fanomezantsoa Ramaromisa</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-full justify-center items-center display flex-row" onPress={() => router.push("/views/Chat/Chat")}>
                    <Image source={require("../../assets/images/react-logo.png")} className="w-[100] h-[100]"/>
                    <Text className="text-4xl text-blackPrimary font-syne-bold">Fanomezantsoa Ramaromisa</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
