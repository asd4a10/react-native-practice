import { useState } from "react";
import { View, Button, Text, Image, Pressable, Modal } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
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

// pressable usage
{
	/* <Pressable onPress={() => alert("Image pressed")}>
				<Image source={logoImage} style={{ width: 200, height: 200 }} />
			</Pressable>
			<Pressable onPress={() => alert("Text pressed")}>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam
					non ad sapiente blanditiis, eum perferendis error doloremque sed
					dolores?
				</Text>
			</Pressable> */
}

// image background usage
{
	/* <ImageBackground
				source={{
					uri: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
				}}
				style={{ flex: 1 }}
			>
				<Text>IMAGE TEXT</Text>
			</ImageBackground> */
}
{
	/* <Image source={logoImage} style={{ width: 200, height: 200 }} />
			<Image
				source={{
					uri: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
				}}
				style={{ width: 200, height: 200 }}
			/> */
}
{
	/* <Text>
				<Text style={{ color: "white" }}>Hello</Text> Rustem
			</Text> */
}
{
	/* <View style={{ backgroundColor: "red", height: 200, width: 200 }}></View>
			<View
				style={{ backgroundColor: "lightgreen", height: 200, width: 200 }}
			></View> */
}

// nest scroll view inside view
{
	/* <ScrollView>
	<Image
		source={{
			uri: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
		}}
		style={{ width: 300, height: 300 }}
	/>
	<Text>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ipsa
		beatae voluptatum! Cumque commodi necessitatibus, voluptates fuga facilis
		similique nemo ipsa laudantium ad corrupti ipsam natus, eos totam voluptate
		minima nam nobis deleniti adipisci placeat temporibus asperiores esse
		perferendis aliquid iusto? Beatae dolorum consequuntur vitae dolor officiis
		ullam, rerum fuga tenetur unde harum repellendus sed ea nulla repellat
		voluptatem? Libero delectus nesciunt tempora aut expedita reiciendis enim
		molestiae quis, quidem rerum veniam laboriosam doloremque voluptatibus qui
		similique cum sequi tenetur ex ad voluptatum id nobis assumenda recusandae
		distinctio? Maxime tempore veritatis totam ratione accusantium, nemo non
		vitae aliquid odit similique.
	</Text>
	<Image
		source={{
			uri: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
		}}
		style={{ width: 300, height: 300 }}
	/>
</ScrollView>; */
}
