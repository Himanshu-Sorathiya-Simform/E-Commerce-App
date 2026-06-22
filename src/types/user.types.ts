import type { signupSchema } from "@/schemas/SignupSchema.ts";
import z from "zod";

type User = Omit<
	z.infer<typeof signupSchema>,
	"confirmPassword" | "termsAndConditions"
>;

export type { User };
