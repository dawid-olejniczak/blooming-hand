// app/_layout.tsx — Fix for iOS Safe Area
import "../global.css";
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Slot, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
    return (
        <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
            <MainLayout />
        </ClerkProvider>
    );
}

function MainLayout() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-sand">
            <View className="bg-forest py-4 px-6 flex-row justify-between items-center">
                <Text className="text-sand text-xl font-serif">Blooming Hand</Text>

                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text className="text-sand underline">Dashboard</Text>
                </TouchableOpacity>
            </View>
            <Slot />
        </SafeAreaView>
    );
}