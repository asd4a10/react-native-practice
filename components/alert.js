import { View, Button, Alert } from "react-native";

export default function AlertComponent() {
	return (
		<View style={{ backgroundColor: "lightgreen", padding: 20 }}>
			<Button title="Show Alert" onPress={() => Alert.alert("Alert pressed")} />
			<Button
				title="Show Alert 2"
				onPress={() =>
					Alert.alert("Alert pressed", "This is a message", [
						{
							text: "Cancel",
							style: "cancel",
							onPress: () => console.log("Cancel pressed"),
						},
						{ text: "OK", style: "default" },
						{ text: "Delete", style: "destructive" },
					])
				}
			/>
		</View>
	);
}
