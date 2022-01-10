import React, { useState, useEffect } from "react"

export default function ClientRender({ children }: { children: any }) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) return null
  return children
}
