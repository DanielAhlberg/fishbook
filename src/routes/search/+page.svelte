<script>
    import Header from "../../lib/Header.svelte";
    import Footer from "../../lib/Footer.svelte";
    import {
        Card,
        Button,
        Label,
        Select,
        ButtonGroup,
        Input,
        Heading,
    } from "flowbite-svelte";
    import { onMount } from "svelte";

    let selected = "";
    let search = "";
    let fishes = [{ value: "", name: "" }];
    let filteredFishes = [{ value: "", name: "" }];
    let fish = {};
    let fishSrc = "";
    let endpoint = "https://www.fishwatch.gov/api/species";

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        fishes = Object.keys(data)
            .map((x) => {
                return {
                    value: data[x]["Species Name"],
                    name: data[x]["Species Name"],
                };
            })
            .sort((a, b) => a.value.localeCompare(b.value));
        filteredFishes = fishes;
    });

    function filterFishes() {
        filteredFishes = fishes.filter((x) => {
            return x.value.toLowerCase().includes(search.toLowerCase());
        });
        if (filteredFishes.length > 0) {
            selected = filteredFishes[0].value;
        } else {
            selected = "";
        }
    }

    async function handleSearch() {
        if (selected) {
            const uri = encodeURI(endpoint + "/" + selected);
            const response = await fetch(uri);
            const data = await response.json();
            fish = data[0];
            fishSrc = fish["Image Gallery"]
                ? fish["Image Gallery"][0]["src"]
                : "";
        }
    }

    function preload(fishSrc) {
        if (fishSrc.length > 0) {
            return new Promise(function (resolve) {
                let img = new Image();
                img.onload = resolve;
                img.src = fishSrc;
            });
        }
    }

    $: search, filterFishes();
</script>

<Header />
<div class="px-20 py-8">
    <div class="pb-4">
        <Heading tag="h2" class=" flex justify-center pb-2"
            >Search for a fish</Heading
        >
        <div class="flex justify-center">
            <ButtonGroup class="">
                <Select bind:items={filteredFishes} bind:value={selected} />
                <Input placeholder="Search" bind:value={search} />
                <Button on:click={handleSearch} class="!p-2.5">
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        /></svg
                    >
                </Button>
            </ButtonGroup>
        </div>
    </div>
    <div class="flex v-screen">
        {#if Object.keys(fish).length > 0}
            {#await preload(fishSrc) then _}
                <Card class="m-auto" img={fishSrc} size="lg" padding="xl">
                    <h5
                        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        {fish["Species Name"]}
                    </h5>
                    <h4>Biology</h4>
                    <p
                        class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
                    >
                        {@html fish["Biology"]}
                    </p>
                    <h4>Habitat</h4>
                    <p
                        class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
                    >
                        {@html fish["Habitat"]}
                    </p>
                </Card>
            {/await}
        {/if}
    </div>
</div>
<Footer />
