<template>
    <div class="container">
        <SearchBar />
        <div class="display-container">
            <ListBlock :storedData="storedData" />
            <Map :storedData="storedData" />
        </div>
    </div>
</template>

<script>
    import SearchBar from '@/components/Localisation/SearchBar.vue';
    import ListBlock from '@/components/Localisation/ListBlock.vue';
    import Map from '@/components/Localisation/Map.vue';

    export default {
        name: 'Location',
        components: {
            ListBlock,
            Map,
            SearchBar
    },
        computed: {
            storedData() {
                return this.$store.state.storedData;
            }
        }
    };
</script>

<style>
    .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .display-container {
        @media (min-width: 600px) { 
            flex-direction: row;
        };

        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1em;
        width: 100%;
    }
</style>
