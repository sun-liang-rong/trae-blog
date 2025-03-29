<template>
  <div class="archives-page">
    
    <div class="container">
      <h1 class="page-title">文章归档</h1>
      
      <div class="timeline">
        <div v-for="year in Object.keys(groupedArticles).sort().reverse()" :key="year" class="timeline-year">
          <div class="year-label">{{ year }}</div>
          
          <div v-for="month in Object.keys(groupedArticles[year]).sort().reverse()" :key="`${year}-${month}`" class="timeline-month">
            <div class="month-label">{{ getMonthName(month) }}</div>
            
            <div class="timeline-articles">
              <div v-for="article in groupedArticles[year][month]" :key="article.id" class="timeline-item">
                <NuxtLink :to="`/articles/${article.id}`" class="article-link">
                  <span class="article-date">{{ formatDate(article.date) }}</span>
                  <span class="article-title">{{ article.title }}</span>
                  <span class="article-tag" :style="{ backgroundColor: getTagColor(article.tag) }">
                    {{ article.tag }}
                  </span>
                </NuxtLink>
              </div>
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
}

// 模拟文章数据
const articles = ref([
  {
    id: 1,
    title: 'Nuxt3服务端渲染实践',
    date: '2024-01-15',
    tag: 'Nuxt'
  },
  {
    id: 2,
    title: 'Three.js粒子系统优化',
    date: '2023-12-20',
    tag: 'Three.js'
  },
  {
    id: 3,
    title: '现代CSS布局技巧',
    date: '2023-12-10',
    tag: 'CSS'
  },
  {
    id: 4,
    title: 'Vue3组件设计模式',
    date: '2023-11-25',
    tag: 'Vue'
  }
])

// 按年月分组文章
const groupedArticles = ref({})

onMounted(() => {
  groupArticles()
  
  if (process.client) {
    window.addEventListener('mousemove', handleMouseMove);
    
    // 初始化动画
    gsap.from('.page-title', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
    
    gsap.from('.timeline-item', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
      }
    });
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', handleMouseMove);
  }
})

const groupArticles = () => {
  const grouped = {}
  
  articles.value.forEach(article => {
    const date = new Date(article.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    
    if (!grouped[year]) {
      grouped[year] = {}
    }
    
    if (!grouped[year][month]) {
      grouped[year][month] = []
    }
    
    grouped[year][month].push(article)
  })
  
  groupedArticles.value = grouped
}

// 获取月份名称
const getMonthName = (month) => {
  const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  return months[parseInt(month) - 1]
}

// 格式化日期
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return `${date.getMonth() + 1}月${date.getDate()}日`
}

// 获取标签颜色
const getTagColor = (tag) => {
  const colors = {
    'Nuxt': '#42b883',
    'Three.js': '#6b4bb3',
    'Vue': '#3eaf7c',
    'JavaScript': '#f7df1e',
    'CSS': '#2965f1',
    'HTML': '#e34c26'
  }
  return colors[tag] || '#cccccc'
}
</script>

<style scoped>
.archives-page {
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
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  position: relative;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
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

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--primary-color), transparent);
  opacity: 0.3;
}

.timeline-year {
  margin-bottom: 3rem;
  position: relative;
}

.year-label {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.timeline-month {
  margin-bottom: 2rem;
  position: relative;
}

.month-label {
  text-align: center;
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.timeline-articles {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(67, 97, 238, 0.1);
  box-shadow: var(--card-shadow);
  overflow: hidden;
}

.timeline-item:hover {
  transform: translateY(-3px);
  border-color: rgba(67, 97, 238, 0.2);
  box-shadow: 0 15px 30px rgba(67, 97, 238, 0.1);
}

.article-link {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: var(--text-primary);
  text-decoration: none;
  gap: 1rem;
}

.article-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
  min-width: 80px;
}

.article-title {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
}

.article-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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

@media (max-width: 768px) {
  .timeline::before {
    left: 2rem;
  }
  
  .timeline-articles {
    padding-left: 3rem;
  }
  
  .article-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .article-date {
    min-width: auto;
  }
}
</style>