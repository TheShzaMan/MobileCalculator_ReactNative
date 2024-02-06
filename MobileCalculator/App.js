import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./components/Calculator";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} style='auto' />
			<Calculator>
				<Display></Display>
				<Buttons>{/* numBtns and opsBtns */}</Buttons>
			</Calculator>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
