<template>
  <div class="home-page">
    <!-- 焦点图区域 -->
    <div class="featured-section">
      <div style="padding: 15px 30px">
        <FeaturedSlider />
      </div>
    </div>

    <div class="container">
      <!-- 技术栈展示区 -->
      <!-- <div class="tech-showcase-wrapper">
        <h2 class="section-title tech-title">技术栈</h2>
        <div class="tech-showcase">
          <div
            class="tech-item"
            v-for="(tech, index) in techStack"
            :key="index"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="tech-icon" :style="{ backgroundColor: tech.color }">
              <span>{{ tech.icon }}</span>
            </div>
            <span class="tech-name">{{ tech.name }}</span>
            <div class="tech-glow"></div>
          </div>
        </div>
      </div> -->

      <div class="home-content">
        <div>
          <div class="section-header main-section-header"> 
            <h2 class="section-title">最新文章</h2>
            <NuxtLink to="/categories" class="view-all"
              >查看全部 <span class="arrow">→</span></NuxtLink
            >
          </div>
          <div class="articles-grid" v-if="!loading">
              <ArticleCard
                v-for="article in articlesList"
                :key="article.id"
                :article="article"
                class="article-card-wrapper"
              />
            </div>
        </div>
        <div class="content-layout">
          <!-- 侧边栏 -->
          <div class="sidebar-area">
            <Sidebar :profile="profile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册GSAP插件
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
console.log(1111)
// 个人资料数据
const profile = ref({
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  name: "技术博主",
  bio: "专注前端技术分享，热爱Vue和WebGL，探索交互设计与用户体验的无限可能。",
  links: [
    { name: "GitHub", url: "https://github.com" },
    { name: "掘金", url: "https://juejin.cn" },
    { name: "知乎", url: "https://zhihu.com" },
  ],
});

// 技术栈数据
const techStack = ref([
  { name: "Vue", icon: "⚡", color: "#42b883" },
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "Node.js", icon: "🟢", color: "#68a063" },
  { name: "Three.js", icon: "3D", color: "#6b4bb3" },
  { name: "CSS", icon: "🎨", color: "#2965f1" },
  { name: "WebGL", icon: "🌐", color: "#990000" },
  { name: "Nuxt", icon: "N", color: "#00dc82" },
]);


  // 文章列表数据
// 替换后的文章列表数据请求
const loading = ref(true)
const error = ref(null)
const articlesList = ref([])
try {
  const data = await $fetch("/api/articles/blogIndex", {method: "GET"})
  articlesList.value = data.data;
  console.log(articlesList.value, data, '------data')
} catch (err) {
  error.value = err
} finally {
  loading.value = false
}
</script>
<style scoped>
.home-page {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

/* 视差背景 */
.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
      rgba(12, 80, 120, 0.2) 0%,
      rgba(0, 0, 0, 0) 70%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 107, 107, 0.1) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  opacity: 0.7;
  transform: translateZ(-10px) scale(2);
}

.layer-2 {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
  background-size: 100px 100px;
  opacity: 0.3;
  transform: translateZ(-5px) scale(1.5);
}

.layer-3 {
  background: linear-gradient(
    135deg,
    rgba(0, 32, 63, 0.1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(5px);
  transform: translateZ(-2px) scale(1.2);
}

/* 焦点区域 */
.featured-section {
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.animated-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--accent-color)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.animated-title .accent {
  color: var(--accent-color);
  position: relative;
}

.animated-title .accent::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--accent-color);
  border-radius: 5px;
  animation: lineWidth 3s ease-in-out infinite alternate;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 技术栈展示 */
.tech-showcase-wrapper {
}

.tech-title {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
}

.tech-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 33px;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
}

.tech-showcase {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--glass-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--glass-shadow);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.tech-showcase::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  animation-delay: var(--delay);
  position: relative;
  padding: 1.2rem;
  border-radius: var(--radius-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  z-index: 1;
}

