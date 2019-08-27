import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let us tell you" title="Our mission" />
        <SectionButton>About </SectionButton>
      </Section>
    )
  }
}
