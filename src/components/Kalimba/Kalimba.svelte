<script lang="ts">
    import { C_KEY } from "../../constants/KalimbaKey";
    import Nut from './Nut.svelte';


    let kalimbaKeys = C_KEY;

</script>

<div class="kalimba">
    {#each kalimbaKeys as keyBar}
        <Nut key={keyBar}/>
    {/each}
</div>

<style lang="scss">
    .kalimba {
        display: flex;
        flex-direction: row;
    }
</style>