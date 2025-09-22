// components/ImageCardGrid.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

interface ImageCard {
  id: string;
  title: string;
  image: any; 
}

interface ImageCardGridProps {
  cards: ImageCard[];
  onCardPress?: (card: ImageCard) => void;
}

export function ImageCardGrid({ cards, onCardPress }: ImageCardGridProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardPress = (card: ImageCard) => {
    setSelectedCard(card.id === selectedCard ? null : card.id);
    onCardPress?.(card);
  };

  const screenWidth = Dimensions.get('window').width;
  const cardSize = (screenWidth - 48) / 3; 

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      className="my-4"
    >
      <View className="flex-row flex-wrap justify-between" style={{ width: screenWidth * 2 }}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => handleCardPress(card)}
            className="m-1"
            style={{
              width: cardSize,
              height: cardSize,
              transform: [{ scale: selectedCard === card.id ? 1.05 : 1 }],
            }}
          >
            <Image
              source={card.image}
              className="w-full h-full rounded-md"
              resizeMode="cover"
            />
            {selectedCard === card.id && (
              <View className="absolute inset-0 border-2 border-white rounded-lg" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}