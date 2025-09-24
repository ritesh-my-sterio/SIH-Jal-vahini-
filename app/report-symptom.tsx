import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Picker } from '@react-native-picker/picker';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

export default function ReportSymptomScreen() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [disease, setDisease] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = () => {
    if (!username || !location || !disease || !symptoms) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Here you can send data to backend or Firebase
    Alert.alert("Submitted!", `Reported by ${username}\nLocation: ${location}\nDisease: ${disease}\nSymptoms: ${symptoms}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.heading}>Report Symptoms</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={disease}
          onValueChange={(itemValue) => setDisease(itemValue)}
        >
          <Picker.Item label="Select Disease" value="" />
          <Picker.Item label="Diarrhoea" value="Diarrhoea" />
          <Picker.Item label="Cholera" value="Cholera" />
          <Picker.Item label="Typhoid" value="Typhoid" />
          <Picker.Item label="Hepatitis A" value="Hepatitis A" />
        </Picker>
      </View>

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter symptoms description"
        value={symptoms}
        onChangeText={setSymptoms}
        multiline
      />

      <Button  title="Submit Report" onPress={handleSubmit} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#bcd0e4ff' },
  heading: { textAlign: 'center', marginBottom: 20,marginTop:30 ,color:"black" },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff'
  }
});
