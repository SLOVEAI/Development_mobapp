import React from "react"
import { StyleSheet, View, Animated, Dimensions } from "react-native"

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const Paginator = ({ data, scrollX }) => {
  return (
    <View style={{ flexDirection: "row", height: 20 }}>
      {data?.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [14, 14, 14],
          extrapolate: "clamp",
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: "clamp",
        })

        return (
          <Animated.View style={[styles?.dot, { width: dotWidth, opacity }]} key={i.toString()} />
        )
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
  dot: {
    height: 14,
    borderRadius: 10,
    backgroundColor: "#000",
    marginHorizontal: 8,
  },
})
