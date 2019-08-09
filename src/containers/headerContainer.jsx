import React from 'react'
import Header from '../components/header'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuIsOpen: false
    }
  }

  hamburgerClicked = () => {
    const current = this.state.menuIsOpen
    this.setState({ menuIsOpen: !current })
  }

  render() {
    return (
      <Header
        menuIsOpen={this.state.menuIsOpen}
        hamburgerClicked={this.hamburgerClicked}
      />
    )
  }
}

export default HeaderContainer
