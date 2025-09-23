import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';

interface SummaryCardProps {
  title: string;
  value: string;
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <View style={styles.card}>
     
      <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
      <ThemedText type="title" style={styles.value}>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 8,
    padding: 12,
    backgroundColor: '#10a0e3ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
