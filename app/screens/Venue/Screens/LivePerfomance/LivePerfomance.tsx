import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { colors } from "../../../../theme"

// @Vector ICONS
import EvilIcons from "react-native-vector-icons/EvilIcons"
// @Components
// import { ReviewBar } from "../Musician/InsightMusic/Components/QuickStats"
import { ReviewBar } from "../../InsightVenue/Components/Sales"

const LivePerfomance = ({ navigation }) => {
  const ReviewData = [
    {
      percentage: "75%",
    },
    {
      percentage: "60%",
    },
    {
      percentage: "5/7",
    },
    {
      percentage: "60%",
    },
    {
      percentage: "5/7",
    },
    {
      percentage: "75%",
    },
    {
      percentage: "5/7",
    },
    {
      percentage: "60%",
    },
    {
      percentage: "5/7%",
    },
  ]
  return (
    <FlatList
      key={Math.random() * 1000}
      data={ReviewData}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <View style={styles.secoundContainer}>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 30,
                  borderRadius: 35,
                  backgroundColor: "black",
                  // alignItems: "center",
                  padding: 5,
                }}
              >
                <EvilIcons name="close" size={20} color="white" />
                {/* <Text style={{ color: "white" }}>X</Text> */}
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Live performances</Text>
          </View>
          {/*@ Table Container  */}
          <View
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Live performance</Text>
            <Text style={{ color: "white" }}>Date</Text>
            <View style={{ width: "30%" }}>
              <Text style={{ color: "white" }}>Sales</Text>
            </View>
          </View>

          {/* @END TABLE CONTAINER */}
        </>
      }
      renderItem={(iems) => {
        return (
          <>
            <ReviewBar percentage={iems.item.percentage} />
          </>
        )
      }}
      ListFooterComponent={<View style={{ marginBottom: 20 }}></View>}
    />
  )
}

export default LivePerfomance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.backgroundColor,
    padding: 10,
  },
  secoundContainer: {
    margin: 20,
    marginVertical: 20,
  },
  heading: {
    color: "black",
  },
})
