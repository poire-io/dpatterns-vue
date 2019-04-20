<template>
<div id="app">
    <form name="frmMain" id="frmMain">
        <main class="container-fluid main-content" role="main">
            <transition name="fade">
                <router-view />
            </transition>
        </main>
    </form>
</div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
}

.fade-enter-active {
    transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
