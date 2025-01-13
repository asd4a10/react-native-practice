import { View, StatusBar, Button } from "react-native";
import { useState } from "react";

export default function StatusBarComponent() {
	const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);
	const [statusBarTextColor, setStatusBarTextColor] = useState("light-content");

	return (
		<View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
			<StatusBar
				backgroundColor="lightgreen"
				barStyle={statusBarTextColor}
				hidden={isStatusBarVisible}
			/>
			<Button
				title="Change status bar visibility"
				onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
				style={{ color: "black" }}
			></Button>
			<Button
				title="Change status bar text color"
				onPress={() =>
					setStatusBarTextColor(
						statusBarTextColor === "light-content"
							? "dark-content"
							: "light-content"
					)
				}
			></Button>
		</View>
	);
}
