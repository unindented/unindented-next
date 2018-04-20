import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VisibilityObserver extends Component {
  constructor() {
    super()

    this.state = {
      visible: !this.supportsIntersectionObserver(),
    }

    this.observeElement = this.observeElement.bind(this)
    this.handleObservedElement = this.handleObservedElement.bind(this)
  }

  render() {
    const { visible } = this.state

    return visible ? this.props.children : <div ref={this.observeElement} />
  }

  supportsIntersectionObserver() {
    return typeof window !== 'undefined' && 'IntersectionObserver' in window
  }

  observeElement(element) {
    if (!this.supportsIntersectionObserver() || this.observer != null || element == null) {
      return
    }

    this.observer = new IntersectionObserver(this.handleObservedElement)
    this.observer.observe(element)
  }

  handleObservedElement(entries) {
    const isIntersecting = entries.some(entry => entry.isIntersecting)
    if (isIntersecting) {
      this.setState({ visible: true })
    }
  }
}

VisibilityObserver.propTypes = {
  children: PropTypes.node,
}
