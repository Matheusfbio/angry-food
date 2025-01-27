import PrimaryButton from "@/components/button/PrimaryButton";
import { Catalog } from "@/components/products/catalog";
import { Link, router } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Drink() {
  // const handlePress = () => {
  // };
  const handlePress = () => {
    router.push("../");
    Alert.alert("Botão Clicado");
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.button}>Bebidas</Text> */}
      {/* <Catalog /> */}
      {/* <TouchableOpacity onPress={() => router.navigate("../")}>
        <Text style={styles.button}>voltar para a home</Text>
      </TouchableOpacity> */}
      <PrimaryButton title="EAAAEAAAEAAAEAAAEAAAEAAA" onPress={handlePress} />
      {/* <Link replace href="/meet">
        Lista de refeições
      </Link> */}
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
