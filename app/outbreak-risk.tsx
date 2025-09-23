import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function OutbreakRiskScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Outbreak Risk Map</ThemedText>
      <ThemedText>View a map with real-time outbreak predictions and hotspots.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});
