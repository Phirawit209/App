import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from './../constants/theme';
import MainHeader from './../components/MainHeader';
import ScreenHeader from './../components/ScreenHeader';
import TopPlacesCarousel from './../mponents/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import HomeList from '../components/HomeList';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  return (
    <LinearGradient style={styles.container}
    colors={['#1bb8f5','#ffffff']}
    start={{x:0, y:0}}
    end={{x:0.5, y:1}}
    // locations={[0,0]}
    >
      <MainHeader title="โรงพยาบาลผิวหนังเขตร้อนภาคใต้" />
      {/* <ScreenHeader mainTitle="TrangSkin" secondTitle="Hospital" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="บริการ"
          // buttonTitle=""
          // onPress={() => {}}
        />
        <HomeList list={PLACES} />
        {/* <SectionHeader
          title="บริการอื่นๆ"
          buttonTitle="See All"
          onPress={() => {}}
        /> */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.blue,
  },
});

export default Home;