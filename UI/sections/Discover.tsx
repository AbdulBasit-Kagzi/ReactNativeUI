import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../assets/colors/colors';
import {Data} from '../assets/data/discover';
import {TouchableOpacity} from 'react-native';
import discoverData from '../assets/data/discoverData';
import {Image} from 'react-native';

interface DicoverPropsType {
  navigation: any;
}
export default function Discover({navigation}: DicoverPropsType) {
  const [dataId, setDataId] = useState<number>(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <View>
            <Text style={styles.fontStyle}>Discover</Text>
          </View>
          <View style={styles.discoverDataWrapper}>
            {Data.map((data, index) => (
              <TouchableOpacity onPress={() => setDataId(index)}>
                <Text
                  key={data.id}
                  style={[
                    styles.text,
                    {color: dataId === index ? colors.orange : colors.gray},
                  ]}>
                  {data.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.imageWrapper}>
              {discoverData.map(data => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details', {data: data})}>
                  <View key={data.id}>
                    <Image
                      source={data?.image}
                      style={{
                        width: 170,
                        height: 250,
                        borderRadius: 20,
                        position: 'relative',
                      }}
                    />
                    <View style={styles.detailWrapper}>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: 18,
                          fontWeight: 700,
                          fontFamily: 'Lato',
                        }}>
                        {data.title}
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: 10,
                          fontWeight: 700,
                          fontFamily: 'Lato',
                        }}>
                        {data.location}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.white,
  },
  fontStyle: {
    color: colors.black,
    fontSize: 32,
    fontFamily: 'Lato',
    fontWeight: '700',
  },
  text: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Lato',
  },
  discoverDataWrapper: {
    flexDirection: 'row',
    gap: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  detailWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    top: 168,
  },
});
