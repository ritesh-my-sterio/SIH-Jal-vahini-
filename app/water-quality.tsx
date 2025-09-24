import React, { useState } from 'react';
import { View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function WaterQualityScreen() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<any>(null);
  const [quality, setQuality] = useState<string | null>(null);

  const checkWaterQuality = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setQuality('Permission denied. Cannot check water quality.');
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // Simulated quality data (replace with API later)
      const qualities = ['Safe ✅', 'Moderate ⚠️', 'Unsafe ❌'];
      const randomQuality = qualities[Math.floor(Math.random() * qualities.length)];
      setQuality(randomQuality);
    } catch (error) {
      setQuality('Error fetching location or data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerText}>
          Water Quality Checker
        </ThemedText>
      </View>

      {/* Main Content */}
      <View style={styles.contentBox}>
        <Button title="Check My Location" onPress={checkWaterQuality} color="#003366" />

        {loading && (
          <ActivityIndicator size="large" color="#003366" style={{ marginTop: 20 }} />
        )}

        {location && (
          <ThemedText style={styles.result}>
            📍 Location: {location.coords.latitude.toFixed(3)}, {location.coords.longitude.toFixed(3)}
          </ThemedText>
        )}

        {quality && (
          <ThemedText style={styles.result}>
            💧 Water Quality: {quality}
          </ThemedText>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcd0e4ff',
    padding: 16,
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#003366',
    borderRadius: 10,
    marginBottom: 20,
    marginTop:30
  },
  headerText: {
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  contentBox: {
    flex: 1,
    backgroundColor: '#eff8fcff',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    justifyContent: 'flex-start',
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
