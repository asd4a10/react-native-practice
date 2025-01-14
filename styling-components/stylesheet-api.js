import { View, Text, StyleSheet } from "react-native";

export default function StyleSheetApi() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>StyleSheet API</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "lightgreen",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
	},
});
