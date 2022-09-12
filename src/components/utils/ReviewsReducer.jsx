export default function reducer(state, action) {

    switch(action.type) {
        case 'setReviews': {
            return {
                ...state,
                reviews: [ ...state.reviews, action.data]
            }
        }
        case 'deleteReview': {
            return {
                ...state,
                // reviews: state.reviews.filter((review, id) => id !== action.data),
                reviews: [
                    ...state.reviews.slice(0, action.data),
                    ...state.reviews.slice(action.data+1)
                ]
            }
        }
        case 'initialiseEditBox': {
            return {
                ...state,
                isShowEditBox: true,
                editBoxMessage: state.reviews[action.data].description,
                selectedReviewId: action.data
            }
        }
        case 'updateEditBoxMessage': {
            return {
                ...state,
                editBoxMessage: action.data
            }
        }
        case 'saveMessage': {
            const updatedReviews = state.reviews.slice();
            updatedReviews[state.selectedReviewId].description = state.editBoxMessage;

            return {
                ...state,
                reviews: updatedReviews,
                isShowEditBox: false
            }
        }

        default: return state;
    }

}