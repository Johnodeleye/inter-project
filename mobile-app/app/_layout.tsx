// _layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import '@/app/globals.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'AlanSans-Regular': require('../assets/fonts/AlanSans-Regular.ttf'),
        'AlanSans-Bold': require('../assets/fonts/AlanSans-Bold.ttf'),
        'AlanSans-Light': require('../assets/fonts/AlanSans-Light.ttf'),
        'AlanSans-Medium': require('../assets/fonts/AlanSans-Medium.ttf'),
        'AlanSans-ExtraBold': require('../assets/fonts/AlanSans-ExtraBold.ttf'),
        'AlanSans-SemiBold': require('../assets/fonts/AlanSans-SemiBold.ttf'),
        'AlanSans-Black': require('../assets/fonts/AlanSans-Black.ttf'),
      
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}