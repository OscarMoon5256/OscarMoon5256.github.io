import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ThreePIcon from '@mui/icons-material/ThreeP';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';

import './index.scss'

const menuList = [
    { icon: <HomeIcon />, title: '홈' },
    { icon: <SearchIcon />, title: '검색' },
    { icon: <ThreePIcon />, title: '방명록' }
]

export const SideMenuBar = ({ toc }) => {
    const [state, setState] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    const handleClick = () => {
        setOpen(!open);
        toggleDrawer(true)
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" color='inherit'>
                        ... Programming
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mark Up" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {['HTML', 'CSS'].map((text, index) => (
                            <ListItem key={text} sx={{ pl: 2 }} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <HtmlIcon /> : <CssIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><MenuIcon style={{ color: 'white' }} /></Button>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <div className="drawer-wrapper">
                    <div className="drawer-character-image"></div>
                    <div className="drawer-character-image-background"></div>
                    <div className="drawer-character-name">
                        HY Moon 🧑🏻‍💻
                    </div>
                    {/* <div className="drawer-character-desc">
                        HY DevLog
                    </div> */}
                    <div className="drawer-menu-list">
                        {menuList.map((menu, i) => {
                            return (<div key={i} className='drawer-menu-list-icon'>
                                {menu.icon}
                                <div className='drawer-menu-list-title'>
                                    {menu.title}
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className="divider" />
                    <div className='root'>ROOT</div>
                    {list()}
                </div>
            </Drawer>
        </div>
    )
}