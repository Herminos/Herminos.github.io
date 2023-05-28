// 获取画布和上下文
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义粒子类
class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
  }

  // 更新粒子位置
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size -= 0.05;
  }

  // 绘制粒子
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// 定义粒子数组
let particles = [];

// 添加鼠标移动事件监听器
window.addEventListener('mousemove', function(event) {
  // 在鼠标位置添加粒子
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(event.clientX, event.clientY, Math.random() * 10 + 5, `hsl(${Math.random() * 360}, 50%, 50%)`));
  }
});

// 定义动画函数
function animate() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 更新和绘制粒子
  particles.forEach(function(particle) {
    particle.update();
    particle.draw();
  });

  // 移除已经消失的粒子
  particles = particles.filter(function(particle) {
    return particle.size > 0;
  });

  // 循环调用动画函数
  requestAnimationFrame(animate);
}

// 启动动画
animate();