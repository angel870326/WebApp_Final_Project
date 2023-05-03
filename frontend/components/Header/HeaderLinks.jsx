import React from "react";

// @mui/material components
import { List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

// style
import headerLinksStyle from "/styles/jss/components/Header/headerLinksStyle.js";

export default function HeaderLinks(props) {
  const classes = headerLinksStyle();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <ListItemButton color="transparent" href="/animals" target="_blank" className={classes.navLink}>
          <ListItemText primary="可認養動物列表" />
        </ListItemButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemButton color="transparent" href="/adopters" target="_blank" className={classes.navLink}>
          <ListItemText primary="認養人排行榜" />
        </ListItemButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemButton color="transparent" href="/shelters" target="_blank" className={classes.navLink}>
          <ListItemText primary="收容所列表" />
        </ListItemButton>
      </ListItem> 
      <ListItem className={classes.listItem}>
        <ListItemButton color="transparent" href="/account" target="_blank" className={classes.navLink}>
          <ListItemText primary="我的頁面" />
        </ListItemButton>
      </ListItem>       
    </List>
  );
}
