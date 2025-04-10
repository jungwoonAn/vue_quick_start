<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">이날치(LeeNalChi)</a>
            <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">홈</router-link>                     
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">소개</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/members">멤버</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/videos">영상</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>