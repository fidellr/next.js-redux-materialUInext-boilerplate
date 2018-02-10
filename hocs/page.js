import { compose } from "redux";
import withRoot from '../src/withRoot'


export const pageWithoutLayout = compose(
    withRoot
)
export default compose(
    // pageWithoutLayout,
    withRoot
)
