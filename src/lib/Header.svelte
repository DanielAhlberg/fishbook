<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
</script>

<Navbar
    navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
    let:hidden
    let:toggle
>
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
    </NavUl>
</Navbar>
