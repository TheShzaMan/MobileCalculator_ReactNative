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
	const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "·", "="];
	const advBtns = ["del", "MRC", "M+", "%"];



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
//        marginTop: "5%",
//        marginBottom: '2%',
//        marginLeft: "1%",
        alignSelf: "flex-start",
        padding: Dimensions.get('window').width * 0.02,
        width: "100%",
//        borderTopWidth: 1,
    },
    numsOpsAndAdv:{
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent: "center",
        width: '100%',
//        justifyContent: "start",
//        flex: 1,
        alignItems: 'center',
        borderWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomRightRadius: 10,
        borderRadius: 15,
        borderColor: "lightskyblue",

    },
    numBtns:{
        flexDirection: "row",
        flexWrap: "wrap",
//        rowGap: '5%',
        maxWidth: Dimensions.get('window').width * 0.61,
        minWidth: Dimensions.get('window').width * 0.53,
        justifyContent: 'space-evenly',
//        paddingLeft: '1%',
//                borderRadius: 10,
                borderWidth: 2,
                borderBottomWidth: 3,
                borderRightWidth: 1,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 10,
                borderColor: "lightskyblue",
    },
    advBtns:{
        flexDirection: "column",
//        width: Dimensions.get('window').width * 0.20,
        justifyContent: "center",
        alignItems: "flex-end",
//        borderWidth: 0.1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 10,
        borderColor: "lightskyblue",
//        borderRadius: -10,
//        paddingRight: '1%',


    },
    opsBtns:{
        flexDirection: "row",
//        flex: 1,
        justifyContent: "space-between",
//        width: Dimensions.get('window').width * 0.75,
        width: '100%',
//        paddingRight: '0.6%',
        paddingLeft: '3%',

//        flexWrap: "wrap",
//        alignSelf: "center",
        borderWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 8,
        borderColor: "lightskyblue",
//    borderColor: "white",
    },
})
export default Buttons;
