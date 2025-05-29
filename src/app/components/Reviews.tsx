import topReviews from "@/data/reviews.json"
import ReviewCard from "./reusable/ReviewCard"

export default function Reviews() {
  const reviews: CustomerReview[] = topReviews as CustomerReview[]

  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">What our customers say</h2>
      </div>
      <div className="overflow-x-auto mt-12">
        <div className="flex gap-6 pb-4">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
