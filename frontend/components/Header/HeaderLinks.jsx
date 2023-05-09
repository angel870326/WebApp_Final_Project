import React from "react";

// @mui/material components
import { List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

// style
import {
  list,
  listItem,
  listItemText,
  navLink,
  // notificationNavLink,
  // registerNavLink,
  // navLinkActive,
  // icons,
  // socialIcons,
  // dropdownLink
} from "/styles/jss/components/Header/headerLinksStyle.js";

export default function HeaderLinks(props) {
  return (
    <List sx={list}>
      <ListItem sx={listItem}>
        <ListItemButton color="transparent" href="/animals" target="_blank" sx={navLink}>
          <ListItemText primary="可認養動物列表" />
        </ListItemButton>
      </ListItem>
      <ListItem sx={listItem}>
        <ListItemButton color="transparent" href="/adopters" target="_blank" sx={navLink}>
          <ListItemText primary="認養人排行榜" />
        </ListItemButton>
      </ListItem>
      <ListItem sx={listItem}>
        <ListItemButton color="transparent" href="/shelters" target="_blank" sx={navLink}>
          <ListItemText primary="收容所列表" />
        </ListItemButton>
      </ListItem> 
      <ListItem sx={listItem}>
        <ListItemButton color="transparent" href="/account" target="_blank" sx={navLink}>
          <ListItemText primary="我的頁面" />
        </ListItemButton>
      </ListItem>       
    </List>
  );
}
