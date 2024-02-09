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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <!--  <router-link :to="{ name: 'events' }" class="nav-link">Vai agli eventi</router-link> -->
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">>
                            <router-link :to="{ name: item.routeName }" class="nav-link">{{ item.label }}</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>