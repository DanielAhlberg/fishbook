<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { Alert, Label, Select } from "flowbite-svelte";
    let selected = "";
    let fishes = [{}];
    let endpoint = "https://www.fishwatch.gov/api/species";

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        fishes = Object.keys(data).map((x) => {
            return {
                value: data[x]["Species Name"],
                name: data[x]["Species Name"],
            };
        });
    });
</script>

<Header />
<div class="px-20 py-8">
    <h1>Welcome to Fishbook</h1>
    <Label>
        Select a fish to know more about
        <Select class="mt-2" bind:items={fishes} bind:value={selected} />
    </Label>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    <Alert>
        <span class="font-medium">Info alert!</span> Change a few things up and try
        submitting again.
    </Alert>
</div>
<Footer />
