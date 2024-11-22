import { Link } from "react-router-dom"
import React, { useState } from "react";
import Logo from "../../assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

const Navbar = () =>{

    const [openMenu, setOpenMenu] = useState(false)
    const menuOpitions = [
        {
            text:"Home",
            icon: <HomeIcon />
        },
        {
            text:"Contact",
            icon: <PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon: <ShoppingCartRoundedIcon/>
        },
    ]

    return (
        <nav>
            <div className="nav-logo-conteiner">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <Link to="/home" className="link-nav-btn">Home</Link>
                <Link to="/work" className="link-nav-btn">Work</Link>
                <Link to="/contact" className="link-nav-btn">Contacts</Link>
                <a href="">
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button">Bookings Now</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} 
            anchor="right"> 
                <Box 
                    sx={{ width: 250 }} 
                    role="presentation"
                    onClick={ () => setOpenMenu(false)}
                    onKeyDown={ ()=> setOpenMenu(false)}
                >
                    <List>
                        {menuOpitions.map((item) =>(
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText primary={item.text}></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar