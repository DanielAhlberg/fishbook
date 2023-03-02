<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        DarkMode,
    } from "flowbite-svelte";
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
        <NavLi href="/">Home</NavLi>
        <NavLi href="/addcatch">Add catch</NavLi>
        <NavLi href="/catalogue">Fish catalogue</NavLi>
        <NavLi href="/search">Fish search</NavLi>
        <NavLi href="/about">Om oss</NavLi>
    </NavUl>
</Navbar>
