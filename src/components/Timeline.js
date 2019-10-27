import React from 'react'
import { connect } from 'react-redux'

const timeline = [1, 2, 3, 4]

export class Timeline extends React.PureComponent {
  render() {
    const { language } = this.props

    return (
      <div className="text-center">
        <div className="timeline">
          <h2>{language.expericence}</h2>
          <ul className="list-inline">
            {timeline.map(item => (
              <li key={item}>
                <div className="period">{language[`timelinePeriod${item}`]}</div>
                <div className="info-period">
                  <h3>{language[`timelineTitle${item}`]}</h3>
                  <p>{language[`timeLineDesc${item}`]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ lang }) => {
  return {
    language: lang.language,
  }
}

export default connect(mapStateToProps)(Timeline)