.tech-item:hover {
  transform: translateY(-8px);
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0) 60%);
  z-index: 1;
}

.tech-item:hover .tech-icon {
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.tech-name {
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.tech-item:hover .tech-name {
  color: var(--accent-color);
}

.tech-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: -1;
}

.tech-item:hover .tech-glow {
  width: 150px;
  height: 150px;
  opacity: 0.1;
}

/* 主内容区 */
.home-content {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 主内容区2/3，侧边栏1/3 */
  gap: var(--spacing-xl);
  position: relative;
}

.section-title {
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  position: relative;
  padding-bottom: var(--spacing-sm);
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
  transition: width 0.3s ease, background 0.3s ease;
}

.section-title:hover::after {
  width: 100%;
  background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
}

.section-header {
  display: flex;
  height: 90px;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);
  border-bottom: 1px solid rgba(67, 97, 238, 0.1);
  padding-bottom: var(--spacing-md);
}

.view-all {
  font-size: 1rem;
  font-weight: 600;
  height: 30px;
  color: var(--primary-color);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  background-color: rgba(67, 97, 238, 0.1);
}

.view-all:hover {
  color: white;
  transform: translateX(5px);
  background-color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
}

.view-all .arrow {
  transition: transform 0.3s ease;
}

.view-all:hover .arrow {
  transform: translateX(5px);
  color: white;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 主内容区2列 */
  gap: var(--spacing-xl);
  position: relative;
  margin-top: var(--spacing-md);
}

.article-card-wrapper {
  opacity: 1;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.article-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 订阅区域 */
.subscribe-banner {
  margin-top: var(--spacing-xxl);
  padding: var(--spacing-xl);
  background: linear-gradient(
    135deg,
    var(--primary-color),
    rgba(42, 59, 79, 0.8)
  );
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.subscribe-content {
  flex: 1;
  color: white;
  position: relative;
  z-index: 1;
}

.subscribe-content h3 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  color: white;
}

.subscribe-content p {
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.subscribe-form {
  display: flex;
  gap: var(--spacing-sm);
  max-width: 500px;
}

.subscribe-form input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(5px);
}

.subscribe-form input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.subscribe-form button {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: none;
  background: var(--accent-color);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.subscribe-form button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
}

.subscribe-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 0;
}

.subscribe-decoration::before {
  content: "";
  position: absolute;
  top: 50px;
  left: -100px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .home-content {
    grid-template-columns: 1.5fr 1fr; /* 调整比例 */
  }

  .articles-grid {
    grid-template-columns: 1fr; /* 平板上改为单列 */
  }

  .animated-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .home-content {
    grid-template-columns: 1fr; /* 移动端单列布局 */
  }

  .sidebar-area {
    order: -1; /* 侧边栏移到顶部 */
  }

  .animated-title {
    font-size: 2rem;
  }

  .tech-showcase {
    gap: var(--spacing-xs);
    padding: var(--spacing-sm);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .tech-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
    border-radius: 12px;
  }
  
  .tech-name {
    font-size: 0.85rem;
  }
  
  .tech-item {
    padding: 0.8rem;
  }

  .subscribe-banner {
    padding: var(--spacing-lg);
    flex-direction: column;
  }

  .subscribe-form {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .tech-showcase {
    gap: 0.3rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .tech-icon {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
    border-radius: 8px;
  }
  
  .tech-name {
    font-size: 0.75rem;
  }
  
  .tech-item {
    padding: 0.5rem;
  }
  
  .tech-title {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  
  .tech-title::after {
    bottom: -5px;
    width: 50px;
    height: 2px;
  }
}

/* 动画效果 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

@keyframes titleGlow {
  0% {
    text-shadow: 0 0 5px rgba(255, 107, 107, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  }
  100% {
    text-shadow: 0 0 5px rgba(255, 107, 107, 0.3);
  }
}

@keyframes lineWidth {
  0% {
    width: 0;
    left: 50%;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 50%;
  }
}
</style>
