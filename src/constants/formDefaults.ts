import type { SigninSchema } from "@/schemas/SigninSchema.ts";
import type { SignupSchema } from "@/schemas/SignupSchema.ts";

const defaultSigninValues: SigninSchema = {
	email: "",
	password: "",
};

const defaultSignupValues: SignupSchema = {
	email: "",
	password: "",
	confirmPassword: "",
	phoneNumber: "",
	termsAndConditions: false,
	firstName: "",
	lastName: "",
	dateOfBirth: new Date(),
	gender: "male",
	city: "",
	landmark: "",
	street: "",
	state: "",
	zip: "",
	country: "",
};

export { defaultSigninValues, defaultSignupValues };
