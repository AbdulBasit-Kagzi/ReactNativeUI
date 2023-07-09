import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {discoverDataType} from '../types/types';
import chevronLeft from '../assets/images/bi_chevron-left.png';
import {colors} from '../assets/colors/colors';
import {ScrollView} from 'react-native';
import {Button} from 'react-native';
import likedHeart from '../assets/images/carbon_favorite-filled.png';
import heart from '../assets/images/heart.png';
const screenHeight = Dimensions.get('window').height;

export default function Details({route, navigation}: any) {
  const [data, setData] = useState<discoverDataType>(route.params.data);
  useEffect(() => {
    setData(route.params.data);
  }, [route.params.data]);
  return (
    <ScrollView>
      <ImageBackground source={data.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={chevronLeft} style={styles.backImage} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <View style={{paddingBottom: 20}}>
          <Text style={styles.descriptionText}>Descripiton</Text>
        </View>
        <View>
          <Text>
            Great day hikes and backpacking routes on the North and South Rim of
            this century-old national park include easy hikes overlooking the
            rim and more rugged trekking options that descend into the canyon.
          </Text>
        </View>
        <View style={styles.informationWrapper}>
          <View>
            <View style={{fontSize: 12, color: colors.gray, fontWeight: 700}}>
              <Text>Price</Text>
            </View>
            <View>
              <Text
                style={{fontSize: 24, color: colors.orange, fontWeight: 700}}>
                $350
                <Text
                  style={{fontSize: 14, color: colors.gray, fontWeight: 500}}>
                  /person
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={{fontSize: 12, color: colors.gray, fontWeight: 700}}>
              <Text>RATING</Text>
            </View>
            <View>
              <Text
                style={{fontSize: 24, color: colors.orange, fontWeight: 700}}>
                4.5
                <Text
                  style={{fontSize: 14, color: colors.gray, fontWeight: 500}}>
                  /5
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={{fontSize: 12, color: colors.gray, fontWeight: 700}}>
              <Text>DURATION</Text>
            </View>
            <View>
              <Text
                style={{fontSize: 24, color: colors.orange, fontWeight: 700}}>
                3{' '}
                <Text
                  style={{fontSize: 14, color: colors.gray, fontWeight: 500}}>
                  hours
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Button
            title="Book Now"
            color={colors.orange}
            touchSoundDisabled={false}
            onPress={() => Alert.alert('Booked')}
          />
        </View>
        <View
          style={{
            width: 64,
            height: 64,
            elevation: 5,
            borderRadius: 50,
            backgroundColor: 'white',
            position: 'absolute',
            right: 39,
            top: -40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={data.liked ? likedHeart : heart} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: screenHeight * 0.6,
    position: 'relative',
  },
  backImage: {
    position: 'absolute',
    top: 62,
    left: 20,
  },
  detailContainer: {
    height: screenHeight * 0.4,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginTop: -20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    position: 'relative',
  },
  descriptionText: {
    color: '#0C0D0E',
    fontFamily: 'Lato',
    fontSize: 24,
    fontWeight: '700',
  },
  detailText: {
    color: '#C4C4C4',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500',
  },
  informationWrapper: {
    flexDirection: 'row',
    gap: 52,
    marginVertical: 20,
  },
});
