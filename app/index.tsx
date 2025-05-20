// Updated Dashboard: removed controls, generalized readings, and added navigation for Add/Remove
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Dashboard() {
    const router = useRouter();

    return (
        <ScrollView className="flex-1 bg-sand p-6">
            <Text className="text-3xl font-serif text-forest mb-2">Dashboard</Text>
            <Text className="text-base text-forest mb-6">Welcome back, Emily!</Text>

            <TouchableOpacity className="bg-forest py-3 rounded-2xl mb-6">
                <Text className="text-center text-sand font-semibold text-lg">Check Moisture</Text>
            </TouchableOpacity>

            <Text className="text-xl font-serif text-forest mb-2">Your Plants</Text>

            <View className="bg-white rounded-xl p-4 shadow mb-4">
                <Text className="text-lg font-bold text-forest">Monstera</Text>
                <Text className="text-forest">Living Room</Text>
                <Text className="text-forest mt-2">Moisture: 45%</Text>
                <Text className="text-forest">Temperature: 22°C</Text>
                <Text className="text-forest">Light: 280 lx</Text>
                <View className="flex-row justify-between mt-4">
                    <TouchableOpacity className="border border-forest rounded-xl px-4 py-2" onPress={() => router.push('/plant/monstera')}>
                        <Text className="text-forest">View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border border-red-500 rounded-xl px-4 py-2">
                        <Text className="text-red-500">Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-white rounded-xl p-4 shadow mb-4">
                <Text className="text-lg font-bold text-forest">Rubber Plant</Text>
                <Text className="text-forest">Bedroom</Text>
                <Text className="text-forest mt-2">Moisture: 60%</Text>
                <Text className="text-forest">Temperature: 24°C</Text>
                <Text className="text-forest">Light: 350 lx</Text>
                <View className="flex-row justify-between mt-4">
                    <TouchableOpacity className="border border-forest rounded-xl px-4 py-2" onPress={() => router.push('/plant/rubber')}>
                        <Text className="text-forest">View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border border-red-500 rounded-xl px-4 py-2">
                        <Text className="text-red-500">Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => router.push('/plant/add')} className="border-2 border-forest py-3 rounded-2xl mb-6">
                <Text className="text-center text-forest font-semibold text-lg">Add Plant</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
