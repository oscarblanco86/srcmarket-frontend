import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import supabase from '../../utils/supabaseClient';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const navigation = useNavigation<any>();
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
    <View className="flex-1 bg-white pt-10 px-4">
      {/* Search Bar */}
      <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
        <Text className="text-yellow-500 mr-2">🔍</Text>
        <TextInput
          placeholder="Search for products or businesses"
          value={query}
          onChangeText={setQuery}
          className="flex-1"
        />
      </View>

      {/* Results placeholder */}
      <ScrollView className="mt-5">
        <Text className="text-gray-500">
          Showing results for: {query || '...'}
        </Text>
        {/* Map your search results here */}
      </ScrollView>
    </View>
  );
}




// import React from 'react';
// import { SafeAreaView, View, Text } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// export default function ResultsScreen() {
//   const route = useRoute();
//   const { searchQuery } = route.params || {};

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <View className="p-4">
//         <Text className="text-xl font-bold">
//           Results for: {searchQuery || 'No query provided'}
//         </Text>
//         {/* TODO: Fetch and render products/businesses based on searchQuery */}
//       </View>
//     </SafeAreaView>
//   );
// }
