<script>
    const images = [
        {
            name: "Fiskpinnar",
            imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Fishfinger1.jpg",
            attribution: "Riktigt goda pinnar",
            descripton: "En förpackning med 30st av Findus goda klassiska fiskpinnar. Fiskpinnarna blir snabbt en favorit i hela familjen. De spröda pinnarna är gjorda på MSC-märkt Alaska pollock. Tillagas lätt i antingen ugn eller stekpanna. Med Findus krispiga fiskpinnar får du en god och enkel middag som passar både stora och små."
        },
        {
            name: "Nemo",
            imgurl: "https://m.media-amazon.com/images/I/71E7e0RRujL._AC_UF1000,1000_QL80_.jpg",
            attribution: "Borttappad, hittelön utlovas",
            descripton: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
        },
        {
            name: "Nemo",
            imgurl: "https://m.media-amazon.com/images/I/71E7e0RRujL._AC_UF1000,1000_QL80_.jpg",
            attribution: "Borttappad, hittelön utlovas",
            descripton: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
        },
        {
            name: "Nemo",
            imgurl: "https://m.media-amazon.com/images/I/71E7e0RRujL._AC_UF1000,1000_QL80_.jpg",
            attribution: "Borttappad, hittelön utlovas XXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            descripton: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
        }
    ];

    import Header from "../../lib/Header.svelte";
    import Footer from "../../lib/Footer.svelte";
    import { Button, Modal, List, Li } from "flowbite-svelte";
    var modals = new Array(images.length).fill(false)
</script>

<div style="p8">
    <Header />
    <div class="flex justify-evenly">
        <List tag="ul" class="w-screen divide-y divide-gray-200 dark:divide-gray-700">
            {#each images as image, i}
                <Li class="py-2" icon>
                    <div class="flex items-center justify-self-center space-x-2 h-16 w-full">
                        <div class="flex-shrink-0">
                            <img
                                class="w-20 h-16 rounded-md object-cover hover:object-scale-down"
                                src={image.imgurl}
                                alt={image.name}
                            />
                        </div>
                        <div class="flex-1 min-w-0">
                            <p
                                class="text-sm font-medium text-gray-900 truncate dark:text-white"
                            >
                                {image.name}
                            </p>
                            <p
                                class="text-sm text-gray-500 truncate dark:text-gray-400"
                            >
                                {image.attribution}
                            </p>
                        </div>
                        <div
                            class="inline-flex justify-self-end font-semibold text-gray-900 dark:text-white"
                        >
                            <Button on:click={() => (modals[i] = true)}
                                >Visa mer</Button
                            >
                            <Modal
                                title={image.name}
                                bind:open={modals[i]}
                                autoclose
                            >
                                <p
                                    class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                                >
                                    {image.descripton}
                                </p>
                                <svelte:fragment slot="footer">
                                    <Button>Tack och hej</Button
                                    >
                                </svelte:fragment>
                            </Modal>
                        </div>
                    </div>
                </Li>
            {/each}
        </List>
    </div>
    <Footer />
</div>
