import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section>
        <Header user={this.props.user}/>
        <pre>OKCandidate Home Screen</pre>
      </section>
    )

  }

}

Home.propTypes = {
  user: PropTypes.object
}

export default Home
