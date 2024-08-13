import { StyleSheet, Text, View, Image } from 'react-native';

import { Padding, FontFamily, FontSize, Color, Border } from "./GlobalStyles";

const notificationImg = require('./assets/images/notification.png');
const Demo = () => {
  	
  	return (
    		<View style={styles.demo}>
      			<View style={styles.topBar}>
        				<View style={[styles.homepageTopBar, styles.notificationSpaceBlock]}>
          					<View style={[styles.money, styles.moneyFlexBox]}>
            						<View style={[styles.icon, styles.iconFlexBox]}>
              							<Text style={[styles.text, styles.textTypo]}>$</Text>
            						</View>
            						<Text style={[styles.amountMoney, styles.textTypo]}>212.5 K</Text>
          					</View>
          					<View style={[styles.followexplore, styles.iconFlexBox]}>
            						<View style={styles.followSpaceBlock}>
              							<Text style={styles.follow1Typo}>Follow</Text>
              							<View style={styles.buttomLayout} />
            						</View>
            						<View style={[styles.explore, styles.followSpaceBlock]}>
              							<Text style={[styles.explore1, styles.follow1Typo]}>Explore</Text>
              							<View style={[styles.buttomBar1, styles.buttomLayout]} />
            						</View>
          					</View>
          					<View style={[styles.notification, styles.moneyFlexBox]}>
            						<Image style={styles.notificationIcon} resizeMode="cover" source={notificationImg} />
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	notificationSpaceBlock: {
    		paddingHorizontal: Padding.p_xs,
    		height: 32
  	},
  	moneyFlexBox: {
    		width: 80,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	iconFlexBox: {
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	textTypo: {
    		textAlign: "left",
    		fontFamily: FontFamily.plusJakartaSansMedium,
    		fontWeight: "500",
    		lineHeight: 15,
    		letterSpacing: 0,
    		fontSize: FontSize.size_xs
  	},
  	followSpaceBlock: {
    		paddingTop: Padding.p_8xs,
    		width: 80,
    		alignItems: "center"
  	},
  	follow1Typo: {
    		textAlign: "center",
    		fontFamily: FontFamily.subhead,
    		fontWeight: "600",
    		fontSize: FontSize.subhead_size,
    		color: Color.colorBlack
  	},
  	buttomLayout: {
    		marginTop: 3,
    		height: 4,
    		width: 50,
    		borderRadius: Border.br_8xs
  	},
  	text: {
    		color: Color.colorBlack,
    		textAlign: "left",
    		fontFamily: FontFamily.plusJakartaSansMedium,
    		fontWeight: "500",
    		lineHeight: 15,
    		letterSpacing: 0,
    		fontSize: FontSize.size_xs
  	},
  	icon: {
    		borderRadius: 10,
    		height: 20,
    		paddingVertical: 2,
    		width: 20,
    		paddingHorizontal: Padding.p_7xs,
    		backgroundColor: Color.colorWhite
  	},
  	amountMoney: {
    		color: Color.colorWhite,
    		marginLeft: 3,
    		textAlign: "left",
    		fontFamily: FontFamily.plusJakartaSansMedium,
    		fontWeight: "500",
    		lineHeight: 15,
    		letterSpacing: 0,
    		fontSize: FontSize.size_xs
  	},
  	money: {
    		borderRadius: 19,
    		backgroundColor: "rgba(61, 61, 61, 0.6)",
    		height: 30,
    		paddingVertical: Padding.p_8xs,
    		paddingHorizontal: Padding.p_7xs
  	},
  	explore1: {
    		alignSelf: "stretch"
  	},
  	buttomBar1: {
    		backgroundColor: "#6026ff"
  	},
  	explore: {
    		marginLeft: 3
  	},
  	followexplore: {
    		flexDirection: "row"
  	},
  	notificationIcon: {
    		height: 24,
    		width: 20
  	},
  	notification: {
    		justifyContent: "flex-end",
    		paddingVertical: 4,
    		paddingHorizontal: Padding.p_xs,
    		height: 32
  	},
  	homepageTopBar: {
    		position: "absolute",
    		top: 57,
    		left: 0,
    		width: "100%",
    		justifyContent: "space-between",
    		paddingVertical: 0,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	topBar: {
    		shadowColor: "rgba(0, 0, 0, 0.05)",
    		shadowOffset: {
      			width: 0,
      			height: 2
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		height: 101,
    		alignSelf: "stretch",
            width:"100%",
    		backgroundColor: Color.colorWhite
  	},
  	demo: {
    		flex: 1,
    		width: "100%",
    		height: "100%",
    		overflow: "hidden",
    		alignItems: "center",
    		backgroundColor: Color.colorWhite
  	}
});

export default Demo;
