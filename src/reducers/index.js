import { combineReducers } from 'redux';
import { memes, memesHasErrored, memesIsLoading } from './memes';
import { manageWords } from './manageWords'

export default combineReducers({
    memes,
    memesHasErrored,
    memesIsLoading,
    manageWords
});
