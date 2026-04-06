import { Ionicons } from "@expo/vector-icons";
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
    quantity: 1,
    price: "$4.99",
    image: require("../../assets/images/chilli.png"),
  },
  {
    id: "2",
    name: "Egg Chicken Red",
    detail: "4pcs, Price",
    quantity: 1,
    price: "$1.99",
    image: require("../../assets/images/egg1.png"),
  },
  {
    id: "3",
    name: "Organic Bananas",
    detail: "12kg, Price",
    quantity: 1,
    price: "$3.00",
    image: require("../../assets/images/banana.png"),
  },
  {
    id: "4",
    name: "Ginger",
    detail: "250gm, Price",
    quantity: 1,
    price: "$2.99",
    image: require("../../assets/images/criger.png"),
  },
];

export default function CartScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="close" size={20} color="#B3B3B3" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Ionicons name="remove" size={18} color="#B3B3B3" />
            </TouchableOpacity>

            <Text style={styles.quantity}>{item.quantity}</Text>

            <TouchableOpacity style={styles.quantityButton}>
              <Ionicons name="add" size={18} color="#53B175" />
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>{item.price}</Text>
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

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Go to Checkout</Text>
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
    justifyContent: "space-between",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
  },

  detail: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 4,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  quantity: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 15,
    color: "#181725",
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },

  checkoutButton: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 30,
    backgroundColor: "#53B175",
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});