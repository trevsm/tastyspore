import React from "react"
import { ProductFrontmatterFragment } from "../../../../types/gatsby-graphql"
import "./FullDescription.scss"

export function FullDescription({
  data,
}: {
  data: ProductFrontmatterFragment
}) {
  const fm = data?.frontmatter
  if (!fm) return null
  return (
    <div className="full_description">
      <div className="profile">
        <h2>Profile </h2>
        <h3>Flavor: </h3>
        <ul>
          {fm.profile.flavor.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
        <h3>Texture: </h3>
        <ul>
          {fm.profile.texture.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
        <h3>Aroma: </h3>
        <ul>
          {fm.profile.aroma.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
        <hr />
        <h3>Similar flavor to: </h3>
        <ul>
          {fm.profile.similar.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
      </div>
      <div className="description">
        <h2>Description</h2>
        {fm.description} They prefer {fm.grow.temp.readable} temperatures of
        around {fm.grow.temp.degrees.min}°F ~{fm.grow.temp.degrees.max}°F at a
        humidity of {fm.grow.humidity}% and take approximatly {fm.grow.time} to
        mature to the size of around {fm.grow.size}in.
      </div>
      <div className="benefits">
        <h2>Benefits</h2>
        <ul>
          {fm.benefits.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
      </div>
      <div className="nutrition">
        <h2>Nutrition Values</h2>
        <i>In 1 cup:</i>
        <ul>
          <li>calories: {fm.nutrition.calories}</li>
          <li>carbs: {fm.nutrition.carbs}</li>
          <li>protein: {fm.nutrition.protein}</li>
          <li>fat: {fm.nutrition.fat}</li>
          <li>fiber: {fm.nutrition.fiber}</li>
        </ul>
        <h3>Vitamins</h3>
        <ul className="vitamins">
          {fm.nutrition.vitamins.map((e, key) => (
            <li key={key}>
              {e.name}: {e.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
