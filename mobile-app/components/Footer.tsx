// components/Footer.tsx
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function Footer() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const screenWidth = Dimensions.get('window').width;

  return (
    <View className={`py-4 px-6 mt-6 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <View 
        className="flex-row items-center justify-between"
        style={{ maxWidth: screenWidth * 0.8, alignSelf: 'center' }}
      >
        {/* CapCut  */}
        <Image 
          source={require('@/assets/images/capcut.png')} 
          className="w-12 h-12" 
          resizeMode="contain"
        />
        
  
        <Text className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mx-4 flex-shrink`}>
          curated by
        </Text>
        
        {/* Mobbin  */}
        <Image 
          source={require('@/assets/images/mobbin.png')} 
          className="w-12 h-12" 
          resizeMode="contain"
        />
      </View>
    </View>
  );
}