import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const showAlert = () =>
    Alert.alert(
      "",
      "Voce esta indo para a tela do admin",
      [
        {
          // text: "OK",
          // onPress: () => Alert.alert("", "OK"),
        },
      ],
      {
        cancelable: true,
      }
    );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => router.navigate("(top-tabs)")}>
        {/* <Link href="/meet">asdasda</Link> */}

        <Text style={styles.button}>ir para o cardapio</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => router.navigate("/perfil")}>
        <Text style={styles.button}>ir para o perfil</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPressIn={showAlert}
        onPress={() => router.navigate("/dashboard")}
      >
        <Text style={styles.button}>ir para o painel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "black",
    justifyContent: "center",
    padding: 10,
    marginBottom: 5,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 15,
    justifyContent: "center",
    marginTop: 6,
    alignItems: "center",
  },
});
