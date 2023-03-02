<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { Alert, Label, Select } from "flowbite-svelte";
    import { Card, Button, Toggle } from "flowbite-svelte";
    let hCard = false;
    let selected = "";
    let fishes = [{ value: "", name: "" }];
    let endpoint = "https://www.fishwatch.gov/api/species";
    let fishOfTheDay = {value: "", name: ""};
    let fishInfo = [{}];
    let imgSrc = "";

    async function randomizeFish() {
        fishOfTheDay = fishes[Math.floor(Math.random()*fishes.length)];
        if (fishOfTheDay.value) {
            const uri = encodeURI(endpoint + "/" + fishOfTheDay.value.toLowerCase());
            const response = await fetch(uri);
            const data = await response.json();
            fishInfo = data[0];
            imgSrc = fishInfo["Image Gallery"]
                ? fishInfo["Image Gallery"][0]["src"]
                : "";
        }
    }


    function preload(imgSrc) {
        if (imgSrc.length > 0) {
            return new Promise(function (resolve) {
                let img = new Image();
                img.onload = resolve;
                img.src = imgSrc;
            });
        }
    }

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        fishes = Object.keys(data).map((x) => {
            return {
                value: data[x]["Species Name"],
                name: data[x]["Species Name"],
            };
        });
        randomizeFish();
    });

    $: if (selected.length > 0) {
        console.log("Changed selected");
    }
</script>

<Header />
<div class="px-20 py-8">
    <h1>Welcome to Fishbook</h1>
    <div>
        {#if Object.keys(fishes).length > 0}
            {#await preload(imgSrc) then _}
                <Card img={imgSrc} href="/" horizontal reverse={hCard}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fish of the day!</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                    This is the fish of the day {fishOfTheDay.name}.
                  </p>
                </Card>
            {/await}
        {/if}
    </div>

</div>
<Footer />
