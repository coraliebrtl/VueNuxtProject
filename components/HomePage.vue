<template>
    <div>
        <h1 class="homepage-title">Hello Asso Map</h1>
        <Localisation />
    </div>
</template>

<script>
import Localisation from '@/components/Localisation/Localisation.vue';

export default {
    name: 'HomePage',
    components: {
        Localisation,
  },
}
</script>

<style>
    .homepage-title {
        color: #b8e0b8;
        text-align: center;
    }
</style>