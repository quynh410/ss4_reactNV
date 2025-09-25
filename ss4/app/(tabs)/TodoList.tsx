import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Update API Login' },
    { id: 2, name: 'Fix UI Bug' },
    { id: 3, name: 'Test App' }
  ]);
  
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      Alert.alert('Lỗi', 'Nhập tên công việc!');
      return;
    }
    
    const newId = Math.max(...tasks.map(t => t.id)) + 1;
    setTasks([...tasks, { id: newId, name: newTask.trim() }]);
    setNewTask('');
  };

  // Hàm xóa task
  const deleteTask = (id: number) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc muốn xóa công việc này?',
      [
        { text: 'Hủy', style: 'cancel' },
        { 
          text: 'Xóa', 
          style: 'destructive',
          onPress: () => setTasks(tasks.filter(task => task.id !== id))
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Todo List</Text>
      
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Nhập tên công việc"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
        />
        <Button title="Thêm" onPress={addTask} />
      </View>

      <View style={styles.taskList}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <Text style={styles.taskName}>{task.name}</Text>
            <Button 
              title="Xóa" 
              color="red" 
              onPress={() => deleteTask(task.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#dadada',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    fontSize: 16,
  },
  taskList: {
    gap: 12,
  },
  taskItem: {
    borderWidth: 1,
    borderColor: '#dadada',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskName: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    color: '#333',
  },
});
