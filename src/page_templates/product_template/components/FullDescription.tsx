import React from "react"
import { H2, H3, Hr } from "src/styles"
import { ProductFrontmatterFragment } from "types/gatsby-graphql"
import "./FullDescription.scss"

export function FullDescription({
  data,
}: {
  data: ProductFrontmatterFragment
}) {
  const fm = data?.frontmatter

  if (!fm) return null
  return (
    <div className="full-description">
      <H2>Profile </H2>
      <div className="profile">
        <div className="flavor">
          <H3>Flavor: </H3>
          <ul>
            {fm.profile.flavor.map((e: string, key: number) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="texture">
          <H3>Texture: </H3>
          <ul>
            {fm.profile.texture.map((e: string, key: number) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="aroma">
          <H3>Aroma: </H3>
          <ul>
            {fm.profile.aroma.map((e: string, key: number) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="similar" style={{ minWidth: "200px" }}>
          <H3>Similar flavor to: </H3>
          <ul>
            {fm.profile.similar.map((e, key) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="aliases">
        <H2>Common Names</H2>
        <ul>
          {fm.aka.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
      </div>
      <div className="description">
        <H2>Description</H2>
        <p>
          {fm.description} They prefer {fm.grow.temp.readable} temperatures of
          around {fm.grow.temp.degrees.min}°F ~{fm.grow.temp.degrees.max}°F at a
          humidity of {fm.grow.humidity}% and take approximatly {fm.grow.time}{" "}
          to mature to the size of around {fm.grow.size}in.
        </p>
      </div>
      <div className="benefits">
        <H2>Benefits</H2>
        <ul>
          {fm.benefits.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </ul>
      </div>
      <div className="nutrition">
        <H2>Nutrition Values</H2>
        <i>In 1 cup:</i>
        <ul>
          <li>calories: {fm.nutrition.calories}</li>
          <li>carbs: {fm.nutrition.carbs}</li>
          <li>protein: {fm.nutrition.protein}</li>
          <li>fat: {fm.nutrition.fat}</li>
          <li>fiber: {fm.nutrition.fiber}</li>
        </ul>
        <Hr />
        <H3>Vitamins</H3>
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
