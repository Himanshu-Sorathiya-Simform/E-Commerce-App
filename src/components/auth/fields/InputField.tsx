import { Field, FieldDescription, FieldLabel } from "@/components/ui/shadcn/field";
import { Input } from "@/components/ui/shadcn/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/shadcn/input-group";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	description?: string | undefined;
	invalid?: boolean | undefined;
	endAddon?: ReactNode | undefined;
}

function InputField({
	id,
	label,
	type = "text",
	placeholder = "",
	description = "",
	disabled = false,
	invalid = false,
	required = false,
	endAddon = "",
	...rhfProps
}: InputFieldProps) {
	return (
		<Field
			data-disabled={disabled ? true : false}
			data-invalid={invalid ? true : false}
		>
			<FieldLabel htmlFor={id}>
				{label}
				{required && <span className="text-destructive">*</span>}
			</FieldLabel>

			{endAddon ?
				<InputGroup
					className={
						"has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot][aria-invalid=true]]:ring-1"
					}
				>
					<InputGroupInput
						id={id}
						type={type}
						placeholder={placeholder}
						disabled={disabled}
						aria-invalid={invalid}
						{...rhfProps}
					/>

					<InputGroupAddon align="inline-end">{endAddon}</InputGroupAddon>
				</InputGroup>
			:	<Input
					id={id}
					type={type}
					className={"focus-visible:ring-1 aria-invalid:ring-1"}
					placeholder={placeholder}
					disabled={disabled}
					aria-invalid={invalid}
					{...rhfProps}
				/>
			}

			{description && <FieldDescription>{description}</FieldDescription>}
		</Field>
	);
}

export default InputField;
