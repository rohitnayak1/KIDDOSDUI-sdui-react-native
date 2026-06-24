import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import homepage from "./src/mocks/homepage.json";
import { ThemeProvider } from "./src/context/ThemeContext";
import { CampaignProvider } from "./src/context/CampaignContext";

export default function App() {
  return (
    <CampaignProvider>
      <ThemeProvider theme={homepage.theme}>
        <HomeScreen />
      </ThemeProvider>
    </CampaignProvider>
  );
}