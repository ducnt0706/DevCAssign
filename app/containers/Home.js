import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

import {globalStyles} from '../styles/style';
import NewItem from '../components/NewItem';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [listLoad, setListLoad] = useState(true);
  const [filters, setFilters] = useState({
    page: 1,
  });

  const loadMore = () => {
    const newPage = filters.page + 1;
    setFilters({...filters, page: newPage});
  };


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

  const getNews = async () => {
    try {
      const APIKey = 'cc1e69bd4d1c4755b7126f68a386ab8a';
      const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKey}&page=${filters.page}`;
      const res = await fetch(URL);
      const dataJson = await res.json();
      const news = dataJson.articles;
      const hasMore = news.length > 0;
      if (hasMore) {
        const newArticle = filterUniqueActicle(articles.concat(news));
        setArticles(newArticle);
        setListLoad(true);
      } else {
        setListLoad(false);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, [filters]);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator color="#00ff00" size="large" loading={loading} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={globalStyles.container}>
        <Text>Error =(</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.containerBody}>
      <View
        style={[
          globalStyles.row,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Text style={globalStyles.label}>Articles Count:</Text>
        <Text style={globalStyles.info}>{articles.length}</Text>
      </View>

      <View>
        <FlatList
          data={articles}
          renderItem={({item}) => <NewItem item={item} />}
          keyExtractor={(item) => item.title}
          onEndReached={loadMore}
          onEndReachedThreshold={1}
          ListFooterComponent={
            listLoad ? (
              <View style={globalStyles.bottomContainer}>
                <ActivityIndicator
                color="#00ff00"
                size="large"
                loading={listLoad}
              />
              </View>
              
            ) : (
              <View style={globalStyles.bottomContainer}>
                <Text style={globalStyles.label}>No more!</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

// const getListOfPublisher=(arr)=>{
  //   const newList= arr.filter(item=>{return item.source.name});
  //   return newList;
  // }
  // const listPublishers=getListOfPublisher(newArticle);
        // setPublishers(listPublishers);
        // console.log(publishers);
        //KEY API:cc1e69bd4d1c4755b7126f68a386ab8a
//128ccebef6ac4aa0abd1c38f8576c7d0
//abcaea57d4554c0fbc5f903521646862