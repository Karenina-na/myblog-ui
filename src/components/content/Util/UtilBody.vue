<template>
    <div class="box">
        <div>
            <div class="image">
                <a-image :width="200" :height="200" src="https://www.rabbitmq.com/img/logo-rabbitmq.svg" />
            </div>
            <div class="introduce">
                <div style="font-size:30px;text-align: center;"></div>
                <div style="font-size:17px;text-align: center;padding-top:20px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UtilBody"
}
</script>

<style scope>
.box {
    width: 850px;
    padding: 10px 20px 10px;
    line-height: 1.6;
    float: left;

    background-color: rgba(255, 255, 255, 0.705);
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.027);
    border-radius: 30px;

    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.048);

    transition-property: -webkit-box-shadow box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
}

/*悬停阴影*/
.box:hover {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}

/**图片 */
.image {
    float: left;
}

/**介绍 */
.introduce {
    width: 580px;
    float: right;
    letter-spacing: 1.2px;
    line-height: 1.2;
    white-space: normal;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>