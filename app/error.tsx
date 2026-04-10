import { router } from "expo-router";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ErrorScreen() {
  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/banhmi.png")}
            style={styles.image}
          />

          <Text style={styles.title}>Oops! Order Failed</Text>

          <Text style={styles.subtitle}>
            Something went terribly wrong.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Please Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 35,
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
    fontSize: 17,
    fontWeight: "600",
    color: "#181725",
  },
});