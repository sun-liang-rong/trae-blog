<template>
  <div class="categories-page">
    <div class="container">
      <h1 class="page-title">文章分类</h1>
      <div class="categories-grid" v-if="!loading">
        <div v-for="(category, index) in categories" :key="category.id" class="category-card" :style="{ '--index': index }">
          <div class="card-content" :style="{ '--accent-color': category.tagColor, '--gradient-start': getGradientColors(category.tagColor).start, '--gradient-end': getGradientColors(category.tagColor).end }">
            <div class="category-icon">
              <!-- <component :is="category.icon" /> -->
              <div class="icon-placeholder" :style="{ backgroundColor: category.tagColor }">
                {{ category.tagName.toUpperCase() }}
              </div>
            </div>
            <div class="card-body">
              <h2 class="category-name">{{ category.tagName }}</h2>
              <p class="article-count">
                <span class="count-badge">{{ category.articles.length }}</span> 篇文章
              </p>
              <p class="category-desc">{{ category.description }}</p>
              <NuxtLink :to="`/categories/detail?id=${category.id}`" class="view-more">
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

// 生成渐变颜色函数
const getGradientColors = (baseColor) => {
  // 如果没有颜色，返回默认颜色
  if (!baseColor) {
    return {
      start: 'rgba(67, 97, 238, 0.8)',
      end: 'rgba(58, 12, 163, 0.6)'
    };
  }
  
  // 将HEX颜色转换为RGB
  const hexToRgb = (hex) => {
    // 移除#号如果存在
    hex = hex.replace('#', '');
    
    // 处理简写形式 (#RGB)
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
  };
  
  // 调整亮度
  const adjustBrightness = (rgb, factor) => {
    return {
      r: Math.min(255, Math.max(0, Math.round(rgb.r * factor))),
      g: Math.min(255, Math.max(0, Math.round(rgb.g * factor))),
      b: Math.min(255, Math.max(0, Math.round(rgb.b * factor)))
    };
  };
  
  // 将RGB转换为rgba字符串
  const rgbToRgba = (rgb, alpha) => {
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  };
  
  // 获取基础RGB颜色
  const baseRgb = hexToRgb(baseColor);
  
  // 创建渐变的开始和结束颜色
  const startColor = adjustBrightness(baseRgb, 1.2); // 稍微亮一点
  const endColor = adjustBrightness(baseRgb, 0.7);   // 稍微暗一点
  
  return {
    start: rgbToRgba(startColor, 0.8),
    end: rgbToRgba(endColor, 0.6)
  };
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
    
    // 卡片动画
    gsap.from('.category-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
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
  position: relative;
  background: linear-gradient(135deg, var(--gradient-start, rgba(67, 97, 238, 0.8)), var(--gradient-end, rgba(58, 12, 163, 0.6)));
  border-radius: var(--radius-lg);
  padding: 2rem;
  color: #fff;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transform: translateZ(0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: inherit;
  opacity: 0.3;
  z-index: 0;
}

.card-content:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 1;
}

.card-content:hover::before {
  opacity: 1;
}

.card-body {
  position: relative;
  z-index: 2;
  flex: 1;
}

.category-icon {
  position: relative;
  height: 60px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 15px;
  z-index: 2;
}

.icon-placeholder {
  padding: 5px 15px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card-content:hover .category-icon {
  transform: scale(1.1) translateY(-5px);
}

.category-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.article-count {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.2rem 0.8rem;
  font-weight: 600;
  font-size: 0.85rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.category-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.view-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  margin-top: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.view-more svg {
  transition: transform 0.3s;
}

.view-more:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
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