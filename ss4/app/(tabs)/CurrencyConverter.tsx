import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrencyInput from './CurrencyInput';

export default function CurrencyConverterScreen() {
  // State quản lý ở component cha
  const [vndValue, setVndValue] = useState('');
  const [usdValue, setUsdValue] = useState('');

  // Tỷ giá: 1 USD = 25,000 VND
  const EXCHANGE_RATE = 25000;

  // Hàm xử lý khi thay đổi VND
  const handleVndChange = (value: string) => {
    setVndValue(value);
    
    // Chuyển đổi VND sang USD
    if (value === '') {
      setUsdValue('');
    } else {
      const vnd = parseFloat(value);
      if (!isNaN(vnd)) {
        const usd = (vnd / EXCHANGE_RATE).toFixed(2);
        setUsdValue(usd);
      }
    }
  };

  // Hàm xử lý khi thay đổi USD
  const handleUsdChange = (value: string) => {
    setUsdValue(value);
    
    // Chuyển đổi USD sang VND
    if (value === '') {
      setVndValue('');
    } else {
      const usd = parseFloat(value);
      if (!isNaN(usd)) {
        const vnd = (usd * EXCHANGE_RATE).toFixed(0);
        setVndValue(vnd);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chuyển đổi tiền tệ</Text>
      <Text style={styles.rate}>Tỷ giá: 1 USD = 25,000 VND</Text>
      
      {/* Component con cho VND */}
      <CurrencyInput
        currency="VND"
        value={vndValue}
        onValueChange={handleVndChange}
        placeholder="Nhập số tiền VND"
      />
      
      {/* Component con cho USD */}
      <CurrencyInput
        currency="USD"
        value={usdValue}
        onValueChange={handleUsdChange}
        placeholder="Nhập số tiền USD"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  rate: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
});
