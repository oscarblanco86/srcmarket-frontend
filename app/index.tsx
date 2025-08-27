import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="mt-10 items-center">
        {/* Icon could be an SVG or from react-native-vector-icons */}
        <Text className="text-3xl font-bold text-blue-500">✔ Verzo</Text>
      </View>

      {/* Search Bar */}
      <View className="mt-5 px-4">
        <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
          <Text className="text-yellow-500 mr-2">🔍</Text>
          <TextInput
            placeholder="Search for products"
            className="flex-1"
          />
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-6 px-4"
      >
        {[
          { name: 'Clothing', icon: '👕' },
          { name: 'Technology', icon: '💻' },
          { name: 'Shoes', icon: '👟' },
          { name: 'Snacks', icon: '🍿' },
        ].map((cat, index) => (
          <View
            key={index}
            className="items-center mr-6"
          >
            <Text className="text-3xl">{cat.icon}</Text>
            <Text className="mt-2 text-gray-700">{cat.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Primary Button */}
      <View className="mt-10 px-4">
        <TouchableOpacity className="bg-blue-500 py-4 rounded-full">
          <Text className="text-white text-center font-bold text-lg">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home
