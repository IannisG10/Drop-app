import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Chat() {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const ws = useRef<WebSocket | null>(null);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        // Remplace l'URL par celle de ton serveur WebSocket
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            console.log("✅ WebSocket connecté !");
        };

        ws.current.onmessage = async (e) => {
            let data = e.data;

            // Si c’est un blob, le lire comme texte
            if (data instanceof Blob) {
                data = await data.text();  // convertit le blob en string
            }

            setMessages(prevMessages => [...prevMessages, data]);
        };

        ws.current.onerror = (e) => {
            console.error("WebSocket error:", e.message);
        };

        ws.current.onclose = (e) => {
            console.log("❌ WebSocket fermé", e.code, e.reason);
        };

        return () => {
            if (ws.current) ws.current.close();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== "" && ws.current?.readyState === WebSocket.OPEN) {
            ws.current.send(message.trim());
            setMessages(prev => [...prev, message.trim()]);
            setMessage("");
        }
    };

    return (
        <View className="w-screen h-screen bg-white flex flex-col justify-between">
            <ScrollView
                className="flex-1 p-4"
                contentContainerStyle={{ paddingBottom: 20 }}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                {messages.map((msg, index) => (
                    <View key={index} className="mb-2 self-end w-2/4 bg-green-600 p-2 rounded-full">
                        <Text className="text-white">{msg}</Text>
                    </View>
                ))}
            </ScrollView>

            <View className="p-4 bg-gray-100 border-t border-gray-300 flex-row items-center">
                <TextInput
                    placeholder="Message..."
                    value={message}
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 bg-white"
                    onChangeText={setMessage}
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Icon name="paper-plane" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
