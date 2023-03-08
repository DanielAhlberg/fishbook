<script>
    import { fishes } from "../../storable.js";
    import { Button, Modal } from "flowbite-svelte";
    import Wrapper from "$lib/Wrapper.svelte";
    var modals = new Array(Object.keys(fishes).length).fill(false);
    let local = {};

    if (typeof window !== "undefined") {
        if (localStorage["fishes"]) {
            local = JSON.parse(localStorage["fishes"]);
        }
    }
</script>

<Wrapper>
    <p class="text-xl font-bold text-center text-gray-900 dark:text-white">
        Du har fångat {Object.keys(local).length} fiskar
    </p>
    <div class="grid grid-cols-3 gap-8 m-16">
        {#each Object.values(local) as info, i}
            <div
                class="justify-evenly bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <div class="p-5">
                    <h5
                        class="mb-2 text-2xl font-bold truncate tracking-tight text-gray-900 dark:text-white"
                    >
                        {info.fishType}
                    </h5>
                    <p
                        class="mb-3 font-normal truncate text-gray-700 dark:text-gray-400"
                    >
                        {info.date}
                    </p>

                    <Button
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        on:click={() => (modals[i] = true)}>Visa mer</Button
                    >
                    <Modal
                        title={info.fishType}
                        bind:open={modals[i]}
                        autoclose
                        class="w-full h-max"
                    >
                        <h1 class="text-xl">Om din fångst</h1>
                        <p
                            class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            Fångad: {info.date}
                        </p>
                        <p
                            class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            Längd: {info.length}cm
                        </p>
                        <p
                            class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            Vikt: {info.weight}kg
                        </p>
                        <svelte:fragment slot="footer">
                            <Button>Tack och hej</Button>
                        </svelte:fragment>
                    </Modal>
                </div>
            </div>
        {/each}
    </div>
    <p class="text-s italic text-center text-gray-900 dark:text-white">
        Lägg till fler fiskar så synns de här
    </p>
</Wrapper>
