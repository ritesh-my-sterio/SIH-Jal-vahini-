import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function AlertsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Alerts & Notifications</ThemedText>
      <ThemedText>Stay updated with latest health and water alerts.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});
