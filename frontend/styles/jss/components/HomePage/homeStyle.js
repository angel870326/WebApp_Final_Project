import {
    primaryColor,
    brownColor,
    defaultFont
} from "@/styles/jss/animal-cloud-adoption.js";

const homeSection = {
    padding: 0,
    margin: "50px 0px 100px 0px",
};

const homeContent = {
    width: '100%',
    padding: "10px 0px",
    margin: "50px 0px",
    backgroundColor: 'white',
    borderRadius: '16px',
};

const moreBtn = {
    ...defaultFont,
    fontWeight: '10px',
    fontSize: '18px',
    color: "white",
    borderColor: brownColor,
    background: brownColor,
    "&:hover,&:focus": {
        color: brownColor,
        borderColor: brownColor, 
        background: "transparent"
    },
    marginTop: '40px'
};

const sectionCard = {
    margin: '20px',
    "&:hover": {
        boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
        transition: "transform 0.15s ease-in-out",
        transform: "scale3d(1.05, 1.05, 1)",
      }
};

const cardTitle = {
    ...defaultFont,
    fontWeight: '10px',
    fontSize: '20px',
};

const cardContent = {
    ...defaultFont,
    fontWeight: '10px',
    fontSize: '18px',
};

export {
    homeSection,
    homeContent,
    moreBtn,
    sectionCard,
    cardTitle,
    cardContent
}

