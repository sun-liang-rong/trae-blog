<template>
  <div class="sidebar">
    <!-- 个人简介模块 -->
    <div class="profile-card card">
      <img :src="profile.avatar" class="avatar" alt="Profile Avatar" />
      <h2 class="name">{{ profile.name }}</h2>
      <p class="bio">{{ profile.bio }}</p>
      <div class="social-links">
        <a v-for="link in profile.links" :key="link.name" :href="link.url" target="_blank" class="social-link">
          {{ link.name }}
        </a>
      </div>
    </div>
    
    <!-- 热门标签云 -->
    <div class="tags-card card">
      <h3 class="card-title">热门标签</h3>
      <div class="tags-cloud" v-if="!loading">
        <a 
          v-for="tag in tagsList" 
          :key="tag.id" 
          href="#" 
          class="tag-item"
          :style="{ backgroundColor: tag.tagColor }"
        >
          {{ tag.tagName }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  profile: {
    type: Object,
    default: () => ({
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      name: '技术博主',
      bio: '专注前端技术分享，热爱Vue和WebGL，探索交互设计与用户体验的无限可能。',
      links: [
        { name: 'GitHub', url: 'https://github.com' },
        { name: '掘金', url: 'https://juejin.cn' },
        { name: '知乎', url: 'https://zhihu.com' }
      ]
    })
  }
})

const tags = ref([
  { name: 'Nuxt', count: 12, size: 1.4 },
  { name: 'Vue', count: 18, size: 1.6 },
  { name: 'Three.js', count: 8, size: 1.2 },
  { name: 'JavaScript', count: 24, size: 1.8 },
  { name: 'CSS', count: 15, size: 1.5 },
  { name: 'HTML', count: 10, size: 1.3 },
  { name: 'WebGL', count: 6, size: 1.1 },
  { name: 'TypeScript', count: 14, size: 1.4 }
])

const tagsList = ref([]);
const loading = ref(true);
const error = ref(null);
try {
  const response = await $fetch("/api/tags/blogIndex", {
    method: "GET"
  });
  console.log(response);
  if (response?.code === 200) {
    tagsList.value = response.data;
  }
} catch (err) {
  error.value = err;
  console.error("获取标签列表失败:", err);
} finally {
  loading.value = false;
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: 1.8rem;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(67, 97, 238, 0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(67, 97, 238, 0.12);
  border-color: rgba(67, 97, 238, 0.1);
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  position: relative;
  padding-bottom: 0.5rem;
  text-align: center;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 3px;
}

/* 个人简介卡片 */
.profile-card {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  height: 100px;
  background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(255, 107, 107, 0.1));
  transform: rotate(-5deg);
  z-index: 0;
}

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-bottom: 1.2rem;
  border: 3px solid var(--accent-color);
  padding: 4px;
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.2);
  transition: transform 0.3s ease;
}

.profile-card:hover .avatar {
  transform: scale(1.05);
}

.name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.bio {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
  padding: 0 0.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.social-link {
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  background-color: rgba(67, 97, 238, 0.08);
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.social-link:hover {
  background-color: var(--accent-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.2);
}

/* 标签云 */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: center;
}

.tag-item {
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.tag-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.tag-item:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.tag-item:hover::before {
  transform: translateX(0);
}

/* 评论列表 */
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.comment-item {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.comment-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.75rem;
}

.comment-meta {
  display: flex;
  flex-direction: column;
}

.comment-author {
  font-weight: 600;
  color: var(--primary-color);
}

.comment-date {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.comment-content {
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: var(--text-primary);
}

.comment-article {
  font-size: 0.85rem;
  color: var(--accent-color);
}

/* 订阅卡片 */
.subscribe-card {
  text-align: center;
  background: linear-gradient(135deg, var(--primary-color), #3d5a7d);
  color: white;
}

.subscribe-title {
  color: white;
  margin-bottom: 0.5rem;
}

.subscribe-title::after {
  background-color: white;
}

.subscribe-text {
  margin-bottom: 1.25rem;
  opacity: 0.9;
}

.subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subscribe-input {
  padding: 0.75rem 1rem;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.subscribe-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.subscribe-btn {
  background-color: white;
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .profile-card, .tags-card, .comments-card, .subscribe-card {
    width: calc(50% - 0.5rem);
  }
}

@media (max-width: 576px) {
  .sidebar {
    flex-direction: column;
  }
  
  .profile-card, .tags-card, .comments-card, .subscribe-card {
    width: 100%;
  }
}
</style>