import { Image, ImageBackground, Text, View } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}>
        <Text style={{ padding: 20 }}>
          Shahbaz
          <Text style={{ color: "red" }}>Alam</Text>
        </Text>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
        <ImageBackground source={{ logoImage }} style={{ flex: 1 }}>
          <Text>Shahbaz</Text>
        </ImageBackground>
      </View>
    </View>
  );
}
