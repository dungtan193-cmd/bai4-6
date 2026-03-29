import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  // 🔥 Mapping ảnh theo id
  const products: any = {
    "1": {
      name: "Apple",
      image: require("../../assets/images/apple.png"),
    },
    "2": {
      name: "Banana",
      image: require("../../assets/images/banana.png"),
    },
    "3": {
      name: "Chicken",
      image: require("../../assets/images/chicken.png"),
    },
    "4": {
      name: "Beef",
      image: require("../../assets/images/beef.png"),
    },
    "5": {
      name: "Chilli",
      image: require("../../assets/images/chilli.png"),
    },
    "6": {
      name: "Criger",
      image: require("../../assets/images/criger.png"),
    },
  };

  const product = products[id as string];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Ionicons name="share-social-outline" size={24} />
      </View>

      {/* 🔥 ẢNH SẢN PHẨM LOCAL */}
      <Image
        source={product?.image}
        style={{ width: "100%", height: 250 }}
        resizeMode="contain"
      />

      {/* Info */}
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {product?.name}
        </Text>
        <Text style={{ color: "gray", marginBottom: 10 }}>
          1kg, Price
        </Text>

        {/* Quantity */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            
            <TouchableOpacity onPress={() => setQty(qty > 1 ? qty - 1 : 1)}>
              <Ionicons name="remove" size={20} />
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 15 }}>{qty}</Text>

            <TouchableOpacity onPress={() => setQty(qty + 1)}>
              <Ionicons name="add" size={20} color="green" />
            </TouchableOpacity>

          </View>

          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            $4.99
          </Text>
        </View>

        {/* Detail */}
        <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
          Product Detail
        </Text>
        <Text style={{ color: "gray", marginBottom: 15 }}>
          Fresh and high quality product. Good for health and daily use.
        </Text>

        {/* Nutrition */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text>Nutritions</Text>
          <Text>100gr</Text>
        </View>

        {/* Review */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text>Review</Text>
          <Text>⭐⭐⭐⭐⭐</Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Add To Basket
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}