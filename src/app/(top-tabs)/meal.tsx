import PrimaryButton from "@/components/button/PrimaryButton";
import { Link, router } from "expo-router";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Meal() {
  const handlePress = () => {
    router.push("../");
    Alert.alert("Botão Clicado");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.button}>Refeições</Text> */}
      <PrimaryButton title="EAAAEAAAEAAAEAAAEAAAEAAA" onPress={handlePress} />

      {/* <Link replace href="/meet">
        Lista de refeições
      </Link> */}
    </SafeAreaView>
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
