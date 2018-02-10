import { AppBar, Typography, IconButton, Toolbar, Hidden, Drawer } from "material-ui";
import { Menu } from "material-ui-icons";
import { withStyles } from "material-ui/styles";
import DrawerList from './partial/DrawerList'

const Styles = theme => ({
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        // height: '100%',
    },
    flex: {
        flex: 1,
    },
    appBar: {
        position: 'absolute',
        marginLeft: '19%',
        [theme.breakpoints.up('md')]: {
            width: '19%',
        },
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        position: 'fixed',
        [theme.breakpoints.up('lg')]: {
            width: '251px',
            position: 'fixed',
            paddingTop: '9ch',
            height: '100%',
            zIndex: 0
        },
        [theme.breakpoints.up('sm')]: {
            width: '251px',
            position: 'fixed',
            height: '100%',
            zIndex: 0
        },
        [theme.breakpoints.up('md')]: {
            width: '251px',
            position: 'fixed',
            paddingTop: '9ch',
            height: '100%',
            zIndex: 0
        }
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: 'calc(100% - 56px)',
        [theme.breakpoints.up('md')]: {
            margin: '9.2ch 36ch'
        },
        [theme.breakpoints.down('md')]: {
            margin: '9.2ch 36ch'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '10ch 3ch'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '9ch 3ch'
        }
    },
})
class Layout extends React.Component {
    state = {
        isOpen: false
    }

    handleDrawer = () => this.setState({ isOpen: !this.state.isOpen })
    render() {
        const { classes, children } = this.props
        return (
            <div className={classes.appFrame}>
                <AppBar >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleDrawer}>
                            <Menu />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        open={this.state.isOpen}
                        onClose={this.handleDrawer}
                        variant="temporary"
                        ModalProps={{
                            keepMounted: true
                        }}
                        classes={{ paper: classes.drawerPaper }}
                    >
                        <DrawerList />
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{ paper: classes.drawerPaper }}
                    >
                        <DrawerList />
                    </Drawer>
                </Hidden>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        )
    }
}
export default withStyles(Styles)(Layout)