<template>
  <NuxtLink :to="`/articles/${article.id}`" class="article-card">
    <div class="card-content">
      <div class="cover-image-container">
        <img 
          :src="article.coverImage ? 'http://localhost:3000/api' + article.coverImage : imgUrl" 
          :alt="article.title + ' cover'" 
          class="cover-image" 
          loading="lazy"
          width="300" 
          height="220" 
        />
        <div class="overlay">
          <span class="tag" v-for="item in article.tags" :key="item.id" :style="{ backgroundColor: item.tagColor }">
            {{ item.tagName }}
          </span>
        </div>
      </div>
      <div class="content-body">
        <h3 class="title">
          <span class="title-tag" v-for="self in article.categories" :key="self.id">
            {{ self.categoryName }}
          </span>
          {{ article.title }}
        </h3>
        <p class="excerpt" v-if="article.summary">{{ article.summary }}</p>
        <div class="meta-info">
          <div class="left">
            <span class="date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ formatDate(article.createTime) }}
            </span>
          </div>
          <span class="views">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {{ article.readingNum }}次
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const imgUrl = ref('')
imgUrl.value = new URL('/assets/images/cover.webp', import.meta.url)
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
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
  margin-bottom: var(--spacing-xl);
  animation: fadeInUp 0.6s ease-out forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border: 1px solid rgba(67, 97, 238, 0.05);
  height: 100%;
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(67, 97, 238, 0.15);
  border-color: rgba(67, 97, 238, 0.12);
}

.card-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cover-image-container {
  position: relative;
  width: 100%;
  height: 220px; /* Maintain aspect ratio or set fixed height */
  overflow: hidden;
}

.cover-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers the container */
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-flex;
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: white;
  font-weight: 600;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.content-body {
  padding: 1.8rem;
  background: var(--card-bg);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: var(--text-primary);
  font-weight: 700;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.title .title-tag {
  display: inline-flex;
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: var(--text-primary);
  font-weight: 600;
  backdrop-filter: blur(4px);
  background-color: var(--accent-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.article-card:hover .title {
  color: var(--accent-color);
}

.excerpt {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.85rem;
  border-top: 1px solid rgba(67, 97, 238, 0.08);
  padding-top: 1rem;
  margin-top: auto;
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
  background: var(--card-bg);
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