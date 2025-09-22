import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { Home, Settings } from 'lucide-react-native';
import '@/app/globals.css';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#0a7ea4',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}