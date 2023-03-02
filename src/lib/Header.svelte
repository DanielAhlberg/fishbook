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

<Navbar navClass="mb-8" let:hidden let:toggle>
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
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/addcatch">Add catch</NavLi>
        <NavLi href="/catalogue">Fish catalogue</NavLi>
        <NavLi href="/search">Fish search</NavLi>
        <NavLi href="/about">Om oss</NavLi>
        <DarkMode />
    </NavUl>
</Navbar>
