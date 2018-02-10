import Link from 'next/link'
import { connect } from 'react-redux'
import { Typography } from "material-ui";
import Clock from './Clock'
import AddCount from './AddCount'
import PageHOC from '../hocs/page'

const PageWrapper = (({ title, lastUpdate }) => {
  return (
    <div>
      <Typography variant="display1">{title}</Typography>
      <Clock lastUpdate={lastUpdate} />
      <AddCount />
    </div>
  )
})

export default connect(state => state)(PageHOC(PageWrapper))
