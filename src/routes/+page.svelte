<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink,
        Alert,
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img
            src="https://flowbite.com/docs/images/logo.svg"
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
        <NavLi href="/about">About</NavLi>
        <NavLi href="/services">Services</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
<div class="p-8">
    <h1>Welcome to Fishbook</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    <Alert>
        <span class="font-medium">Info alert!</span> Change a few things up and try
        submitting again.
    </Alert>
</div>
<Footer>
    <FooterCopyright href="/" by="Flowbite™" year={2022} />
    <FooterLinkGroup
        ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
</Footer>

<style>
</style>
