import React, { ReactNode } from "react"
import { Flex, H2, H3, Hr } from "src/styles"
import styled from "styled-components"
import { ProductFrontmatterFragment } from "types/gatsby-graphql"

const FullDescriptionStyles = styled.div`
  padding-bottom: 100px;

  position: relative;
  display: -webkit-box;
  padding-top: 10px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  h2 {
    color: var(--accentColor);
  }
  p {
    line-height: 27px;
  }
  div {
    margin-bottom: 10px;
  }
  overflow-y: auto;
  h3 {
    margin-left: 10px;
  }
  li {
    list-style: none;
  }

  .aliases,
  .benefits,
  .profile {
    text-transform: capitalize;
  }
  .benefits,
  .nutrition,
  .aliases,
  .description {
    margin-top: 40px;
    p {
      padding: 0 10px;
    }
  }
  .aliases {
    li {
      width: fit-content;
    }
  }
  .benefits {
    li {
      &::before {
        content: "✓ ";
      }
    }
  }
  .nutrition {
    padding: 30px 20px;
    border: 1px solid var(--accentColor);
    border-radius: 25px;
    h3,
    i {
      display: inline-block;
      margin-bottom: 10px;
    }
  }
`

const Snippets = styled(Flex)`
  padding: 0 10px;
  li {
    width: fit-content;
    padding: 10px;
    margin: 10px 10px 0 0;
    border-radius: 5px;
    background-color: #f7f7f7;
    box-shadow: 1px 1px 3px #e3e3e3;
  }
`

const Table = styled.ul`
  padding: 0 10px;
  li {
    padding: 10px;
  }
  li:nth-of-type(2n + 1) {
    background-color: #f5f5f5;
  }
  span {
    display: inline-block;
  }
`

export function FullDescription({
  data,
}: {
  data: ProductFrontmatterFragment
}) {
  const fm = data?.frontmatter

  if (!fm) return null
  return (
    <FullDescriptionStyles>
      <H2>Profile </H2>
      <Flex direction="row" wrap>
        <div className="flavor">
          <H3>Flavor: </H3>
          <Snippets>
            {fm.profile.flavor.map((e: string, key: number) => (
              <li key={key}>{e}</li>
            ))}
          </Snippets>
        </div>
        <div className="texture">
          <H3>Texture: </H3>
          <Snippets wrap>
            {fm.profile.texture.map((e: string, key: number) => (
              <li key={key}>{e}</li>
            ))}
          </Snippets>
        </div>
        <div className="aroma">
          <H3>Aroma: </H3>
          <Snippets wrap>
            {fm.profile.aroma.map((e: string, key: number) => (
              <li key={key}>{e}</li>
            ))}
          </Snippets>
        </div>
        <div className="similar" style={{ minWidth: "200px" }}>
          <H3>Similar flavor to: </H3>
          <Snippets wrap>
            {fm.profile.similar.map((e, key) => (
              <li key={key}>{e}</li>
            ))}
          </Snippets>
        </div>
      </Flex>
      <div className="aliases">
        <H2>Common Names</H2>
        <Snippets wrap>
          {fm.aka.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </Snippets>
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
        <Snippets direction="column">
          {fm.benefits.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </Snippets>
      </div>
      <div className="nutrition">
        <H2>Nutrition Values</H2>
        <i>In 1 cup:</i>
        <Table>
          <li>calories: {fm.nutrition.calories}</li>
          <li>carbs: {fm.nutrition.carbs}</li>
          <li>protein: {fm.nutrition.protein}</li>
          <li>fat: {fm.nutrition.fat}</li>
          <li>fiber: {fm.nutrition.fiber}</li>
        </Table>
        <Hr />
        <H3>Vitamins</H3>
        <Table className="vitamins">
          {fm.nutrition.vitamins.map((e, key) => (
            <li key={key}>
              {e.name}: {e.value}
            </li>
          ))}
        </Table>
      </div>
    </FullDescriptionStyles>
  )
}
