import {
    primaryColor,
    brownColor,
    defaultFont
} from "@/styles/jss/animal-cloud-adoption.js";

const title = {
    ...defaultFont,
    fontWeight: '10px',
    fontSize: '90px',
    color: 'white',
    paddingLeft: "60px",
    margin: "30px 0px",
    '@media (max-width:600px)': {
      paddingLeft: "50px",
      fontSize: '80px',
    },
};

const counterContent = {
    width: '100%',
    padding: "10px 0px",
    margin: "300px 0px 0px 0px",
    backgroundColor: "transparent",
    '@media (max-width:600px)': {
      margin: "350px 0px 0px 0px",
    },
    '@media (min-width:1200px)': {
        margin: "10px 0px 0px 0px",
    },
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

const counterBox = {
    ...defaultFont,
    fontWeight: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '16px',
    textAlign: 'center', 
    justifyContent:'center',
    padding: "10px 0px",
    margin: "10px 20px",
    '@media (min-width:900px)': {
      margin: "10px 100px",
    },
    '@media (min-width:1000px)': {
      margin: "10px 150px",
    },
    '@media (min-width:1200px)': {
    //   margin: "10px 200px",
      margin: "100px 20px",
      width: "350px",
    //   width: "100%",
    },
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


export {
    title,
    counterContent,
    item,
    counterBox,
    counterTitle,
    counter,
}

