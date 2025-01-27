import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
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
import { useState } from "react";
import { Catalog } from "@/components/products/catalog";

export default function Meet() {
  const today = new Date();
  const [initializing, setInitializing] = useState(true);

  return initializing ? (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Refeições da(o) {getDayOfWeek(today)}</Text>
      <View style={styles.menu}>
        <Catalog />
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => router.replace("../")}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Refeições da(o) {getDayOfWeek(today)}</Text>
      <View style={styles.TernaryMenu}>
        <View>
          <ActivityIndicator size={80} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.bold,
    marginTop: 20,
    marginBottom: -10,
    fontSize: 26,
  },
  subtitle: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: 16,
  },

  menu: {
    flex: 1,
    marginTop: 22,
    // backgroundColor: "#c00303",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  TernaryMenu: {
    flex: 1,
    marginTop: 42,
    width: "100%",
    backgroundColor: colors.white,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  BackButton: {
    marginTop: "-15%",
    paddingVertical: "4%",
    paddingHorizontal: "43%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
  },
});
