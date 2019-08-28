import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let us tell you" title="Our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quas reiciendis, doloremque praesentium illo esse. Expedita quo ex fugit impedit non reprehenderit culpa laboriosam molestias accusamus voluptates illo neque unde quasi quod, hic voluptatum! Modi, voluptates? Aliquid quod sint pariatur provident est distinctio amet enim eligendi eaque quasi, porro laudantium!
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              About{" "}
            </SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
