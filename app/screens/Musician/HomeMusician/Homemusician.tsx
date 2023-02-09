import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"
import React, { useState, useRef,useEffect } from "react"
import { colors } from "../../../theme"
import AppHeader from "../../../components/AppHeader"
import HomeCard from "../../../components/HomeCard"
import Paginator from "../../HomeSliderScreen/Pagination"
// @Components
import MyButton from "../../../components/MyButton"

const Homemusician = ({ navigation }) => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0))?.current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0]?.index);
  })?.current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })?.current;
  const data = [
    {background:require("../../../../assets/images/Frame13.png"),
    location:require("../../../../assets/images/Vector.png"),
    locationName:"Stockholm, Sweden",
    title:"Café Angelina",
    rating:require("../../../../assets/images/Union.png"),
    ratingNo:4.5,
    likedBy:"98.5%",
    id: "1", 

   },
    { background:require("../../../../assets/images/Frame13.png"),
    location:require("../../../../assets/images/Vector.png"),
    locationName:"Stockholm, Sweden",
    title:"Café Angelina",
    rating:require("../../../../assets/images/Union.png"),
    ratingNo:4.5,
    likedBy:"98.5%",
    id: "2", 
 },
    { background:require("../../../../assets/images/Frame13.png"),
    location:require("../../../../assets/images/Vector.png"),
    locationName:"Stockholm, Sweden",
    title:"Café Angelina",
    rating:require("../../../../assets/images/Union.png"),
    ratingNo:4.5,
    likedBy:"98.5%",
    id: "3", 
 }, { background:require("../../../../assets/images/Frame13.png"),
 location:require("../../../../assets/images/Vector.png"),
 locationName:"Stockholm, Sweden",
 title:"Café Angelina",
 rating:require("../../../../assets/images/Union.png"),
 ratingNo:4.5,
 likedBy:"98.5%",
 id: "4", 
}, { background:require("../../../../assets/images/Frame13.png"),
location:require("../../../../assets/images/Vector.png"),
locationName:"Stockholm, Sweden",
title:"Café Angelina",
rating:require("../../../../assets/images/Union.png"),
ratingNo:4.5,
likedBy:"98.5%",
id: "5", 
}, 
    // Add more data as per your requirement
  ]


  let CurrentSlide = 0;

  useEffect(() => {
      const interval = setInterval(() => {

          if (CurrentSlide >= data.length) CurrentSlide = 0;

          slideRef.current.scrollToIndex({
              index: CurrentSlide++,
              animated: true,
          });
      }, 2500)


      return () => clearInterval(interval)

  }, [])


  return (
    <View style={styles.container}>
<View style={{flex:0.2}}>
      <AppHeader title="Your recommendations"  navigation={navigation}/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled
          pagingEnabled
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HomeCard item={item} />}
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
          style={{flex:1}}
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

export default Homemusician

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: colors.palette.backgroundColor,
    // backgroundColor: "yellow",
  },
})


