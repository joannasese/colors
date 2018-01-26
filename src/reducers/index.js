import { combineReducers } from 'redux';
import { memes, memesHasErrored, memesIsLoading } from './memes';

export default combineReducers({
    memes,
    memesHasErrored,
    memesIsLoading
});
