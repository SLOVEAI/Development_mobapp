import { StyleSheet, Text, View } from "react-native"
import React from "react"

// @Graph
import { LineChart, BarChart } from "react-native-chart-kit"

const BarGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
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
        // strokeWidth: -100, // optional
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
        // strokeWidth: -100, // optional
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
    <View>
      <Text style={styles.firstGraphHeading}>Personalized Gig Roadmap</Text>
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
        {/* <View style={{ borderBottomWidth: 1, borderColor: "lightgray" }}> */}
        <LineChart
          //   withDots={false}

          style={{ right: 50 }}
          bezier
          data={data}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          // withShadow={false}
          withInnerLines={false}
          width={300}
          height={100}
          chartConfig={chartConfig}
        />
        {/* </View> */}
        {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Month</Text>
          <Text>jan</Text>
        </View> */}
      </View>
    </View>
  )
}

export default BarGraph

const styles = StyleSheet.create({
  firstGraphHeading: {
    fontSize: 15,
    color: "black",
    marginVertical: 20,
  },
})
