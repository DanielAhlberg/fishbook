<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />
<div class="py-24 px-12">
    <slot />
</div>
<Footer />
