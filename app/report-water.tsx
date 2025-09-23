import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function ReportWaterScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Submit Water Quality Data</ThemedText>
      <ThemedText>Upload water test results or manually enter quality parameters.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});
