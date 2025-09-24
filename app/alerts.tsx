import { StyleSheet, FlatList, View } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

const dummyAlerts = [
  { id: '1', disease: 'Cholera', message: 'Cholera outbreak reported in Ward 12. Take precautions.' },
  { id: '2', disease: 'Typhoid', message: '5 new Typhoid cases confirmed in Sector 5.' },
  { id: '3', disease: 'Diarrheal Infection', message: 'Water contamination suspected in River Colony.' },
  { id: '4', disease: 'Dysentery', message: 'Increase in Dysentery cases near Main Market.' },
];

export default function AlertsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.heading}>
        Alerts & Notifications
      </ThemedText>
      <FlatList
        data={dummyAlerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertBox}>
            <ThemedText type="subtitle" style={styles.disease}>
              {item.disease}
            </ThemedText>
            <ThemedText style={styles.message}>{item.message}</ThemedText>
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
    backgroundColor: '#f9f9f9',
  },
  heading: {
    marginBottom: 16,
    textAlign: 'center',
    color:"black",
    marginTop:"30"
  },
  alertBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 10,
    borderLeftColor: '#d9534f', // red stripe for alert effect
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,color:"black"
  },
  disease: {
    fontWeight: 'bold',
    marginBottom: 6,color:"black"
  },
  message: {
    color: '#333',
  },
});
