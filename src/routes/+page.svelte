<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { Alert, Label, Select } from "flowbite-svelte";
    import { Card, Button, Toggle } from "flowbite-svelte";
    let hCard = false;
    let selected = "";
    let fishes = [{}];
    let fishesNames = [{}];
    let endpoint = "https://www.fishwatch.gov/api/species";
    let fishOfTheDay = {}
    let nameOfTheDay = ""
    let fishOfTheDayName = ""

    async function randomizeFish() {
        fishOfTheDay = fishesNames[Math.floor(Math.random()*fishes.length)];
        //nameOfTheDay = fishOfTheDay["Species Name"] || "not present today :(";

    }


    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        fishes = Object.keys(data).map((x) => {
            return {
                value: data[x],
                name: data[x],
            };
        });
        fishesNames = Object.keys(data).map((x) => {
            return {
                value: data[x]["Species Name"],
                name: data[x]["Species Name"],
            };
        });
        randomizeFish();
        //console.log(fishesNames);
        console.log(fishOfTheDay.name);
    });

    $: if (selected.length > 0) {
        console.log("Changed selected");
    }
</script>

<Header />
<div class="px-20 py-8">
    <h1>Welcome to Fishbook</h1>
    <div>
        <Card img="/images/image-1.webp" href="/" horizontal reverse={hCard}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fish of the day!</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            This is the fish of the day {fishOfTheDay.name}.
          </p>
        </Card>
        <Toggle bind:checked={hCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle>
      </div>
    <Label>
        Select a fish to know more about
        <Select class="mt-2" bind:items={fishesNames} bind:value={selected} />
    </Label>
    {#if selected}
        <div>
            <h1>You selected {selected}</h1>
        </div>
    {/if}
    <Alert>
        <span class="font-medium">Info alert!</span> Change a few things up and try
        submitting again.
    </Alert>
</div>
<Footer />
