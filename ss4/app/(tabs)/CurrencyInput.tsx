import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface CurrencyInputProps {
  currency: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
}

export default function CurrencyInput({ currency, value, onValueChange, placeholder }: CurrencyInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{currency}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onValueChange}
        placeholder={placeholder}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
});
