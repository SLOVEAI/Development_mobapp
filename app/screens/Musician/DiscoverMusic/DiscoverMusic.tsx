import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  StatusBar
} from "react-native"
import React, { useRef, useState } from "react"
import { colors } from "../../../theme"

// @Components
import AppHeader from "../../../components/AppHeader"
import SearchComponent from "../../../components/SearchComponent"
import Paginator from "../../HomeSliderScreen/Pagination"

const DiscoverMusic = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const slideRef = useRef(null)
  const data = [
    {
      name: "Pop",
    },
    {
      name: "Rock",
    },
    {
      name: "Jazz",
    },
    {
      name: "Country",
    },
    {
      name: "Folk",
    },
    {
      name: "EDM",
    },
  ]
  return (
    <FlatList
      key={Math.random() * 1000}
      style={styles.container}
      ListHeaderComponent={
        <View style={{flex:1}}>
<View style={{flex:0.2}}>
          <AppHeader navigation={navigation} title="Discover venues" />
          </View>
          <View style={styles.secoundContainer}>
            <SearchComponent />
            <Text style={styles.headerTitle}>Discover venues</Text>
          </View>
        </View>
      }
      showsVerticalScrollIndicator={false}
      // scrollEnabled={true}
      data={data}
      numColumns={2}
      // horizontal
      ref={slideRef}
      renderItem={({ item }) => (
        <>
          <CardContainer name={item.name} />
        </>
      )}
      ListFooterComponent={
        <>
          <View style={{ margin: 10 }}>
            <Paginator data={data} scrollX={scrollX} />
          </View>
        </>
      }
    />
  )
}

const CardContainer = ({ name }) => {
  return (
    <>
      <View>
        <ImageBackground
          resizeMode="contain"
          style={{
            height: 110,
            width: Dimensions.get("screen").width - Dimensions.get("screen").width / 1.8,
            margin: 10,
            borderRadius: 30,
            // backgroundColor: "blue",
          }}
          source={require("../../../../assets/images/bgbg.png")}
        />

        <Text style={{ left: 10, color: "black" }}>{name}</Text>
      </View>
    </>
  )
}

export default DiscoverMusic

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.backgroundColor,
    marginTop:(StatusBar.currentHeight)/2
  },
  secoundContainer: {
    margin: 10,
  },
  headerTitle: {
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 19,
    color: "black",
  },
})
