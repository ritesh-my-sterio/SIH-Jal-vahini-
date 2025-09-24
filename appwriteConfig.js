import { Client, Account, Health } from "react-native-appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // ✅ remove "!"
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID); // ✅ remove "!"

export const account = new Account(client);
export const health = new Health(client);
export { client };
