import {
    primaryColor,
    brownColor,
    defaultFont
} from "@/styles/jss/animal-cloud-adoption.js";

const content = {
    padding: '2%',
    backgroundColor: 'white',
    borderRadius: '16px',
};
  
const editBtn = {
    ...defaultFont,
    fontWeight: '10px',
    color: "white",
    borderColor: brownColor,
    background: brownColor,
    "&:hover,&:focus": {
        color: brownColor,
        borderColor: brownColor, 
        background: "transparent"
    },
};

export {
    content,
    editBtn
}

