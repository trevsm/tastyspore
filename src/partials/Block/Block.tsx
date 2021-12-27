import React, { ReactNode } from "react"
import "./Block.scss"

export default function Block({ children }: { children: ReactNode }) {
  return (
    <div className="blob card block">
      <section>{children}</section>
    </div>
  )
}
