# Fishbook
Vi vill skapa FishBook - en webbapplikation där användare kan dokumentera sina fångster. Applikationen ska erbjuda information om fångade fiskar, så som utseende, i vilka vatten de finns och smak samt näringsvärden. Språket som kommer användas på hemsidan är engelska.

Databas vi kommer använda: https://www.fishwatch.gov/developers 
Ramverk vi kommer använda: Svelte
Paket vi kommer använda: Flowbite-Svelte


De sidor vi kommer ha för att strukturera upp applikationen är följande [WIP]:
Välkommen / Hemsida
Dagens fisk - med kuriosa
Lägg in din senaste fångst
Formulär
Sök efter fiskar 
Se din fångsthistorik - endast localstorage
Galleri med bilder av dom du har fångat
Med statistik på antal fångster
Få information om fisken du har fångat under dina fisketurer
Namn
Vikt
Antal
Datum fångat
Storlek
Allmän information - api -
Om oss - FISHBOOK


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
