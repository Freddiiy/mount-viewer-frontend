import {Input, InputProps} from "@chakra-ui/react";

export default function WowInput(props: InputProps) {
	return (
		<>
			<Input
				borderWidth={2}
				borderColor={"yellow"}
				errorBorderColor={"crimson"}
				textColor={"yellow"}
				bgColor={"red"}
				width={400}
				{...props}/>
		</>
	)
}