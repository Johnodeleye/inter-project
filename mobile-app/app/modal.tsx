import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import '@/app/globals.css';
export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center p-5 bg-white dark:bg-black">
      <Text className="text-3xl font-roboto-bold text-black dark:text-white">
        This is a modal
      </Text>
      <Link href="/" dismissTo className="mt-4 py-4">
        <Text className="text-blue-500 text-base">Go to home screen</Text>
      </Link>
    </View>
  );
}