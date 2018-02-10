import { Drawer, Hidden, List, Typography, ListItem, Divider, Avatar } from "material-ui";
import Link from 'next/link'
import { withStyles } from "material-ui/styles";
import deepOrange from 'material-ui/colors/deepOrange';


const Styles = theme => ({
    list: {
        width: 250,
    },
    drawerHeader: {
        [theme.breakpoints.down('md')]: theme.mixins.toolbar,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: theme.mixins.toolbar,
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500]
    },

})

const Routes = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/other',
        name: 'Other'
    },
]
const DrawerList = ({ classes }) => (
    <div>
        <div className={classes.drawerHeader}>
            <Avatar className={classes.avatar}>H</Avatar>
        </div>
        <List className={classes.list}>
            {
                Routes.map(route => (
                    <Link href={route.path} key={route.name}>
                        <ListItem button>
                            <Typography variant="subheading">{route.name}</Typography>
                        </ListItem>
                    </Link>
                ))
            }
        </List>
        <Divider />
    </div>
)
export default withStyles(Styles)(DrawerList)