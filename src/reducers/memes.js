export function memesHasErrored(state = false, action) {
    switch (action.type) {
        case 'MEMES_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function memesIsLoading(state = false, action) {
    switch (action.type) {
        case 'MEMES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function memes(state = [], action) {
    switch (action.type) {
        case 'MEMES_FETCH_DATA_SUCCESS':
            return action.memes;

        default:
            return state;
    }
}
