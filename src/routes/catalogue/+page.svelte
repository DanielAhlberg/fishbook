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
            name: "Nemoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
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
    <div class="grid grid-cols-3 gap-8 m-16">
            {#each images as image, i}
                    <div class="justify-evenly bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                                class="mb-3 font-normal truncate text-gray-700 dark:text-gray-400"
                            >
                                {image.attribution}
                            </p>
                       
                            <Button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" on:click={() => (modals[i] = true)}
                                >Visa mer</Button
                            >
                            <Modal
                                title={image.name}
                                bind:open={modals[i]}
                                autoclose
                            >
                                <img src={image.imgurl} alt={image.name}/>

                                <h1 class="text-xl">Om fisken</h1>
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
            {/each}
    </div>
    <Footer />
</div>
