
<p>Visit <a href="/" style = "font-weight: bold; text-decoration: underline;">Solo</a></p>

<script lang="ts">

  import { SquareDances } from '$lib/filters/squareDance';
  let sdRaw = '1 3 5 7 9';
  $: sdInput = sdRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: sdOutput = SquareDances(sdInput);
  
 import {ModuloFirstFindN, ModuloFirstFindN as peerModuloFind} from 'peer-filter-C00287604/src/lib/filters/moduloFirst';
 let modRaw = '1 3 5 7 9';
  $: modInput = modRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: modOutput = ModuloFirstFindN(modInput);


  import { combinedFilter } from '$lib/filters/combined/combined';
  let raw = '1 3 5 7 9';
  $: input = raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: output = combinedFilter(input);
</script>

<h1>Mine</h1>
<label>Input <input bind:value={sdRaw} /></label>
<p>Output: {sdOutput.join(' ')}</p>

<h1>Peer</h1>
<label>Input <input bind:value={modRaw} /></label>
<p>Output: {modOutput.join(' ')}</p>


<h1>Combined (mine → peer)</h1>
<label>Input <input bind:value={raw} /></label>
<p>Output: {output.join(' ')}</p>

