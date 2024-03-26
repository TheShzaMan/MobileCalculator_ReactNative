import { React, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive fontsizes
import { NumButton, OvalButton, OpsButton } from "./customButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// style only. getting dynamic fontsize
const { width } = Dimensions.get('window');
const opsFontSize = width * 0.12;
const advFontSize = width * 0.07;

const Buttons = ({
	handleOnClear,
	handleOff,
	handleClearMem,
	handleBtnPressed,
}) => {
	const opsBtns = ["+", "-", "\u00d7", "\u00F7"];
	const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "="];
	const advBtns = ["del", "R·CM", "M+", "%"];



	return (
		<View id='btnsContainer' style={styles.btnsContainer}>
			<View
				id='topRow'
				style={styles.topRow}
			>
				<OvalButton
					id='on'
					bgColor='red'
					textColor='floralwhite'
					text='ON/C'
					onPress={handleOnClear}
					onLongPress={handleOff}
				/>
			</View>
			<View
				id='numsOpsAndAdv'
				style={styles.numsOpsAndAdv}
			>
                    <View
                        id='numBtns'
                        style={styles.numBtns}
                    >
                        {numsBtns.map((num, index) => (
                            <NumButton
                                text={num}
                                key={index}
                                onPress={handleBtnPressed}
                            />
                        ))}
                    </View>
                    <View
                        id='advBtns'
                        style={styles.advBtns}
                    >
                        {advBtns.map((btn, index) => (
                            <OpsButton
                                customStyle={{ fontSize: RFValue(24) }}
                                text={btn}
                                key={index}
                                id='advBtns'
                                onPress={handleBtnPressed}
                                onLongPress={handleClearMem}
                            />
                        ))}
                    </View>
                <View
                    id='opsBtns'
                    style={styles.opsBtns}
                >
                    {opsBtns.map((btn, index) => (
                        <OpsButton
                            customStyle={{ fontSize: RFValue(48) }}
                            text={btn}
                            key={index}
                            onPress={handleBtnPressed}
                            id={"opsBtns"}
                        />
                    ))}
                </View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    btnsContainer:{
        flex: 1,
        width: '100%',
        alignItems: "center",
//        paddingTop: '5%',
//        justifyContent: "space-around",
//                borderWidth: 1,
//                borderColor: 'white'
    },
    topRow:{
        marginTop: "5%",
        marginBottom: '2%',
        marginLeft: "1%",
        alignSelf: "flex-start",
    },
    numsOpsAndAdv:{
        flexDirection: "row",
        justifyContent: "start",
//        alignItems: "center",
        flex: 1,
        flexWrap:"wrap",
//        borderWidth: 1,
    },
    numBtns:{
        flexDirection: "row",
        flexWrap: "wrap",
//        rowGap: '5%',
        width: Dimensions.get('window').width * 0.55,
        justifyContent: 'space-between',
        paddingLeft: '1%',

//                borderWidth: 1,
    },
    advBtns:{
        flexDirection: "column",
        width: Dimensions.get('window').width * 0.20,
        justifyContent: "center",
        alignItems: "flex-end",
//        borderWidth: 1,
        paddingRight: '2%',

    },
    opsBtns:{
        flexDirection: "row",
//        flex: 1,
        justifyContent: "space-between",
        width: Dimensions.get('window').width * 0.75,
        paddingRight: '2%',
        paddingLeft: '1%',

//        flexWrap: "wrap",
//        alignSelf: "center",
//    borderWidth: 1,
//    borderColor: "white",
    },
})
export default Buttons;
