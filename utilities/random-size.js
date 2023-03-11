// Get a random size for new shadows
export default function randomSize(min = 1, max = 30) {
  return Math.ceil(Math.random() * (max - min) + min)
}
