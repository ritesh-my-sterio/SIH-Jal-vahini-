import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import SummaryCard from '@/components/summary-card';
import LanguageSwitcher from '@/components/language-switcher';
import { Image } from 'expo-image';

export default function HomeScreen() {
  // Example state, replace with real data or API/application state
  const [language, setLanguage] = useState('en');
  const diseaseReports = 124;
  const waterAlerts = 9;
  const outbreakRiskLevel = 'Moderate';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4a90e2', dark: '#003366' }}
      headerImage={<Image source={require('@/assets/images/health-header.png')} style={styles.headerImage} />}
    >
      <ThemedView style={styles.container}>
        <LanguageSwitcher selected={language} onChange={setLanguage} />
        
        <ThemedText type="title" style={styles.titleText}>
          Welcome to the Health Surveillance System
        </ThemedText>

        <View style={styles.cardsContainer}>
          <SummaryCard title="Disease Reports" value={diseaseReports.toString()} />
          <SummaryCard title="Water Alerts" value={waterAlerts.toString()} />
          <SummaryCard title="Outbreak Risk" value={outbreakRiskLevel} />
        </View>

        <ThemedText type="subtitle" style={styles.instructionText}>
          Use the tabs below to report symptoms, log water quality data, or view educational materials.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleText: {
    marginVertical: 16,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  instructionText: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
  },
  headerImage: {
    height: 200,
    width: '100%',
  },
});
