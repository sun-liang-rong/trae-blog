<template>
  <div class="article-detail">
    <!-- 阅读进度条 -->
    <div class="reading-progress" :style="{ width: readingProgress + '%' }"></div>
    
    <div class="container">
      <!-- 返回导航按钮 -->
      <button class="back-button" @click="navigateBack">← 返回列表</button>
      
      <div class="article-main">
        <!-- 文章标题区 -->
        <h1 class="title">{{ article.title }}</h1>
        
        <!-- 元信息展示区 -->
        <div class="meta">
          <div class="meta-tags">
            <span class="tag" v-for="item in tags" :key="item.id" :style="{ backgroundColor: item.tagC }">{{ item.tagName }}</span>
          </div>
          <div class="meta-info">
            <span class="date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ formatDate(article.createTime0) }}
            </span>
            <!-- <span class="read-time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {{ article.readTime }}分钟阅读
            </span> -->
            <span class="views">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {{ article.readingNum }}次阅读
            </span>
          </div>
        </div>

        <!-- 文章内容渲染区 -->
        <div v-if="!loading" class="content" ref="contentRef" v-html="article.content">
        </div>
        
        <!-- 分享按钮组 -->
        <div class="share-buttons">
          <button class="share-btn" aria-label="分享到微信">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </button>
          <button class="share-btn" aria-label="分享到微博">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </button>
          <button class="share-btn" aria-label="复制链接">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </button>
        </div>
        
        <!-- 上一篇/下一篇导航 -->
        <div class="article-navigation">
          <NuxtLink v-if="prevArticle" :to="`/articles/${prevArticle.id}`" class="nav-link prev">
            <span class="nav-direction">← 上一篇</span>
            <span class="nav-title">{{ prevArticle.title }}</span>
          </NuxtLink>
          <div v-else class="nav-link disabled"></div>
          
          <NuxtLink v-if="nextArticle" :to="`/articles/${nextArticle.id}`" class="nav-link next">
            <span class="nav-direction">下一篇 →</span>
            <span class="nav-title">{{ nextArticle.title }}</span>
          </NuxtLink>
          <div v-else class="nav-link disabled"></div>
        </div>
      </div>
      
      <!-- 相关文章推荐 -->
      <div class="related-articles">
        <h3 class="section-title">相关推荐</h3>
        <div class="related-grid">
          <div v-for="(relatedArticle, index) in relatedArticles" :key="index" class="related-card">
            <NuxtLink :to="`/articles/${relatedArticle.id}`" class="related-link">
              <div class="related-image" v-if="relatedArticle.coverImage">
                <img :src="relatedArticle.coverImage" :alt="relatedArticle.title" />
              </div>
              <h4 class="related-title">{{ relatedArticle.title }}</h4>
              <span class="related-tag" :style="{ backgroundColor: getTagColor(relatedArticle.tag) }">
                {{ relatedArticle.tag }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css' // 代码高亮的样式
import dayjs from 'dayjs'
const route = useRoute()
const router = useRouter()
const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}
// 初始化高亮库
hljs.configure({
  ignoreUnescapedHTML: true, // 避免高亮库与 marked 的 sanitize 冲突
  languages: ['javascript', 'html', 'css'] // 预加载语言
});
// 文章数据
const article = ref({})
const loading = ref(true)
  $fetch("/api/articles/detail?articleId=" + route.params.id, {
    method: "GET"
  }).then((res) => {
    if (res?.code === 200) {
      console.log(res, 'res')
    hljs.initHighlighting();
    // 给所有的code标签添加类名 
    const render = new marked.Renderer()

    render.code = function (code, language) {
      // 高亮代码块 
      console.log(code, language, '1code')
      const validLanguage = hljs.getLanguage(code.lang)? code.lang : 'plaintext'
      // 生成唯一 ID（用于多代码块场景）
      const uniqueId = 'code-' + Math.random().toString(36).substr(2, 9);
      const highlighted = hljs.highlight(validLanguage, code.text).value;
      
      return `
      <div class="code-block-wrapper">
        <div class="copy-button" id="${'btn-' + uniqueId}" onclick="copyCode('${uniqueId}')">复制</div>
        <pre id="${uniqueId}" class="hljs ${validLanguage}">${highlighted}</pre>
      </div>
      `
    }
    marked.setOptions({
      highlight: function (code) {
        console.log(code, 'code')
          return hljs.highlightAuto(code).value
      },
      renderer: render,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      
    });
    article.value = res.data;
    article.value.content = marked(article.value.content)
  }
  }).finally(() => {
    loading.value = false
  })

// 阅读进度跟踪
const readingProgress = ref(0)
const contentRef = ref(null)
const isScrolled = ref(false)
const activeHeading = ref(0)


// 上一篇/下一篇文章
const prevArticle = ref({
  id: parseInt(route.params.id) - 1 > 0 ? parseInt(route.params.id) - 1 : null,
  title: '上一篇文章标题'
})

const nextArticle = ref({
  id: parseInt(route.params.id) + 1,
  title: '下一篇文章标题'
})

