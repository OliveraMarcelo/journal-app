import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar>
                    <Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component='div'
                        >
                            Marcelo Olivera
                        </Typography>
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['enero', 'febrero', 'marzo', 'abril', 'mayo',].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary='Sit voluptate incididunt sit do sunt quis.' />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}