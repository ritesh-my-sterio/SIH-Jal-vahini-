import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Dummy outbreak data
const outbreakTrend = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [5, 9, 6, 12, 15, 20, 25], // outbreak cases per day
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // red line
      strokeWidth: 2,
    },
  ],
};

const hotspots = [
  { id: '1', area: 'Ward 12', disease: 'Cholera', cases: 15 },
  { id: '2', area: 'Sector 5', disease: 'Typhoid', cases: 9 },
  { id: '3', area: 'River Colony', disease: 'Diarrheal Infection', cases: 7 },
];

export default function OutbreakRiskScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.heading}>
        Outbreak Risk Map
      </ThemedText>
      <ThemedText style={styles.subheading}>
        Real-time outbreak predictions and hotspots
      </ThemedText>

      {/* Outbreak Trend Graph */}
      <LineChart
        data={outbreakTrend}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#ff4d4d',
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* Hotspot List */}
      <FlatList
        data={hotspots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hotspotBox}>
            <ThemedText type="subtitle" style={styles.hotspotTitle}>
              {item.area}
            </ThemedText>
            <ThemedText style={{color:"black"}}>
              Disease: {item.disease} | Cases: {item.cases}
            </ThemedText>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#bcd0e4ff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 4,
    marginTop:30,
    color:"black"
  },
  subheading: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#555'
  },
  chart: {
    marginVertical: 16,
    borderRadius: 12,color:"black"
  },
  hotspotBox: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#ff4d4d',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  hotspotTitle: {
    fontWeight: 'bold',
    marginBottom: 4,color:"black"
  },
});
