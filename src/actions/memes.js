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

export function memesFetchData(url) {
    return (dispatch) => {
        dispatch(memesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(memesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((memes) => dispatch(memesFetchDataSuccess(memes)))
            .catch(() => dispatch(memesHasErrored(true)));
    };
}
