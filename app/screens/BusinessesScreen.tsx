import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../utils/supabaseClient';

export default function BusinessesScreen() {
  const navigation = useNavigation<any>();
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const { data, error } = await supabase
        .from('Business')
        .select('id, name, description');

      if (error) {
        console.error('❌ Supabase error:', error);
      } else {
        console.log('✅ Businesses from Supabase:', data);
        setBusinesses(data || []);
      }
      setLoading(false);
    };

    fetchBusinesses();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-2 text-gray-500">Loading businesses...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">All Businesses</Text>

      <ScrollView>
        {businesses.length === 0 ? (
          <Text className="text-gray-500">No businesses found.</Text>
        ) : (
          businesses.map((biz) => (
            <View
              key={biz.id}
              className="border border-gray-200 rounded-lg p-4 mb-3"
            >
              <Text className="text-lg font-semibold text-blue-500">
                {biz.name}
              </Text>
              <Text className="text-gray-600 mt-1">
                {biz.description || 'No description available'}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
