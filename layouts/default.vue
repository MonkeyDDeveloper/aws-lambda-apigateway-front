<template>
    <section>
        <Header />
    </section>
    <main>
        <slot />
    </main>
    <footer>
        <Footer />
    </footer>
    <UNotifications />
</template>
<style>

    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        font-family: "Raleway", sans-serif;
    }

    body {

        background-color: #172A3A;
        
    }

</style>