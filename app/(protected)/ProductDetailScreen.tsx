import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const navigation = useNavigation();

  const product = {
    title: 'Teclado Mecánico RGB Pro Inalámbrico',
    currentPrice: 85.50,
    originalPrice: 110.00,
    discount: '-22% OFF',
    isOfficial: true,
    stockCount: 18,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="#1F2937" />
          </TouchableOpacity>
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerCategory}>Periféricos Gaming</Text>
            <Text style={styles.headerStore}>ShopEase</Text>
          </View>
          
          <View style={styles.iconButton} />
        </View>

        <View style={styles.imageCard}>
          <Image 
            source={{ uri: product.imageUrl }} 
            style={styles.productImage} 
          />
          
          <View style={styles.topLeftBadges}>
            <View style={styles.discountBadge}>
              <Ionicons name="flash" size={14} color="#fff" />
              <Text style={styles.discountText}>{product.discount}</Text>
            </View>
            {product.isOfficial && (
              <View style={styles.officialBadge}>
                <Ionicons name="checkmark-circle-outline" size={14} color="#005C3A" />
                <Text style={styles.officialText}>Oficial</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social" size={20} color="#374151" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          
          <View style={styles.infoTagsRow}>
            <View style={styles.stockTag}>
              <View style={styles.dotIndicator} />
              <Text style={styles.stockText}>En Stock ({product.stockCount} disponibles)</Text>
            </View>
          </View>
          
          <View style={styles.infoTagsRow}>
            <View style={styles.shippingTag}>
              <Ionicons name="bicycle-outline" size={14} color="#3B82F6" style={{marginRight: 4}} />
              <Text style={styles.shippingText}>Envío Motorizado Hoy</Text>
            </View>
          </View>

          <Text style={styles.productTitle}>{product.title}</Text>

          <View style={styles.priceBlock}>
            <Text style={styles.currentPrice}>
              ${product.currentPrice.toFixed(2)}
            </Text>
            <Text style={styles.originalPrice}>
              ${product.originalPrice.toFixed(2)}
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerCategory: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  headerStore: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005C3A',
  },

  imageCard: {
    marginHorizontal: 16,
    marginTop: 10,
    height: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 4, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topLeftBadges: {
    position: 'absolute',
    top: 16,
    left: 16,
    gap: 8,
  },
  discountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },
  officialBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  officialText: {
    color: '#374151',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  infoTagsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stockTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  dotIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#047857',
    marginRight: 6,
  },
  stockText: {
    color: '#047857',
    fontWeight: '600',
    fontSize: 12,
  },
  shippingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  shippingText: {
    color: '#4338CA',
    fontWeight: '600',
    fontSize: 12,
  },
  productTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 32,
  },
  priceBlock: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  currentPrice: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#005C3A',
    lineHeight: 42,
  },
  originalPrice: {
    fontSize: 18,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
    marginLeft: 12,
    marginBottom: 4, 
  },
});