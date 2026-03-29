import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 15 }}>
      
      {/* Location */}
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        📍 Dhaka, Banassre
      </Text>

      {/* Search */}
      <TextInput
        placeholder="Search Store"
        style={{
          backgroundColor: "#eee",
          padding: 12,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      {/* 🔥 BANNER (ẢNH LOCAL) */}
      <Image
        source={require("../../assets/images/banner.png")}
        style={{
          width: "100%",
          height: 150,
          borderRadius: 15,
          marginBottom: 20,
        }}
        resizeMode="cover"
      />

      {/* Exclusive */}
      <Section title="Exclusive Offer" />
      <ProductList router={router} />

      {/* Best Selling */}
      <Section title="Best Selling" />
      <ProductList router={router} />

      {/* Groceries */}
      <Section title="Groceries" />
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        <Box
          title="Chicken"
          image={require("../../assets/images/chicken.png")}
          onPress={() => router.push("/product/3")}
        />
        <Box
          title="Beef"
          image={require("../../assets/images/beef.png")}
          onPress={() => router.push("/product/4")}
        />
      </View>

    </ScrollView>
  );
}

function Section({ title }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
      <Text style={{ color: "green" }}>See all</Text>
    </View>
  );
}

function ProductList({ router }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Box
        title="Apple"
        image={require("../../assets/images/apple.png")}
        onPress={() => router.push("/product/1")}
      />
      <Box
        title="Banana"
        image={require("../../assets/images/banana.png")}
        onPress={() => router.push("/product/2")}
      />
      <Box
        title="Chilli"
        image={require("../../assets/images/chilli.png")}
        onPress={() => router.push("/product/5")}
      />
      <Box
        title="Criger"
        image={require("../../assets/images/criger.png")}
        onPress={() => router.push("/product/6")}
      />
    </ScrollView>
  );
}

function Box({ title, image, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        width: 120,
      }}
    >
      <Image
        source={image}
        style={{
          height: 80,
          width: "100%",
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

      <Text>{title}</Text>
      <Text>$4.99</Text>

      <View
        style={{
          backgroundColor: "green",
          padding: 6,
          borderRadius: 10,
          marginTop: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>+</Text>
      </View>
    </TouchableOpacity>
  );
}