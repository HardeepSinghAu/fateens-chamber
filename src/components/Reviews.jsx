import {React, useReducer} from "react";
import ListItem from "./ListItem";
import ReviewInput from "./ReviewInput";
import reducer from "./utils/ReviewsReducer";

const initialReviews = [
  { title: "Mr. Duking", description: "I highly resepect Fateen. All the town citizens know about her." },
  { title: "Pokemon trainer", description: "10/10 I caught them all!" },
  {
    title: "Town citizen",
    description: "I think she's alright. Her predictions are a little ominous - she said something about my Pikachu turning on me.",
  }
];

const Reviews = () => {  
  //const [reviews, setReviews] = useState(initialReviews);
  const initialState = {
    reviews: initialReviews,
    isShowEditBox: false,
    editBoxMessage: "",
    selectedReviewId: null
  }
  const [store, dispatch] = useReducer(reducer, initialState);
  const {reviews, isShowEditBox, editBoxMessage} = store;

  function setReviews(newReview) {
    dispatch({
      type: 'setReviews',
      data: newReview
    })
  }

  function deleteReview(id) {
    dispatch({
      type: 'deleteReview',
      data: id
    })
  }

  function initialiseEditBox(id) {
    dispatch({
      type: 'initialiseEditBox',
      data: id
    })
  }

  function updateEditBoxMessage(e){
    let message = e.target.value;
    dispatch({
      type: 'updateEditBoxMessage',
      data: message
    })
  }

  function saveMessage() {
    dispatch({
      type: 'saveMessage'
    })
  }
  // dispatch({
  //   type: 'saveMessage',
  //   data,
  // })


  const addReviews = (description) => {
    const newReview = {
      title: "Anonymous",
      description: description
    };

    setReviews(newReview);
  }

  return (
    <section id="reviews">
      <div>
        <h2>Reviews</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Reviews from my customers!</h3>
      <ul>
        {reviews.map(({ title, description }, id) => (
          <div key={id}>
          <ListItem key={`${id}-item`} title={title} description={description}></ListItem>
          <button key={`${id}-button`} onClick={() => deleteReview(id)}>Delete</button>
          <button key={`${id}-edit-button`} onClick={() => initialiseEditBox(id)}>Edit</button>

          </div>
        ))}
      </ul>

      {
        isShowEditBox && 
        <>
        <h3>Edit the message below</h3>
        <textarea onChange={updateEditBoxMessage} value={editBoxMessage} rows="4" cols="50"></textarea>
        <button onClick={saveMessage}>Save</button>
        </>
      }
      <ReviewInput addReviews={addReviews} />
    </section>
  );
};

export default Reviews;
