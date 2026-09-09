import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight, SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<SymbolViewProps["name"], ComponentProps<typeof MaterialIcons>["name"]>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
  "house.fill": "home",
  "bubble.left.and.bubble.right.fill": "chat-bubble",
  "wand.and.stars": "auto-fix-high",
  "folder.fill": "folder",
  "chart.bar.fill": "bar-chart",
  "doc.text.fill": "description",
  "person.2.fill": "groups",
  "chevron.right": "chevron-right",
  "checkmark.circle.fill": "check-circle",
  "lock.fill": "lock",
  "paperplane.fill": "send",
  "plus": "add",
} as IconMapping;

export function IconSymbol({ name, size = 24, color, style }: { name: IconSymbolName; size?: number; color: string | OpaqueColorValue; style?: StyleProp<TextStyle>; weight?: SymbolWeight }) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
