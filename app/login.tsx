import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'User' | 'Contributor'>('User');

  const handleLogin = () => {
    // Basic validation (can replace with real API call)
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    // Here you could add API authentication logic
    // On success, navigate to home page
    router.replace({
      pathname: '/', // your HomeScreen route
      params: { username: email }, // pass username to home page
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      {/* Role Selection */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'User' && styles.activeRole]}
          onPress={() => setRole('User')}
        >
          <Text style={[styles.roleText, role === 'User' && styles.activeRoleText]}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, role === 'Contributor' && styles.activeRole]}
          onPress={() => setRole('Contributor')}
        >
          <Text style={[styles.roleText, role === 'Contributor' && styles.activeRoleText]}>
            Contributor
          </Text>
        </TouchableOpacity>
      </View>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR CONTINUE WITH</Text>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff' }]}>
          <Text style={{ textAlign: 'center' }}>G Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#003366' }]}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>F Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.signupText}>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#bcd0e4ff', justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20 },
  roleContainer: { flexDirection: 'row', marginBottom: 20 },
  roleButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  activeRole: { backgroundColor: '#003366', borderColor: '#003366' },
  roleText: { textAlign: 'center', color: '#333' },
  activeRoleText: { color: '#fff', fontWeight: 'bold' },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  forgot: { textAlign: 'right', color: '#003366', marginBottom: 20 },
  signInButton: { backgroundColor: '#003366', paddingVertical: 15, borderRadius: 5, marginBottom: 15 },
  signInText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  orText: { textAlign: 'center', color: '#555', marginBottom: 15 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  socialButton: { flex: 1, paddingVertical: 12, borderRadius: 5, marginHorizontal: 5 },
  signupText: { textAlign: 'center', color: '#555' },
});
