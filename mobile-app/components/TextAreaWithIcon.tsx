// components/TextAreaWithIcon.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Image as ImageIcon } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

interface TextAreaWithIconProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onAddImagePress?: () => void;
}

export function TextAreaWithIcon({ 
  value, 
  onChangeText, 
  placeholder = "stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting.",
  onAddImagePress 
}: TextAreaWithIconProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className={`relative mt-6 rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isDark ? Colors.dark.text : Colors.light.text}
        multiline
        numberOfLines={4}
        className={`min-h-[120px] font-sans-regular text-2xl ${isDark ? 'text-white' : 'text-black'}`}
        textAlignVertical="top"
      />
      <TouchableOpacity 
        onPress={onAddImagePress}
        className="absolute p-2 bottom-2 right-2"
      >
        <ImageIcon 
          size={24} 
          color={isDark ? Colors.dark.text : Colors.light.text} 
        />
      </TouchableOpacity>
    </View>
  );
}