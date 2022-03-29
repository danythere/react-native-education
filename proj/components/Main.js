import React from 'react';
import { useState } from 'react';
import { gStyle } from '../styles/style';
import { StyleSheet, Text, Modal, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
  const [visible, setVisible] = useState(false);

  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google!!!', full: 'Google is cool', key: 1, img: 'https://www.ixbt.com/img/n1/news/2020/5/5/google-amp_large.jpg' },
    { name: 'Yandex', anons: 'Yandex!!!', full: 'Yandex is cool', key: 2, img: 'https://i.playground.ru/p/1h0LXc77AbN5FT1bDDCCFA.jpeg' },
    { name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool', key: 3, img: 'https://i.pinimg.com/originals/36/fb/ab/36fbab62d4dc6dc6dd26a1b3be081456.jpg' },

  ]);

  const addArticle = (article) => {
    setNews((list) => {
      article.key=Math.random().toString;
      return [article, ...list];
    })
    setVisible(false);
  }

  return (
    <View style={gStyle.main}>
      <Ionicons name='add-circle' size={34} color='green' onPress={() => setVisible(true)} style={styles.addButton} />
      <Modal visible={visible}>
        <View style={gStyle.main}>
          <Ionicons name='close-circle' size={34} color='red' onPress={() => setVisible(false)} />
          <Text style={[gStyle.title]}>Добавление записи</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <FlatList styles={styles.list} data={news} renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
          <Image source={{
            width: '100%',
            height: 200,
            uri: item.img
          }} />
          <Text style={styles.title}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
    textAlign: 'center'
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  addButton:{
    marginBottom:50
  }
})