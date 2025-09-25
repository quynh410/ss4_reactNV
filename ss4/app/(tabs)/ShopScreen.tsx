import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductItem from './ProductItem';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export default function ShopScreen() {
  // State để quản lý giỏ hàng
  const [cart, setCart] = useState<CartItem[]>([]);

  // Danh sách sản phẩm
  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: '25.000.000₫' },
    { id: 2, name: 'MacBook Air M3', price: '32.000.000₫' },
    { id: 3, name: 'Apple Watch Series 9', price: '11.000.000₫' },
    { id: 4, name: 'AirPods Pro 2', price: '6.000.000₫' },
  ];

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      
      if (existingItem) {
        // Nếu sản phẩm đã có trong giỏ, tăng số lượng
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu sản phẩm chưa có trong giỏ, thêm mới với số lượng 1
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }];
      }
    });
  };

  // Tính tổng số lượng sản phẩm trong giỏ
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      {/* Header hiển thị số lượng sản phẩm trong giỏ */}
      <View style={styles.header}>
        <Text style={styles.cartText}>
          Số mặt hàng trong giỏ: {getTotalItems()}
        </Text>
      </View>

      {/* Danh sách sản phẩm */}
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onAddToCart={addToCart}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  productList: {
    flex: 1,
    paddingTop: 8,
  },
});
