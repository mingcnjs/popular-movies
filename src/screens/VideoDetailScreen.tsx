import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMAGE_URL} from '@env';
import Header from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {getReleaseYear} from '../utils/string';
import {layoutColors} from '../constants/layoutColors';
import {ScreenParamsList, VideoDetailScreenParam} from '../types/screen';
import PlayCircleIcon from '../assets/icons/PlayCircleIcon';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {backgroundColor: layoutColors.white},
  contentContainer: {paddingBottom: 20},
  loading: {backgroundColor: 'rgba(255,255,255,0.6)'},
  titleBar: {backgroundColor: layoutColors.base, padding: 16},
  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: layoutColors.white,
  },
  container: {
    padding: 24,
  },
  image: {width: 115, height: 170},
  main: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  detailContainer: {
    justifyContent: 'space-between',
  },
  releaseDate: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 24,
    color: layoutColors.black,
    fontWeight: '400',
  },
  duration: {
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 14,
  },
  rating: {
    fontWeight: '700',
    fontSize: 14,
  },
  btnLabel: {
    fontWeight: '500',
    fontSize: 16,
    color: layoutColors.white,
  },
  addButton: {
    backgroundColor: layoutColors.base,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: Dimensions.get('screen').width - 180,
  },
  overview: {
    fontWeight: '500',
    fontSize: 14,
    color: layoutColors.light,
  },
  trailers: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: layoutColors.border,
    paddingBottom: 6,
  },
  trailerView: {
    backgroundColor: layoutColors.lightBg,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  trailerViewContainer: {
    marginTop: 16,
    gap: 8,
  },
});

type Props = NativeStackScreenProps<ScreenParamsList, 'VideoDetailScreen'>;

function VideoDetailScreen(props: Props) {
  const {route, navigation} = props;
  const {video} = route.params as VideoDetailScreenParam;

  const onBackToHome = () => {
    navigation.goBack();
  };

  if (!video) {
    onBackToHome();
  }

  return (
    <SafeAreaView style={styles.flex}>
      <Header
        title="Movie Details"
        headerBackVisible
        onPressBack={onBackToHome}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>{video?.title}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.main}>
            <Image
              style={styles.image}
              source={{
                uri: `${IMAGE_URL}w185${video?.poster_path}`,
              }}
            />
            <View style={styles.detailContainer}>
              <View>
                <Text style={styles.releaseDate}>
                  {getReleaseYear(video?.release_date)}
                </Text>
                <Text style={styles.duration}>120 mins</Text>
              </View>
              <View>
                <Text style={styles.rating}>{video?.vote_average}/10</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.btnLabel}>Add to Favorite</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.overview}>{video?.overview}</Text>
          </View>
          <View style={styles.trailers}>
            <Text style={styles.overview}>TRAILERS</Text>
          </View>
          <View style={styles.trailerViewContainer}>
            <View style={styles.trailerView}>
              <IconButton>
                <PlayCircleIcon />
              </IconButton>
              <Text style={styles.overview}>Play trailer 1</Text>
            </View>
            <View style={styles.trailerView}>
              <PlayCircleIcon />
              <Text style={styles.overview}>Play trailer 1</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default VideoDetailScreen;
