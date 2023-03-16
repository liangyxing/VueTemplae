<template>
    <div class="layout">
        <div class="myContainer">
            <div class="headers">
                <my-header />
            </div>

            <div class="asides">
                <my-aside />
            </div>

            <div class="mains">
                <my-main />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import myHeader from "../MainPage/MyHeader.vue";
import MyAside from "../MainPage/MyAside.vue";
import MyMain from "../MainPage/MyMain.vue";

</script>

<style lang="less" scoped>
.layout {
    height: 100%;
}

.myContainer {
    display: flex;

    // grid-template-columns: repeat(24, 1fr);
    //grid-template-rows: auto 0px auto;
    width: 100%;
}

.headers {
    //grid-area: headers;
    // grid-column-start: 1;
    // grid-column-end: 27;
    width: 100%;
}

.asides {
    grid-row-start: 2;

}

.mains {
    justify-self: stretch;
    grid-column-start: 2;
    grid-column-end: 27;
}

.el-menu--collapse {
    width: 0px;
}
// #div{
//     width: 100%;
// }
</style>