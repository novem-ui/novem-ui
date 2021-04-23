const map = (input, inMin, inMax, outMin, outMax) =>
  ((input - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  
export default map;
