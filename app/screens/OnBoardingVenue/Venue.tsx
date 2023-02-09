import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Checkbox } from "react-native-paper"
const width = Dimensions.get("screen").width

const Venue = ({ item,data }) => {
    const [checked, setChecked] = useState(false)


    const removeItem = () => {
        
        const newData =   data.filter((word: string) => word !== item?.value)
         data=(newData)
         console.log(newData)
         setChecked(false)
       }
     
     
       const addItem = () => {
         data.push(item?.value)
         // setPress(data)
         setChecked(true)
         console.log(data)
     
       }
    
        return (
            <View style={[styles.subDiv,{borderWidth:checked?2:0}]} key={item?.id}>
                <Checkbox
                    onPress={checked ?removeItem: addItem}
                    status={checked ? "checked" : "unchecked"}
                    color={"black"}
                />
                <Text style={styles.text1}> {item?.value}</Text>
            </View>
        )
    }
    
    export default Venue
    
    const styles = StyleSheet.create({
        subDiv: {
            width: width / 3.68,
            backgroundColor: "white",
            margin: 12,
            height: 120,
            borderRadius: 12,
        },
        text1: {
            fontSize: 16,
            fontWeight: "600",
            color: "black",
            marginTop: 45,
            marginLeft: 5,
        },
    })