import { View, Image, Text, TextInput, ScrollView, Pressable, TouchableOpacity, Switch } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AccountUser() {
    return(
        <View className="w-full h-full bg-white p-[25] flex gap-10 ">
            <View className="w-full h-[10%] flex justify-center">
                <Image source={require("../../assets/icons/Back.png")} className="w-[30] h-[30]"/>
            </View>
            <ScrollView >

                <View className="w-full justify-center items-center">
                    <Image source={require("../../assets/images/welcomeImage.png")} className="w-[100] h-[100]"/>
                    <Text className="text-4xl text-blackPrimary font-syne-bold">Prénom Nom</Text>
                    <Text className="text-sm font-lato-regular mt-3">EmailUser@gmail.com</Text>
                </View>

                <View className="w-full gap-[25] mt-[50] mb-[20]">
                    <Text className="text-2xl text-blackPrimary font-syne-bold">Compte</Text>
                    <TouchableOpacity className="w-full h-[60] pl-5 bg-gray-100 rounded-xl flex flex-row items-center gap-[10]">
                        <Icon name="user" size={20} color="#000000" />
                       <View>
                            <Text className="text-sm font-lato-regular">Nom</Text>
                            <Text>Nom de l'utilisateur</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-full h-[60] pl-5 bg-gray-100 rounded-xl flex flex-row items-center gap-[10]">
                        <Icon name="Email" size={20} color="#000000" />
                       <View>
                            <Text className="text-sm font-lato-regular">Nom</Text>
                            <Text>Nom de l'utilisateur</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-full h-[60] pl-5 bg-gray-100 rounded-xl flex flex-row items-center gap-[10]">
                        <Icon name="user" size={20} color="#000000" />
                       <View>
                            <Text className="text-sm font-lato-regular">Nom</Text>
                            <Text>Nom de l'utilisateur</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-full h-[60] pl-5 bg-gray-100 rounded-xl flex flex-row items-center gap-[10]">
                        <Icon name="phone" size={20} color="#000000" />
                       <View>
                            <Text className="text-sm font-lato-regular">Nom</Text>
                            <Text>Nom de l'utilisateur</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="w-full gap-[25] mt-[50] mb-[20]">
                    <Text className="text-2xl text-blackPrimary font-syne-bold">Paramètres</Text>
                    <TouchableOpacity className="w-full h-[60] pl-5 bg-gray-100 rounded-xl flex flex-row items-center gap-[10]">
                        <Icon name="lock" size={20} color="#000000" />
                       <View>
                            <Text className="text-sm font-lato-regular">Changer de mot de passe</Text>
                        </View>
                    </TouchableOpacity>
                    <View className="w-full h-[60] pl-5 bg-gray-100 rounded-xl flex flex-row items-center gap-[10]">
                        <Icon name="moon" size={20} color="#000000" />
                       <View>
                            <Text className="text-sm font-lato-regular">Mode Sombre</Text>
                        </View>
                        <Switch></Switch>
                    </View>

                    <Pressable className="flex justify-center items-center bg-black px-6 py-5 rounded-xl">
                        <Text className="font-lato-bold text-lg text-white">Deconnexion</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}