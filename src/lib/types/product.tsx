export type ProductCategory =
  | "Shampoo"
  | "Lotion"
  | "Serum"
  | "Tablets"
  | "Cream"

/**
 * Represents a single product from FREYZA Cosmeceuticals.
 */
export type Product = {
  /**
   * A unique identifier for the product.
   */
  id: string

  /**
   * The name of the product.
   */
  name: string

  /**
   * A brief description of the product.
   */
  description: string

  /**
   * The URL or path to the main image of the product.
   */
  imageUrl: string

  /**
   * (Optional) The category the product belongs to (e.g., "Skincare", "Haircare").
   */
  category?: ProductCategory

  /**
   * (Optional) The price of the product.
   */
  price?: number

  /**
   * (Optional) An array of key ingredients in the product.
   */
  ingredients?: string[]

  /**
   * (Optional) Instructions on how to use the product.
   */
  howToUse?: string

  /**
   * (Optional) Benefits of using the product.
   */
  benefits?: string[]

  /**
   * (Optional) Any specific disclaimers or warnings.
   */
  warnings?: string

  /**
   * (Optional) A list of additional images for the product.
   */
  additionalImages?: string[]
}
