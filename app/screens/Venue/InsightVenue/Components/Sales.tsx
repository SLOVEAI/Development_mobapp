import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

// @Vector ICON
import AntDesign from "react-native-vector-icons/AntDesign"

const Sales = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, color: "black" }}>Current month snapshot</Text>
      <View style={{ flexDirection: "row", marginVertical: 10, height: 130 }}>
        <ContainerBox
          color={"#21BF73"}
          arrowIcon={<AntDesign name="arrowup" />}
          middleTxt={
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 10 }}>47,876 SEK</Text>
          }
          bottomTxt={<Text style={{ fontSize: 10 }}>Total Ticket Revenue</Text>}
        />
        <ContainerBox
          color={"#21BF73"}
          arrowIcon={<AntDesign name="arrowup" />}
          middleTxt={
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 10 }}>47,876 SEK</Text>
          }
          bottomTxt={<Text style={{ fontSize: 10 }}>Average ticket sales</Text>}
        />
        <ContainerBox
          color={"#FF6471"}
          arrowIcon={<AntDesign name="arrowdown" />}
          middleTxt={
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 10 }}>47,876 SEK</Text>
          }
          bottomTxt={<Text style={{ fontSize: 10 }}>Total customers</Text>}
        />
      </View>
      {/* @2nd View Container Start */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
        <Text style={{ color: "black", right: 10 }}>Live performances</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("LivePerfomance")}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ fontWeight: "bold", color: "black", right: 10 }}>See All</Text>
          <AntDesign name="arrowright" size={20} />
        </TouchableOpacity>
      </View>
      {/* @2nd View Container END */}
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
      <ReviewBar percentage="5/7" />
      <ReviewBar percentage="5/7" />
      <ReviewBar percentage="5/7" />

      {/* @END TABLE CONTAINER */}

      <View style={{ flexDirection: "row" }}>
        <ContainerBox
          color={"#21BF73"}
          arrowIcon={<AntDesign name="arrowup" />}
          middleTxt={
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>47,876 SEK</Text>
          }
          bottomTxt={<Text>followers on instagram</Text>}
        />
        <ContainerBox
          color={"#FF6471"}
          arrowIcon={<AntDesign name="arrowdown" />}
          middleTxt={
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>47,876 SEK</Text>
          }
          bottomTxt={<Text>profile views on instagram</Text>}
        />
      </View>

      {/* Review Container Start
       */}
      {/* <ReviewBar percentage="75%" />
      <ReviewBar percentage="60%" /> */}
    </View>
  )
}

const ContainerBox = ({ arrowIcon, firstView, bottomTxt, middleTxt, color }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "space-between",
          //   width: "50%",
          margin: 5,
          // height: 150,
          padding: 20,
          borderRadius: 20,
        }}
      >
        {/* {icon} */}
        {/* {firstView} */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: color,
              // padding: 10,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
              width: 20,
              borderRadius: 30,
              right: 10,
            }}
          >
            {arrowIcon}
          </View>
          <Text style={{ color: "black" }}>+32.40%</Text>
        </View>
        {/* <Image source={require("../../../../../assets/icons/heartSignal.png")} /> */}
        <View style={{ marginTop: 10 }}>
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
          borderRadius: 10,
        }}
      >
        <View>
          <Text>Artist name</Text>
          <Text>Venue name</Text>
        </View>
        <Text style={{ fontSize: 12 }}>09-04-2022</Text>
        <View style={{ width: "30%" }}>
          <Text style={{ fontSize: 12 }}>1,500,00 SEK</Text>
        </View>
      </View>
    </>
  )
}

export default Sales

export { ReviewBar }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 10,
    // backgroundColor: "blue",
  },
})
