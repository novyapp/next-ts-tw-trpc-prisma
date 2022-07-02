// src/utils/trpc.ts
import type { AppRouter, appRouter } from "../server/router";
import { inferProcedureOutput } from "@trpc/server";
import { createReactQueryHooks } from "@trpc/react";

export const trpc = createReactQueryHooks<AppRouter>();

export type inferQueryResponse<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;
