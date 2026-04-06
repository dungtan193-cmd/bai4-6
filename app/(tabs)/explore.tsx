import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Egg Chicken Red",
    price: "$1.99",
    image: require("../../assets/images/egg1.png"),
  },
  {
    id: "2",
    name: "Egg Chicken White",
    price: "$1.50",
    image: require("../../assets/images/egg2.png"),
  },
  {
    id: "3",
    name: "Egg Pasta",
    price: "$15.99",
    image: require("../../assets/images/egg-noodle.png"),
  },
  {
    id: "4",
    name: "Egg Noodles",
    price: "$15.99",
    image: require("../../assets/images/pasta.png"),
  },
   {
    id: "4",
    name: "Egg Noodles",
    price: "$15.99",
    image: require("../../assets/images/mayonnaise.png"),
  },
   {
    id: "4",
    name: "Egg Noodles",
    price: "$15.99",
    image: require("../../assets/images/noodles.png"),
  },
];

function CheckboxItem({
  label,
  checked,
  onPress,
}: {
  label: string;
  checked: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxRow}>
      <View
        style={[
          styles.checkbox,
          checked && { backgroundColor: "#53B175", borderColor: "#53B175" },
        ]}
      >
        {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>

      <Text
        style={[
          styles.checkboxText,
          checked && { color: "#53B175", fontWeight: "600" },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function Explore() {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Eggs");
  const [selectedBrand, setSelectedBrand] = useState("Cocola");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#7C7C7C" />
          <TextInput
            placeholder="Search Store"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={() => setShowFilter(true)}>
          <Ionicons name="options-outline" size={28} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={showFilter} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setShowFilter(false)}>
                <Ionicons name="close" size={28} color="#181725" />
              </TouchableOpacity>

              <Text style={styles.filterTitle}>Filters</Text>

              <View style={{ width: 28 }} />
            </View>

            <Text style={styles.sectionTitle}>Categories</Text>

            {[
              "Eggs",
              "Noodles & Pasta",
              "Chips & Crisps",
              "Fast Food",
            ].map((item) => (
              <CheckboxItem
                key={item}
                label={item}
                checked={selectedCategory === item}
                onPress={() => setSelectedCategory(item)}
              />
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Brand</Text>

            {[
              "Individual Collection",
              "Cocola",
              "Ifad",
              "Kazi Farmas",
            ].map((item) => (
              <CheckboxItem
                key={item}
                label={item}
                checked={selectedBrand === item}
                onPress={() => setSelectedBrand(item)}
              />
            ))}

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setShowFilter(false)}
            >
              <Text style={styles.applyText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 25,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  searchBox: {
    flex: 1,
    height: 52,
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 15,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 15,
    marginBottom: 20,
    position: "relative",
  },

  image: {
    width: "100%",
    height: 100,
    marginBottom: 15,
  },

  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },

  addButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  modal: {
    backgroundColor: "#F2F3F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    minHeight: "82%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  filterTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 20,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DADADA",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  checkboxText: {
    fontSize: 16,
    color: "#181725",
  },

  applyButton: {
    backgroundColor: "#53B175",
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  applyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});