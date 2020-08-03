import React, {useState,useRef} from 'react';
import {View, Text, ActivityIndicator, Button, FlatList} from 'react-native';
import {globalStyles} from '../styles/style';
import useFetch from '../hooks/useFetch';


//TODO: filter for unique title
const filterUniqueActicle = (arr) => {
  const uniqueArr = [];
  arr.forEach((item1) => {
    let unique = true;
    uniqueArr.forEach((item2) => {
      const isEqual = JSON.stringify(item1) === JSON.stringify(item2);
      unique = isEqual ? false : true;
    });
    if (unique) uniqueArr.push(item1);
  });
  return uniqueArr;
};

export default function Test() {
  const [pageNum, setPageNum] = useState(1);
  const [datas, isLoading, isError,setUrl] = useFetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=128ccebef6ac4aa0abd1c38f8576c7d0&page=1`, []);
  //const [news,setNews]= useState([]);
  const articles = datas.articles;
  const uniqueArticles =filterUniqueActicle(articles);

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator color="coral" size="large" loading={isLoading} />
      </View>
    );
  }
  if (isError) {
    return (
      <View style={globalStyles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.containerBody}>
      <View>
        <Text style={globalStyles.label}>Learning Custom Hook</Text>
      </View>
      <View style={globalStyles.container}>
        <Button
          title="Load"
          onPress={() => {
            setPageNum(pageNum + 1);
            setUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=128ccebef6ac4aa0abd1c38f8576c7d0&page=${pageNum}`);
          }}
        />
        <FlatList
        data={uniqueArticles}
        renderItem={({item}) =>(
          <View style={globalStyles.card}>
            <Text style={globalStyles.title}>* {item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}
