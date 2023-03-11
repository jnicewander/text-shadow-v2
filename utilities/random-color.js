// generate initial color prop when a new shadow control is added
export default function randomColor() {
  const colors = ['#202020', '#3f3f3f', '#707070', '#ffdf6c', '#f7e8e6']
  return colors[Math.floor(Math.random() * 5)]
}
