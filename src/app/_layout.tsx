import { colors } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(top-tabs)"
        options={{
          headerShown: false,
          title: "Cardapio",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="perfil" options={{ headerShown: false }} />
    </Stack>
  );
}
