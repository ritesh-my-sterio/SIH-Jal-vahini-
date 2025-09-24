import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { health } from "../appwriteConfig";

export default function App() {
  useEffect(() => {
    const test = async () => {
      try {
        const res = await health.get();
        console.log("✅ Appwrite is running:", res);
      } catch (err) {
        console.error("❌ Appwrite error:", err);
      }
    };
    test();
  }, []);

  return (
    <View>
      <Text>🚀 Testing Appwrite Connection</Text>
    </View>
  );
}
