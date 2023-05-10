import {
    primaryColor,
    brownColor,
    defaultFont
} from "@/styles/jss/animal-cloud-adoption.js";

const gridStyle = {
    border: 'none',
    padding: '10px 10px 0px 10px',
    "&:hover,&:focus,&:focus-within,&:active,&:active-within": {
        outline: "none !important",
        border: 'none !important',

    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none',
    },
    "& .MuiDataGrid-columnHeaders": {
        ...defaultFont,
        backgroundColor: brownColor,
        color: "white",
        fontSize: 16,
        border: 'none !important',
        outline: 'none !important',
        padding: '35px 0px',

    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
        ...defaultFont,
        backgroundColor: brownColor,
        color: "white",
        fontSize: 16,
        border: 'none !important',
        outline: 'none !important',
    },
    "& .MuiDataGrid-cell": {
        ...defaultFont,
        fontSize: 16,
        fontWeight: '10px',
        "&:hover,&:focus,&:active": {
            borderColor: "white",
            background: "transparent",
            border: 'none !important',
            outline: "none !important",
        },
    }
}

const moreBtn = {
    ...defaultFont,
    fontWeight: '10px',
    color: brownColor,
    borderColor: brownColor,
    background: "transparent",
    "&:hover,&:focus": {
        color: primaryColor,
        borderColor: primaryColor, 
        background: "transparent"
    },

}

export {
    gridStyle,
    moreBtn
}

