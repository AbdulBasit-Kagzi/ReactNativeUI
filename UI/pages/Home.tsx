import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Menu from '../sections/Menu';
import Discover from '../sections/Discover';
import Activities from '../sections/Activities';
import LearnMore from '../sections/LearnMore';

export default function Home({navigation}: any) {
  return (
    <View>
      <ScrollView>
        <Menu />
        <Discover navigation={navigation} />
        <Activities />
        <LearnMore />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
