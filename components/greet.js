import { Text, View } from "react-native";

export default function Greet({ name }) {
	return (
		<View style={{ backgroundColor: "plum", padding: 20 }}>
			<Text style={{ fontSize: 20, textAlign: "center" }}>Hello, {name}!</Text>
		</View>
	);
}
