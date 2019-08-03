import React from 'react'

import Header from '../components/header'
import Landing from '../components/landing'
import About from '../components/about'
import Works from '../components/works'
import SkillsAndResume from '../components/skills_and_resume'
import Contact from '../components/contact'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()

    this.state = {
      email: 'kame0008@gmail.com',
      copied: false,
      menuIsOpen: false
    }
  }

  copyAddress = () => {
    this.input.current.select()
    document.execCommand('copy')

    this.setState({ copied: true })
  }

  hamburgerClicked = () => {
    const current = this.state.menuIsOpen
    this.setState({ menuIsOpen: !current })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          menuIsOpen={this.state.menuIsOpen}
          hamburgerClicked={this.hamburgerClicked}
        />

        <Landing />

        <About />

        <Works />

        <SkillsAndResume />

        <Contact
          copyAddress={this.copyAddress}
          email={this.state.email}
          inputRef={this.input}
          copied={this.state.copied}
        />
      </React.Fragment>
    )
  }
}

export default Container
