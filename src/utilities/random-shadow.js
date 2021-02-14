// generate default props when a new shadow control is added
const randomColor = ()  => {
  const colors = ['#202020', '#3f3f3f', '#707070', '#ffdf6c', '#f7e8e6'];
  return  colors[Math.floor(Math.random() * 5)]
}

const randomSize = () => Math.ceil(Math.random() * 5)

export {
  randomColor,
  randomSize
}

