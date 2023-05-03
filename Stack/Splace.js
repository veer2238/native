import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const Splace = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Splace2')

        },2000)

    },[])
  return (
    <View>
      <Text>Splace</Text>
    </View>
  )
}

export default Splace