import { Dimensions, StyleSheet, Text, View, Image } from "react-native"
import React from "react"

const HomeCard = ({ item }) => {
  return (
    <View style={{
      alignItems: "center",
      justifyContent: "center",
      // flex: 1,
      width:Dimensions.get("screen").width
    }}>
      <View style={styles.container}>
        {/* <Text>HomeCard</Text> */}
        <View style={styles.bgImg}>
          <Image style={styles.backgroundImg} source={item?.background} />
          <View style={styles.locationContainer}>
            <View style={styles.innerLocation}>
              <Image style={{ right: 5 }} source={item?.location} />
              <Text style={styles.address}>{item?.locationName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.secoundContainer}>
          <View style={{ margin: 20 }}>
            {/* //first txt */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.title}>{item?.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",

                  padding: 10,
                }}
              >
                <Image
                  style={{ right: 5, height: 15, width: 15 }}
                  source={item?.rating}
                />
                <Text style={styles.rating}>{item?.ratingNo}</Text>
              </View>
            </View>
            {/* //secound Txt */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.percentage}>{item?.likedBy}</Text>
              <Text style={styles.percentageTxt}> Likelyhood you will be booked</Text>
            </View>

            {/* @3rd Txt */}
            <View>
              <Text style={styles.catTitle}>Venue Type</Text>
              <View style={{ flexDirection: "row" }}>
                <BoxContainer />
                <BoxContainer />
              </View>
            </View>
            
          </View>
        </View>
      </View>
    </View>
  )
}

export const BoxContainer = () => {
  return (
    <>
      <View
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          paddingHorizontal: 15,
          borderRadius: 12,
          margin: 5,
        }}
      >
        <Text>Bar</Text>
      </View>
    </>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    margin: 5,
    width: Dimensions.get("screen").width-30,
  },
  secoundContainer: {
    flex: 1,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    width: Dimensions.get("screen").width-30,
    bottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: "black",
  },
  rating: {
    fontSize: 15,
    fontWeight: "300",
    color: "black"
  },
  percentage: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#03989E",
  },
  percentageTxt: {
    color: "#03989E",
  },
  catTitle: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 10,
    color: "black"
  },
  bgImg: { zIndex: -10, elevation: 10 },
  backgroundImg: {
    width: Dimensions.get("screen").width - 30,
    height: Dimensions.get("screen").height / 3.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  locationContainer: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 30,
    left: 5,
  },
  innerLocation: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  address: { fontWeight: "bold", color: "gray" },
})
