import { StyleSheet } from "react-native";
import Routing from "./components/Routing";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <GestureHandlerRootView>
      <NavigationContainer>
        <Routing />
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
