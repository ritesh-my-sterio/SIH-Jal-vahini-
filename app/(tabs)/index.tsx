import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import SummaryCard from '@/components/summary-card';
import LanguageSwitcher from '@/components/language-switcher';

export default function HomeScreen() {
  const [language, setLanguage] = useState('en');
  const { username } = useLocalSearchParams<{ username?: string }>();
  // Demo data (replace later with API/DB data)
  const diseaseReports = 124;
  const waterAlerts = 9;
  const outbreakRisk = 'Moderate';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8abaf1ff', dark: '#94c3f4ff' }}
      headerImage={
        <Image
          // source={require('../assets/images/health-header.png')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        {username && (
          <ThemedText type="subtitle" style={{ textAlign: 'center' }}>
            👋 Welcome, {username}!
          </ThemedText>
        )}
        {/* rest of your code */}
      </ThemedView>



      <ThemedView style={styles.container}>
        
        {/* Language Switcher */}
        <LanguageSwitcher selected={language} onChange={setLanguage} />

        {/* Title */}
        <ThemedText type="title" style={styles.title}>
          Smart Health Surveillance
        </ThemedText>

        {/* Summary Cards */}
        <View style={styles.cardsRow}>
          <SummaryCard title="Disease Reports" value={diseaseReports.toString()} />
          <SummaryCard title="Water Alerts" value={waterAlerts.toString()} />
          <SummaryCard title="Outbreak Risk" value={outbreakRisk} />
        </View>

        {/* Navigation Links */}
        <View style={styles.navigationContainer}>
          <Link href="/report-symptom" style={styles.navLink}>
            <ThemedText type="subtitle">📝 Report Symptoms</ThemedText>
          </Link>
          <Link href="/report-water" style={styles.navLink}>
            <ThemedText type="subtitle">💧 Submit Water Quality Data</ThemedText>
          </Link>
          <Link href="/education" style={styles.navLink}>
            <ThemedText type="subtitle">📚 Community Education</ThemedText>
          </Link>
          <Link href="/outbreak-risk" style={styles.navLink}>
            <ThemedText type="subtitle">🗺️ Outbreak Risk Map</ThemedText>
          </Link>
          <Link href="/alerts" style={styles.navLink}>
            <ThemedText type="subtitle">🔔 Alerts & Notifications</ThemedText>
          </Link>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerImage: {
    height: 200,
    width: '100%',
  },
  title: {
    marginVertical: 16,
    textAlign: 'center',
    fontSize: 20,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  navigationContainer: {
    marginTop: 30,
    gap: 16,
  },
  navLink: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
