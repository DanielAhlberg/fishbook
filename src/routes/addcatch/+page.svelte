<script>
    import Header from "../../lib/Header.svelte";
    import Footer from "../../lib/Footer.svelte";
    import {fishes} from "../../storable.js";
    import {onMount} from "svelte";
    import {Label, Select, Input, Button, Modal} from "flowbite-svelte";
    import {v4 as uuidv4} from 'uuid';

    let fetchedFishes = [{}];
    let currentDate = new Date().toLocaleDateString()
    let endpoint = "https://www.fishwatch.gov/api/species";
    let fishValue
    let latestFish = ""
    let uuid
    let modal = false
    fishes.subscribe((u) => (fishValue = u))
    const valueDefaults = {
        date: currentDate,
        weight: '',
        length: '',
        fishType: '',
    };
    let fish = { ...valueDefaults };
    const handleOnSubmit = async (event) => {
        uuid = uuidv4()
        latestFish = fish.fishType
        let local = JSON.parse(localStorage.getItem("fishes"))
        fishes.set(JSON.stringify({...local,[uuid]: fish}))
        modal = true
        fish = { ...valueDefaults };
    }
    $: console.log(fishValue)

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        fetchedFishes = Object.keys(data).map((x) => {
            return {
                value: data[x]["Species Name"],
                name: data[x]["Species Name"],
            };
        }).sort((a, b) => a.value.localeCompare(b.value));
    });


</script>

<Header/>
<br>
<br>
<div class="px-20 py-8">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Add your latest catch!</h1>
    <p class="my-4 text-lg text-gray-500"> Here at Fishbook we help you keep track of your fishes.</p>
    <form on:submit={handleOnSubmit} >
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <Label>
                Select fish
                <Select class="mt-2" bind:items={fetchedFishes} bind:value={fish.fishType} required/>
            </Label>
            <div>
                <Label for="date" class="mb-2">Date of catch</Label>
                <Input type="text" id="date" bind:value={fish.date} required/>
            </div>
            <div>
                <Label for="weight" class="mb-2">Weight (kg)</Label>
                <Input type="number" id="weight" bind:value={fish.weight} min=1 required/>
            </div>
            <div>
                <Label for="length" class="mb-2">Length(cm)</Label>
                <Input type="number" id="length" bind:value={fish.length} min=1 required/>
            </div>
        </div>
        <Button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</Button>
    </form>

    <Modal title={"Great catch!"} bind:open={modal} autoclose>
        <div class="flex">
            <img class="w-8 h-8 rounded-full shadow-lg" src="https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/13187/31213/fish__74861.1558039324.png?c=2" alt="Jese Leos image"/>
            <div class="ml-3 text-md font-normal">
                <span class="mb-1 text-md font-semibold text-gray-900 dark:text-white">You have now registered the fish:</span>
                <div class="mb-2 text-md font-normal">{latestFish}</div>
            </div>
        </div>
        <svelte:fragment slot="footer">
            <Button>OK</Button>
        </svelte:fragment>
    </Modal>
</div>
<Footer/>
