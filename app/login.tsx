import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🥕</Text>

      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      <TextInput placeholder="Email" style={styles.input} />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.forgot}>Forgot Password?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.bottom}>
        Don't have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/sign-up")}>
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
  forgot: {
    textAlign: "right",
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