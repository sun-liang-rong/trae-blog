<template>
  <div class="categories-page">
    <div class="container">
      <h1 class="page-title">文章分类</h1>
      <div class="categories-grid" v-if="!loading">
        <div v-for="(category, index) in categories" :key="category.id" class="category-card" :style="{ '--index': index }">
          <div class="card-content" :style="{ '--accent-color': category.tagColor }">
            <div class="category-icon">
              <!-- <component :is="category.icon" /> -->
            </div>
            <h2 class="category-name">{{ category.tagName }}</h2>
            <p class="article-count">{{ category.articles.length }} 篇文章</p>
            <p class="category-desc">{{ category.description }}</p>
            <NuxtLink :to="`/categories/${category.slug}`" class="view-more">
              浏览文章
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册GSAP插件
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

// 视差效果处理
const handleMouseMove = (e) => {
  if (!process.client) return;
  
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  parallaxLayers.forEach((layer, index) => {
    const depth = (index + 1) * 0.1;
    const moveX = mouseX * depth * 50;
    const moveY = mouseY * depth * 50;
    layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  
  // 卡片光效
  const cards = document.querySelectorAll('.card-content');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
};

// 生命周期钩子
onMounted(() => {
  if (process.client) {
    window.addEventListener('mousemove', handleMouseMove);
    
    // 初始化动画
    gsap.from('.page-title', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', handleMouseMove);
  }
});

// 替换后的文章列表数据请求
const loading = ref(true)
const error = ref(null)
const categories = ref([])
try {
  const res = await $fetch("/api/tags/blogTagAndarticle", {method: "GET"})
  categories.value = res.data;
  console.log(articlesList.value, res, '------data')
} catch (err) {
  error.value = err
} finally {
  loading.value = false
}
</script>

<style scoped>
.categories-page {
  padding: 2rem 0;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  position: relative;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  border-radius: 2px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.category-card {
  position: relative;
  perspective: 1000px;
}

.card-content {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  color: var(--text-primary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(67, 97, 238, 0.1);
  box-shadow: var(--card-shadow);
  transform-style: preserve-3d;
  transform: translateZ(0);
}

.card-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(67, 97, 238, 0.1);
  border-color: rgba(67, 97, 238, 0.2);
}

.card-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.card-content:hover::before {
  opacity: 1;
}

.category-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background-color: rgba(var(--accent-color), 0.1);
  transition: all 0.3s ease;
}

.card-content:hover .category-icon {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.category-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.article-count {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.category-desc {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.view-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.view-more svg {
  transition: transform 0.3s;
}

.view-more:hover {
  color: var(--accent-color);
}

.view-more:hover svg {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
/* 视差背景 */
.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  will-change: transform;
  transition: transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.layer-1 {
  background: radial-gradient(
      circle at 80% 20%,
      rgba(67, 97, 238, 0.1) 0%,
      rgba(0, 0, 0, 0) 70%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 107, 107, 0.05) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  opacity: 0.7;
}

.layer-2 {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(67,97,238,0.05)"/></svg>');
  background-size: 100px 100px;
  opacity: 0.3;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-card {
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}
</style>