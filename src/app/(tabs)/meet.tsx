import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import getDayOfWeek from "@/logics/dayNow";
import QRCode from "react-native-qrcode-svg";
import { fontFamily } from "@/styles/fontFamily";
import { colors } from "@/styles/color";
import { Link, router } from "expo-router";

export default function Meet() {
  const today = new Date(); // Data atual

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.background}
        source={require("@/assets/cover.png")}
        resizeMethod="auto"
      >
        <Text style={styles.title}>Refeições da(o) {getDayOfWeek(today)}</Text>
        <View style={styles.menu}>
          <View style={styles.qrcode}>
            <QRCode
              value="https://docs.google.com/document/d/1xhs4c4U5_XVieW-J_YEjHTqjE0VnUiNf/edit?usp=sharing&ouid=109852819374623588395&rtpof=true&sd=true"
              size={130}
            />
            <Text style={styles.title}>Leia o QRCode</Text>
          </View>
          <ScrollView></ScrollView>
        </View>
      </ImageBackground>
      <TouchableOpacity onPress={() => router.replace("/meetBooks")}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.bold,
    marginTop: 40,
    marginBottom: -20,
    fontSize: 26,
  },
  subtitle: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: 16,
  },

  menu: {
    flex: 1,
    marginTop: 42,
    width: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  qrcode: {
    flex: 0.5,
    marginBottom: -20,
    alignItems: "center",
    justifyContent: "center",
  },
});
