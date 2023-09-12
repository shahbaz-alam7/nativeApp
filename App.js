import { Text, View, Button, Image, Pressable } from "react-native";
import Img from "./assets/adaptive-icon.png";
import { useState } from "react";
export default function App() {
  const [disable, setDisable] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Pressable
        onPress={() => console.log("Image pressed")}
        onPressIn={() => setDisable(true)}
        onPressOut={() => setDisable(false)}
      >
        <Image source={Img} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
        disabled={disable}
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        adipisci aperiam, aliquam fuga a quae iure ipsam repellat quas dolore,
        consectetur quis est omnis at aut sequi accusamus veniam quisquam vel
        dignissimos, suscipit pariatur laudantium nulla? Earum commodi culpa
        autem nihil ut incidunt officia! Vel quaerat, vitae eaque ullam amet
        dolorum nihil dolor ipsam tempora. Odio, harum similique. Dignissimos
        aspernatur nemo saepe tenetur, quod atque corporis nostrum magnam
        voluptas magni numquam fugit iure vero nisi, sequi, dolores rerum
        doloribus. Repellat cum voluptates dicta molestias officia obcaecati
        unde eaque, consequuntur corporis nisi eveniet velit expedita sit, error
        iure magnam dignissimos ipsum tempore rerum voluptate esse dolorum
        laudantium. Maxime consectetur cupiditate blanditiis sit ut vero? Quis
        impedit, excepturi quia rem ex porro distinctio assumenda amet ipsa
        beatae, perspiciatis voluptatibus similique. Aspernatur.
      </Text>
    </View>
  );
}
