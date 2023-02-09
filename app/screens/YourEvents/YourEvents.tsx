import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from "react-native"
import React, { useRef, useState } from "react"
import { colors } from "../../theme"
import Paginator from "../HomeSliderScreen/Pagination"
// import Animated from "react-native-reanimated"
import { FlatList } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/AntDesign"

const data = [
  {
    background: require("../../../assets/images/frame14.png"),
    heading: "Artists",
    line: "Connect, promote, network with music lovers and get a gig at live performance venue today!",
    i: 1,
  },
  {
    background: require("../../../assets/images/frame14.png"),
    heading: "Venues",
    line: "Connect, promote, network with music lovers and get a gig at live performance venue today!",
    i: 2,
  },
  {
    background: require("../../../assets/images/frame14.png"),
    heading: "Consumers",
    line: "Connect, promote, network with music lovers and get a gig at live performance venue today!",
    i: 3,
  },
]
const height = Dimensions.get("screen").height
const CarouselItem = ({ item }) => {
  return (
    <View style={{marginLeft:10,marginRight:10}}>
      <View style={{ marginLeft: 0 }}>
        <Image source={require("../../../assets/images/frame14.png")} />
      </View>
      <View
        style={{
          width: 325,
          alignSelf: "center",
          height: 240,
          borderRadius: 30,
          backgroundColor: "white",
            bottom: 30,
          // left: 40.5,
          position: "absolute",
          padding: 20,
        }}
      >
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16, color: "black", lineHeight: 18 }}>
            Live Band: Equinox
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#E1FBFC",
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#03989E", alignSelf: "center" }}>APRIL</Text>
            <Text
              style={{ color: "#03989E", alignSelf: "center", fontSize: 20, fontWeight: "800" }}
            >
              20
            </Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "black", fontFamily: "Manrope", fontSize: 12 }}>
              Café Angelina
            </Text>
            <Text style={{ fontFamily: "Manrope", fontSize: 12 }}>Thu 22:00</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 14 }}>Music genre</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                fontSize: 12,
                borderWidth: 1,
                padding: 5,
                borderRadius: 12,
                borderColor: "lightgrey",
              }}
            >
              Bar
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 20,
                borderWidth: 1,
                padding: 5,
                borderRadius: 12,
                borderColor: "lightgrey",
              }}
            >
              Concert Hall
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 14 }}>Music type</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                fontSize: 12,
                borderWidth: 1,
                padding: 5,
                borderRadius: 12,
                borderColor: "lightgrey",
              }}
            >
              Band
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const YourEvent = ({ navigation }) => {
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const [CurrentIndex, setCurrentIndex] = useState(0)
  const [isLogin, setIsLogin] = useState("")
  const scrollX = useRef(new Animated.Value(0)).current
  const slideRef = useRef(null)
const [click , setClick ]= useState(true)
const [click2 , setClick2 ]= useState(false)
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  return (
    <>
      <View style={{ backgroundColor: "#E1FBFC", height: height }}>
        <View style={styles.container}>
          <Image source={require("../../../assets/images/icoIcon.png")} />
          <TouchableOpacity>
            <Text style={styles.headerTitle}>Your Event</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 30,
              padding: 5,
              borderRadius: 50,
            }}
            onPress={() => navigation.navigate("Settings")}
          >
            <Icon name="setting" size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", position: "relative", bottom: 20 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              marginLeft: 20,
              padding: 10,
              borderRadius: 20,
              backgroundColor: click ? "black" : "transparent",
            }}
            onPress={() => {
              setClick(true)
              setClick2(false)
            }}
          >
            <Text style={{ color: click ? "white" : "black" }}>Submitted</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              marginLeft: 10,
              padding: 10,
              borderRadius: 20,
              backgroundColor: click2 ? "black" : "transparent",
            }}
            onPress={() => {
              setClick2(true)
              setClick(false)
            }}
          >
            <Text style={{ color: click2 ? "white" : "black" }}>Posted</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <CarouselItem item={item} />}
          keyExtractor={(item) => item?.heading}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          centerContent
          snapToAlignment="center"
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
          style={{ flex: 1 }}
        />

        <View
          style={{
            flexDirection: "row",
            marginBottom: 85,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paginator data={data} scrollX={scrollX} />
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            position: "relative",
            bottom: 70,
            width: 250,
            height: 40,
            alignSelf: "center",
            borderRadius: 20,
            backgroundColor: "black",
          }}
          onPress={() => navigation.navigate("ChooseToAttend")}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 16,
              textAlign: "center",
              marginTop: 8,
            }}
          >
            See event details
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default YourEvent

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.backgroundColor,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
    padding: 10,
  },
  headerTitle: {
    color: "#303233",
    fontSize: 17,
    fontWeight: "600",
  },

  item: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 12,
  },
})
