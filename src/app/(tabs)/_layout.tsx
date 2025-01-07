import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="meetBooks"
        options={{
          title: "MeetBooks",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="meet" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    </Stack>
  );
}
