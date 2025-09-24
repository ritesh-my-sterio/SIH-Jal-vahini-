import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import SummaryCard from '@/components/summary-card';
import LanguageSwitcher from '@/components/language-switcher';

// Width for slider images
const { width } = Dimensions.get('window');

// Import your images (relative paths because index.tsx is in app/(tabs)/)
const sliderImages = [
   require('../../assets/images/water3.png')
,
  require('../../assets/images/water2.png'),
 ,
  require('../../assets/images/water4.png')
  , 
];

const translations: Record<string, any> = {
  en: {
    dashboard: "JalVahini Dashboard",
    reportedCases: "Reported Cases",
    waterTests: "Water Tests",
    activeAlerts: "Active Alerts",
    highRiskAreas: "High-Risk Areas",
    reportSymptoms: "Report Symptoms",
    reportWater: "Submit Water Quality Data",
    education: "Community Education",
    outbreakMap: "Outbreak Risk Map",
    alerts: "Alerts & Notifications",
    welcome: "Welcome",
    WaterQuality:"Water Quality Checker"
  },
  hi: {
    dashboard: "जलवाहिनी डैशबोर्ड",
    reportedCases: "रिपोर्ट किए गए मामले",
    waterTests: "जल परीक्षण",
    activeAlerts: "सक्रिय अलर्ट",
    highRiskAreas: "उच्च जोखिम वाले क्षेत्र",
    reportSymptoms: "लक्षण रिपोर्ट करें",
    reportWater: "जल गुणवत्ता डेटा सबमिट करें",
    education: "सामुदायिक शिक्षा",
    outbreakMap: "प्रकोप जोखिम मानचित्र",
    alerts: "अलर्ट और सूचनाएँ",
    welcome: "स्वागत है",
  }
};

export default function HomeScreen() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const { username } = useLocalSearchParams<{ username?: string }>();
  const t = translations[language]; 

  const reportedCases = 1204;
  const waterTests = 342;
  const activeAlerts = 5;
  const highRiskAreas = 3;

  return (
    <View style={{ flex: 1, backgroundColor: '#02305aff' }}>
      
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Jal Vahini</Text>
      </View>

      <ScrollView
        headerBackgroundColor={{ light: '#003366', dark: '#003366' }}
        headerImage={<View style={styles.headerGradient} />}
      >
        <ThemedView style={styles.container}>
          {username && (
            <ThemedText type="subtitle" style={styles.welcome}>
              {t.welcome}, {username}!
            </ThemedText>
          )}
        </ThemedView>

        {/* Image Slider */}
        <View style={styles.sliderContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {sliderImages.map((img, index) => (
              <Image key={index} source={img} style={styles.sliderImage} resizeMode="cover" />
            ))}
          </ScrollView>
        </View>

        <ThemedView style={styles.container}>
          <LanguageSwitcher selected={language} onChange={setLanguage} />

          <ThemedText type="title" style={styles.title}>
            {t.dashboard}
          </ThemedText>

          {/* Summary Cards */}
          <View style={styles.cardsRow}>
            <SummaryCard title={t.reportedCases} value={reportedCases.toString()} />
            <SummaryCard title={t.waterTests} value={waterTests.toString()} />
          </View>
          <View style={styles.cardsRow}>
            <SummaryCard title={t.activeAlerts} value={activeAlerts.toString()} />
            <SummaryCard title={t.highRiskAreas} value={highRiskAreas.toString()} />
          </View>

          {/* Navigation Links */}
          {/* <View style={styles.navigationContainer}>

            <Link href="/water-quality" style={styles.navLink}>
              <ThemedText type="subtitle">{t.WaterQuality}</ThemedText>
            </Link>
            <Link href="/report-symptom" style={styles.navLink}>
              <ThemedText type="subtitle">{t.reportSymptoms}</ThemedText>
            </Link>
            <Link href="/report-water" style={styles.navLink}>
              <ThemedText type="subtitle">{t.reportWater}</ThemedText>
            </Link>
            <Link href="/education" style={styles.navLink}>
              <ThemedText type="subtitle">{t.education}</ThemedText>
            </Link>
            <Link href="/outbreak-risk" style={styles.navLink}>
              <ThemedText type="subtitle">{t.outbreakMap}</ThemedText>
            </Link>
            <Link href="/alerts" style={styles.navLink}>
              <ThemedText type="subtitle">{t.alerts}</ThemedText>
            </Link>
            
          </View> */}
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    width: '100%',
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c6def5ff',
    elevation: 4,
  },
  navbarTitle: {
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    paddingHorizontal: 2,
    paddingVertical: 12,
    width:'100%',
    backgroundColor: '#bcd0e4ff',
     borderRadius:3
  },
  headerGradient: {
    height: 0,
    width: '100%',
    backgroundColor: '#e6f0ff',
  },
  welcome: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',width: '100%',  
  },
  title: {
    marginVertical: 16,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',width: '100%'
  },
  sliderContainer: {
    width: '100%',
    height: 200,
    marginVertical: 12,
  },
  sliderImage: {
    width: width,
    height: 200,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 12,
    backgroundColor: '#bcd0e4ff',
  },
  navigationContainer: {
    marginTop: 30,
    gap: 16,
    backgroundColor: '#003366',
    borderRadius:3,
    padding:20
  },
  navLink: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    color: '#000000',
  },
});
