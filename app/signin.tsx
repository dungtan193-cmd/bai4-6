import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        Get your groceries{"\n"}with nectar
      </Text>

      {/* Phone */}
      <Text style={styles.phone}>+880</Text>

      {/* Or text */}
      <Text style={styles.or}>Or connect with social media</Text>

      {/* Google Button */}
      <TouchableOpacity
        style={styles.googleBtn}
        onPress={() => router.push("/phone")}
      >
        <Text style={styles.btnText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity
        style={styles.fbBtn}
        onPress={() => router.push("/phone")}
      >
        <Text style={styles.btnText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  phone: {
    fontSize: 18,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 30,
  },
  or: {
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  googleBtn: {
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  fbBtn: {
    backgroundColor: "#3b5998",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});