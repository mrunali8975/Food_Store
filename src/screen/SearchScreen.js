import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Search from '../component.js/Search';
import useResults from '../hooks/useResults';
import ResultList from '../component.js/ResultList';
const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, result, errorMessage] = useResults();

  const filterResultByPrice = price => {
    return result.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={style.backgroud}>
      <Search
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
        navigation={navigation}
          title={'Cost effective'}
          results={filterResultByPrice('$')}
        />
        <ResultList         navigation={navigation}
 title={'Big Pricer'} results={filterResultByPrice('$$')} />
        <ResultList
                navigation={navigation}

          title={'Big spender'}
          results={filterResultByPrice('$$$')}
        />
      </ScrollView>
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
