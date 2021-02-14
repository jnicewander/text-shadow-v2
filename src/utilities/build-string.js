function buildString(controlsArray) {
  let result = `text-shadow: `;
  let size = 1; 

  controlsArray.forEach(control=> {
    for (let i = 0; i < control.size; i++) {
      result = result + `${size}px ${size}px ${control.color}, `
      size++;
    }
  })
    
  let formatResult = result.substring(0, result.length - 2)
  return formatResult
}

export default buildString