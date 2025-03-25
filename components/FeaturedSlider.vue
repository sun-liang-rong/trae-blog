<template>
  <div class="featured-slider">
    <div class="slider-container" ref="sliderContainer">
      <div 
        v-for="(article, index) in featuredArticles" 
        :key="article.id"
        class="slide"
        :class="{ 'active': currentIndex === index }"
        :style="{ backgroundImage: `url(${article.coverImage})` }"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <span 
              class="tag" 
              :style="{ backgroundColor: getTagColor(article.tag) }" 
              @click.prevent="navigateToCategory(article.tag)"
            >
              {{ article.tag }}
            </span>
            <h2 class="title">{{ article.title }}</h2>
            <p class="excerpt">{{ article.excerpt }}</p>
            <NuxtLink :to="`/articles/${article.id}`" class="btn read-btn">阅读文章</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 导航按钮 -->
    <button class="nav-btn prev-btn" @click="prevSlide" aria-label="上一篇">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="nav-btn next-btn" @click="nextSlide" aria-label="下一篇">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    
    <!-- 指示器 -->
    <div class="indicators">
      <button 
        v-for="(article, index) in featuredArticles" 
        :key="index"
        class="indicator"
        :class="{ 'active': currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="`转到第${index + 1}张幻灯片`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  featuredArticles: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Nuxt3服务端渲染实践',
        excerpt: '探索Nuxt3的SSR特性如何提升应用性能，实现首屏快速加载与SEO优化。',
        tag: 'Nuxt',
        coverImage: '/images/featured-nuxt.jpg'
      },
      {
        id: 2,
        title: 'Three.js粒子系统优化',
        excerpt: '深入解析Three.js中粒子系统的性能优化技巧，打造流畅的3D视觉体验。',
        tag: 'Three.js',
        coverImage: '/images/featured-threejs.jpg'
      },
      {
        id: 3,
        title: '现代CSS布局技巧',
        excerpt: '掌握Grid和Flexbox的高级应用，构建响应式且富有创意的网页布局。',
        tag: 'CSS',
        coverImage: '/images/featured-css.jpg'
      }
    ]
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
const sliderContainer = ref(null)
let autoplayTimer = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.featuredArticles.length
  animateSlide()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.featuredArticles.length) % props.featuredArticles.length
  animateSlide()
}

const goToSlide = (index) => {
  currentIndex.value = index
  animateSlide()
}

const animateSlide = () => {
  if (!sliderContainer.value || !process.client) return
  
  const slides = sliderContainer.value.querySelectorAll('.slide')
  
  // 隐藏所有幻灯片
  gsap.to(slides, {
    opacity: 0,
    scale: 0.8,
    rotateY: -30,
    filter: 'brightness(0.5) blur(10px)',
    duration: 0.8,
    ease: 'power3.out'
  })
  
  // 显示当前幻灯片
  gsap.to(slides[currentIndex.value], {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: 'brightness(1) blur(0px)',
    duration: 0.8,
    ease: 'power3.inOut'
  })
  
  // 内容动画
  const content = slides[currentIndex.value].querySelector('.slide-content')
  gsap.fromTo(content, 
    { 
      y: 50,
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    { 
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    }
  )
  
  // 添加故障效果
  gsap.to(slides[currentIndex.value], {
    clipPath: 'polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)',
    duration: 0.2,
    ease: 'none',
    yoyo: true,
    repeat: 1
  })
}

const startAutoplay = () => {
  if (props.autoplay && props.featuredArticles.length > 1) {
    autoplayTimer = setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
}

const getTagColor = (tag) => {
  switch(tag) {
    case 'Nuxt': return '#42b883';
    case 'Three.js': return '#6b4bb3';
    case 'Vue': return '#3eaf7c';
    case 'JavaScript': return '#f7df1e';
    case 'CSS': return '#2965f1';
    case 'HTML': return '#e34c26';
    default: return '#cccccc';
  }
}

const navigateToCategory = (tag) => {
  const slug = tag.toLowerCase().replace('.', '')
  navigateTo(`/categories/${slug}`)
}

onMounted(() => {
  animateSlide()
  startAutoplay()
  
  // 鼠标悬停时暂停自动播放
  if (sliderContainer.value) {
    sliderContainer.value.addEventListener('mouseenter', stopAutoplay)
    sliderContainer.value.addEventListener('mouseleave', startAutoplay)
  }
})

onBeforeUnmount(() => {
  stopAutoplay()
  
  // 清除事件监听
  if (sliderContainer.value) {
    sliderContainer.value.removeEventListener('mouseenter', stopAutoplay)
    sliderContainer.value.removeEventListener('mouseleave', startAutoplay)
  }
})
</script>

<style scoped>
.featured-slider {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 32, 63, 0.9));
  border: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.slider-container {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s ease;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 32, 63, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 1;
  }
  background-position: center;
  opacity: 0;
  transform: translateX(100%) scale(0.9) rotateY(30deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.8) contrast(1.2);
  clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
}

.slide.active {
  opacity: 1;
  transform: translateX(0) scale(1) rotateY(0);
  z-index: 1;
  animation: glitch 5s infinite linear alternate-reverse;
}

@keyframes glitch {
  0% {
    clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    filter: brightness(0.8) contrast(1.2) hue-rotate(0deg);
  }
  2% {
    clip-path: polygon(0 5%, 100% 0, 98% 95%, 2% 100%);
    filter: brightness(1.1) contrast(1.3) hue-rotate(2deg);
  }
  4% {
    clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    filter: brightness(0.8) contrast(1.2) hue-rotate(0deg);
  }
  95% {
    clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    filter: brightness(0.8) contrast(1.2) hue-rotate(0deg);
  }
  98% {
    clip-path: polygon(0 0, 100% 5%, 98% 100%, 2% 95%);
    filter: brightness(1.1) contrast(1.3) hue-rotate(-2deg);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    filter: brightness(0.8) contrast(1.2) hue-rotate(0deg);
  }
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 32, 63, 0.85) 0%,
    rgba(0, 32, 63, 0.65) 50%,
    rgba(0, 32, 63, 0.35) 100%
  );
  display: flex;
  align-items: center;
  padding: 0 6%;
  box-shadow: inset 0 0 50px rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.slide-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 1.5rem;
  color: white;
  text-align: center;
  opacity: 0;
  transform: translateZ(50px);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  line-height: 1.2;
}

.excerpt {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  opacity: 0.9;
}

.read-btn {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent-color), rgba(0, 255, 255, 0.8));
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.3);
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
}

.read-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite linear;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.read-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(var(--accent-color-rgb), 0.4);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  color: rgba(0, 255, 255, 0.8);
}

.nav-btn:hover {
  background-color: rgba(0, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
  border-color: rgba(0, 255, 255, 0.6);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
  padding: 0.5rem 1rem;
  background: rgba(0, 32, 63, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: rgba(0, 255, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  position: relative;
}

.indicator::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 8px;
  background: rgba(0, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.indicator:hover {
  background-color: rgba(0, 255, 255, 0.4);
}

.indicator:hover::before {
  opacity: 1;
}

.indicator.active {
  background-color: rgba(0, 255, 255, 0.8);
  width: 24px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  border-color: rgba(0, 255, 255, 0.8);
}

.indicator.active::before {
  opacity: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}
</style>