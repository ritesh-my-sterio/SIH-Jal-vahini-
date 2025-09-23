import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function EducationScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Community Education</ThemedText>
      <ThemedText>Access guides, tutorials, and health awareness materials.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});
