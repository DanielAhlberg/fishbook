<script>
    import Header from "../../lib/Header.svelte";
    import Footer from "../../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { Label, Select, Input, Button, Datepicker } from "flowbite-svelte";

    let selected = "";
    let fishes = [{}];
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
    });

    function handleOnSubmit() {
        console.log("Submitted");
    }
</script>

<Header />
<div class="px-20 py-24">
    <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
        Add your latest catch!
    </h1>
    <p class="my-4 text-lg text-gray-500">
        Here at Fishbook we help you keep track of your fishes.
    </p>
    <form on:submit={handleOnSubmit}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <Label>
                Select fish
                <Select
                    class="mt-2"
                    bind:items={fishes}
                    bind:value={selected}
                />
            </Label>
            <div>
                <Label for="date" class="mb-2">Date of catch</Label>
                <Input type="text" id="date" required />
            </div>
            <div>
                <Label for="weight" class="mb-2">Weight (kg)</Label>
                <Input type="text" id="weight" required />
            </div>
            <div>
                <Label for="length" class="mb-2">Length(cm)</Label>
                <Input type="text" id="length" required />
            </div>
        </div>
        <Button type="submit">Submit</Button>
    </form>
</div>
<Footer />
