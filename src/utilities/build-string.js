function buildString(arrayOfControls, directionString) {
  let resultArray = [];
  let sizeTracker = 0;

  arrayOfControls.forEach(control=> {
    for (let i = 0; i < control.size; i++) {      
      resultArray.push(cssString(directionString, sizeTracker + 1, control.color))
      sizeTracker++;
    }
  })

  const resultString = resultArray.join('');
  const formatResult = resultString.substring(0, resultString.length - 2)
  return formatResult;
}

function cssString(direction, size, color) {
  switch (direction) {
    case "top":
      return `0px -${size}px ${color}, `
    case "topRight":      
      return `${size}px -${size}px ${color}, `
    case "right":
      return `${size}px 0px ${color}, `
    case "bottomRight":
      return `${size}px ${size}px ${color}, `
    case "bottom":
      return `0px ${size}px ${color}, `
    case "bottomLeft":
      return `-${size}px ${size}px ${color}, `
    case "left":
      return `-${size}px 0px ${color}, `
    case "topLeft":
      return `-${size}px -${size}px ${color}, `
    default:
      break;
  }
}

export default buildString