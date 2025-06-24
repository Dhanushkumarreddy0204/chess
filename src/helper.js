export const getCharacter = (file) => String.fromCharCode(file + 96);
export const createPosition = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));
  for (let i = 0; i < 8; i++){
    position[6][i] = "bp";
    position[1][i] = "wp";
  }

  