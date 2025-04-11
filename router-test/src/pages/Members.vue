<template>
    <div class="card card-body">
        <h2>이날치 멤버</h2>
        <div class="row">
            <div v-for="m in members" :key="m.id"
            class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center">
                <router-link :to="'/members/' + m.id">
                    <img :src="m.photo" :title="m.name" class="img-thumbnail" style="width: 100px;">
                    <h6 class="display-7">{{ m.name }}</h6>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import members from '@/members.json'
</script>