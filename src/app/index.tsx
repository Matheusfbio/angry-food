import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const route = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/home.png")}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => route.push("/(top-tabs)/")}
        style={styles.button}
      >
        <Text>Peça agora</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "-21%",
    paddingVertical: "4%",
    paddingHorizontal: "39%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
  },
  text: {
    color: "black",
    fontSize: 15,
    justifyContent: "center",
    marginTop: 6,
    alignItems: "center",
  },
  image: {
    width: 450,
    height: 950,
    marginTop: -50,
  },
});
