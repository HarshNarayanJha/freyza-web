import topReviews from "@/data/reviews.json"
import type { CustomerReview } from "@/lib/types/review"
import ReviewCard from "./reusable/ReviewCard"

export default function Reviews() {
  const reviews: CustomerReview[] = topReviews as CustomerReview[]

  return (
    <section className="m-auto max-w-7xl px-16 py-12">
      <div className="my-4">
        <h2 className="text-2xl font-bold">What our customers say</h2>
      </div>
      <div className="no-scrollbar mt-12 flex gap-6 overflow-x-auto pb-4">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <p className="prose prose-sm">NOTE: These are dummy reviews</p>
    </section>
  )
}
