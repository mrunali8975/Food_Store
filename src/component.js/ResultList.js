import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';
const ResultList = ({title, results,navigation}) => {
  if(!results.length)
  {
return null;
  }
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={results => results.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
                <ResultDetails results={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginLeft:15,
    marginBottom:5
  },
  container:
  {
    marginBottom:10
  }
});
export default withNavigation (ResultList);
