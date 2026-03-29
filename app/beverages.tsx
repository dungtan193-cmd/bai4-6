import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Beverages() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
      
      {/* HEADER GIỐNG HÌNH */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        alignItems: "center"
      }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Beverages
        </Text>

        <Ionicons name="options-outline" size={24} />
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>

        <Card title="Diet Coke" price="$1.99" image={require("../assets/images/diet_coke.png")} />
        <Card title="Sprite Can" price="$1.50" image={require("../assets/images/sprite.png")} />
        <Card title="Apple & Grape Juice" price="$15.99" image={require("../assets/images/apple_grape.png")} />
        <Card title="Orange Juice" price="$15.99" image={require("../assets/images/orange_juice.png")} />
        <Card title="Coca Cola" price="$4.99" image={require("../assets/images/coca_cola.png")} />
        <Card title="Pepsi" price="$4.99" image={require("../assets/images/pepsi.png")} />

      </View>
    </ScrollView>
  );
}

function Card({ title, price, image }: any) {
  return (
    <View
      style={{
        width: "47%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#eee",
      }}
    >
      <Image
        source={image}
        style={{
          height: 80,        // 🔥 giảm từ 100 → 80
          width: "100%",
          marginBottom: 10,
        }}
        resizeMode="contain" // 🔥 QUAN TRỌNG
      />

      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <Text style={{ color: "gray", fontSize: 12 }}>
        325ml, Price
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{price}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}