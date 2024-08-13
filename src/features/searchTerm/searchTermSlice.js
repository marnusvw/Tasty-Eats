const intitialSearchTerm = '';

export const searchTermReducer = (searchTerm = intitialSearchTerm,action)=> {
    switch (action.type) {
        case 'searchTerm/setSearchTerm': {
            return action.payload;
        }
        case 'searchTerm/clearSearchTerm': {
            return '';
        }
        default:
            return searchTerm;
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}
export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}