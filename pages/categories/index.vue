<template>
  <div class="categories-page">
    <div class="container">
      <h1 class="page-title">文章分类</h1>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="card-content" :style="{ '--accent-color': category.color }">
            <div class="category-icon">
              <component :is="category.icon" />
            </div>
            <h2 class="category-name">{{ category.name }}</h2>
            <p class="article-count">{{ category.count }} 篇文章</p>
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
import { ref } from 'vue'

// 模拟分类数据
const categories = ref([
  {
    name: 'Nuxt.js',
    slug: 'nuxt',
    count: 12,
    description: '探索Nuxt.js的服务端渲染、静态生成等特性',
    color: '#42b883',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525 2.006c-.685-.133-1.365-.133-2.05 0L3.255 3.687c-.51.1-.93.43-1.144.897-.215.47-.215 1.007 0 1.476.214.47.634.798 1.144.897l7.22 1.681c.685.133 1.365.133 2.05 0l7.22-1.681c.51-.1.93-.43 1.144-.897.215-.47.215-1.007 0-1.476-.214-.47-.634-.798-1.144-.897l-7.22-1.681z"/>
          <path d="M3.145 8.297c-.51.1-.93.43-1.144.897-.215.47-.215 1.007 0 1.476.214.47.634.798 1.144.897l7.22 1.681c.685.133 1.365.133 2.05 0l7.22-1.681c.51-.1.93-.43 1.144-.897.215-.47.215-1.007 0-1.476-.214-.47-.634-.798-1.144-.897l-7.22-1.681c-.685-.133-1.365-.133-2.05 0l-7.22 1.681z"/>
          <path d="M3.145 13.907c-.51.1-.93.43-1.144.897-.215.47-.215 1.007 0 1.476.214.47.634.798 1.144.897l7.22 1.681c.685.133 1.365.133 2.05 0l7.22-1.681c.51-.1.93-.43 1.144-.897.215-.47.215-1.007 0-1.476-.214-.47-.634-.798-1.144-.897l-7.22-1.681c-.685-.133-1.365-.133-2.05 0l-7.22 1.681z"/>
        </svg>
      `
    })
  },
  {
    name: 'Three.js',
    slug: 'threejs',
    count: 8,
    description: '3D图形编程与WebGL技术实践',
    color: '#6b4bb3',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l10 6v8l-10 6-10-6V8l10-6z"/>
          <path d="M12 22v-8"/>
          <path d="M22 8l-10 6-10-6"/>
        </svg>
      `
    })
  },
  {
    name: 'Vue.js',
    slug: 'vue',
    count: 15,
    description: 'Vue.js框架开发技巧与最佳实践',
    color: '#3eaf7c',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.027 3l-7.027 12.013L4.973 3H0l12 20.186L24 3h-4.973z"/>
        </svg>
      `
    })
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    count: 20,
    description: 'JavaScript语言特性与高级编程技巧',
    color: '#f7df1e',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      `
    })
  },
  {
    name: 'CSS',
    slug: 'css',
    count: 10,
    description: '现代CSS布局与动画技巧',
    color: '#2965f1',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"/>
        </svg>
      `
    })
  },
  {
    name: 'HTML',
    slug: 'html',
    count: 6,
    description: 'HTML5新特性与语义化标签应用',
    color: '#e34c26',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"/>
        </svg>
      `
    })
  }
])
</script>

<style scoped>
.categories-page {
  padding: 2rem 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(0, 32, 63, 0.95), rgba(0, 32, 63, 0.8));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  position: relative;
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
  background: rgba(0, 32, 63, 0.8);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(var(--accent-color), 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(var(--accent-color), 0.1);
  transform-style: preserve-3d;
  transform: translateZ(0);
}

.card-content:hover {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 20px 40px rgba(var(--accent-color), 0.2);
  border-color: rgba(var(--accent-color), 0.4);
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
  width: 48px;
  height: 48px;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
  filter: drop-shadow(0 0 10px rgba(var(--accent-color), 0.5));
}

.category-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, white, var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.article-count {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.category-desc {
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.view-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.view-more svg {
  transition: transform 0.3s;
}

.view-more:hover {
  color: white;
  text-shadow: 0 0 10px var(--accent-color);
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
</style>