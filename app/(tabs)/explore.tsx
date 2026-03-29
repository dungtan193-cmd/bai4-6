import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Explore() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
      
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
      }}>
        Find Products
      </Text>

      <TextInput
        placeholder="Search Store"
        style={{
          backgroundColor: "#eee",
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>

        <Card title="Fresh Fruits & Vegetable" image={require("../../assets/images/fruits.png")} color="#d4f5dd" />
        <Card title="Cooking Oil & Ghee" image={require("../../assets/images/oil.png")} color="#ffe4cc" />
        <Card title="Meat & Fish" image={require("../../assets/images/meat.png")} color="#ffd6d6" />
        <Card title="Bakery & Snacks" image={require("../../assets/images/bakery.png")} color="#e6ddff" />
        <Card title="Dairy & Eggs" image={require("../../assets/images/dairy.png")} color="#fff3cc" />

        {/* 🔥 QUAN TRỌNG */}
        <Card
          title="Beverages"
          image={require("../../assets/images/drinks.png")}
          color="#d6ecff"
          onPress={() => router.push("/beverages")}
        />

      </View>
    </ScrollView>
  );
}

function Card({ title, image, color, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "47%",
        backgroundColor: color,
        padding: 15,
        borderRadius: 20,
        alignItems: "center",
      }}
    >
      <Image
        source={image}
        style={{ width: 80, height: 80, marginBottom: 10 }}
        resizeMode="contain"
      />

      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}