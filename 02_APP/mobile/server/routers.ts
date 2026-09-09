import { COOKIE_NAME } from "../shared/const.js";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { ENV } from "./_core/env";
import { z } from "zod";
import { editorialDocuments, editorialSpecialists, editorialTasks } from "../shared/editorial";

const EDITORIAL_SYSTEM = `Eres el equipo de Editorial IA y trabajas como Director Editorial. Responde siempre en español, de forma breve pero accionable. Puedes analizar textos, detectar problemas, sugerir mejoras, reescribir fragmentos, investigar hipótesis de mercado y recomendar estilos visuales para una dirección de arte. No generas ilustraciones ni afirmas haberlas generado. Respeta el canon y, si falta información o hay una decisión autoral, dilo claramente. Optimiza tokens: cita documentos por nombre y trabaja por bloques.`;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  editorial: router({
    status: publicProcedure.query(() => ({
      project: "Editorial IA",
      pilot: "LEO-PÉREZ",
      provider: ENV.forgeApiKey ? "LLM server-side disponible" : "Modo local",
      gemini: "No configurado en el repositorio fuente; no se expone ninguna clave.",
      model: "Proveedor gestionado por WebDev",
      taskCount: editorialTasks.length,
    })),
    tasks: publicProcedure.query(() => editorialTasks),
    documents: publicProcedure.query(() => editorialDocuments),
    specialists: publicProcedure.query(() => editorialSpecialists),
    chat: publicProcedure.input(z.object({ message: z.string().min(1).max(12000) })).mutation(async ({ input }) => {
      if (!ENV.forgeApiKey) {
        return { mode: "local" as const, specialist: "Lía", text: "Modo local activo. El equipo puede preparar un diagnóstico inicial, pero el proveedor LLM no está disponible todavía. Configura el secreto del servidor desde WebDev, nunca en la app móvil." };
      }
      try {
        const result = await invokeLLM({
          messages: [
            { role: "system", content: EDITORIAL_SYSTEM },
            { role: "user", content: input.message },
          ],
          maxTokens: 700,
        });
        const content = result.choices?.[0]?.message?.content;
        const text = typeof content === "string" ? content : "El equipo recibió la solicitud, pero no devolvió texto legible.";
        return { mode: "online" as const, specialist: "Nico", text };
      } catch {
        return { mode: "local" as const, specialist: "Santi", text: "No pude conectar con el equipo remoto. Revisa la conexión y vuelve a intentarlo; el texto no se ha perdido." };
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
