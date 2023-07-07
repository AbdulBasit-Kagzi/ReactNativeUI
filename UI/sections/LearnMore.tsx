import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
import {LearnMoreData} from '../assets/data/learnMoreData';

export default function LearnMore() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.LearnText}>Learn More</Text>

        <ScrollView horizontal={true}>
          <View style={styles.learnWrapper}>
            {LearnMoreData.map((data, index) => (
              <View key={data.id}>
                <Image
                  source={data?.image}
                  style={{width: 170, height: 180, borderRadius: 20}}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  LearnText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Lato',
  },
  learnWrapper: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 20,
  },
});
