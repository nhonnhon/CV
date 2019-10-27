import React from 'react'
import { connect } from 'react-redux'

export class PersonalInfo extends React.PureComponent {
  render() {
    const { language } = this.props

    return (
      <div className="personal-info">
        <img src={require('../assets/images/avatar.jpg')} alt="avatar" />
        <h1 className="text-center">{language.fullName}</h1>
        <h3>{language.aboutMe}</h3>
        <hr />
        <p>{language.summary}</p>
        <h4 className="mb-0">{language.career}</h4>
        <ul>
          <li>{language.careers1}</li>
          <li>{language.careers2}</li>
          <li>{language.careers3}</li>
        </ul>
        <h4 className="mb-0">{language.hobbies}</h4>
        <ul>
          <li>{language.hobbies1}</li>
          <li>{language.hobbies2}</li>
        </ul>

        <h3>{language.contact}</h3>
        <hr />
        <ul className="list-inline">
          <li>
            <i className="fas fa-map-marker-alt"></i>
            {language.address}
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            {language.phone}
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            {language.email}
          </li>
          <li>
            <i className="fab fa-skype"></i>
            {language.skype}
          </li>
          <li>
            <i className="fas fa-birthday-cake"></i>
            {language.birthday}
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>
            <a
              href="https://www.linkedin.com/in/nhon-nguyen-3108a1174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language.linkedin}
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ lang }) => {
  return {
    language: lang.language,
  }
}

export default connect(mapStateToProps)(PersonalInfo)
