<template>
    <div class="container">
        <div class="box-container">
            <h3 class="title">Thương hiệu Nổi Bật</h3>
             <Splide :options="options" aria-label="My Favorite Images">
                <SplideSlide>
                <img src="@/assets/images/medicom.jpg" alt="Sample 1">
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/shfiguarts.jpg" alt="Sample 2">
                </SplideSlide>
                 <SplideSlide>
                <img src="@/assets/images/medicom.jpg" alt="Sample 2">
                </SplideSlide>

                <SplideSlide>
                <img src="@/assets/images/medicom.jpg" alt="Sample 1">
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/shfiguarts.jpg" alt="Sample 2">
                </SplideSlide>
                 <SplideSlide>
                <img src="@/assets/images/medicom.jpg" alt="Sample 2">
                </SplideSlide>

                <SplideSlide>
                <img src="@/assets/images/medicom.jpg" alt="Sample 1">
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/shfiguarts.jpg" alt="Sample 2">
                </SplideSlide>
                 <SplideSlide>
                <img src="@/assets/images/medicom.jpg" alt="Sample 2">
                </SplideSlide>
          </Splide>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
export default defineComponent ({
  components: {
    Splide,
    SplideSlide
  },
  setup() {
      const options = {
          perPage: 6,
          perMove: 1,
          gap: 2,
          height: 160,
          rewind: true,
          autoplay: true,
      }
    return {
        options,
    }
  },
})
</script>

<style scoped>
.container {
    margin: 0 auto;
}
.box-container {
    height: 150px;
    padding: 0px 0px;
}
.title {
    font-size: 25px;
    font-weight: normal;
    border-bottom: 3px solid #eee;
    margin-bottom: 30px;
    padding: 10px 0px;
}
.splide_slide {
    height: 65px !important;
    text-align: center;

}
</style>