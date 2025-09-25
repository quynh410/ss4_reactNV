import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserInfoCard from './UserInfoCard';

export default function UserList() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      
      <UserInfoCard
        name="Trần Văn An"
        avatarUrl="https://i.pravatar.cc/150?u=1"
        email="tran.an@example.com"
      />
      
      <UserInfoCard
        name="Lý Thị Bình"
        avatarUrl="https://i.pravatar.cc/150?u=2"
        email="ly.binh@example.com"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
});
