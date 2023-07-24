import {SCREEN_KEYS} from '../constants/screens';
import {Video} from './video';

export type ScreenStackKeys = keyof typeof SCREEN_KEYS;

export type VideoDetailScreenParam = {video: Video};

export type ScreenParamsList = {
  [key in (typeof SCREEN_KEYS)[ScreenStackKeys]]:
    | VideoDetailScreenParam
    | undefined;
};
