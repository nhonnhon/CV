import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeLanguage } from "./actions/index";
import "./App.css";

class App extends Component {
  static propTypes = {
    changeLanguage: PropTypes.func,
    language: PropTypes.string
  };

  state = {
    lange: this.props.language
  };

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      this.setState({
        lange: this.props.language
      });
    }
  }

  onChangeLanguage = language => {
    this.props.changeLanguage(language);
  };

  render() {
    return (
      <div className="App">
        {this.state.lange}
        <li>
          <a
            href="javscript:void(0)"
            onClick={() => this.onChangeLanguage("en")}
          >
            EN
          </a>
        </li>
        <li>
          <a
            href="javscript:void(0)"
            onClick={() => this.onChangeLanguage("vn")}
          >
            VN
          </a>
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.common.toJS().lang
  };
};

const mapDispatchToProps = {
  changeLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
