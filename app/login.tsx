import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LoginScreen() {
  const router = useRouter();
  const [role, setRole] = useState<'user' | 'admin' | null>(null);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (role === 'user' && username.trim()) {
      // Navigate to Home screen with username as param
      router.replace({ pathname: '/', params: { username } });
    } else if (role === 'admin') {
      router.replace('/admin-dashboard');
    }
  };

  return (
    <ThemedView style={styles.container}>
      {!role && (
        <>
          <ThemedText type="title" style={styles.title}>
            Select Role
          </ThemedText>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setRole('user')}
          >
            <ThemedText style={styles.buttonText}>Login as User</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setRole('admin')}
          >
            <ThemedText style={styles.buttonText}>Login as Admin</ThemedText>
          </TouchableOpacity>
        </>
      )}

      {role === 'user' && (
        <View style={styles.form}>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Enter Your Name
          </ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            value={username}
            onChangeText={setUsername}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <ThemedText style={styles.buttonText}>Continue</ThemedText>
          </TouchableOpacity>
        </View>
      )}

      {role === 'admin' && (
        <View style={styles.form}>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Admin Access
          </ThemedText>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <ThemedText style={styles.buttonText}>Go to Dashboard</ThemedText>
          </TouchableOpacity>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { marginBottom: 20 },
  subtitle: { marginBottom: 12 },
  button: {
    backgroundColor: '#007aff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: 250,
    marginBottom: 12,
  },
  form: { alignItems: 'center' },
});
