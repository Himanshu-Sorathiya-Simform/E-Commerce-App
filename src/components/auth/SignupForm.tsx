import { defaultSignupValues } from "@/constants/formDefaults.ts";
import { type SignupSchema, signupSchema } from "@/schemas/SignupSchema.ts";
import type { User } from "@/types/user.types.ts";
import {
	getLocalStorageData,
	setLocalStorageData,
} from "@/utils/localStorageUtils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import FormActions from "../ui/FormActions.tsx";
import { Button } from "../ui/shadcn/button.tsx";
import { FieldGroup } from "../ui/shadcn/field.tsx";
import { Separator } from "../ui/shadcn/separator.tsx";
import Stepper from "../ui/Stepper.tsx";
import AccountDetailsForm from "./components/AccountDetailsForm.tsx";
import AddressDetailsForm from "./components/AddressDetailsForm.tsx";
import PersonalDetailsForm from "./components/PersonalDetailsForm.tsx";

const FormSteps: Array<Array<keyof SignupSchema>> = [
	["email", "password", "confirmPassword", "phoneNumber", "termsAndConditions"],
	["firstName", "lastName", "dateOfBirth", "gender"],
	["city", "landmark", "street", "state", "zip", "country"],
];

function SignupForm() {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);

	const {
		control,
		register,
		formState,
		trigger,
		resetField,
		handleSubmit,
		setError,
		watch,
	} = useForm<SignupSchema>({
		resolver: zodResolver(signupSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
		defaultValues: defaultSignupValues,
	});

	async function nextStep(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		const emailFieldValue = watch("email");

		const users = getLocalStorageData<User[]>("e-com-users", []);

		const userExist = users.find((user) => user.email === emailFieldValue);
		if (userExist) {
			setError("email", {
				type: "manual",
				message: "Email already in use",
			});

			return;
		}

		const valid = await trigger(FormSteps[currentStep]);

		if (valid && currentStep < FormSteps.length - 1) {
			setCurrentStep((prev) => prev + 1);
		}
	}

	async function previousStep(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		if (currentStep > 0) setCurrentStep((prev) => prev - 1);
	}

	function onSubmit(data: SignupSchema) {
		const user: User = {
			email: data.email,
			password: data.password,
			firstName: data.firstName,
			lastName: data.lastName,
			dateOfBirth: data.dateOfBirth,
			gender: data.gender,
			city: data.city,
			landmark: data.landmark ?? "",
			phoneNumber: data.phoneNumber ?? "",
			street: data.street,
			state: data.state,
			zip: data.zip,
			country: data.country,
		};

		const users = getLocalStorageData<User[]>("e-com-users", []);
		users.push(user);

		setLocalStorageData("e-com-users", users);

		navigate("/signin");
	}

	function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		FormSteps[currentStep]?.forEach((field) => {
			let defaultValue: SignupSchema[typeof field];

			if (field === "dateOfBirth") {
				defaultValue = new Date() as SignupSchema[typeof field];
			} else if (field === "gender") {
				defaultValue = "male" as SignupSchema[typeof field];
			} else if (field === "termsAndConditions") {
				defaultValue = false as SignupSchema[typeof field];
			} else {
				defaultValue = "" as SignupSchema[typeof field];
			}

			resetField(field, { defaultValue });
		});
	}

	return (
		<>
			<div className="flex flex-col gap-4 rounded-md p-5! outline-1 outline-gray-300">
				<h2 className="text-2xl font-bold">
					{currentStep === 0 && "Account Details"}
					{currentStep === 1 && "Personal Details"}
					{currentStep === 2 && "Address Details"}
				</h2>

				<Stepper
					currentStep={currentStep}
					maxStep={3}
				/>

				<Separator />

				<form onSubmit={handleSubmit(onSubmit)}>
					<FieldGroup>
						{currentStep === 0 && (
							<AccountDetailsForm
								register={register}
								formState={formState}
								control={control}
							/>
						)}
						{currentStep === 1 && (
							<PersonalDetailsForm
								register={register}
								formState={formState}
								control={control}
							/>
						)}
						{currentStep === 2 && (
							<AddressDetailsForm
								register={register}
								formState={formState}
							/>
						)}

						<FormActions>
							{currentStep > 0 && (
								<Button
									type="button"
									variant="outline"
									onClick={previousStep}
								>
									Back
								</Button>
							)}

							<Button
								type="button"
								variant="outline"
								className="ml-auto!"
								onClick={handleReset}
							>
								<RefreshCcw />
							</Button>

							{currentStep !== FormSteps.length - 1 ?
								<Button
									type="button"
									onClick={nextStep}
								>
									Next
								</Button>
							:	<Button type="submit">Submit</Button>}
						</FormActions>
					</FieldGroup>
				</form>
			</div>

			<p className="text-muted-foreground mt-4! text-center text-sm">
				Already a member?{" "}
				<Link
					to="/signin"
					className="text-primary font-medium underline-offset-4 transition-colors hover:underline"
				>
					Sign in here
				</Link>
			</p>
		</>
	);
}

export default SignupForm;
