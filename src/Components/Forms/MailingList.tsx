// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import "./Forms.scss"

function MailingList() {
  const [state, handleSubmit] = useForm("xpzbznrw")
  if (state.succeeded) {
    return (
      <p>
        Thanks for joining! &#128588; We will notify you when our site goes
        live!
      </p>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  )
}
export default MailingList
