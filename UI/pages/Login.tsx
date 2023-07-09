import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Signin from '../forms/Signin';

export default function Login({navigation}: any) {
  return (
    <View>
      <Signin navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
