<template>
    <div class="about-wrapper">
        <p>
            {{msg}}
        </p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello world!'
            }
        }
    }

</script>

<style>
    .about-wrapper {
        color: red;
    }

</style>

<custom1>
    This could be e.g. documentation for the component.
</custom1>
