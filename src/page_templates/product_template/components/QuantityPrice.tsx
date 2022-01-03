import React from "react"

export function QuantityPrice(
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  maxQuantity: number,
  quantity: number
) {
  return (
    <div className="quantity-and-price">
      <div className="quantity">
        <button
          className="add"
          onClick={() => {
            setQuantity((prev) => (prev < maxQuantity ? prev + 1 : maxQuantity))
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
