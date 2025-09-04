import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabaseClient';
const Home = () => {
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const { data, error } = await supabase
        .from('Business')
        .select('*');

      if (error) {
        console.error('❌ Supabase error:', error);
      } else {
        console.log('✅ Businesses from Supabase:', data);
        setBusinesses(data);
      }
      setLoading(false);
    };

    fetchBusinesses();
  }, []);

  if (loading) return <p>Loading businesses...</p>;

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View className="w-full max-w-screen-lg">
        {/* Header */} 
        <View className="mt-10 items-center"> {/* Icon could be an SVG or from react-native-vector-icons */} 
          <Text className="text-3xl font-bold text-blue-500">✔ Verzo</Text> </View> 
          {/* Search Bar */} 
          <View className="mt-5 px-4"> 
            <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2"> 
              <Text className="text-yellow-500 mr-2">🔍</Text> <TextInput placeholder="Search for products" className="flex-1" /> 
              </View> 
              </View>
        {/* Categories */}
        <View className="mt-6 px-4 items-center">
          <View
            className="
      w-full 
      flex-row flex-wrap justify-center
      max-w-screen-lg
    "
          >
            {[
              { name: 'Clothing', icon: '👕' },
              { name: 'Technology', icon: '💻' },
              { name: 'Shoes', icon: '👟' },
              { name: 'Snacks', icon: '🍿' },
            ].map((cat, index) => (
              <View
                key={index}
                className="
          items-center justify-center
          border-2 border-blue-500 rounded-xl
          p-4 m-2
          w-full sm:w-[30%]   /* 1 column on small, max 3 on large */
        "
              >
                <Text className="text-3xl">{cat.icon}</Text>
                <Text className="mt-2 text-gray-700 font-medium">{cat.name}</Text>
              </View>
            ))}
          </View>
        </View>

      </View>
    </SafeAreaView>

  )
}

export default Home
