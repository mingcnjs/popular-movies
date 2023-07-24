import {API_KEY} from '@env';
import {api} from './service';
import {Result} from '../types/video';

const videosEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    getVideos: builder.query<Result, {page?: number}>({
      query: ({page = 1}) => ({
        url: `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useGetVideosQuery, useLazyGetVideosQuery} = videosEndpoints;
