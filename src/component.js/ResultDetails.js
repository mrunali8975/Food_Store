import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const ResultDetails = ({results}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri:results.image_url}} />
      <Text style={styles.name}>{results.name}</Text>
       <Text style={{color:'black'}}>{results.rating} stars,{results.review_count} Reviews</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:
    {
marginLeft:15
    },
imageStyle:
{
    width:250,
    borderRadius:4,
    height:120,marginBottom:5
},
name:
{
    fontWeight:'bold',
    fontSize:16,
    color:'black',
    

}


})
export default ResultDetails