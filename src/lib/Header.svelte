<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        DarkMode,
    } from "flowbite-svelte";
    import { page } from "$app/stores";
    let path = $page.url.pathname;
    function getPath(currentPath) {
        path = currentPath;
    }
    $: getPath($page.url.pathname);
</script>

<Navbar navClass="mb-4 py-2 fixed w-full" let:hidden let:toggle>
    <NavBrand href="/">
        <img
            src="https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/13187/31213/fish__74861.1558039324.png?c=2"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
        />
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
            Fishbook
        </span>
    </NavBrand>
    <div class="flex items-center md:order-2">
        <NavHamburger
            on:click={toggle}
            class1="w-full md:flex md:w-auto md:order-1"
        />
        <DarkMode />
    </div>
    <NavUl {hidden}>
        <NavLi active={path == "/"} href="/">Home</NavLi>
        <NavLi active={path == "/addcatch"} href="/addcatch">Add catch</NavLi>
        <NavLi active={path == "/catalogue"} href="/catalogue"
            >Fish catalogue</NavLi
        >
        <NavLi active={path == "/search"} href="/search">Fish search</NavLi>
        <NavLi active={path == "/about"} href="/about">Om oss</NavLi>
    </NavUl>
</Navbar>
