<template>
    <div>
        <h2>Info</h2>
        <counterInfo :counter="counter"></counterInfo>
    </div>
</template>

<script>
import counterInfo from "./counterInfo";

export default {
    props: ["counter"],
    components: {
        counterInfo
    }
}
</script>
