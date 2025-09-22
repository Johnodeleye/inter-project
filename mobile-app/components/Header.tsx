import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { X } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import '@/app/globals.css'
import { LinearGradient } from 'expo-linear-gradient';


interface HeaderProps {
  activeTab: 'smart' | 'advanced';
  onTabChange: (tab: 'smart' | 'advanced') => void;
  onClose?: () => void;
}

export default function Header({ activeTab, onTabChange, onClose }: HeaderProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      className={`w-full px-4 pt-12 pb-2 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      {/* Top Row with Close Button */}
      <View className="flex-row items-center mt-5 mb-6">
        <TouchableOpacity onPress={onClose} className="p-2">
          <X size={24} color={isDark ? Colors.dark.text : Colors.light.text} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View className="flex-row gap-16 px-4 space-x-8">
        {/* Smart Script */}
        <TouchableOpacity onPress={() => onTabChange('smart')} className="items-center">
          <Text
            className={`text-2xl ${
              activeTab === 'smart'
                ? isDark
                  ? 'text-white font-bold'
                  : 'text-black font-bold'
                : isDark
                ? 'text-gray-500'
                : 'text-gray-400'
            }`}
          >
            Smart script
          </Text>
          {activeTab === 'smart' && (
        <LinearGradient
          colors={['#3B82F6', '#8B5CF6']} 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="w-full h-1 mt-1 rounded-full"
        />
      )}
        </TouchableOpacity>

        {/* Advanced Script */}
        <TouchableOpacity onPress={() => onTabChange('advanced')} className="items-center">
          <Text
            className={`text-2xl ${
              activeTab === 'advanced'
                ? isDark
                  ? 'text-white font-bold'
                  : 'text-black font-bold'
                : isDark
                ? 'text-gray-500'
                : 'text-gray-400'
            }`}
          >
            Advanced script
          </Text>
            {activeTab === 'advanced' && (
        <LinearGradient
          colors={['#3B82F6', '#8B5CF6']} // blue-500 → purple-500
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="w-full h-1 mt-1 rounded-full"
        />
      )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
