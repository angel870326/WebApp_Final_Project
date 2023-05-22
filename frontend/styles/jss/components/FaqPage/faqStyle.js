import {
    primaryColor,
    brownColor,
    bgColor
} from "@/styles/jss/animal-cloud-adoption.js";

// single: smallBox
const smallBox = {
    backgroundColor: bgColor,
    borderRadius: '16px',
    margin: '10px',
    padding: '20px',
    display: 'inline-block',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
  };
  const box = {
    display: 'inline-block',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
  };

  // multi: Box + innerBox
  const innerBox = {
    backgroundColor: bgColor,
    borderRadius: '16px',
    margin: '10px',
    padding: '20px',
  };
  
  //text bottom hightlight
  const bottomHightlight = {
    background: `linear-gradient(to bottom, transparent 50%, ${bgColor} 50%)`,
    display: 'inline-block',
    color: primaryColor,
  };

export {
    smallBox, box, innerBox, bottomHightlight,
}