// 相关文章推荐
const relatedArticles = ref([
  {
    id: 3,
    title: '现代CSS布局技巧',
    tag: 'CSS',
    coverImage: '/images/featured-css.jpg'
  },
  {
    id: 4,
    title: 'Vue3组合式API最佳实践',
    tag: 'Vue',
    coverImage: '/images/vue3-api.jpg'
  },
  {
    id: 5,
    title: 'JavaScript异步编程进阶',
    tag: 'JavaScript',
    coverImage: '/images/js-async.jpg'
  }
])

// 返回上一页
const navigateBack = () => {
  // 返回上一页
  router.go(-1)
}

// 获取标签颜色
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

// 平滑滚动到指定标题
const scrollToHeading = (index) => {
  const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  if (headingElements[index]) {
    const targetPosition = headingElements[index].offsetTop - 100
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

// 监听滚动事件
const handleScroll = () => {
  // 更新阅读进度
  if (contentRef.value) {
    const scrolled = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    readingProgress.value = Math.min(Math.round((scrolled / maxScroll) * 100), 100)
  }
  
  // 更新目录固定状态
  isScrolled.value = window.scrollY > 100
  
  // 更新当前活跃标题
  const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  if (headingElements.length) {
    let activeIndex = -1
    const scrollPosition = window.scrollY + 100 // 考虑100px的偏移量
    
    for (let i = 0; i < headingElements.length; i++) {
      const element = headingElements[i]
      const elementTop = element.offsetTop
      const nextElement = headingElements[i + 1]
      const nextElementTop = nextElement ? nextElement.offsetTop : document.documentElement.scrollHeight
      
      if (scrollPosition >= elementTop && scrollPosition < nextElementTop) {
        activeIndex = i
        break
      }
    }
    
    if (activeIndex !== -1) {
      activeHeading.value = activeIndex
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  
  // 添加页面进入动画
  gsap.from('.article-main', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  })
  
  gsap.from('.table-of-contents', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 文章页整体布局 */
.article-detail {
  position: relative;
  width: 100%;
}

/* 阅读进度条 */
.reading-progress {
  position: fixed;
  top: 70px; /* 导航栏高度 */
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  z-index: 90;
  transition: width 0.2s ease;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 1px 8px rgba(67, 97, 238, 0.3);
}

/* 主内容区 */
.article-main {
  max-width: 800px;
  margin: 0 auto;
}

/* 文章标题 */
.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  line-height: 1.2;
}

/* 元信息区 */
.meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  box-shadow: 0 4px 15px rgba(67, 97, 238, 0.05);
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.tag {
  display: inline-flex;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-fast);
}

.tag:hover {
  transform: translateY(-2px);
}

.date, .read-time, .views {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 文章内容 */
.content {
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
}

.content p {
  margin-bottom: var(--spacing-md);
}

/* 返回按钮 */
.back-button {
  margin-top: var(--spacing-lg);
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
}

.back-button:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: var(--card-shadow);
}

/* 分享按钮组 */
.share-buttons {
  display: flex;
  gap: 1rem;
  margin: var(--spacing-lg) 0;
}

.share-btn {
  background-color: var(--card-bg);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  box-shadow: var(--card-shadow);
  transition: all var(--transition-normal);
}

.share-btn:hover {
  transform: translateY(-3px);
  color: var(--accent-color);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 文章导航 */
.article-navigation {
  display: flex;
  justify-content: space-between;
  margin: var(--spacing-xl) 0;
  gap: var(--spacing-md);
}

.nav-link {
  flex: 1;
  background-color: var(--card-bg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--card-shadow);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
}

.nav-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.nav-direction {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.nav-title {
  font-weight: 600;
  color: var(--primary-color);
}

.nav-link.prev {
  text-align: left;
}

.nav-link.next {
  text-align: right;
  align-items: flex-end;
}

.nav-link.disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* 相关文章推荐 */
.related-articles {
  margin: var(--spacing-xxl) 0;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-lg);
  position: relative;
  padding-bottom: var(--spacing-sm);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 3px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.related-card {
  background: linear-gradient(135deg, var(--card-bg) 0%, rgba(var(--primary-rgb), 0.1) 100%);
  border: 1px solid rgba(var(--primary-rgb), 0.1);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.related-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(var(--accent-rgb), 0.15));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.related-card:hover {
  transform: translateY(-8px) rotateX(5deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.related-card:hover::before {
  opacity: 1;
}

.related-link {
  display: block;
  text-decoration: none;
  color: var(--text-primary);
  position: relative;
}

.related-image {
  height: 180px;
  overflow: hidden;
  position: relative;
}

.related-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.related-card:hover .related-image img {
  transform: scale(1.08) translateY(-2%);
}

.related-card:hover .related-image::after {
  opacity: 1;
}

.related-title {
  padding: var(--spacing-md);
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: transform 0.3s ease;
}

.related-card:hover .related-title {
  transform: translateY(-2px);
}

.related-tag {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: white;
  font-weight: 600;
  backdrop-filter: blur(4px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: translateZ(20px);
  transition: transform 0.3s ease;
}

.related-card:hover .related-tag {
  transform: translateZ(30px);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .article-navigation {
    flex-direction: column;
  }
}
</style>