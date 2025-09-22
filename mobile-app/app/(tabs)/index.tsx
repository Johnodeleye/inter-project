// app/index.tsx
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { useState } from 'react';
import Header from '@/components/Header';
import { ImageCardGrid } from '@/components/ImageGrid';
import { TextAreaWithIcon } from '@/components/TextAreaWithIcon';
import { Settings } from '@/components/Settings';
import { Footer } from '@/components/Footer';
import '@/app/globals.css';

const posterCards = [
  { id: '1', title: 'New Limited Edition', image: require('@/assets/images/2.jpg') },
  { id: '2', title: 'Upto 50% Off', image: require('@/assets/images/1.jpg') },
  { id: '3', title: 'Editor\'s Choice', image: require('@/assets/images/3.jpg') },
  { id: '4', title: 'Barber Shop', image: require('@/assets/images/4.jpg') },
  { id: '5', title: 'Product Display', image: require('@/assets/images/krea.png') },
  { id: '6', title: 'Promotion', image: require('@/assets/images/icon.png') },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<'smart' | 'advanced'>('smart');
  const [description, setDescription] = useState('');

  const handleCardPress = (card: any) => {
    console.log('Selected card:', card.title);
  };

  const handleAddImage = () => {
    console.log('Add image pressed');
  };

  const handleSizePress = () => {
    console.log('Size pressed');
  };

  const handleCategoryPress = () => {
    console.log('Category pressed');
  };

  const handleGeneratePress = () => {
    console.log('Generate pressed');
  };

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onClose={() => console.log('Close pressed')}
      />
      
      <ScrollView className="flex-1 px-6">
        {activeTab === 'smart' ? (
          <View className="py-4">
            <Text className="mb-4 text-2xl text-black dark:text-white font-sans-regular">
              What type of posters do you want to create?
            </Text>
            
            <ImageCardGrid 
              cards={posterCards} 
              onCardPress={handleCardPress}
            />
            
            <TextAreaWithIcon
              value={description}
              onChangeText={setDescription}
              placeholder="stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting."
              onAddImagePress={handleAddImage}
            />

            {/* Settings Section */}
            <Settings 
              onSizePress={handleSizePress}
              onCategoryPress={handleCategoryPress}
              onGeneratePress={handleGeneratePress}
            />

            {/* Footer */}
            <Footer />
          </View> 
        ) : (
          <View className="py-4">
            <Text className="text-2xl text-black dark:text-white font-sans-regular">
              Advanced Script Content
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}