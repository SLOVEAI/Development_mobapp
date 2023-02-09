import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native"
import React, { useRef, useState } from "react"
import AppHeader from "../../components/AppHeader"
import SearchComponent from "../../components/SearchComponent"
import Paginator from "../HomeSliderScreen/Pagination"
import { colors } from "../../theme"
import { BoxContainer } from "../../components/HomeCard"
import MyButton from "../../components/MyButton"
const { width, height } = Dimensions.get("screen")
const Gigs = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const slideRef = useRef(null)
  const [CurrentIndex, setCurrentIndex] = useState(0)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index)
  })?.current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })?.current
  const data = [
    {
      background: require("../../../assets/images/bg1.png"),
      location: require("../../../assets/images/Vector.png"),
      locationName: "Stockholm, Sweden",
      title: "Live Band: Equinox",
      rating: require("../../../assets/images/Union.png"),
      ratingNo: 4.5,
      likedBy: "98.5%",
      id: "1",
    },
    {
      background: require("../../../assets/images/bg1.png"),
      location: require("../../../assets/images/Vector.png"),
      locationName: "Stockholm, Sweden",
      title: "Live Band: Equinox",
      rating: require("../../../assets/images/Union.png"),
      ratingNo: 4.5,
      likedBy: "98.5%",
      id: "2",
    },
    {
      background: require("../../../assets/images/bg1.png"),
      location: require("../../../assets/images/Vector.png"),
      locationName: "Stockholm, Sweden",
      title: "Live Band: Equinox",
      rating: require("../../../assets/images/Union.png"),
      ratingNo: 4.5,
      likedBy: "98.5%",
      id: "3",
    },
    {
      background: require("../../../assets/images/bg1.png"),
      location: require("../../../assets/images/Vector.png"),
      locationName: "Stockholm, Sweden",
      title: "Live Band: Equinox",
      rating: require("../../../assets/images/Union.png"),
      ratingNo: 4.5,
      likedBy: "98.5%",
      id: "4",
    },
    {
      background: require("../../../assets/images/bg1.png"),
      location: require("../../../assets/images/Vector.png"),
      locationName: "Stockholm, Sweden",
      title: "Live Band: Equinox",
      rating: require("../../../assets/images/Union.png"),
      ratingNo: 4.5,
      likedBy: "98.5%",
      id: "5",
    },
    // Add more data as per your requirement
  ]
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2 }}>
        <AppHeader title="Your events" navigation={navigation} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Submitted</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 20,
              borderWidth: 2,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "black", fontSize: 16 }}>Posted</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled
            pagingEnabled
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <HomeCard item={item} />}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slideRef}
            style={{ flex: 1 }}
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Paginator data={data} scrollX={scrollX} />
        </View>

        <MyButton
          name="See details and book venue"
          onpress={() => navigation.navigate("DetailScreen")}
        />
      </ScrollView>
    </View>
  )
}

const HomeCard = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        width: Dimensions.get("screen").width,
      }}
    >
      <View style={styles2.container}>
        {/* <Text>HomeCard</Text> */}
        <View style={styles2.bgImg}>
          <Image style={styles2.backgroundImg} source={item?.background} />
          <View style={styles2.locationContainer}>
            <View style={styles2.innerLocation}>
              <Image style={{ right: 5 }} source={item?.location} />
              <Text style={styles2.address}>{item?.locationName}</Text>
            </View>
          </View>
        </View>
        <View style={styles2.secoundContainer}>
          <View style={{ margin: 20 }}>
            {/* //first txt */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles2.title}>{item?.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",

                  padding: 10,
                }}
              >
                <Image style={{ right: 5, height: 15, width: 15 }} source={item?.rating} />
                <Text style={styles2.rating}>{item?.ratingNo}</Text>
              </View>
            </View>
            {/* //secound Txt */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles2.percentage}>{item?.likedBy}</Text>
              <Text style={styles2.percentageTxt}> Likelyhood you will be booked</Text>
            </View>

            {/* @3rd Txt */}
            <View>
              <Text style={styles2.catTitle}>Venue Type</Text>
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

export default Gigs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.backgroundColor,
    marginTop: StatusBar.currentHeight / 2,
  },
  secoundContainer: {
    margin: 10,
    flexDirection: "row",
  },
  headerTitle: {
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 19,
    color: "black",
  },
})

const styles2 = StyleSheet.create({
  container: {
    borderRadius: 30,
    margin: 5,
    width: Dimensions.get("screen").width - 30,
  },
  secoundContainer: {
    flex: 1,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    width: Dimensions.get("screen").width - 30,
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
    color: "black",
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
    color: "black",
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
