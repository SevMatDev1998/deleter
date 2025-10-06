import selectors from "../selectors/selectors.js";

const CUBE_SIZE = 92;
const MAX_DISTANCE = 200;

const createHeroAnimation = () => {
  const canvas = document.createElement("canvas");
  canvas.classList.add("canvas-hero");

  const hero = selectors.sectionHero

  if (canvas && hero && window.innerWidth > 992) {
    hero.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      if (window.innerWidth > 992) {
        hero.appendChild(canvas);
        canvas.width = hero.clientWidth;
        canvas.height = hero.clientHeight;
      } else {
        hero.removeChild(canvas);
      }
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const grid = [];
    const cols = Math.ceil(canvas.width / CUBE_SIZE);
    const rows = Math.ceil(canvas.height / CUBE_SIZE);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        grid.push({
          x: x * CUBE_SIZE,
          y: y * CUBE_SIZE,
          cx: x * CUBE_SIZE + CUBE_SIZE / 2,
          cy: y * CUBE_SIZE + CUBE_SIZE / 2,
        });
      }
    }

    function draw(mx, my) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const { x, y, cx, cy } of grid) {
        const dx = mx - cx;
        const dy = my - cy;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < MAX_DISTANCE) {
          const opacity = 0.7 - distance / MAX_DISTANCE;
          ctx.strokeStyle = `hsla(359, 82%, 64%, ${opacity.toFixed(2)})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, CUBE_SIZE, CUBE_SIZE);
        }
      }
    }

    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      draw(mx, my);
    });

    hero.addEventListener("mouseleave", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
}

export default createHeroAnimation;
