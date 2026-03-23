import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Phone() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>

      <TextInput
        placeholder="+84"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/otp")}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold" },
});