import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const cartData = [
  {
    id: "1",
    name: "Bell Pepper Red",
    detail: "1kg, Price",
    price: "$4.99",
    image: require("../../assets/images/chilli.png"),
  },
  {
    id: "2",
    name: "Egg Chicken Red",
    detail: "4pcs, Price",
    price: "$1.99",
    image: require("../../assets/images/egg1.png"),
  },
  {
    id: "3",
    name: "Organic Bananas",
    detail: "12kg, Price",
    price: "$3.00",
    image: require("../../assets/images/banana.png"),
  },
];

export default function CartScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.detail}>{item.detail}</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.price}>{item.price}</Text>
          <Ionicons name="chevron-forward" size={22} color="#181725" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/checkout")}
      >
        <Text style={styles.buttonText}>Go to Checkout</Text>

        <View style={styles.priceBox}>
          <Text style={styles.priceBoxText}>$12.96</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#181725",
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 15,
  },

  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
  },

  detail: {
    fontSize: 14,
    color: "#7C7C7C",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
    marginRight: 10,
  },

  button: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 30,
    height: 67,
    backgroundColor: "#53B175",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  priceBox: {
    position: "absolute",
    right: 15,
    backgroundColor: "#489E67",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  priceBoxText: {
    color: "#fff",
    fontWeight: "600",
  },
});