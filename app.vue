<template>
  <div :class="{ 'dark': theme === 'dark' }">
    <NuxtRouteAnnouncer />
    <div id="particle-container" />
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  if (process.client) {
    localStorage.setItem('theme', theme.value)
  }
}

onMounted(() => {
  if (process.client) {
    theme.value = localStorage.getItem('theme') || 'light'
  }
})

// 提供主题状态和切换方法给子组件
provide('theme', theme)
provide('toggleTheme', toggleTheme)

const greeting = ref('欢迎来到我的技术博客')

onMounted(() => {
  // 初始化3D粒子系统
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('particle-container').appendChild(renderer.domElement)

  // 创建粒子几何体
  const geometry = new THREE.BufferGeometry()
  const vertices = []
  for (let i = 0; i < 5000; i++) {
    vertices.push(
      THREE.MathUtils.randFloatSpread(2000),
      THREE.MathUtils.randFloatSpread(2000),
      THREE.MathUtils.randFloatSpread(2000)
    )
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  const material = new THREE.PointsMaterial({
    size: 2,
    color: 0x63b3ed,
    transparent: true,
    opacity: 1
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)
  camera.position.z = 1000

  // 动画循环
  function animate() {
    requestAnimationFrame(animate)
    particles.rotation.x += 0.0001
    particles.rotation.y += 0.0001
    renderer.render(scene, camera)
  }
  animate()

  // GSAP标题动画
  gsap.from('.animated-title', {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 0.5
  })
})
</script>

<style>
/* 全局样式 */
.main-content {
  padding-top: 70px; /* 导航栏高度 + 额外空间 */
  min-height: 100vh;
  transition: padding var(--transition-normal);
}

#particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

/* 页面过渡效果 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }
  
  .animated-title {
    font-size: 2rem;
    margin: 1rem 0;
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}

#particle-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
