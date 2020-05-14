<template>
    <div>
        <!--HEADER BEGIN-->
        <top-Header></top-Header>
        <!--HEADER END-->
        <router-view/>

        <!--FOOTER BEGIN-->
        <site-footer></site-footer>
        <!--FOOTER END-->

    </div>
</template>

<script>
    import topHeader from './components/top-header'
    import siteFooter from './components/site-Footer'

    export default {
        components: {
            topHeader,
            siteFooter
        }
    };
</script>
