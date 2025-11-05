import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './search.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../constants/theme';
import axios from 'axios';
import {SearchTile} from '../components/product';

const Search = () => {
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handlePress = async () => {
    try {
      const response = await axios.post(
        `http://3.1.249.239/api/search/${input}`,
      );
      setSearchResult(response.data);
    } catch (error) {
      setSearchResult('');
      console.log('====================================');
      console.log('Error', error);
      console.log('====================================');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Icon
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={input}
            onChangeText={setInput}
            placeholder="What are you looking for?"
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              handlePress();
            }}>
            <Icons name="search" size={24} color={COLORS.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      {searchResult.length === 0 ? (
        <View style={{flex: 1}}>
          <Image
            style={styles.searchImage}
            source={require('../assets/Pose23.png')}
          />
        </View>
      ) : (
        <FlatList
          style={{marginHorizontal: 12, marginBottom: 140}}
          data={searchResult}
          keyExtractor={item => item._id}
          renderItem={({item}) => <SearchTile item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
