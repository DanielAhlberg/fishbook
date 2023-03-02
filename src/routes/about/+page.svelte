<script>
    import Wrapper from "../../lib/Wrapper.svelte";
    import { Button, Modal } from "flowbite-svelte";
    const images = [
        {
            name: "Lisa Bybro",
            imgurl: "https://scontent-arn2-2.xx.fbcdn.net/v/t1.15752-9/332360587_529040725795683_6008864962436741800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=sP5XQxQatyUAX_OiuhG&_nc_ht=scontent-arn2-2.xx&oh=03_AdR3ZOH1cruS4zxyhq5Q0MLopre47wThUpuiyN5aQspJvg&oe=6427D13C",
            attribution: "En rikigt fångst",
            descripton:"Peppad som få är Lisa Bybro den första du vill ringa när livet är glassigt. Hon har en talang för matlagning, bättre än många enligt henne, du verkligen hem och smaka hennes fiskpinnar",
        },
        {
            name: "Joel Bergstrand",
            imgurl: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/333858164_748352693610440_4437390154903084033_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=J00gf7SLyrAAX-OJDxK&_nc_ht=scontent-arn2-1.xx&oh=03_AdSOIzw_Opfi8sBydjeYsiG_Ladd_lUOrY0jVobUlNlN8w&oe=6427E42E",
            attribution: "Borttappad, hittelön utlovas",
            descripton:
                "Jag tar bussen som går 00:10 sa mannen som åkte 06:30 efter han skaffed numret till två finskor på en schlager-pub. Mannen, myten, firren som löser allt med sin till synes oändliga munterhet (utom under tentap).",
        },
        {
            name: "Bianca Widstam",
            imgurl: "https://scontent-arn2-2.xx.fbcdn.net/v/t1.15752-9/333412855_129519453380200_1182840175432188230_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TlZGhmY7sHMAX9GFUaL&_nc_ht=scontent-arn2-2.xx&oh=03_AdSGx0ppFS3dVtW-1GOCkSa37E-ly60arlvtTuihQoXeFg&oe=64280263",
            attribution: "Moules frites fast bättre",
            descripton:
                "Kaptenen vid pluggbordet. Dagen Bianca skulle komma hem från Bryssel var hypead redan innan hon ens åkt. Inget blir gjort utan henne och Fishbook är vad det är idag tack vare henne.",
        },
        {
            name: "Daniel Ahlberg",
            imgurl: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/333099232_1873945492961601_6908165392042987463_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RshNQHTIUhkAX8uQUJ4&_nc_ht=scontent-arn2-1.xx&oh=03_AdQ0MWyULJnGchZcxhlY-tq88fbmSPCa4cWrAngZQOwVUQ&oe=6427D413",
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
