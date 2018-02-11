import { Drawer, Hidden, List, Typography, ListItem, Divider, Avatar } from "material-ui";
import Link from 'next/link'
import { withStyles } from "material-ui/styles";
import deepOrange from 'material-ui/colors/deepOrange';
import Icon from 'material-ui/Icon';
import { Home } from 'material-ui-icons'


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
    icon: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginRight: '15%'
      },

})

const Routes = [
    {
        path: '/',
        name: 'Home',
        icon: <Home/>
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
                        <div className={classes.icon}>
                            <Icon>
                                {route.icon}
                            </Icon>
                        </div>
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