import { Link, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Meal() {
  return (
    <View style={styles.container}>
      <Text style={styles.button}>Refeições</Text>
      <TouchableOpacity onPress={() => router.navigate("../")}>
        <Text style={styles.button}>voltar para a home</Text>
      </TouchableOpacity>
      <Link replace href="/meet">
        Lista de refeições
      </Link>
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
