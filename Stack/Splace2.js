import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const Splace2 = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')

        },2000)

    },[])
  return (
    <View style={{backgroundColor:"green"}}>
      <Text>Splace2</Text>
    </View>
  )
}

export default Splace2