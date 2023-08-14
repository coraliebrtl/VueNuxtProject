<template>
    <div>
        <SearchBar />
        <ListBlock />
        <Map />
    </div>
</template>

<script>

export default {
    name: 'Location',
    data() {
        return {
        myData: [
            {
            id: 0,
            lat: '54',
            long: '89',
            name: 'Manhattan',
            description: 'big city',
            },
            {
            id: 1,
            lat: '56',
            long: '95',
            name: 'Los Angeles',
            description: 'another big city',
            },
        ],
        };
    },
};
</script>

<style>
 p {
    color: black;
 }
</style>
