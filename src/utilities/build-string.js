function buildString(controlsArray, direction) {
  let result = ``,
      size = 1;

  controlsArray.forEach(control=> {
    const horizontal = direction === 'bottomLeft' || direction === 'topLeft' ? '-' : ''
    const vertical = direction === 'topLeft' || direction === 'topRight' ? '-' : ''

    for (let i = 0; i < control.size; i++) {
      result = result + `${horizontal}${size}px ${vertical}${size}px ${control.color}, `
      size++;
    }
  })
    
  const formatResult = result.substring(0, result.length - 2)
  return formatResult
}

export default buildString