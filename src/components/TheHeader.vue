<script>
export default {
    name: "TheHeader",
    data() {
        return {
            menuItems: [
                {
                    routeName: "home",
                    label: "Homepage"
                },
                {
                    routeName: "about",
                    label: "Chi siamo"
                },
                {
                    routeName: "events",
                    label: "Eventi"
                }
            ]
        }
    },
}
</script>

<template>
    <header>
        <h1>HEADER</h1>
        <router-link :to="{ name: 'events' }" class="nav-link">Vai agli eventi</router-link>
        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link">{{ item.label }}</router-link>
        </li>
    </header>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>