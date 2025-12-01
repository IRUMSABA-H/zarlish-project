"use client";
import { useEffect, useState } from "react";
import { supabase } from "../components/lib/supabaseclient";
import { FaStar } from "react-icons/fa"; // npm install react-icons if not already

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0); // rating 1-5

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.error("Error fetching reviews:", error);
    else setReviews(data);
  }

  async function addReview(e) {
    e.preventDefault();
    if (!name || !review || rating === 0)
      return alert("Please fill all fields and give a rating!");

    const { error } = await supabase.from("reviews").insert([
      { name, review, rating } // make sure your table has a 'rating' column
    ]);

    if (error) {
      console.error(error);
      alert("Error adding review");
    } else {
      setName("");
      setReview("");
      setRating(0);
      fetchReviews(); // refresh list
    }
  }

  return (
    <section id="reviews" className="min-h-screen bg-white text-black p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Reviews</h2>

      {/* Form */}
      <form
        onSubmit={addReview}
        className="space-y-4 mb-8 max-w-xl mx-auto p-6 rounded-xl shadow-md bg-white"
      >
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 border border-black rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        {/* Rating stars */}
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={`cursor-pointer ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm"
            >
              <p className="font-semibold text-black">{r.name}</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={20}
                    className={star <= r.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-800 mt-1">{r.review}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first to write one!
          </p>
        )}
      </div>
    </section>
  );
}
