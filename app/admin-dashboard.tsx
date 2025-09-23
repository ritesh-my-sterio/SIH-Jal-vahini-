import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function AdminDashboard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Admin Dashboard</ThemedText>
      <ThemedText>Welcome, Admin! Manage reports, alerts, and users here.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});
