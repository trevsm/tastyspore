import React from "react"

export function Sizes({
  inventory,
  size,
  setSize,
}: {
  inventory: any
  size: string
  setSize: React.Dispatch<React.SetStateAction<string>>
}) {
  if (!inventory || !size || !setSize) return null
  return (
    <div className="sizes">
      {inventory &&
        inventory.map((item: any, idx: number) => (
          <div
            key={idx}
            className={
              item?.size +
              (item?.size == size ? " selected" : "") +
              (item.quantity == 0 ? " out-of-stock" : "")
            }
            onClick={() => {
              setSize(item?.size as string)
            }}
          >
            <p className="size-label">{item?.size}</p>
            {item?.weight}
            <span className="unit">lbs</span>
            {item.quantity == 0 ? (
              <p className="out-label">out of stock</p>
            ) : (
              <p className="price price-label">
                <span>$</span>
                {item.price.msrp}
              </p>
            )}
          </div>
        ))}
    </div>
  )
}
