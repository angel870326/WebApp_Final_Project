import {
    primaryColor,
    brownColor,
    defaultFont
} from "@/styles/jss/animal-cloud-adoption.js";

const gridStyle = {
    border: 'none',
    "&:hover,&:focus,&:focus-within,&:active,&:active-within": {
        outline: "none !important",
        border: 'none !important',

    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none',
    },
    // '& .MuiDataGrid-columnSeparator--sideLeft': {
    //     display: 'none',
    // },
    "& .MuiDataGrid-columnHeaders": {
        ...defaultFont,
        backgroundColor: brownColor,
        color: "white",
        fontSize: 16,
        border: 'none !important',
        // outline: "none !important",
        // "&:hover,&:focus,&:focus-within,&:active,&:active-within": {
        //     outline: "none !important",
        //     border: 'none !important',

        // },
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
        ...defaultFont,
        backgroundColor: brownColor,
        color: "white",
        fontSize: 16,
        // border: 'none !important',
        outline: "none !important",

        // "&:hover,&:focus,&:focus-within,&:active,&:active-within": {
        //     outline: "none !important",
        //     border: 'none !important',

        // },
    },
    // "& .MuiDataGrid-columnHeadersInner": {
    //     ...defaultFont,
    //     backgroundColor: brownColor,
    //     color: "white",
    //     fontSize: 16,
    //     border: 'none !important',
    //     outline: "none !important",

    //     "&:hover,&:focus,&:focus-within,&:active,&:active-within": {
    //         outline: "none !important",
    //         border: 'none !important',

    //     },
    // },
    // ".MuiDataGrid-columnHeader--showColumnBorder": {
    //     outline: "red",
    //     border: 'red',
    //     color: 'red',
    //     // outline: "none !important",
    //     // border: 'none !important',
    //     "&:hover,&:focus,&:focus-within,&:active,&:active-within": {
    //         outline: "none !important",
    //         border: 'none !important',
    //         color: 'red',
    //     },
    //  },
    "& .MuiDataGrid-cell": {
        ...defaultFont,
        fontSize: 16,
        fontWeight: '10px',
        "&:hover,&:focus,&:active": {
            color: brownColor,
            background: "transparent",
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

