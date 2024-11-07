// app/(session)/_layout.tsx
import { Stack } from "expo-router";

export default function SessionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="SignupScreen" />
    </Stack>
  );
}
