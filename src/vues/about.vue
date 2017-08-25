<template>
    <div class="about-wrapper">
        <p>
            {{msg}}
        </p>
        
        <input type="checkbox" v-model="checked">

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello world!',
                checked: false
            }
        },
        watch: {
            checked(){
                console.log("now " + this.checked)
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
