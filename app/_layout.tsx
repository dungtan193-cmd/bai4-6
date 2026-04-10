import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tabs vẫn là màn hình chính nên thanh dưới luôn còn */}
      <Stack.Screen name="(tabs)" />

      {/* Popup checkout hiện đè lên My Cart */}
      <Stack.Screen
        name="checkout"
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
        }}
      />

      {/* Popup error hiện đè lên Favourite */}
      <Stack.Screen
        name="error"
        options={{
          presentation: "transparentModal",
          animation: "fade",
        }}
      />

      {/* Màn hình order accepted */}
      <Stack.Screen
        name="orderAccepted"
        options={{
          presentation: "card",
        }}
      />
    </Stack>
  );
}