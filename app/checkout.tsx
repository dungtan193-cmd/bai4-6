import { router } from "expo-router";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Checkout() {
  return (
    <Modal transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.handle} />

          <Text style={styles.title}>Checkout</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Delivery</Text>
            <Text style={styles.value}>Select Method</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Payment</Text>
            <Image
              source={require("../assets/images/card.png")}
              style={styles.card}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Promo Code</Text>
            <Text style={styles.value}>Pick discount</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Cost</Text>
            <Text style={styles.total}>$13.97</Text>
          </View>

          <Text style={styles.desc}>
            By placing an order you agree to our Terms And Conditions
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/orderAccepted")}
          >
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 35,
  },

  handle: {
    width: 50,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#ddd",
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 25,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },

  label: {
    fontSize: 18,
    color: "#7C7C7C",
  },

  value: {
    fontSize: 16,
    color: "#181725",
    fontWeight: "600",
  },

  total: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },

  card: {
    width: 40,
    height: 25,
    resizeMode: "contain",
  },

  desc: {
    fontSize: 13,
    color: "#7C7C7C",
    marginTop: 20,
    lineHeight: 20,
  },

  button: {
    height: 65,
    backgroundColor: "#53B175",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});