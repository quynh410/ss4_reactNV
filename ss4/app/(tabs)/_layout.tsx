import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import CounterScreen from './Counter';
import UserList from './UserList';
import LightBulbScreen from './LightBulb';
import LoginFormScreen from './LoginForm';
import CurrencyConverterScreen from './CurrencyConverter';
import TodoListScreen from './TodoList';
import RegistrationFormScreen from './RegistrationForm';
import ShopScreen from './ShopScreen';

export default function TabLayout() {
  const [currentScreen, setCurrentScreen] = useState('counter');

  const screens = [
    { key: 'counter', title: 'Đếm số', component: CounterScreen },
    { key: 'userList', title: 'Danh sách User', component: UserList },
    { key: 'lightBulb', title: 'Bóng đèn', component: LightBulbScreen },
    { key: 'loginForm', title: 'Đăng nhập', component: LoginFormScreen },
    { key: 'registrationForm', title: 'Đăng ký', component: RegistrationFormScreen },
    { key: 'shopScreen', title: 'Cửa hàng', component: ShopScreen },
    { key: 'currencyConverter', title: 'Chuyển đổi tiền', component: CurrencyConverterScreen },
    { key: 'todoList', title: 'Todo List', component: TodoListScreen },
  ];

  const currentScreenData = screens.find(screen => screen.key === currentScreen);
  const CurrentComponent = currentScreenData?.component || CounterScreen;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.menuContainer}
        >
          {screens.map((screen) => (
            <TouchableOpacity
              key={screen.key}
              style={[
                styles.menuButton,
                currentScreen === screen.key && styles.activeMenuButton
              ]}
              onPress={() => setCurrentScreen(screen.key)}
            >
              <Text style={[
                styles.menuButtonText,
                currentScreen === screen.key && styles.activeMenuButtonText
              ]}>
                {screen.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.content}>
        <CurrentComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  activeMenuButton: {
    backgroundColor: 'white',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  activeMenuButtonText: {
    color: '#007AFF',
  },
  content: {
    flex: 1,
  },
});
