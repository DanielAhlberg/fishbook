<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { Alert, Label, Select } from "flowbite-svelte";
    import { Card, Button, Toggle } from "flowbite-svelte";
    let hCard = false;
    let selected = "";
    let fishes = [{}];
    let fishNames = [{}];
    let fishImages = [{}]
    let endpoint = "https://www.fishwatch.gov/api/species";
    let fishOfTheDay = {};
    let imgSrc = undefined;

    async function randomizeFish() {
        fishOfTheDay = fishes[Math.floor(Math.random()*fishes.length)];
        retrieveImage();
        //let images = fishImages.filter((x) => x.name === fishOfTheDay.name);
    }
    async function retrieveImage() {
        imgSrc = fishOfTheDay["Image Gallery"] ? fishOfTheDay["Image Gallery"][0].src : undefined;
        return imgSrc;
    }


    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        fishes = Object.keys(data).map((x) => {
            return {
                value: data[x],
                name: data[x]["Species Name"],
            };
        });
        fishNames = Object.keys(data).map((x) => {
            return {
                value: data[x]["Species Name"],
                name: data[x]["Species Name"],
            };
        });
        randomizeFish();
        //console.log(fishes);
        //fishOfTheDay = fishes[Math.floor(Math.random()*fishes.length)];
        //imgSrc = fishOfTheDay["Image Gallery"] ? fishOfTheDay["Image Gallery"][0]["src"] : undefined;
        //console.log(imgSrc);
        //console.log(fishOfTheDay["Image Gallery"])


        //console.log(fishOfTheDay.name);
    });

    $: if (selected.length > 0) {
        console.log("Changed selected");
    }
</script>

<Header />
<div class="px-20 py-8">
    <h1>Welcome to Fishbook</h1>
    <div>
        <Card img={retrieveImage()} href="/" horizontal reverse={hCard}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fish of the day!</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            This is the fish of the day {fishOfTheDay.name}.
          </p>
        </Card>
        <Toggle bind:checked={hCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle>
      </div>
    <Label>
        Select a fish to know more about
        <Select class="mt-2" bind:items={fishNames} bind:value={selected} />
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
