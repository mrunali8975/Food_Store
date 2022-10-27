import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const Search = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={style.backgroundStyle}>
      <Icon name="search" style={style.iconStyle} color="black" />
      <TextInput style={style.inputStyle} placeholder='Search'
      value={term}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection:'row',
    alignItems:'center',
    marginTop:15

    
  },
  iconStyle:
  {
  fontSize:35,
  alignSelf:'center',
  marginHorizontal:15

  },
  inputStyle:
  {
    flex:1,
    fontSize:18
  }
});
export default Search;
