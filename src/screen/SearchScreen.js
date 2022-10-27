import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Search from '../component.js/Search';
import yelp from '../api/yelp';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const searchApi = async () => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'san jose',
        },
      });
      setResult(res.data.businesses);
    } catch (error) {
        console.log('error ',error)
    }
  };
  // useEffect(() => {
  //   searchApi()

  // }, [])

  return (
    <View style={style.backgroud}>
      <Search
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text style={{color: 'red'}}>{result.length}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  backgroud: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SearchScreen;
