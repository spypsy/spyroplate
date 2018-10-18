import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../styles/Application.less'

class Application extends Component {
  static propTypes = {
    prop: PropTypes.object,
  }

  render() {
    return <div className="application">Welcome to your app!</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application)
