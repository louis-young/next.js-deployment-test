import { z } from "zod";

const environmentVariablesSchema = z.object({
  NEXT_PUBLIC_ENVIRONMENT_VARIABLE: z.string(),
});

export const environmentVariables = environmentVariablesSchema.parse({
  NEXT_PUBLIC_ENVIRONMENT_VARIABLE:
    process.env.NEXT_PUBLIC_ENVIRONMENT_VARIABLE,
});
