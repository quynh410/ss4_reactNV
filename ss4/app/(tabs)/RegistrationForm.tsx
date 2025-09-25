import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RegistrationFormScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const updateForm = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const handleBlur = (field: string) => {
    let error = '';

    switch (field) {
      case 'name':
        if (form.name.trim() === '') {
          error = 'Tên không được để trống';
        }
        break;
      case 'email':
        if (form.email.trim() === '') {
          error = 'Email không được để trống';
        } else if (!validateEmail(form.email)) {
          error = 'Email không đúng định dạng';
        }
        break;
      case 'password':
        if (form.password === '') {
          error = 'Mật khẩu không được để trống';
        } else if (!validatePassword(form.password)) {
          error = 'Mật khẩu phải dài ít nhất 6 ký tự';
        }
        break;
      case 'confirmPassword':
        if (form.confirmPassword === '') {
          error = 'Xác nhận mật khẩu không được để trống';
        } else if (!validateConfirmPassword(form.password, form.confirmPassword)) {
          error = 'Mật khẩu xác nhận không khớp';
        }
        break;
    }

    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const isFormValid = () => {
    return (
      form.name.trim() !== '' &&
      form.email.trim() !== '' &&
      validateEmail(form.email) &&
      form.password !== '' &&
      validatePassword(form.password) &&
      form.confirmPassword !== '' &&
      validateConfirmPassword(form.password, form.confirmPassword)
    );
  };

  const handleRegister = () => {
    const newErrors = {
      name: form.name.trim() === '' ? 'Tên không được để trống' : '',
      email: form.email.trim() === '' ? 'Email không được để trống' : 
             !validateEmail(form.email) ? 'Email không đúng định dạng' : '',
      password: form.password === '' ? 'Mật khẩu không được để trống' :
                !validatePassword(form.password) ? 'Mật khẩu phải dài ít nhất 6 ký tự' : '',
      confirmPassword: form.confirmPassword === '' ? 'Xác nhận mật khẩu không được để trống' :
                      !validateConfirmPassword(form.password, form.confirmPassword) ? 'Mật khẩu xác nhận không khớp' : ''
    };

    setErrors(newErrors);

    if (isFormValid()) {
      Alert.alert(
        'Đăng ký thành công!',
        `Chào mừng ${form.name}!\nEmail: ${form.email}`,
        [{ text: 'OK' }]
      );
      
      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký tài khoản</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên *</Text>
        <TextInput
          style={[styles.input, errors.name ? styles.inputError : null]}
          placeholder="Nhập họ tên"
          value={form.name}
          onChangeText={(value) => updateForm('name', value)}
          onBlur={() => handleBlur('name')}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={[styles.input, errors.email ? styles.inputError : null]}
          placeholder="Nhập email"
          value={form.email}
          onChangeText={(value) => updateForm('email', value)}
          onBlur={() => handleBlur('email')}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu *</Text>
        <TextInput
          style={[styles.input, errors.password ? styles.inputError : null]}
          placeholder="Nhập mật khẩu (ít nhất 6 ký tự)"
          value={form.password}
          onChangeText={(value) => updateForm('password', value)}
          onBlur={() => handleBlur('password')}
          secureTextEntry={true}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Xác nhận mật khẩu *</Text>
        <TextInput
          style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
          placeholder="Nhập lại mật khẩu"
          value={form.confirmPassword}
          onChangeText={(value) => updateForm('confirmPassword', value)}
          onBlur={() => handleBlur('confirmPassword')}
          secureTextEntry={true}
        />
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
      </View>

      <TouchableOpacity
        style={[styles.button, !isFormValid() ? styles.buttonDisabled : null]}
        onPress={handleRegister}
        disabled={!isFormValid()}
      >
        <Text style={[styles.buttonText, !isFormValid() ? styles.buttonTextDisabled : null]}>
          Đăng ký
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
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
  inputError: {
    borderColor: '#ff4444',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextDisabled: {
    color: '#999',
  },
});
