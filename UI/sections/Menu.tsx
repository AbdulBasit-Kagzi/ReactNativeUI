import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
// import Feather from 'react-native-vector-icons/Feather';
import profileImage from '../assets/images/person.png';

// Feather.loadFont();
export default function Menu() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <View style={styles.menuIcon}>
              {/* <Feather name="menu" size={32} /> */}
            </View>
            <View>
              <Image source={profileImage} style={styles.profileImage} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {},
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
