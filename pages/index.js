import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import withRoot from '../src/withRoot';

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount() {
    // IF YOU SEE IT KEEP INCREMENTING/RE-RENDERING YOU SHOULD REMOVE THIS CODE BELOW TO JUST RENDER THE COMPONENT ONCE
    this.timer = this.props.startClock()
  }

  componentWillUnmount() {
    // IF YOU SEE IT KEEP INCREMENTING/RE-RENDERING YOU SHOULD REMOVE THIS CODE BELOW TO JUST RENDER THE COMPONENT ONCE
    clearInterval(this.timer)
  }

  render() {
    return (
      <Page title='Index Page' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
