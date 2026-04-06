import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

export default function CheckboxItem({
  label,
  checked,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: checked ? "#53B175" : "#DADADA",
          backgroundColor: checked ? "#53B175" : "#fff",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 15,
        }}
      >
        {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>

      <Text
        style={{
          fontSize: 16,
          color: checked ? "#53B175" : "#181725",
          fontWeight: checked ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}