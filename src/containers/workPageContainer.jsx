import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


class WorkPageContainer extends React.Component {
  componentDidMount() {
    this.props.history.push('/')
    return <AnchorLink href="#works">Top</AnchorLink>
  }

  render() {
    return (
      <div>
        work
      </div>
    )
  }
}

export default WorkPageContainer
