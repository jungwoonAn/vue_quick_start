<template>
    <div class="header">
        <h2 class="headerText">태평양 전쟁의 해전</h2>
        <nav>
            <ul class="nav nav-tabs nav-fill">
                <li v-for="tab in tabs" :key="tab.id" class="nav-item">
                    <a class="nav-link" :class="{active : tab.id === currentTab}" 
                    @click="changeTab(tab.id)">{{ tab.label }}</a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="container">
        <!-- <keep-alive include="CoralSeaTab, MidwayTab"> -->
            <component :is="currentTab"></component>
        <!-- </keep-alive> -->
        
    </div>
</template>

<script>
    // import CoralSeaTab from './components/CoralSeaTab.vue';
    // import LeyteGulfTab from './components/LeyteGulfTab.vue';
    // import MidwayTab from './components/MidwayTab.vue';

    import { defineAsyncComponent } from 'vue';
    import pMinDelay from 'p-min-delay';
    import Loading from './components/Loading.vue';

    const CoralSeaTab = defineAsyncComponent({
        loader: () => pMinDelay(import('./components/CoralSeaTab.vue'), 2000),
        loadingComponent: Loading,
    })

    const LeyteGulfTab = defineAsyncComponent({
        loader: () => pMinDelay(import('./components/LeyteGulfTab.vue'), 2000),
        loadingComponent: Loading,
    })

    const MidwayTab = defineAsyncComponent({
        loader: () => pMinDelay(import('./components/MidwayTab.vue'), 2000),
        loadingComponent: Loading,
    })

    export default {
        name: 'App',
        components: {CoralSeaTab, LeyteGulfTab, MidwayTab},
        data() {
            return {
                currentTab: 'CoralSeaTab',
                tabs: [
                    {id: 'CoralSeaTab', label: '산호해 해전'},
                    {id: 'LeyteGulfTab', label: '레이테만 해전'},
                    {id: 'MidwayTab', label: '미드웨이 해전'},
                ]
            }
        },
        methods: {
            changeTab(tab) {
                this.currentTab = tab;
            }
        }
    }
</script>

<style>
    .header {
        padding: 20px 0 0 20px;
    }
    .headerText {
        padding: 0 20px 40px;
    }
    .tab {
        padding: 30px;
    }
    a {
        cursor: pointer;
    }
</style>