import { Text, View } from "react-native";

export default function Splash() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 30 }}>nectar</Text>
    </View>
  );
}