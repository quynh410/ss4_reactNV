import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductItemProps {
  id: number;
  name: string;
  price: string;
  onAddToCart: (id: number) => void;
}

export default function ProductItem({ id, name, price, onAddToCart }: ProductItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => onAddToCart(id)}
      >
        <Text style={styles.addButtonText}>THÊM VÀO GIỎ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
