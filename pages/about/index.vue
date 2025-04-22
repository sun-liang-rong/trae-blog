<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">关于我</h1>
      
      <!-- 个人简介 -->
      <section class="about-section profile-section">
        <div class="section-content">
          <div class="avatar">
            <img src="/assets/images/happyCat.webp" alt="个人头像" />
          </div>
          <div class="profile-info">
            <h2>Hi, 我是一名全栈开发者</h2>
            <p>热爱技术，专注于Web开发和人工智能领域。喜欢探索新技术，享受编程带来的乐趣。</p>
            <div class="social-links">
              <a href="https://github.com" target="_blank" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 技能列表 -->
      <section class="about-section skills-section">
        <h2 class="section-title">技能专长</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <div class="skill-icon" :style="{ backgroundColor: skill.color }">
              <span class="icon-text">{{ skill.icon }}</span>
            </div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section class="about-section experience-section">
        <h2 class="section-title">工作经历</h2>
        <div class="timeline">
          <div v-for="exp in experience" :key="exp.company" class="timeline-item">
            <div class="timeline-content">
              <h3>{{ exp.position }}</h3>
              <h4>{{ exp.company }}</h4>
              <p class="timeline-date">{{ exp.period }}</p>
              <p class="timeline-description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  {
    name: '前端开发',
    icon: '⚛️',
    color: '#61dafb',
    description: 'Vue.js, React, TypeScript, 现代化前端工程化'
  },
  {
    name: '后端开发',
    icon: '🚀',
    color: '#3eaf7c',
    description: 'Node.js, Python, Go, 微服务架构设计'
  },
  {
    name: '数据库',
    icon: '💾',
    color: '#f29111',
    description: 'MySQL, MongoDB, Redis, 数据库优化'
  },
  {
    name: '人工智能',
    icon: '🤖',
    color: '#6b4bb3',
    description: 'Machine Learning, Deep Learning, NLP'
  }
])

const experience = ref([
  {
    position: '高级全栈工程师',
    company: 'XX科技有限公司',
    period: '2020 - 至今',
    description: '负责公司核心产品的架构设计和开发，带领团队完成多个重要项目'
  },
  {
    position: '前端开发工程师',
    company: 'YY互联网公司',
    period: '2018 - 2020',
    description: '参与电商平台的开发，负责性能优化和用户体验改进'
  }
])
</script>

<style scoped>
.about-page {
  padding: 2rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.about-section {
  margin-bottom: 4rem;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(67, 97, 238, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.about-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

/* 个人简介样式 */
.profile-section .section-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(67, 97, 238, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05) rotate(5deg);
  border-color: #42b883;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.profile-info p {
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #42b883;
  transform: translateY(-2px);
}

/* 技能列表样式 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  text-align: center;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 15px;
  border: 1px solid rgba(67, 97, 238, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
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

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-text {
  font-size: 2rem;
}

.skill-card h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.skill-card p {
  color: var(--text-primary);
  font-size: 0.9rem;
}

/* 时间线样式 */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #42b883;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #42b883;
  border: 1px solid rgba(67, 97, 238, 0.1);
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.2);
}

.timeline-content h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-date {
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: var(--text-primary);
}

/* 教育背景样式 */
.education-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(67, 97, 238, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.education-card h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.education-card h4 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.education-card p {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .profile-section .section-content {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>