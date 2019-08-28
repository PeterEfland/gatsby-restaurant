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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            soluta optio! Voluptatum odio explicabo repellendus laboriosam
            molestias, ex esse laborum eveniet aut praesentium accusantium
            soluta sunt quasi exercitationem quae tempora?
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
