import { Image, ScrollView, Text, View } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}
    >
      <ScrollView>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          asperiores, fugiat minus nesciunt pariatur dolorum vero autem dicta,
          commodi dolores repellendus quas praesentium consequuntur quis
          provident error! Accusantium quas, omnis explicabo nesciunt minima eum
          adipisci non ut doloremque quos consequatur, dolorum, minus optio
          voluptatibus fugit dolor commodi cum corporis autem enim earum natus
          vero est accusamus? Fugiat dolor error reprehenderit. Autem, ullam
          ratione nemo voluptatem ducimus amet, odit repellat perspiciatis
          expedita quod aliquid laboriosam, esse officia fugit. Hic recusandae
          eos deserunt quia. Ex nemo tempore, perferendis voluptatem numquam
          totam veritatis hic nobis autem doloremque, aspernatur in, vitae culpa
          animi unde illum? Voluptas omnis amet aliquid quas nisi possimus alias
          doloribus minima, accusamus fuga maxime deleniti praesentium, magni
          beatae ducimus, libero inventore veritatis cum!
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    </View>
  );
}
