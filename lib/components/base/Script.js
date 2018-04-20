import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = { display: 'none' }

class ScriptComponent extends Component {
  render() {
    return <div style={style} ref={this.storeRef} />
  }

  componentDidMount() {
    const { src, children } = this.props
    const [value] = children || []

    const script = document.createElement('script')
    // Set `async` flag to `false` so script gets queued and executed in order.
    script.async = false
    // Avoid inline scripts, as they don't get queued.
    script.src = src || `data:text/javascript;base64,${btoa(value)}`

    this.el.appendChild(script)
  }

  componentWillUnmount() {
    while (this.el.lastChild) {
      this.el.removeChild(this.el.lastChild)
    }
  }

  storeRef = el => {
    this.el = el
  }
}

ScriptComponent.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
}

export default ScriptComponent
