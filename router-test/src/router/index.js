import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue');
const About = () => import(/* webpackChunkName: "home" */ '@/pages/About.vue');
const Members = () => import(/* webpackChunkName: "members" */ '@/pages/Members.vue');
const Videos = () => import(/* webpackChunkName: "members" */ '@/pages/Videos.vue');
const MemberInfo = () => import(/* webpackChunkName: "videos" */ '@/pages/MemberInfo.vue');
const VideoPlayer = () => import(/* webpackChunkName: "videos" */ '@/pages/VideoPlayer.vue');
const NotFound = () => import(/* webpackChunkName: "home" */ '@/pages/NotFound.vue');

// 라우트 수준의 내비게이션 가드 설정
const membersIdGuard = (to, from) => {
    // members/:id 경로는 반드시 이전 경로가
    // /members, /members/:id인 경우만 내비게이션 허용함
    console.log(from.name)
    if(from.name !== 'members' && from.name !== 'members/id'){
        return false;
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/members', name: 'members', component: Members},
        {path: '/members/:id', name: 'members/id', component: MemberInfo,
            beforeEnter: membersIdGuard, props: true
        },
        {path: '/videos', name: 'videos', component: Videos,
            children: [{path: ':id', name: 'videos/id', component: VideoPlayer}]
        },
        {path: '/:paths(.*)*', name: 'NotFound', component: NotFound}
    ]
})

// 전역 수준의 내빅이션 가드 설정
router.beforeEach(to => {
    // to.query 에 속성이 존재할 경우 제거된 경로로 재이동
    if(to.query && Object.keys(to.query).length > 0){
        return {path: to.path, query: {}, params: to.params};
    }
})

router.afterEach((to, from, failure) => {
    if(isNavigationFailure(failure)) {
        console.log('내비게이션 중단 : ', failure)
    }
})

export default router;