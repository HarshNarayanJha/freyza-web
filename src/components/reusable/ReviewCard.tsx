import { Icon } from "@iconify/react"
import type { CustomerReview } from "@/lib/types/review"

export default function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <div className="flex w-80 flex-none flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Icon
              // biome-ignore lint/suspicious/noArrayIndexKey: TODO: will replace
              key={i}
              icon="mdi:star"
              className={
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }
              width={20}
              height={20}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold">{review.title}</h3>
      <p className="mb-4 text-gray-600">{review.comment}</p>
      <span className="flex-1"></span>
      <div className="text-sm text-gray-500">
        <p className="font-medium">{review.customerName}</p>
        <p>{new Date(review.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
