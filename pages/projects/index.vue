<template>
  <div class="projects-page">
    <div class="container">
      <h1 class="page-title">个人项目</h1>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="card-content">
            <div class="project-header">
              <h2 class="project-title">{{ project.name }}</h2>
              <div class="project-links">
                <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  预览
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" class="project-link github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech-stack">
              <span v-for="tech in project.techStack" :key="tech" class="tech-tag" :style="{ backgroundColor: getTechColor(tech) }">
                {{ tech }}
              </span>
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
  
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
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
    
    // 项目卡片动画
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1 * index,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      });
    });
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', handleMouseMove);
  }
});

// 模拟项目数据
const projects = ref([
  {
    id: 1,
    name: '个人技术博客',
    description: '基于Nuxt3开发的个人博客系统，支持文章管理、分类归档、项目展示等功能。采用Three.js实现粒子动效，并使用玻璃态设计风格。',
    techStack: ['Nuxt', 'Vue', 'Three.js', 'GSAP'],
    demo: 'https://blog.example.com',
    github: 'https://github.com/example/blog'
  },
  {
    id: 2,
    name: '在线代码编辑器',
    description: '基于Monaco Editor开发的在线代码编辑器，支持多种编程语言的语法高亮和智能提示，集成终端和文件管理功能。',
    techStack: ['React', 'TypeScript', 'Monaco Editor', 'WebSocket'],
    demo: 'https://editor.example.com',
    github: 'https://github.com/example/editor'
  },
  {
    id: 3,
    name: '音乐可视化播放器',
    description: '使用Web Audio API和Canvas实现的音乐可视化播放器，支持多种可视化效果和音频处理功能。',
    techStack: ['JavaScript', 'Web Audio API', 'Canvas'],
    demo: 'https://music.example.com',
    github: 'https://github.com/example/music-player'
  }
])

// 获取技术标签颜色
const getTechColor = (tech) => {
  const colors = {
    'Nuxt': '#42b883',
    'Vue': '#3eaf7c',
    'Three.js': '#6b4bb3',
    'GSAP': '#88ce02',
    'React': '#61dafb',
    'TypeScript': '#007acc',
    'Monaco Editor': '#1e1e1e',
    'WebSocket': '#4353ff',
    'JavaScript': '#f7df1e',
    'Web Audio API': '#e44d26',
    'Canvas': '#ff6b6b'
  }
  return colors[tech] || '#cccccc'
}
</script>

<style scoped>
.projects-page {
  padding: 2rem 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.projects-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(67, 97, 238, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(255, 107, 107, 0.05) 0%, transparent 50%);
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(67, 97, 238, 0.05);
  box-shadow: var(--card-shadow);
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(67, 97, 238, 0.15);
  border-color: rgba(67, 97, 238, 0.12);
}

.card-content {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.5rem;
  white-space: nowrap;
  text-align: center;
  color: var(--text-primary);
  margin: 0;
  font-weight: 600;
}

.project-links {
  display: flex;
  justify-content: center;
  white-space: nowrap;
  gap: 0.5rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-full);
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link.demo {
  background: var(--primary-color);
}

.project-link.github {
  background: rgba(45, 55, 72, 0.8);
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.project-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 1rem 0;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .project-links {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>