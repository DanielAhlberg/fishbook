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
        Spinner,
    } from "flowbite-svelte";
    import { onMount } from "svelte";
    import Wrapper from "$lib/Wrapper.svelte";

    let selected = "";
    let search = "";
    let loading = false;
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
            loading = true;
            const uri = encodeURI(endpoint + "/" + selected);
            const response = await fetch(uri);
            const data = await response.json();
            fish = data[0];
            fishSrc = fish["Image Gallery"]
                ? fish["Image Gallery"][0]["src"]
                : "";
            loading = false;
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
        console.log("Loading", loading);
    }

    $: search, filterFishes();
    $: selected, handleSearch();
</script>

<Wrapper>
    <div class="pb-4">
        <Heading tag="h2" class=" flex justify-center mb-8"
            >Search for a fish</Heading
        >
        <div class="flex justify-center">
            <ButtonGroup class="">
                <Select bind:items={filteredFishes} bind:value={selected} />
                <Input placeholder="Search" bind:value={search} />
                <Button
                    on:click={handleSearch}
                    disabled={loading}
                    class="!p-2.5"
                >
                    {#if loading}
                        <Spinner class="mr-3" size="4" color="white" />
                    {:else}
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
                    {/if}
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
                    {#if fish["Biology"]}
                        <Heading tag="h5">Biology</Heading>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
                        >
                            {@html fish["Biology"]}
                        </p>
                    {/if}
                    {#if fish["Habitat"]}
                        <Heading tag="h5">Habitat</Heading>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
                        >
                            {@html fish["Habitat"]}
                        </p>
                    {/if}
                </Card>
            {/await}
        {/if}
    </div>
</Wrapper>
