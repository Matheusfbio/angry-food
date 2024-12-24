import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import getDayOfWeek from "@/logics/dayNow";
import QRCode from "react-native-qrcode-svg";

export default function Home() {
  const today = new Date(); // Data atual

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
    </View>
  );
}
