import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const favoriteData = [
  {
    id: "1",
    name: "Sprite Can",
    detail: "325ml, Price",
    price: "$1.50",
    image: require("../../assets/images/sprite.png"),
  },
  {
    id: "2",
    name: "Diet Coke",
    detail: "355ml, Price",
    price: "$1.99",
    image: require("../../assets/images/diet_coke.png"),
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    detail: "2L, Price",
    price: "$15.50",
    image: require("../../assets/images/orange_juice.png"),
  },
  {
    id: "4",
    name: "Coca Cola Can",
    detail: "325ml, Price",
    price: "$4.99",
    image: require("../../assets/images/coca_cola.png"),
  },
  {
    id: "5",
    name: "Pepsi Can",
    detail: "330ml, Price",
    price: "$4.99",
    image: require("../../assets/images/pepsi.png"),
  },
];

export default function FavoritesScreen() {

  const router = useRouter();
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.detail}>{item.detail}</Text>
        </View>

        <View style={styles.rightSide}>
          <Text style={styles.price}>{item.price}</Text>
          <Ionicons name="chevron-forward" size={22} color="#181725" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={favoriteData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/error")}
>
  <Text style={styles.buttonText}>Add All To Cart</Text>
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

  rightSide: {
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
    height: 65,
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
});