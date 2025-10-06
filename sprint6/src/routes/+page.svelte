<script lang="ts">
    import CheckListItem from "./lab/checkListItem.svelte";


let items = [
    {id: 1, label: 'task 1', done: false},
    ];

let doneCount = items.filter(item => item.done).length;

function handleChange(event: CustomEvent<{id: number |string; done:boolean}>)
{
    const {id, done} = event.detail;
    const item = items.find(i => i.id === id);
    if(item)
{
    item.done = done;
    doneCount = items.filter(i=> i.done).length;
}
}
</script>

{#each items as item(item.id)}
<checklistItem {...item} on:change={handleChange}></checklistItem> 
{/each}

<p>Done count: {doneCount}</p>