<script lang="ts">
    import CheckListItem from "./lab/checkListItem.svelte";

    interface Item{
        id: number;
        label: string;
        done: boolean;
    }


let items = [
    {id: 1, label: 'task 1', done: false},
    {id: 2, label: 'task 2', done: false},
    {id: 3, label: 'task 3', done: false},
    {id: 4, label: 'task 4', done: false},
    {id: 5, label: 'task 5', done: false},
    ];

let liveStates = new Map(items.map(item => [item.id, item.done]));
let submittedStates = new Map(items.map(item=>[item.id, item.done]));


function handleChange(event: CustomEvent<{ id: number; done: boolean }>) {
    const { id, done } = event.detail;
    liveStates.set(id, done);

}

function submit()
{
    submittedStates = new Map(liveStates);
}

$: total = items.length;
$: doneCount = Array.from(submittedStates.values()).filter(Boolean).length;
$: percent = total ? Math.round(doneCount/total)* 100 : 0


function toggleDone(id: number) {
        items = items.map(item =>
            item.id === id ? { ...item, done: !item.done } : item
        );
    }
    
</script>

{#each items as item(item.id)}
<checklistItem {...item} on:change={handleChange}></checklistItem> 
{/each}

<h2>Checklist</h2>
<ul>
    {#each items as item (item.id)}
        <li>
            <label>
                <input
                    type="checkbox"
                    bind:checked={item.done}
                    on:change={() => toggleDone(item.id)}
                />
                {item.label}
            </label>
        </li>
    {/each}
</ul>

<p>Done count: {doneCount}</p>

