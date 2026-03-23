import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🥕</Text>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.terms}>
        By continuing you agree to our Terms of Service and Privacy Policy
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.bottom}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/login")}>
          Signup
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  logo: { fontSize: 40, textAlign: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { color: "gray", marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  terms: {
    fontSize: 12,
    color: "gray",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold" },
  bottom: {
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "#53B175",
    fontWeight: "bold",
  },
});