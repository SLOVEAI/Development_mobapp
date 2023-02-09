import {
    Animated,
    Dimensions,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar
} from "react-native"
import React, { createRef, useEffect, useRef, useState } from "react"
import Paginator from "./Pagination"
import { asyncStorage } from "reactotron-react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native"
const { width, height } = Dimensions.get("screen")

const data = [
    {
        background: require("../../../assets/images/image2.png"),
        heading: "Artists",
        line: "Connect, promote, network with music lovers and get a gig at live performance venue today!",
        i: 1,
    },
    {
        background: require("../../../assets/images/image3.png"),
        heading: "Venues",
        line: "Connect, promote, network with music lovers and get a gig at live performance venue today!",
        i: 2,
    },
    {
        background: require("../../../assets/images/image4.png"),
        heading: "Consumers",
        line: "Connect, promote, network with music lovers and get a gig at live performance venue today!",
        i: 3,
    },
]

const CarouselItem = ({ item }) => {
    return (
        <>
            <View style={{ width, alignItems: "center", justifyContent: "center" }}>


                <Text style={{ fontSize: 22, color: "black", fontWeight: "600", }}>
                    {item?.heading}
                </Text>

                <Text
                    style={{
                        fontSize: 14,
                        color: "black",
                        fontWeight: "500",
                        width: width / 1.3,
                        marginBottom: 20,
                    }}
                >
                    {item?.line}
                </Text>
            </View>
        </>
    )
}

const HomeScreen = ({ navigation }) => {
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const [isLogin, setIsLogin] = useState("")
    const scrollX = useRef(new Animated.Value(CurrentIndex)).current
    const slideRef = useRef(null)

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const gotToLogin = () => {
        navigation.navigate("Login")
    }
    const focus = useIsFocused()

    const getdata = async () => {
        const id = await AsyncStorage.getItem("id")
        console.log(JSON.parse(id)?.id)
        const newID = JSON.parse(id)
        if (newID?.account_type === "Artist") {
            navigation.replace("BottomNavigator", {
                screen: "ProfileMusic"
            })
        } else if (newID?.account_type === "Venue") {
            navigation.replace("VenueBottomNavigator", {
                screen: "ProfileVenue"
            })
        }
    }

    

    let CurrentSlide = 0;

    useEffect(() => {
        const interval = setInterval(() => {

            if (CurrentSlide >= data.length) CurrentSlide = 0;

            slideRef.current.scrollToIndex({
                index: CurrentSlide++,
                animated: true,
            });
        }, 2500)

        getdata()

        return () => clearInterval(interval)

    }, [])


    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#C3F6F980",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ImageBackground
                resizeMode="cover"
                source={data[CurrentIndex].background}
                style={{ flex: 1, justifyContent: "center", alignItems: "center", width, height }}
            >
                <View style={{ width, alignItems: "center", justifyContent: "center", marginTop: StatusBar.currentHeight, flex: 1 }}>

                    <Image
                        source={require("../../../assets/icons/logo.png")}
                        resizeMode="cover"
                        style={{ marginTop: 30, marginBottom: 30 }}
                    />

                    <Text
                        style={{
                            fontSize: 40,
                            color: "black",
                            fontWeight: "600",
                            width: width / 1.6,
                            textAlign: "center",
                            fontFamily: "ClashDisplay-Bold"
                        }}
                    >
                        Welcome to Slove
                    </Text>
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
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}

                    ref={slideRef}
                    style={{ flex: 1 }}
                // initialScrollIndex={0}

                />

                <View style={{ flexDirection: "row", marginBottom: 30 }}>
                    <Paginator data={data} scrollX={scrollX} />
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: "black",
                        padding: 16,
                        borderRadius: 40,
                        width: width / 1.1,
                        marginVertical: 10,
                    }}
                    onPress={() => navigation.navigate("CreateAccount")}
                >
                    <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center", fontFamily: "Manrope-SemiBold" }}>
                        Create an account
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: "transparent",
                        padding: 16,
                        borderWidth: 2,
                        borderRadius: 40,
                        width: width / 1.1,
                        marginTop: 10,
                        marginBottom: 40,
                    }}
                    onPress={() => gotToLogin()}
                >
                    <Text style={{ color: "black", fontWeight: "600", fontSize: 16, textAlign: "center", fontFamily: "Manrope-SemiBold" }}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
