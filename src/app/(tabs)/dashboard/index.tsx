import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text style={styles.button}>Dashboard</Text> */}
      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text style={styles.button}>voltar para a home</Text>
      </TouchableOpacity>
      {/* <Link href="/">Home</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // color: "white",
    justifyContent: "center",
    padding: 10,
    // backgroundColor: "#000",
    alignItems: "center",
  },
});
