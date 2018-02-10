import { loadGetInitialProps } from 'next/dist/lib/utils';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import getPageContext from './getPageContext';
import configureTurboLink from '../util/routing'
import Layout from './Layout'

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor() {
      super()
      this.state = {
        turbolinkMemoized: null
      }
    }
    static async getInitialProps(ctx) {
      if (Component.getInitialProps) {
        return Component.getInitialProps(ctx);
      }
      return loadGetInitialProps(WithRoot, ctx);
    };
    componentWillMount() {
      this.pageContext = this.props.pageContext || getPageContext();
    }
    componentDidMount() {
      // Remove the server-side injected CSS.
      !this.state.turbolinkMemoized ? this.setState({ turbolinkMemoized: configureTurboLink() }) : this.state.turbolinkMemoized
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      // console.log('render')
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Reboot />
          <Layout>
            <Component {...this.props} />
          </Layout>
        </MuiThemeProvider>
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
  };

  return WithRoot;
}

export default withRoot;
