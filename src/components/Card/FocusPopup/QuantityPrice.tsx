import React from "react"

export function QuantityPrice(
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  itemData: {
    type?: string
    weight?: number
    size?: string
    quantity?: number
    price?: { msrp?: number; sale?: number }
  },
  quantity: number
) {
  return (
    <div className="quantity-and-price">
      <div className="quantity">
        <button
          className="add"
          onClick={() => {
            setQuantity((prev) =>
              prev < itemData.quantity ? prev + 1 : itemData.quantity
            )
          }}
        >
          +
        </button>
        <span className="num">{quantity}</span>
        <button
          className="minus"
          onClick={() => {
            setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
          }}
        >
          -
        </button>
      </div>
    </div>
  )
}
