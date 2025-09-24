import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface LanguageSwitcherProps {
  selected: string;
  onChange: (lang: string) => void;
}

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },

];

export default function LanguageSwitcher({ selected, onChange }: LanguageSwitcherProps) {
  return (
    <View style={styles.container}>
      {languages.map(({ code, label }) => (
        <TouchableOpacity
          key={code}
          style={[styles.button, selected === code && styles.selected]}
          onPress={() => onChange(code)}
        >
          <Text style={selected === code ? styles.selectedText : styles.text}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', marginVertical: 8,gap:50 },
  button: {
    marginHorizontal: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#003366',
  },
  selected: { backgroundColor: '#003366' },
  text: { color: '#003366' },
  selectedText: { color: '#fff', fontWeight: 'bold' },
});
