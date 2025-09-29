import { SquareDances as mySquareDance} from '../SquareDance';
import {ModuloFirstFindN as peerModuloFind} from 'peer-filter-C00287604/src/lib/filters/moduloFirst';


export function combinedFilter(xs: number[]): number[] {
  const afterMine = mySquareDance(xs);
  return peerModuloFind(afterMine);
}
