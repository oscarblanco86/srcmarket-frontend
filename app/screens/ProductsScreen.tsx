import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../utils/supabaseClient';

export default function ProductsScreen() {
  const navigation = useNavigation<any>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('Product')
        .select('id, name, shortDescription');

      if (error) {
        console.error('❌ Supabase error:', error);
      } else {
        console.log('✅ Products from Supabase:', data);
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-2 text-gray-500">Cargando productos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Todos los Productos</Text>

      <ScrollView>
        {products.length === 0 ? (
          <Text className="text-gray-500">No se encontraron productos</Text>
        ) : (
          products.map((prod) => (
            <View
              key={prod.id}
              className="border border-gray-200 rounded-lg p-4 mb-3"
            >
              <Text className="text-lg font-semibold text-blue-500">
                {prod.name}
              </Text>
              <Text className="text-gray-600 mt-1">
                {prod.shortDescription || 'No hay descripción disponible'}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
