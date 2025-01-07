import Home from "@/app";
import * as React from "react";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
