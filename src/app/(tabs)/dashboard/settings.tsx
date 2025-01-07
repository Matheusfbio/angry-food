import { Link, Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Settigs() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
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
    color: "white",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#000",
    alignItems: "center",
  },
});
