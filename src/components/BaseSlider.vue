<template>
    <div class="slider-box">
        <div class="slider-content">
          <Splide :options="options" aria-label="My Favorite Images">
                <SplideSlide>
                <img src="@/assets/images/slide1.jpg" alt="Sample 1">
                <div class="content">
                    <a href="#">SHFIGUARTS MARVEL</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide2.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">Loạt MARVEL</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide3.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">Loạt JUSTICE LEAGUE</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide4.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">Loạt DC COMICS</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide5.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">SHFIGUARTS Figure</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide6.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">SHFIGUARTS INJUSTICE</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide7.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">MAFEX X MEN  Figure</a>
                </div>
                </SplideSlide>
                <SplideSlide>
                <img src="@/assets/images/slide8.jpg" alt="Sample 2">
                <div class="content">
                    <a href="#">MAFEX MARVEL Figure</a>
                </div>
                </SplideSlide>
          </Splide>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = {
      rewind: true,
      gap   : '1rem',
      perMove: 1,
    autoplay: true,
    };

    return { options };
  },
} );
</script>

<style scoped>
.splide__slide img {
    height: 500px;
    object-fit: cover;
    display: block;
    width: 100%;
}
.content {
    margin-top: 5px;
    position: absolute;
    right: 10px;
    bottom: 20px;
    width: 400px;
    text-align: justify;
    background: #000033;
    padding: 7px 7px 12px;
}
.content a {
    text-decoration: none;
    color: #ffff;
    display: inline-block;
    line-height: 24px;
    text-transform: uppercase;
}
</style>
