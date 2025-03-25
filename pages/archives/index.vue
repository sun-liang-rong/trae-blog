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
import { ref, onMounted } from 'vue'

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
  background: linear-gradient(135deg, rgba(0, 32, 63, 0.95), rgba(0, 32, 63, 0.85));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  color: rgba(0, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  letter-spacing: 2px;
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
  background: linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.3), transparent);
  opacity: 0.5;
}

.timeline-year {
  margin-bottom: 3rem;
  position: relative;
}

.year-label {
  text-align: center;
  font-size: 2rem;
  color: rgba(0, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-weight: 700;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
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
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.timeline-articles {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.timeline-item:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.article-link {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  gap: 1rem;
}

.article-date {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
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