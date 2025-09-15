export function SquareDance(x:number) : number
{
  let numToSquare = 0;
  let currentSquare = 0;
  

  while (currentSquare < x) {
    numToSquare++;
    currentSquare = numToSquare * numToSquare;
  }


  return currentSquare;
}

export function SquareDances(xs: number[]): number[]
{
    return xs.map(SquareDance);
}