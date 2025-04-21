<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <!-- Logo和个人签名 -->
      <div class="navbar-brand">
        <NuxtLink to="/" class="logo">
          <span class="logo-text">SunSun Blog</span>
        </NuxtLink>
        <span class="tagline">探索技术的奥秘</span>
      </div>
      
      <!-- 导航菜单 -->
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <NuxtLink to="/" class="navbar-item" @click="closeMenu">首页</NuxtLink>
        <NuxtLink to="/categories" class="navbar-item" @click="closeMenu">分类</NuxtLink>
        <NuxtLink to="/about" class="navbar-item" @click="closeMenu">关于</NuxtLink>
      </div>
      
      <!-- 右侧功能区 -->
      <div class="navbar-end">
        <!-- 搜索图标 -->
        <button class="icon-button search-button" aria-label="搜索">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        
        <!-- 社交平台入口 -->
        <div class="social-icons">
          <a href="https://github.com/sun-liang-rong" target="_blank" class="icon-button" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <!-- 掘金图标 -->
           <a href="https://juejin.cn/user/3911550558809856" target="_blank" class="icon-button" aria-label="掘金">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8.37a4.83 4.83 0 0 0-1.5-.37c-1.12 0-2 .9-2 2 0 .74.4 1.38 1 1.73"/>
              <path d="M6 8.37a4.83 4.83 0 0 1 1.5-.37c1.12 0 2 .9 2 2 0 .74-.4 1.38-1 1.73"/>
              <path d="M12 12h.01"/>
              <path d="M19.07 14.93a8 8 0 0 0-14.14 0"/>
              <path d="M21 10.27a3 3 0 1 0-2.5 3.73"/>
              <path d="M3 10.27a3 3 0 1 1 2.5 3.73"/>
              <path d="M12 2a10 10 0 0 0-9.54 13.25C3.18 17.8 5.26 19 8 19h8c2.74 0 4.82-1.2 5.54-3.75A10 10 0 0 0 12 2Z"/>
            </svg>
          </a>
        </div>
        <!-- 主题切换按钮 -->
        <button class="icon-button theme-toggle" @click="toggleTheme" aria-label="切换主题">
          <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>
        
        <!-- 移动端汉堡菜单按钮 -->
        <button class="hamburger-button" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" aria-label="菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const isMenuActive = ref(false)

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

// 点击菜单项后关闭菜单
const closeMenu = () => {
  isMenuActive.value = false
}

const colorMode = useColorMode()

const theme = computed(() => colorMode.value)

// 切换主题
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  // 滚动事件监听
  // if (process.client) {
  //   window.addEventListener('scroll', handleScroll)
  //   handleScroll() // 初始化检查
  // }
})

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  background-color: var(--glass-bg);
  box-shadow: var(--glass-shadow);
  transition: background-color var(--transition-normal), box-shadow var(--transition-normal);
  height: 70px;
  display: flex;
  align-items: center;
}

[data-theme="dark"] .navbar {
  background-color: var(--glass-bg);
  box-shadow: var(--glass-shadow);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-brand {
  display: flex;
  flex-direction: column;
}

.logo {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  position: relative;
  display: inline-block;
}

.logo::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--accent-color);
  right: -8px;
  top: 5px;
}

.tagline {
  font-size: 0.8rem;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  margin-top: 2px;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.navbar-item {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease, transform 0.3s ease;
  letter-spacing: 0.01em;
}

.navbar-item.router-link-active {
  color: var(--primary-color);
}

.navbar-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

.navbar-item:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.navbar-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transition: width 0.3s cubic-bez
}
.navbar-end {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icon-button {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, color 0.3s ease, background-color 0.2s ease;
}

.icon-button:hover {
  transform: scale(1.15);
  color: var(--accent-color);
}

.icon-button:active {
  transform: scale(0.95);
}

.icon-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .icon-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.hamburger-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-button span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--text-primary);
  transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center;
}

.hamburger-button.is-active span:first-child {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-button.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger-button.is-active span:last-child {
  transform: translateY(-7px) rotate(-45deg);
}
/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--card-bg);
    flex-direction: column;
    padding: 1.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1), max-height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    pointer-events: none;
    z-index: 999;
    max-height: 0;
    overflow: hidden;
  }
  
  .navbar-menu.is-active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
    max-height: 100vh;
  }
  
  .hamburger-button {
    display: flex;
  }
  
  .social-icons {
    display: none;
  }
}
</style>