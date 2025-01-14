import { ActivityIndicator, View, Button } from "react-native";
import { useState } from "react";
export default function ActivityIndicatorComponent() {
	const [isAnimating, setIsAnimating] = useState(true);
	const [activityIndicatorSize, setActivityIndicatorSize] = useState("large");

	return (
		<View style={{ backgroundColor: "lightpink" }}>
			<Button
				title={isAnimating ? "Stop loading" : "Start loading"}
				style={{ backgroundColor: "black" }}
				onPress={() => setIsAnimating(!isAnimating)}
			/>
			<Button
				title={
					activityIndicatorSize === "large"
						? "Change to small"
						: "Change to large"
				}
				style={{ backgroundColor: "black" }}
				onPress={() =>
					setActivityIndicatorSize(
						activityIndicatorSize === "large" ? "small" : "large"
					)
				}
			/>
			<ActivityIndicator
				size={activityIndicatorSize}
				animating={isAnimating}
				color="midnightblue"
			/>
		</View>
	);
}
