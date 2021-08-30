const map = (input: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
  ((input - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

export default map
