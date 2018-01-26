export function memesHasErrored(bool) {
    return {
        type: 'MEMES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function memesIsLoading(bool) {
    return {
        type: 'MEMES_IS_LOADING',
        isLoading: bool
    };
}

export function memesFetchDataSuccess(memes) {
    return {
        type: 'MEMES_FETCH_DATA_SUCCESS',
        memes
    };
}
