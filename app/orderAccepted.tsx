import { router } from "expo-router";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function OrderAccepted() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/tichxanh.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Your Order has been accepted</Text>

      <Text style={styles.subtitle}>
        Your items has been placed and is on it’s way to being processed
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.buttonText}>Track Order</Text>
      </TouchableOpacity>

     <TouchableOpacity
  onPress={() => {
    router.dismissAll();
    router.replace("/(tabs)/explore");
  }}
>
  <Text style={styles.backText}>Back to home</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#181725",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 50,
  },

  button: {
    width: "100%",
    height: 65,
    backgroundColor: "#53B175",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  backText: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "600",
  },
});