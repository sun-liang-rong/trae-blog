<template>
  <div class="category-articles-page">
    <div class="container">
      <div>
        <div class="articles-section">
          <div class="section-header">
            <h2 class="section-title">文章列表</h2>
            <div class="sort-options">
              <button 
                class="sort-btn" 
                :class="{ 'active': sortBy === 'newest' }" 
                @click="sortArticles('newest')"
              >
                最新
              </button>
              <button 
                class="sort-btn" 
                :class="{ 'active': sortBy === 'popular' }" 
                @click="sortArticles('popular')"
              >
                热门
              </button>
            </div>
          </div>
          <div class="articles-grid" v-if="articles.length > 0">
            <ArticleCard
              v-for="article in articles"
              :key="article.id"
              :article="article"
              class="article-card-wrapper"
            />
          </div>
          <div class="empty-state" v-else>
            <div class="empty-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <p class="empty-text">该分类下暂无文章</p>
            <NuxtLink to="/" class="back-btn">返回首页</NuxtLink>
          </div>
        </div>
      </div>

      <!-- 加载状态 -->
      <div class="loading-state" v-if="loading">
        <div class="spinner"></div>
        <p>加载中...</p>
      </div>

      <!-- 错误状态 -->
      <div class="error-state" v-if="error && !loading">
        <div class="error-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h2 class="error-title">出错了</h2>
        <p class="error-message">无法加载该分类的文章，请稍后再试</p>
        <NuxtLink to="/categories" class="back-btn">返回分类页</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const error = ref(null)
const articles = ref([])

// 分页相关 (未实现)
// const currentPage = ref(1)
// const pageSize = 9 // 每页显示的文章数量
const sortBy = ref('newest') // 排序方式：newest 或 popular

// 获取分类和文章数据
async function fetchCategoryData() {
  loading.value = true
  error.value = null
  
  try {
    // 获取分类信息和该分类下的文章
    const id = route.query.id
    const res = await $fetch(`/api/tags/findTag?id=${id}`, {
      method: 'GET'
    })
    
    if (res.data) {
      articles.value = res.data || []
    } else {
      error.value = new Error('未找到该分类')
    }
  } catch (err) {
    console.error('获取分类文章失败:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

// 初始加载
onMounted(() => {
  fetchCategoryData()
})

// 排序文章
function sortArticles(type) {
  sortBy.value = type
  
  if (type === 'newest') {
    articles.value.sort((a, b) => {
      return new Date(b.createTime) - new Date(a.createTime)
    })
  } else if (type === 'popular') {
    articles.value.sort((a, b) => {
      return b.readingNum - a.readingNum
    })
  }
}
</script>

<style scoped>
.category-articles-page {
  padding: 2rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.category-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(var(--accent-color, 67, 97, 238), 0.1), rgba(var(--accent-color, 67, 97, 238), 0.05));
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.category-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-color, #4361ee), transparent);
}

.category-icon {
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.category-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
}

.category-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.article-count {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--text-secondary);
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color, #4361ee);
  color: white;
  border-radius: 20px;
  padding: 0.2rem 0.8rem;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.articles-section {
  margin-top: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  font-weight: 700;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--accent-color, #4361ee);
  border-radius: 2px;
}

.sort-options {
  display: flex;
  gap: 0.5rem;
}

.sort-btn {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.sort-btn.active {
  background: var(--accent-color, #4361ee);
  color: white;
  border-color: var(--accent-color, #4361ee);
}

.sort-btn:hover:not(.active) {
  background: rgba(67, 97, 238, 0.1);
  border-color: var(--accent-color, #4361ee);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.article-card-wrapper {
  height: 100%;
}

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 1rem;
}

.page-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-primary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.page-btn:hover:not(:disabled) {
  background: rgba(67, 97, 238, 0.1);
  border-color: var(--accent-color, #4361ee);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-primary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.page-number.active {
  background: var(--accent-color, #4361ee);
  color: white;
  border-color: var(--accent-color, #4361ee);
}

.page-number:hover:not(.active) {
  background: rgba(67, 97, 238, 0.1);
  border-color: var(--accent-color, #4361ee);
}

/* 加载状态 */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(67, 97, 238, 0.3);
  border-radius: 50%;
  border-top-color: var(--accent-color, #4361ee);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 错误状态 */
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: 2rem;
}

.error-icon {
  margin-bottom: 1.5rem;
  color: var(--error-color, #e63946);
}

.error-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--card-shadow);
}

.empty-icon {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  opacity: 0.5;
}

.empty-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  background: var(--accent-color, #4361ee);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(67, 97, 238, 0.2);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(67, 97, 238, 0.3);
}

/* 响应式样式 */
@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .category-title {
    font-size: 2rem;
  }
  
  .pagination {
    flex-wrap: wrap;
  }
}
</style>