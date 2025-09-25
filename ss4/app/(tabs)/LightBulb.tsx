import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LightBulbScreen() {
  const [isOn, setIsOn] = useState(false);

  // Hàm để bật/tắt đèn
  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={isOn ? styles.containerOn : styles.containerOff}>
      {/* Hiển thị bóng đèn */}
      <Text style={styles.bulbIcon}>💡</Text>
      
      <TouchableOpacity style={styles.button} onPress={toggleLight}>
        <Text style={styles.buttonText}>
          {isOn ? 'TẮT ĐÈN' : 'BẬT ĐÈN'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container khi đèn bật - màu sáng
  containerOn: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Container khi đèn tắt - màu tối
  containerOff: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Icon bóng đèn
  bulbIcon: {
    fontSize: 120,
    marginBottom: 50,
  },
  
  // Nút bấm
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  
  // Text trong nút bấm
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
