import React from "react";
import AppNavigator from "./navigation/AppNavigator";

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppNavigator />
  );
}

