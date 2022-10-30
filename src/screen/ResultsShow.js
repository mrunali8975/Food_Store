import { View, Text ,FlatList,Image, StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react'
import yelp from '../api/yelp'
const ResultsShow = (props) => {
const [results,setResult]=useState(null)
const id= props.route.params.id
 
const getResult= async(id)=>
 {
const res =await yelp.get(`/${id}`)
setResult(res.data)

 }   
 useEffect(() => {
  getResult(id)
 }, [])
 
 console.log('id',results)
    return (
    <View style={{flex:1}}>
      <Text style={{color:'red'}}>{results.name}</Text>
      <FlatList
      data={results.photos}
      keyExtractor={photos=>photos}
      renderItem={({item})=>
    {
        return(
            <Image
source={{uri:item}}  style={styles.Image}          />

        )
    }}
      
      />
    </View>
  )
}
const styles=StyleSheet.create({
    Image:
    {
        height:200,
        width:300
    }
})

export default ResultsShow