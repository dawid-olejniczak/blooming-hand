// screens/plant/add.tsx — Add Plant Form
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function AddPlant() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [deviceId, setDeviceId] = useState('');

    const handleAdd = () => {
        // TODO: Handle save logic (API/database)
        router.push('/');
    };

    return (
        <ScrollView className="flex-1 bg-sand p-6">
            <Text className="text-3xl font-serif text-forest mb-4">Add New Plant</Text>

            <View className="mb-4">
                <Text className="text-forest mb-1">Plant Name</Text>
                <TextInput value={name} onChangeText={setName} className="bg-white rounded-xl p-3 border border-clay text-forest" placeholder="e.g. Monstera" />
            </View>

            <View className="mb-4">
                <Text className="text-forest mb-1">Location</Text>
                <TextInput value={location} onChangeText={setLocation} className="bg-white rounded-xl p-3 border border-clay text-forest" placeholder="e.g. Living Room" />
            </View>

            <View className="mb-6">
                <Text className="text-forest mb-1">Rauni Device ID</Text>
                <TextInput value={deviceId} onChangeText={setDeviceId} className="bg-white rounded-xl p-3 border border-clay text-forest" placeholder="e.g. rauni-01A8" />
            </View>

            <TouchableOpacity className="bg-forest py-3 rounded-2xl mb-6" onPress={handleAdd}>
                <Text className="text-center text-sand font-semibold text-lg">Add Plant</Text>
            </TouchableOpacity>

            <TouchableOpacity className="text-center" onPress={() => router.back()}>
                <Text className="text-forest underline">Back to Dashboard</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
