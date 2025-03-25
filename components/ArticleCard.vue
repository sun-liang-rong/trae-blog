<template>
  <NuxtLink :to="`/articles/${article.id}`" class="article-card">
    <div class="card-content">
      <div class="cover-image" :style="{ backgroundImage: `url(${article.coverImage || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'})` }">
        <div class="overlay">
          <span class="tag" :style="{ backgroundColor: getTagColor(article.tag) }">
            {{ article.tag }}
          </span>
        </div>
      </div>
      <div class="content-body">
        <h3 class="title">{{ article.title }}</h3>
        <p class="excerpt" v-if="article.excerpt">{{ article.excerpt }}</p>
        <div class="meta-info">
          <div class="left">
            <span class="date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ article.date }}
            </span>
            <span class="read-time" v-if="article.readTime">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {{ article.readTime }}分钟
            </span>
          </div>
          <span class="views">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {{ article.views }}次
          </span>
        </div>
      </div>
      <button class="bookmark-btn" @click.prevent="toggleBookmark" :class="{ 'bookmarked': isBookmarked }" aria-label="收藏文章">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const isBookmarked = ref(false)

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
  // 这里可以添加实际的收藏逻辑
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
</script>

<style scoped>
.article-card {
  position: relative;
  display: block;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
  color: var(--text-primary);
  box-shadow: var(--card-shadow);
  margin-bottom: var(--spacing-lg);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card-content {
  position: relative;
  height: 100%;
}

.cover-image {
  position: relative;
  width: 100%;
  height: 240px;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-card:hover .cover-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
}

.tag {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  color: white;
  font-weight: 600;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.content-body {
  padding: 1.5rem;
  background: var(--card-bg);
}

.title {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: var(--text-primary);
  font-weight: 700;
  transition: color 0.3s ease;
}

.article-card:hover .title {
  color: var(--accent-color);
}

.excerpt {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 1rem;
  margin-top: 1rem;
}

.left {
  display: flex;
  gap: 1.2rem;
}

.date, .read-time, .views {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.date svg, .read-time svg, .views svg {
  opacity: 0.7;
}

.bookmark-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.bookmark-btn:hover {
  transform: scale(1.1);
  background: white;
  color: var(--accent-color);
}

.bookmark-btn.bookmarked {
  background: var(--accent-color);
  color: white;
}

.bookmark-btn.bookmarked svg {
  fill: white;
}

@media (max-width: 768px) {
  .cover-image {
    height: 200px;
  }
  
  .content-body {
    padding: 1.2rem;
  }
  
  .title {
    font-size: 1.2rem;
  }
  
  .excerpt {
    font-size: 0.95rem;
    -webkit-line-clamp: 2;
    margin-bottom: 1rem;
  }
  
  .meta-info {
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  .left {
    width: 100%;
    justify-content: space-between;
  }
}
</style>