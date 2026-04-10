import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Account() {
  const menu = [
    { icon: "bag-handle-outline", title: "Orders" },
    { icon: "person-outline", title: "My Details" },
    { icon: "location-outline", title: "Delivery Address" },
    { icon: "card-outline", title: "Payment Methods" },
    { icon: "ticket-outline", title: "Promo Card" },
    { icon: "notifications-outline", title: "Notifications" },
    { icon: "help-circle-outline", title: "Help" },
    { icon: "information-circle-outline", title: "About" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dung Nguyen</Text>
          <Text style={styles.email}>nguyen@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menu.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.left}>
              <Ionicons name={item.icon as any} size={24} color="#181725" />
              <Text style={styles.menuText}>{item.title}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#181725"
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={22} color="#53B175" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 18,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },

  email: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 4,
  },

  menuContainer: {
    marginTop: 10,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F3F2",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 18,
    fontSize: 16,
    fontWeight: "500",
    color: "#181725",
  },

  logoutButton: {
    marginHorizontal: 25,
    marginTop: 25,
    backgroundColor: "#F2F3F2",
    height: 65,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    marginLeft: 10,
    color: "#53B175",
    fontSize: 18,
    fontWeight: "600",
  },
});