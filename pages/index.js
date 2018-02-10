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
    this.timer = this.props.startClock()
  }

  componentWillUnmount() {
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
