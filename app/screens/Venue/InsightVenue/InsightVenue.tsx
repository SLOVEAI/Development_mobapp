import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native"
import React, { useState } from "react"
import { colors } from "../../../theme"
import AppHeader from "../../../components/AppHeader"
// import QuickStats from "./Components/QuickStats"
import Sales from "./Components/Sales"
import Exposure from "./Components/Exposure"

const InsightVenue = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState("sales")
  return (
    <View
      style={{
        backgroundColor: colors.palette.backgroundColor,
        marginTop: StatusBar.currentHeight / 2,
        flex: 1,
      }}
    >
      <View style={{ flex: 0.12 }}>
        <AppHeader navigation={navigation} title="Insights" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.secoundContainer}>
          {/* @Buttons TOp  */}
          <View style={{ flexDirection: "row", width: "100%" }}>
            <TouchableOpacity
              onPress={() => setActiveButton("sales")}
              style={{
                backgroundColor:
                  activeButton === "sales" ? "black" : colors.palette.backgroundColor,
                marginHorizontal: 2,
                borderWidth: 1,
                borderColor: activeButton === "sales" ? colors.palette.backgroundColor : "black",
                padding: 10,
                borderRadius: 30,
              }}
            >
              <Text style={{ color: activeButton === "sales" ? "white" : "black" }}>Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveButton("exposure")}
              style={{
                backgroundColor:
                  activeButton === "exposure" ? "black" : colors.palette.backgroundColor,
                marginHorizontal: 2,
                borderWidth: 1,
                borderColor: activeButton === "exposure" ? colors.palette.backgroundColor : "black",
                padding: 10,
                borderRadius: 30,
              }}
            >
              <Text style={{ color: activeButton === "exposure" ? "white" : "black" }}>
                Exposure
              </Text>
            </TouchableOpacity>
          </View>
          {/* @Buttons END  */}
          {activeButton === "sales" ? <Sales navigation={navigation} /> : <Exposure />}
        </View>
      </ScrollView>
    </View>
  )
}

export default InsightVenue

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: colors.palette.backgroundColor,
  },
  secoundContainer: {
    margin: 10,
    flex: 1,
  },
})
