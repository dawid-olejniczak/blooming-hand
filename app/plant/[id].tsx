// screens/plant/[id].tsx — Individual Plant Page with Control + Threshold Config
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TextInput, ScrollView, Switch, TouchableOpacity } from 'react-native';

export default function PlantDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [humidity, setHumidity] = useState("80");
    const [temperature, setTemperature] = useState("22");
    const [light, setLight] = useState("300");

    const [pumpOn, setPumpOn] = useState(false);
    const [lightOn, setLightOn] = useState(false);

    return (
        <ScrollView className="flex-1 bg-sand p-6">
            <Text className="text-3xl font-serif text-forest mb-2">{id} Configuration</Text>
            <Text className="text-xl font-serif text-forest mb-2">Manual Controls</Text>

            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-forest text-base">Pump</Text>
                <Switch value={pumpOn} onValueChange={setPumpOn} thumbColor="#F5EBDD" trackColor={{ true: '#1C3A2E' }} />
            </View>

            <View className="flex-row justify-between items-center mb-6">
                <Text className="text-forest text-base">LED Light</Text>
                <Switch value={lightOn} onValueChange={setLightOn} thumbColor="#F5EBDD" trackColor={{ true: '#1C3A2E' }} />
            </View>

            <Text className="text-base text-forest mb-6">Set your preferences below for Rauni to automate care.</Text>

            <Text className="text-xl font-serif text-forest mb-2">Automation Thresholds</Text>

            <View className="mb-4">
                <Text className="text-forest mb-1">Humidity (%) - If lower, water plant</Text>
                <TextInput value={humidity} onChangeText={setHumidity} keyboardType="numeric" className="bg-white rounded-xl p-3 border border-clay text-forest" />
            </View>

            <View className="mb-4">
                <Text className="text-forest mb-1">Temperature (°C) - If lower, alert or log</Text>
                <TextInput value={temperature} onChangeText={setTemperature} keyboardType="numeric" className="bg-white rounded-xl p-3 border border-clay text-forest" />
            </View>

            <View className="mb-6">
                <Text className="text-forest mb-1">Light Intensity (lx) - If lower, turn on LED</Text>
                <TextInput value={light} onChangeText={setLight} keyboardType="numeric" className="bg-white rounded-xl p-3 border border-clay text-forest" />
            </View>

            <TouchableOpacity className="bg-forest py-3 rounded-2xl mb-8">
                <Text className="text-center text-sand font-semibold text-lg">Update</Text>
            </TouchableOpacity>

            <TouchableOpacity className="text-center" onPress={() => router.back()}>
                <Text className="text-forest underline">Back to Dashboard</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}