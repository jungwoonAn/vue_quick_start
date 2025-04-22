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
                <i class="fa-solid fa-backward pointer" @click="playPrev"></i>
                <i class="fa-solid fa-stop mx-2 pointer" @click="stopVideo"></i>
                <i class="fa-solid fa-forward pointer" @click="playNext"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject, reactive, ref } from 'vue';
    import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
    import { YoutubeVue3 } from 'youtube-vue3';

    const videos = inject('videos');
    const playerRef = ref(null);
    const currentRoute = useRoute();
    const router = useRouter();
    // console.log(router)

    let videoInfo, currentIndex, prevVideoId, nextVideoId;

    videoInfo = reactive({
        video: videos.find(v => v.id === currentRoute.params.id)
    })

    // 컴포넌트 수준의 내비게이션 가드 설정
    const getNavId = to => {
        videoInfo.video = videos.find(v => v.id === to.params.id);
        currentIndex = videos.findIndex(v => v.id === videoInfo.video.id);
        prevVideoId = videos[currentIndex-1] ? videos[currentIndex-1].id : null;
        nextVideoId = videos[currentIndex+1] ? videos[currentIndex+1].id : null;
    }

    // 마운트 되었을 때 현재의 라우트 정보를 이용해 이전, 다음 ID획득
    getNavId(currentRoute);
    
    const stopVideo = () => {
        playerRef.value.player.stopVideo();
        router.push({name: 'videos'});
    }

    const playNext = () => {
        // const index = videos.findIndex(v => v.id === videoInfo.video.id);
        // const nextVideo = videos[index+1];
        if(nextVideoId) {
            // videoInfo.video = nextVideo;
            router.push({name: 'videos/id', params: {id: nextVideoId}});
        }else {
            // videoInfo.video = videos[0];
            router.push({name: 'videos/id', params: {id: videos[0].id}});
        }
    }

    const playPrev = () => {
        // const index = videos.findIndex(v => v.id === videoInfo.video.id);
        // const prevVideo = videos[index-1];
        if(prevVideoId) {
            // videoInfo.video = prevVideo;
            router.push({name: 'videos/id', params: {id: prevVideoId}})
        }
    }

    onBeforeRouteUpdate(to => {
        getNavId(to)
    })
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
    text-align: center;
}

.pointer {
    cursor: pointer;
}
</style>