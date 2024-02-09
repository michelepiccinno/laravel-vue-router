<script>
export default {
    name: "EventDetail",
    props: ["id"]
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Dettaglio evento {{ this.$route.params.id }}</h1>
        </div>
    </div>
</template>

<style scoped></style>