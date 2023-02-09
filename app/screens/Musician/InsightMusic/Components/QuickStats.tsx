import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

// @Vector ICON
import AntDesign from "react-native-vector-icons/AntDesign"

const QuickStats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, color: "black" }}>Following stats</Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <ContainerBox
          firstView={
            <>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#21BF73",
                    padding: 5,
                    borderRadius: 30,
                    height: 30,
                    width: 30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="arrowup" size={20} color="black" />
                </View>
                <Text style={{ color: "black", fontSize: 18, left: 10 }}>+30%</Text>
              </View>
            </>
          }
          icon={<Image source={require("../../../../../assets/icons/heartSignal.png")} />}
          bottomTxt={<Text>More popular this week than last week</Text>}
        />
        <ContainerBox
          icon={<Image source={require("../../../../../assets/icons/mice.png")} />}
          bottomTxt={<Text>Guaranteed gig</Text>}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ContainerBox
          icon={<Image source={require("../../../../../assets/icons/UserCirclePlus.png")} />}
          middleTxt={<Text style={{ fontWeight: "bold", color: "black", fontSize: 30 }}>2,5K</Text>}
          bottomTxt={<Text>followers on instagram</Text>}
        />
        <ContainerBox
          icon={<Image source={require("../../../../../assets/icons/Eye.png")} />}
          middleTxt={<Text style={{ fontWeight: "bold", color: "black", fontSize: 30 }}>30</Text>}
          bottomTxt={<Text>profile views on instagram</Text>}
        />
      </View>
      {/* @2nd View Container Start */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
        <Text style={{ color: "black", right: 10 }}>User and venue reviews</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MoreReviews")}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ fontWeight: "bold", color: "black", right: 10 }}>See All</Text>
          <AntDesign name="arrowright" size={20} />
        </TouchableOpacity>
      </View>
      {/* @2nd View Container END */}
      {/* Review Container Start
       */}
      <ReviewBar percentage="75%" />
      <ReviewBar percentage="60%" />
      <ReviewBar percentage="5/7" />
    </View>
  )
}

const ContainerBox = ({ icon, firstView, bottomTxt, middleTxt }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "space-between",
          //   width: "50%",
          margin: 5,

          padding: 20,
          borderRadius: 20,
        }}
      >
        {icon}
        {/* <Image source={require("../../../../../assets/icons/heartSignal.png")} /> */}
        <View style={{ marginTop: 10 }}>
          {firstView}
          {middleTxt}
          <Text>{bottomTxt}</Text>
        </View>
      </View>
    </>
  )
}

const ReviewBar = ({ percentage }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
          borderRadius: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#03989E" }}>{percentage}</Text>
        <Text style={{ fontSize: 12 }}>
          Users enjoyed your recent performance with {"\n"} an average rating higher than 4 star
        </Text>
      </View>
    </>
  )
}

export default QuickStats

export { ReviewBar }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 10,
    // backgroundColor: "blue",
  },
})
