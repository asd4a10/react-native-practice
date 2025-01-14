import { View, Text, StyleSheet } from "react-native";

export default function StyleSheetApi() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>StyleSheet API</Text>
			<View style={[styles.box, styles.lightblueBg]}>
				<Text>Lightblue Box</Text>
			</View>
			<View style={[styles.box, styles.lightgreenBg]}>
				<Text>Lightgreen Box</Text>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "lightpink",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
	},
	box: {
		width: 100,
		height: 100,
		padding: 10,
	},
	lightblueBg: {
		backgroundColor: "lightblue",
	},
	lightgreenBg: {
		backgroundColor: "lightgreen",
	},
});
