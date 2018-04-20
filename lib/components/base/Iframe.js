import React from 'react'
import styled from 'styled-components'

const IframeWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
`
const Iframe = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const IframeComponent = props => (
  <IframeWrapper>
    <Iframe {...props} />
  </IframeWrapper>
)

export default IframeComponent
