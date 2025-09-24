import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function ReportWaterScreen() {
  const [ph, setPh] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [hardness, setHardness] = useState('');
  const [contaminants, setContaminants] = useState('');
  const [file, setFile] = useState<any>(null);

  // Pick file for upload
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // could restrict to PDF, CSV, etc.
      });
      if (result.assets && result.assets.length > 0) {
        setFile(result.assets[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    if (!ph || !turbidity) {
      Alert.alert('Missing Data', 'Please enter at least pH and turbidity values.');
      return;
    }
    // TODO: Send data to backend / save locally
    Alert.alert(
      'Data Submitted',
      `pH: ${ph}\nTurbidity: ${turbidity}\nHardness: ${hardness}\nContaminants: ${contaminants}\nFile: ${file ? file.name : 'None'}`
    );

    // Clear inputs
    setPh('');
    setTurbidity('');
    setHardness('');
    setContaminants('');
    setFile(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Submit Water Quality Data
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Contribute water test results to help detect outbreaks.
        </ThemedText>

        {/* Input fields */}
        <TextInput
          style={styles.input}
          placeholder="pH Level"
          keyboardType="numeric"
          value={ph}
          onChangeText={setPh}
        />
        <TextInput
          style={styles.input}
          placeholder="Turbidity (NTU)"
          keyboardType="numeric"
          value={turbidity}
          onChangeText={setTurbidity}
        />
        <TextInput
          style={styles.input}
          placeholder="Hardness (mg/L)"
          keyboardType="numeric"
          value={hardness}
          onChangeText={setHardness}
        />
        <TextInput
          style={styles.input}
          placeholder="Other Contaminants (e.g., Lead, E. coli)"
          value={contaminants}
          onChangeText={setContaminants}
        />

        {/* File upload */}
        <Button title="Upload Lab Report" onPress={pickFile} />
        {file && (
          <ThemedText style={styles.fileText}>
            Selected: {file.name}
          </ThemedText>
        )}

        {/* Submit button */}
        <Button title="Submit Data"   onPress={handleSubmit} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    color:"black"
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  fileText: {
    marginVertical: 8,
    textAlign: 'center',
    color: '#333',
  },
});
