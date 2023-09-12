import { Text, View, Button, Alert } from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Press" onPress={() => Alert.alert("Invalid data")} />
      <Button
        title="Press2"
        onPress={() =>
          Alert.alert("Invalid data", "DOB is not in proper format")
        }
      />
      <Button
        title="Press3"
        onPress={() =>
          Alert.alert("Invalid data!", "Please enter valid data", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel button is pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK button is pressed"),
            },
          ])
        }
      />
    </View>
  );
}
