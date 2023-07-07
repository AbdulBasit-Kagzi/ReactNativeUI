import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
import activitiesData from '../assets/data/activitiesData';

export default function Activities() {
  return (
    <View style={styles.container}>
      <Text style={styles.activitiesText}>Activities</Text>

      <View style={styles.activityWrapper}>
        {activitiesData.map((data, index) => (
          <View key={data.id}>
            <Image
              source={data?.image}
              style={{width: 36, height: 28, objectFit: 'contain'}}
            />
            <Text
              style={{
                paddingTop: 6,
                color: colors.gray,
                fontSize: 10,
                fontWeight: '700',
              }}>
              {data.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  activitiesText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Lato',
  },
  activityWrapper: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
