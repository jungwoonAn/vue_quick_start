<template>
    <div class="modal">
        <div class="box">
            <div class="heading">
                <span class="title">:: {{ videoInfo.video.title }}</span>
                <span class="category">({{ videoInfo.video.category }})</span>
                <span class="float-end badge bg-secondary pointer" @click="stopVideo">X</span>
            </div>
            <div class="player">
                <YoutubeVue3 ref="playerRef" :videoid="videoInfo.video.id"
                :autoplay="1" :controls="1" @ended="playNext" />
            </div>
            <div class="controls">
                <i class="fa-solid fa-backward ml-2 pointer" @click="playPrev"></i>
                <i class="fa-solid fa-stop ml-2 pointer" @click="stopVideo"></i>
                <i class="fa-solid fa-forward ml-2 pointer" @click="playPrev"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject, reactive, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { YoutubeVue3 } from 'youtube-vue3';

    const videos = inject('videos');
    const playerRef = ref(null);
    const currentRoute = useRoute();
    const router = useRouter();

    let videoInfo = reactive({
        video: videos.find(v => v.id === currentRoute.params.id)
    })

    const stopVideo = () => {
        playerRef.value.player.stopVideo();
        router.push('/videos');
    }

    const playNext = () => {
        const index = videos.findIndex(v => v.id === videoInfo.video.id);
        const nextVideo = videos[index+1];
        if(nextVideo) {
            videoInfo.video = nextVideo;
            router.push('/videos/' + nextVideo.id);
        }else {
            videoInfo.video = videos[0];
            router.push('/videos' + videos[0].id);
        }
    }

    const playPrev = () => {
        const index = videos.findIndex(v => v.id === videoInfo.video.id);
        const prevVideo = videos[index-1];
        if(prevVideo) {
            videoInfo.video = prevVideo;
            router.push('/videos/' + prevVideo.id)
        }
    }
</script>

<style scoped>
.modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
.box {
    background-color: #fff;
    margin: 80px auto;
    max-width: 500px;
    min-width: 100px;
    min-height: 350px;
    font: 13px 'verdana';
    padding: 10px;
}
.heading {
    background-color: #33a17f;
    font-weight: 300;
    color: #fff;
    margin: 5px 0;
    padding: 10px;
    min-width: 200px;
    max-width: 500px;
}
.player {
    background-color: #fff;
}

.controls {
    margin-top: 10px;
    padding: 0;
}

.pointer {
    cursor: pointer;
}
</style>