import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IMAGE_URL} from '@env';
import Header from '../components/Header';
import Loading from '../components/Loading';
import {useLazyGetVideosQuery} from '../services/videosEndpoint';
import {ScreenParamsList} from '../types/screen';
import {layoutColors} from '../constants/layoutColors';
import {Video} from '../types/video';

const imgWidth = Dimensions.get('window').width / 2;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {backgroundColor: layoutColors.white},
  contentContainer: {paddingBottom: 20},
  imageContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  image: {width: imgWidth, height: 279},
  loading: {backgroundColor: 'rgba(255,255,255,0.6)'},
});

type Props = NativeStackScreenProps<ScreenParamsList, 'VideoHomeScreen'>;

function HomeScreen(props: Props) {
  const {navigation} = props;
  const [getVideos, {isLoading}] = useLazyGetVideosQuery();
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isRequesting, setIsRequesting] = useState(false);

  const fetchVideos = useCallback(
    async (_page = 1, initial = false) => {
      if (initial || _page === page + 1) {
        try {
          await getVideos({page: _page})
            .unwrap()
            .then(res => setVideos([...videos, ...res.results]));
        } catch (err) {
          Alert.alert('Error', 'Something went wrong. Try again');
        }
      }
    },
    [getVideos, page, videos],
  );

  useEffect(() => {
    fetchVideos(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = async (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isEndReached && !isRequesting) {
      setIsRequesting(true);
      setPage(page + 1);
      await fetchVideos(page + 1);
      setIsRequesting(false);
    }
  };
  return (
    <SafeAreaView style={styles.flex}>
      <Header title="Pop Movies" />
      <ScrollView
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        {isLoading && (
          <View style={[StyleSheet.absoluteFill, styles.loading]}>
            <Loading />
          </View>
        )}
        <View style={styles.imageContainer}>
          {videos?.map(video => (
            <TouchableOpacity
              key={video.id}
              onPress={() => navigation.navigate('VideoDetailScreen', {video})}>
              <Image
                style={styles.image}
                source={{
                  uri: `${IMAGE_URL}w185${video.poster_path}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
