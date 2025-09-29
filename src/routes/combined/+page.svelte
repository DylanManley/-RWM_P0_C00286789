<p>Visit <a href="/" style = "font-weight: bold; text-decoration: underline;">Solo</a></p>





<script lang="ts">

  import { cubes } from '$lib/filters';
let raw = '1 3 5 7 9 999';
$: input = raw.trim().split(/\s+/).filter(Boolean).map(Number);
$: output = cubes(input);


  
  import { combinedFilter } from '$lib/filters/combined/combined';
  let Combinedraw = '1 3 5 7 9';
  $: Combinedinput = raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: Combinedoutput = combinedFilter(input);
</script>



<h1>Mine</h1>
<label>Input <input bind:value={raw} /></label>
<p>Output: {output.join(' ')}</p>

<h1>Combined (mine → peer)</h1>
<label>Input <input bind:value={raw} /></label>
<p>Output: {output.join(' ')}</p>

