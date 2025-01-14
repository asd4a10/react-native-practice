import { useState } from "react";
import { View, Button, Text, Modal } from "react-native";

export default function ModalComponent() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={{ backgroundColor: "lightblue" }}>
			<Button
				title="Press"
				onPress={() => {
					console.log("Button pressed");
					// alert("Button pressed");
					setModalVisible(true);
				}}
				color="midnightblue"
				disabled={false}
			/>
			<Modal
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
				transparent={false}
				animationType="slide"
				presentationStyle="pageSheet"
			>
				<View style={{ backgroundColor: "lightblue", flex: 1, padding: 60 }}>
					<Text>Modal content</Text>
					<Button
						title="Close"
						onPress={() => {
							console.log("Button pressed");
							// alert("Button pressed");
							setModalVisible(false);
						}}
						color="midnightblue"
					/>
				</View>
			</Modal>
		</View>
	);
}
