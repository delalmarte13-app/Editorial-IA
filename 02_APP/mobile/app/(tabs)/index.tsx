import { useMemo } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import { trpc } from "@/lib/trpc";
import { editorialSpecialists } from "@/shared/editorial";

export default function HomeScreen() {
  const colors = useColors();
  const status = trpc.editorial.status.useQuery();
  const tasks = trpc.editorial.tasks.useQuery();
  const openTasks = useMemo(() => (tasks.data ?? []).filter((task) => task.status !== "DONE"), [tasks.data]);
  return <ScreenContainer className="px-5 pt-4"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 28 }}>
    <View className="flex-row items-center justify-between mb-7"><View><Text className="text-sm text-muted font-semibold tracking-widest">EDITORIAL IA</Text><Text className="text-3xl font-bold text-foreground mt-1">Tu mesa editorial</Text></View><View style={{ backgroundColor: colors.foreground }} className="w-11 h-11 rounded-full items-center justify-center"><Text style={{ color: colors.background }} className="text-lg font-bold">IA</Text></View></View>
    <View style={{ backgroundColor: colors.foreground }} className="rounded-3xl p-5 mb-5"><Text style={{ color: colors.background, opacity: 0.7 }} className="text-sm font-semibold">PROYECTO PILOTO</Text><Text style={{ color: colors.background }} className="text-2xl font-bold mt-2">LEO-PÉREZ</Text><Text style={{ color: colors.background, opacity: 0.75 }} className="text-sm leading-5 mt-2">Dirección, diagnóstico y ejecución editorial en un solo espacio.</Text><View className="flex-row items-center mt-5"><View style={{ backgroundColor: colors.success }} className="w-2 h-2 rounded-full mr-2" /><Text style={{ color: colors.background, opacity: 0.8 }} className="text-xs">Sistema listo para trabajar por bloques</Text></View></View>
    <View className="flex-row items-center justify-between mb-3"><Text className="text-xl font-bold text-foreground">Señal del sistema</Text>{status.isLoading ? <ActivityIndicator color={colors.primary} /> : <Text className="text-xs text-muted">{status.data?.provider ?? "Conectando"}</Text>}</View>
    <View className="rounded-2xl bg-surface border border-border p-4 mb-6"><View className="flex-row items-center mb-3"><IconSymbol name="checkmark.circle.fill" color={colors.success} size={20} /><Text className="text-foreground font-semibold ml-2">{status.data?.project ?? "Editorial IA"}</Text></View><Text className="text-muted text-sm leading-5">{status.data?.gemini ?? "Verificando proveedor seguro…"}</Text></View>
    <View className="flex-row items-center justify-between mb-3"><Text className="text-xl font-bold text-foreground">Próximo movimiento</Text><Text className="text-muted text-sm">{openTasks.length} abiertos</Text></View>
    <View className="rounded-2xl bg-surface border border-border p-4 mb-6">{openTasks.slice(0, 3).map((task) => <View key={task.id} className="flex-row items-start py-2"><View style={{ backgroundColor: task.priority === "P0" ? colors.error : task.status === "BLOCKED" ? colors.warning : colors.primary }} className="w-2 h-2 rounded-full mt-2 mr-3" /><View className="flex-1"><Text className="text-xs text-muted font-semibold">{task.id} · {task.priority}</Text><Text className="text-foreground font-semibold mt-1">{task.title}</Text><Text className="text-muted text-xs mt-1">{task.status === "BLOCKED" ? "Bloqueada por decisión del autor" : task.next}</Text></View></View>)}</View>
    <Text className="text-xl font-bold text-foreground mb-3">Equipo activo</Text><View className="flex-row flex-wrap gap-2">{editorialSpecialists.map((person) => <Pressable key={person.name} style={({ pressed }) => [{ opacity: pressed ? 0.72 : 1 }]} className="bg-surface border border-border rounded-2xl px-3 py-3 w-[48%]"><View className="flex-row items-center"><View style={{ backgroundColor: person.accent }} className="w-8 h-8 rounded-full items-center justify-center"><Text className="text-foreground font-bold">{person.name[0]}</Text></View><View className="ml-2 flex-1"><Text className="text-foreground font-bold">{person.name}</Text><Text className="text-muted text-[10px] leading-3 mt-0.5">{person.role}</Text></View></View></Pressable>)}</View>
  </ScrollView></ScreenContainer>;
}
