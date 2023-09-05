import { Text, View } from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}>
        <Text style={{ padding: 20 }}>
          Shahbaz
          <Text style={{ color: "red" }}>Alam</Text>
        </Text>
      </View>
    </View>
  );
}
