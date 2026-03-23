import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Onboarding() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/dung.jpg")}
      style={styles.container}
      resizeMode="cover"
    
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Welcome{"\n"}to our store
        </Text>

        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/signin")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 👈 QUAN TRỌNG NHẤT
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 30,
    backgroundColor: "rgba(0,0,0,0.3)", // làm mờ ảnh cho đẹp
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});