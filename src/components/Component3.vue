<template>
    <div>
        <!-- <h4>{{ $store.state.counter }}</h4> -->
        <Component4 />
        <History />
    </div>
</template>

<script>
import Component4 from "./Component4";
import History from "./History";
export default {
    name: 'Component3',
    components: {
        Component4,
        History
    }
    
}
</script>

<style>

</style>