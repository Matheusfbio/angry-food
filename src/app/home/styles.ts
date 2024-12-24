import { colors } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
