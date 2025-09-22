import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to JalVahini Health Surveillance</Text>
      <Button title="Report Health Data" onPress={() => navigation.navigate('ReportForm')} />
      <Button title="View Alerts" onPress={() => navigation.navigate('AlertsScreen')} />
    </View>
  );
}
