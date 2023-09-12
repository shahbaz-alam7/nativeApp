import { Text, View, ActivityIndicator } from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="black" />
      <ActivityIndicator size="large" color="black" animating={false} />
    </View>
  );
}
