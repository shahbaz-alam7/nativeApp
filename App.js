import { useState } from "react";
import { Text, View, Modal, Button } from "react-native";
export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Open" onPress={() => setOpenModal(true)} />
      <Modal
        visible={openModal}
        animationType="slide"
        onRequestClose={() => setOpenModal(false)}
        presentationStyle="formSheet"
      >
        {/* animationType="slide" || "fade" */}
        <Text>Shahbaz</Text>
        <Button onPress={() => setOpenModal(false)} title="Close" />
      </Modal>
    </View>
  );
}
