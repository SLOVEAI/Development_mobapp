import { StyleSheet, Text, View } from "react-native"
import React from "react"

// @ICONs
import Ionicons from "react-native-vector-icons/Ionicons"

// @Chart
// import { LineChart } from "react-native-chart-kit"
// import { LineChart, Grid } from "react-native-svg-charts"
import { LineChart } from "react-native-chart-kit"

// @Compoentsk
import BarGraph from "./Graph/BarGraph"

const Exposure = () => {
  const data = {
    labels: ["January"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        strokeWidth: 3, // optional
        color: (opacity = 1) => `#E3BAF6`,
      },
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        strokeWidth: 3, // optional
        color: (opacity = 1) => `#5CE1E6`,
      },
    ],
  }

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,

    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `black`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  }
  return (
    <View style={styles.container}>
      {/* //First Container */}
      <View style={styles.firstContainer}>
        <Text style={{ fontSize: 15, color: "black" }}>Rewards</Text>
        <View style={styles.geniusStyle}>
          <Ionicons name="musical-notes-outline" color="white" size={20} />
          <Text style={{ color: "white", left: 5 }}>Genius</Text>
        </View>
      </View>
      {/* //First Container END*/}
      <Text style={styles.firstGraphHeading}>Monthly exposure trend</Text>
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ height: 10, width: 10, backgroundColor: "#5CE1E6", borderRadius: 30 }}
          ></View>
          <Text style={{ left: 10 }}>200+ customers</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ height: 10, width: 10, backgroundColor: "#E3BAF6", borderRadius: 30 }}
          ></View>
          <Text style={{ left: 10 }}>200+ customers</Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: "lightgray" }}>
          <LineChart
            withDots={false}
            style={{ right: 50 }}
            bezier
            data={data}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withShadow={false}
            withInnerLines={false}
            width={350}
            height={100}
            chartConfig={chartConfig}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Month</Text>
          <Text>jan</Text>
        </View>
      </View>
      <BarGraph />
    </View>
  )
}

export default Exposure

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  firstContainer: {
    //   backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  geniusStyle: {
    backgroundColor: "#03989E",
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstGraphHeading: {
    fontSize: 15,
    color: "black",
    marginVertical: 20,
  },
})
