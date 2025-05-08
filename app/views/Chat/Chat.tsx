import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import React = require("react");
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Chat() {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (message.trim() !== "") {
            setMessages([...messages, message.trim()]);
            setMessage("");
        }
    }

    return(
        <View className="w-screen h-screen bg-white flex flex-col justify-between">
            <ScrollView className="flex-1 p-4" contentContainerStyle={{ paddingBottom: 20 }}>
                {messages.map((msg, index) => (
                    <View key={index} className="mb-2 w-2/4 bg-green-600 p-2 rounded-full">
                        <Text className="text-gray-800">{msg}</Text>
                    </View>
                ))}
            </ScrollView>
            <View className="p-4 bg-gray-100 border-t border-gray-300">
                <TextInput
                    placeholder="Message..."
                    value={message}
                    className="border border-gray-300 rounded-full px-4 py-2"
                    onChangeText={setMessage}
                />
                <TouchableOpacity onPress={sendMessage} className="absolute right-4 top-2">
                    <Icon name="paper-plane" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon name="camera" size={24} color="#000" className="ml-4" />
                </TouchableOpacity>
            </View>
        </View>
    )
    
}