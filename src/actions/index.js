import db from "../firebase";

export function postReviewAPI(payload) {
  console.log(payload);

  db.collection("snacks")
    .doc(payload.itemId)
    .collection("reviews")
    .add({
      actor: payload.user,
      review: payload.review,
      rating: payload.rating,
      timestamp: payload.timestamp,
    })
    .then(console.log("success"))
    .catch((error) => {
      console.log(error);
    });
}
