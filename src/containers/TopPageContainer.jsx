import React from 'react'
import Landing from '../components/landing'

class LandingPageContainer extends React.Component {
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
      <Landing
        copyAddress={this.copyAddress}
        email={this.state.email}
        inputRef={this.input}
        copied={this.state.copied}
        menuIsOpen={this.state.menuIsOpen}
        hamburgerClicked={this.hamburgerClicked}
      />
    )
  }
}

export default LandingPageContainer
