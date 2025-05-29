import { Icon } from "@iconify/react"

export default function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <div className="flex-none w-80 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Icon
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
      <h3 className="font-semibold text-lg mb-2">{review.title}</h3>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      <div className="text-sm text-gray-500">
        <p className="font-medium">{review.customerName}</p>
        <p>{new Date(review.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
