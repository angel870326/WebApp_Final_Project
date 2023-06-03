import {
    primaryColor,
    brownColor,
    defaultFont
} from "@/styles/jss/animal-cloud-adoption.js";

const counterContent = {
    width: '100%',
    padding: "10px 0px",
    margin: "50px 0px",
    backgroundColor: 'white',
    borderRadius: '16px',
};
  
const item = {
    ...defaultFont,
    fontWeight: '10px',
    backgroundColor: "transparent",
    textAlign: 'center', 
    justifyContent:'center',
    padding: 0,
    margin: "0px",
};

const counterTitle = {
    ...defaultFont,
    fontWeight: '10px',
    fontSize: '20px',
    color: primaryColor,
    padding: 0,
    marginTop: "20px",
    marginButtom: "0px",
};

const counter = {
    ...defaultFont,
    fontWeight: '10px',
    fontSize: '100px',
    color: brownColor,
};

const about = {
    ...defaultFont,
    fontSize: '18px',
    fontWeight: '10px',
    width: '100%',
    padding: 0,
    marginTop: "0px",
    marginButtom: "0px",
};

const text = {
    ...about,
    lineHeight: '2',
};

const highlightText = {
    ...about,
    lineHeight: '2',
    fontWeight: 'bold',
    fontSize: '30px',
    color: brownColor,
};


export {
    counterContent,
    item,
    counterTitle,
    counter,
    about,
    text,
    highlightText,
}

