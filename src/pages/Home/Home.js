import React from 'react'
import { PersonalInfo, Timeline, Footer } from 'components'

class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container pt-2 pb-2">
          <div className="row">
            <div className="col-md-4">
              <PersonalInfo />
            </div>
            <div className="col-md-8">
              <Timeline />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
