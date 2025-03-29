<template>
  <div class="featured-slider" v-if="!loading">
    <div class="slider-container" ref="sliderContainer">
      <div 
        v-for="(article, index) in featuredArticles" 
        :key="article.id"
        class="slide"
        :class="{ 'active': currentIndex === index }"
        :style="{ backgroundImage: `url(${'/api' + article.coverImage})` }"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <div class="tag-container">
              <span 
                v-for="tag in article.tags"
                :key="tag.id"
                class="tag" 
                :style="{ backgroundColor: tag.tagColor }" 
                @click.prevent="navigateToCategory(tag.tagName)"
              >
                {{ tag.tagName }}
              </span>
            </div>
            <h2 class="title">{{ article.title }}</h2>
            <p class="excerpt">{{ article.summary }}</p>
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
import { ref,onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const props = defineProps({
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
const featuredArticles = ref([])
const loading = ref(true)
$fetch('/api/articles/carousel', {
  method: 'GET'
})
  .then(res => {
    featuredArticles.value = res.data
  })
  .catch(data => {
    console.error('Error:', data)
  }).finally(() => {
    loading.value = false
  })
// carousel
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % featuredArticles.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + featuredArticles.value.length) % featuredArticles.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.autoplay && featuredArticles.value.length > 1) {
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
  height: 500px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0.9) translateZ(-100px);
  filter: brightness(0.8) blur(5px);
}

.slide.active {
  opacity: 1;
  transform: scale(1) translateZ(0);
  z-index: 1;
  filter: brightness(1) blur(0);
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, 
    rgba(0,0,0,0.1) 0%, 
    rgba(0,0,0,0.4) 50%,
    rgba(0,0,0,0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.slide-content {
  max-width: 800px;
  text-align: center;
  color: white;
  transform: translateY(30px);
  opacity: 0;
  transition: transform 0.6s ease 0.2s, opacity 0.6s ease 0.2s;
}

.slide.active .slide-content {
  transform: translateY(0);
  opacity: 1;
}

.tag-container {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.tag {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0) 70%);
  z-index: -1;
}

.tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  font-weight: 800;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.excerpt {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  opacity: 0.9;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.read-btn {
  background: linear-gradient(135deg, var(--accent-color), #ff8f8f);
  color: white;
  padding: 0.9rem 2.2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: none;
}

.read-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.4), rgba(255,255,255,0.1));
  transition: left 0.6s ease;
  z-index: -1;
}

.read-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255, 107, 107, 0.4);
}

.read-btn:hover::before {
  left: 100%;
}

/* 导航按钮 */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* 指示器 */
.indicators {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator.active {
  background-color: white;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .featured-slider {
    height: 450px;
  }
  
  .title {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .featured-slider {
    height: 380px;
    border-radius: var(--radius-md);
  }
  
  .title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .excerpt {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 85%;
    line-height: 1.6;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  
  .slide-content {
    max-width: 600px;
    padding: 0 1rem;
  }
  
  .slide-overlay {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .featured-slider {
    height: 300px;
    border-radius: var(--radius-md);
    margin-bottom: 1.5rem;
  }
  
  .title {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }
  
  .excerpt {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    max-width: 90%;
  }
  
  .read-btn {
    padding: 0.6rem 1.3rem;
    font-size: 0.85rem;
  }
  
  .nav-btn {
    width: 35px;
    height: 35px;
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  .tag {
    padding: 0.4rem 0.9rem;
    font-size: 0.8rem;
  }
  
  .indicators {
    bottom: 15px;
    gap: 8px;
  }
  
  .indicator {
    width: 8px;
    height: 8px;
  }
}
</style>