// components/Settings.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, Image as ImageIcon } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

interface SettingsProps {
  onSizePress?: () => void;
  onCategoryPress?: () => void;
  onGeneratePress?: () => void;
}

export function Settings({ onSizePress, onCategoryPress, onGeneratePress }: SettingsProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="mt-6">
      {/* Settings Heading */}
      <Text className={`text-lg font-sans-medium mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
        Settings
      </Text>

      {/* Settings Container */}
      <View className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Size Section */}
        <TouchableOpacity 
          onPress={onSizePress}
          className="flex-row items-center justify-between py-3"
        >
          <Text className={`text-base font-sans-regular ${isDark ? 'text-white' : 'text-black'}`}>
            Size
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              1080 × 1920 px
            </Text>
            <ChevronRight 
              size={18} 
              color={isDark ? Colors.dark.text : Colors.light.text} 
            />
          </View>
        </TouchableOpacity>

        {/* Divider Line */}
        <View className={`h-px w-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />

        {/* Category Section */}
        <TouchableOpacity 
          onPress={onCategoryPress}
          className="flex-row items-center justify-between py-3"
        >
          <Text className={`text-base font-sans-regular ${isDark ? 'text-white' : 'text-black'}`}>
            Category
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Foods and beverage
            </Text>
            <ChevronRight 
              size={18} 
              color={isDark ? Colors.dark.text : Colors.light.text} 
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Generate Button */}
      <TouchableOpacity 
        onPress={onGeneratePress}
        className={`flex-row items-center justify-center gap-2 w-full py-4 rounded-lg mt-4 ${
          isDark ? 'bg-blue-600' : 'bg-blue-500'
        }`}
      >
        <ImageIcon size={20} color="white" />
        <Text className="text-base text-white font-sans-medium">Generate</Text>
      </TouchableOpacity>
    </View>
  );
}