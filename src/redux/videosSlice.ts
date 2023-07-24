import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
  },
  reducers: {
    setVideos(state, action: PayloadAction<any>) {
      state.videos = action.payload;
    },
  },
});

export default videosSlice.reducer;
