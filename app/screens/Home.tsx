// app/screens/index.tsx
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, useWindowDimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const { width } = useWindowDimensions();
  const itemWidth = width < 640 ? '100%' : '30%';

  const handleSearch = () => {
    const q = query.trim();
    if (q) {
      navigation.navigate('Results' as never, { searchQuery: q } as never);
      // optional: setQuery('');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View className="w-full max-w-screen-lg">
        {/* Header */}
        <View className="mt-10 items-center">
          <Text className="text-3xl font-bold text-blue-500">✔ Verzo</Text>
        </View>

        {/* Search Bar */}
        <View className="mt-5 px-4">
          <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
            <Text className="text-yellow-500 mr-2">🔍</Text>
            <TextInput
              placeholder="Buscar tu producto"
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
              className="flex-1"
            />
          </View>
        </View>

        {/* Categories */}


        <View className="mt-6 px-4 items-center">
          <View className="w-full flex-row flex-wrap justify-center max-w-screen-lg">
            {[
              {
                name: 'Ver Negocios',
                icon: '🏢',
                onPress: () => navigation.navigate('Businesses' as never),
              },
              {
                name: 'Ver Productos',
                icon: '🛒',
                onPress: () => navigation.navigate('Products' as never),
              },
            ].map((cat, index) => (
              <Pressable
                key={index}
                onPress={cat.onPress}
                style={{ width: itemWidth }}
                className="items-center justify-center border-2 border-blue-500 rounded-xl p-4 m-2 active:opacity-70"
              >
                <Text className="text-3xl">{cat.icon}</Text>
                <Text className="mt-2 text-gray-700 font-medium">{cat.name}</Text>
              </Pressable>
            ))}
          </View>
        {/* </View> */}


      </View>
    </View>
    </SafeAreaView >
  );
}
