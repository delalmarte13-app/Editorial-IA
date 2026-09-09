import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 12 : Math.max(insets.bottom, 8);
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.muted,
      tabBarButton: HapticTab,
      tabBarStyle: { height: 58 + bottomPadding, paddingTop: 7, paddingBottom: bottomPadding, backgroundColor: colors.background, borderTopColor: colors.border, borderTopWidth: 0.5 },
      tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
    }}>
      <Tabs.Screen name="index" options={{ title: "Inicio", tabBarIcon: ({ color }) => <IconSymbol size={23} name="house.fill" color={color} /> }} />
      <Tabs.Screen name="chat" options={{ title: "Equipo", tabBarIcon: ({ color }) => <IconSymbol size={23} name="bubble.left.and.bubble.right.fill" color={color} /> }} />
      <Tabs.Screen name="tools" options={{ title: "Herramientas", tabBarIcon: ({ color }) => <IconSymbol size={23} name="wand.and.stars" color={color} /> }} />
      <Tabs.Screen name="project" options={{ title: "Proyecto", tabBarIcon: ({ color }) => <IconSymbol size={23} name="folder.fill" color={color} /> }} />
    </Tabs>
  );
}
