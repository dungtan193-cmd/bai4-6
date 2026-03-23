import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Location() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Location</Text>

      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});