<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { Alert, Label, Select } from "flowbite-svelte";
    import { Card, Button, Toggle } from "flowbite-svelte";
    let vCard = false;
    let selected = "";
    let fishes = [{ value: "", name: "" }];
    let endpoint = "https://www.fishwatch.gov/api/species";
    let randomFish = {value: "", name: ""};
    let fishInfo = [{}];
    let imgSrc = "./fish_logga.png";

    async function randomizeFish() {
        randomFish = fishes[Math.floor(Math.random()*fishes.length-1)];
        setImgSrc(randomFish.name);
        console.log(randomFish["Species Name"]);
    }

    async function setImgSrc(fishName) {
        if (fishName) {
            const uri = encodeURI(endpoint + "/" + fishName.toLowerCase());
            const response = await fetch(uri);
            const data = await response.json();
            fishInfo = data[0];
            let gallery = fishInfo["Image Gallery"];
            imgSrc =    gallery
                        ? gallery[Math.floor(Math.random()*gallery.length-1)]["src"]
                        : "./fish_logga.png";
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

    function formatInfo() {
        let scientificName =        fishInfo["Scientific Name"] || "";
        let location =              fishInfo["Location"] || "";
        let taste =                 fishInfo["Taste"] || "";
        let infoString = (scientificName + '\n' + location + '\n' + taste).replace(/<\/?[^>]+(>|$)/g, "").replace(/\&nbsp;/g, '');
        return ((infoString.length > 4) ? infoString : "There are no fun facts about this fish :(");
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
    <div class=" flex justify-center pb-2">
        <Card href="/addcatch">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to FishBook</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
              This is your digital Fishing Club. Log your new catches and take a trip down memory lane and review your old ones.
            </p>
          </Card>
        {#if Object.keys(fishes).length > 0}
            {#await preload(imgSrc) then _}
                <Card img={imgSrc} href="/" reverse={vCard} >
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fun facts about {randomFish.name}</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                        {formatInfo()}
                  </p>
                </Card>
            {/await}
        {/if}
    </div>

</div>
<Footer />
