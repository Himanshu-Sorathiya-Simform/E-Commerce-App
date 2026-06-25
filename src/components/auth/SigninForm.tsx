import { defaultSigninValues } from "@/constants/formDefaults.ts";
import { useAppDispatch } from "@/hooks/hooks.ts";
import { type SigninSchema, signinSchema } from "@/schemas/SigninSchema.ts";
import { setUser } from "@/slices/authSlice.ts";
import type { User } from "@/types/user.types.ts";
import {
	getLocalStorageData,
	setLocalStorageData,
} from "@/utils/localStorageUtils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefreshCcw } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import FormActions from "../ui/FormActions.tsx";
import { Button } from "../ui/shadcn/button.tsx";
import { FieldGroup } from "../ui/shadcn/field.tsx";
import { Separator } from "../ui/shadcn/separator.tsx";
import InputField from "./fields/InputField.tsx";

function SigninForm() {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<SigninSchema>({
		resolver: zodResolver(signinSchema),
		defaultValues: defaultSigninValues,
	});

	const onSubmit: SubmitHandler<SigninSchema> = function (data: SigninSchema) {
		const { email, password } = data;
		const users = getLocalStorageData<User[]>("e-com-users", []);

		const user = users.find((user) => user.email === email);
		if (!user) {
			setError("email", {
				type: "manual",
				message: "User does not exist",
			});

			return;
		}

		if (user.password !== password) {
			setError("password", {
				type: "manual",
				message: "Password is incorrect",
			});

			return;
		}

		setLocalStorageData("e-com-user", user);
		dispatch(setUser(user));

		navigate("/");
	};

	const handleReset = () => {
		reset({
			email: "",
			password: "",
		});
	};

	return (
		<>
			<div className="flex flex-col gap-4 rounded-md p-5! outline-1 outline-gray-300">
				<h2 className="text-2xl font-bold">Signin</h2>

				<Separator />

				<form onSubmit={handleSubmit(onSubmit)}>
					<FieldGroup>
						<InputField
							id={"input-field-email"}
							label={"Email"}
							type={"email"}
							className={"focus-visible:ring-1 aria-invalid:ring-1"}
							placeholder={"Enter your email"}
							required
							description={errors.email?.message}
							invalid={!!errors.email}
							{...register("email")}
						/>

						<InputField
							id={"input-field-password"}
							label={"Password"}
							type={"password"}
							className={"focus-visible:ring-1 aria-invalid:ring-1"}
							placeholder={"Enter your password"}
							required
							description={errors.password?.message}
							invalid={!!errors.password}
							{...register("password")}
						/>

						<FormActions className="justify-center">
							<Button
								type="submit"
								className="flex-1"
							>
								Login
							</Button>

							<Button
								type="button"
								variant="outline"
								onClick={handleReset}
							>
								<RefreshCcw />
							</Button>
						</FormActions>
					</FieldGroup>
				</form>
			</div>

			<p className="text-muted-foreground mt-4! text-center text-sm">
				New member?{" "}
				<Link
					to="/signup"
					className="text-primary font-medium underline-offset-4 transition-colors hover:underline"
				>
					Sign up here
				</Link>
			</p>
		</>
	);
}

export default SigninForm;
