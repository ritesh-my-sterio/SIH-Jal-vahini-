import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView  style={styles.innerContainer}>
        <View style={styles.navigationContainer}>
          <Link href="/water-quality" style={styles.navLink}>
            <ThemedText type="subtitle">Water Quality</ThemedText>
          </Link>
          <Link href="/report-symptom" style={styles.navLink}>
            <ThemedText type="subtitle">Report Symptoms</ThemedText>
          </Link>
          <Link href="/report-water" style={styles.navLink}>
            <ThemedText type="subtitle">Submit Water Quality Data</ThemedText>
          </Link>
          <Link href="/education" style={styles.navLink}>
            <ThemedText type="subtitle">Community Education</ThemedText>
          </Link>
          <Link href="/outbreak-risk" style={styles.navLink}>
            <ThemedText type="subtitle">Outbreak Risk Map</ThemedText>
          </Link>
          <Link href="/alerts" style={styles.navLink}>
            <ThemedText type="subtitle">Alerts & Notifications</ThemedText>
          </Link>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    padding: 20,
    gap: 20,height:"100%"

    
  },
  navLink: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  container: {
    paddingHorizontal: 2,
    paddingVertical: 12,
    width:'100%',
    backgroundColor: '#bcd0e4ff',
     borderRadius:3,
  },
 innerContainer: {
    
    height:"100%" ,
    gap: 16,
    backgroundColor: '#003366',
    borderRadius:3,
    padding:20
  }
});
