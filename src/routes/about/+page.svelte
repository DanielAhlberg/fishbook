<script>
    import Wrapper from "../../lib/Wrapper.svelte";
    import { Button, Modal } from "flowbite-svelte";
    const images = [
        {
            name: "Lisa Bybro",
            imgurl: "./lisa.jpg",
            attribution: "En rikigt fångst",
            descripton:"Peppad som få är Lisa Bybro den första du vill ringa när livet är glassigt. Hon har en talang för matlagning, bättre än många enligt henne, du verkligen hem och smaka hennes fiskpinnar",
        },
        {
            name: "Joel Bergstrand",
            imgurl: "./joel.jpg",
            attribution: "Borttappad, hittelön utlovas",
            descripton:
                "Jag tar bussen som går 00:10 sa mannen som åkte 06:30 efter han skaffed numret till två finskor på en schlager-pub. Mannen, myten, firren som löser allt med sin till synes oändliga munterhet (utom under tentap).",
        },
        {
            name: "Bianca Widstam",
            imgurl: "./bianca.jpg",
            attribution: "Moules frites fast bättre",
            descripton:
                "Kaptenen vid pluggbordet. Dagen Bianca skulle komma hem från Bryssel var hypead redan innan hon ens åkt. Inget blir gjort utan henne och Fishbook är vad det är idag tack vare henne.",
        },
        {
            name: "Daniel Ahlberg",
            imgurl: "./daniel.jpg",
            attribution: "Vi behöver en större båt för den här grabben",
            descripton:
                "Vem är bättre än den här killen? - Killen som skrev detta.",
        },
    ];

    var modals = new Array(images.length).fill(false);
</script>

<Wrapper>
    <p class="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Om företaget
    </p>
    <p class="text-2xl mx-16 my-8 text-left text-gray-900 dark:text-white">
        Vi är ett gäng riktigt goa fiskare som bara måste dela med oss av våra
        fångster.
    </p>

    <p class="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Våra medarbetare
    </p>
    <div class="grid grid-cols-4 gap-8 my-6 mx-16">
        {#each images as image, i}
            <div
                class="justify-evenly bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <img
                    class="rounded-t-lg hover:object-scale-down"
                    src={image.imgurl}
                    alt={image.name}
                />
                <div class="p-5">
                    <h5
                        class="mb-2 text-2xl font-bold truncate tracking-tight text-gray-900 dark:text-white"
                    >
                        {image.name}
                    </h5>
                    <p
                        class="mb-3 break-normal font-normal text-gray-700 dark:text-gray-400"
                    >
                        {image.attribution}
                    </p>

                    <Button
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        on:click={() => (modals[i] = true)}>Visa mer</Button
                    >
                    <Modal title={image.name} bind:open={modals[i]} autoclose>
                        <img src={image.imgurl} alt={image.name} />

                        <h1 class="text-xl">Om {image.name}</h1>
                        <p
                            class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            {image.descripton}
                        </p>
                        <svelte:fragment slot="footer">
                            <Button>Tack och hej</Button>
                        </svelte:fragment>
                    </Modal>
                </div>
            </div>
        {/each}
    </div>
</Wrapper>
