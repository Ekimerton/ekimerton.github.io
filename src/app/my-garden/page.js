"use client";

import { useEffect, useRef, useState } from "react";

export default function MyGarden() {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Resize canvas to fill the container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Player state
    const player = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 20,
      color: "#3b82f6", // tailwind blue-500
      speed: 6,
    };

    // Enemies state
    let enemies = [];
    let enemySpawnCounter = 0;
    const enemySpawnRate = 15; // Spawn enemies every 15 frames

    const spawnEnemy = () => {
      let x, y;
      const radius = 12; // ball size
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { // top
        x = Math.random() * canvas.width;
        y = -radius;
      } else if (edge === 1) { // right
        x = canvas.width + radius;
        y = Math.random() * canvas.height;
      } else if (edge === 2) { // bottom
        x = Math.random() * canvas.width;
        y = canvas.height + radius;
      } else { // left
        x = -radius;
        y = Math.random() * canvas.height;
      }
      
      enemies.push({ x, y, radius, speed: 1.5 + Math.random() * 2 });
    };

    // Keyboard state
    const keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
      w: false,
      a: false,
      s: false,
      d: false,
    };

    const handleKeyDown = (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
        // Prevent default scrolling for arrow keys
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    const handleKeyUp = (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
      }
    };

    // Attach to window so we collect input even if canvas falls out of focus
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("keyup", handleKeyUp);

    let animationFrameId;
    let isGameOver = false;

    const gameLoop = () => {
      if (isGameOver) return;

      // Update player position
      if (keys.ArrowUp || keys.w) player.y -= player.speed;
      if (keys.ArrowDown || keys.s) player.y += player.speed;
      if (keys.ArrowLeft || keys.a) player.x -= player.speed;
      if (keys.ArrowRight || keys.d) player.x += player.speed;

      // Keep player inside canvas
      if (player.x - player.radius < 0) player.x = player.radius;
      if (player.x + player.radius > canvas.width) player.x = canvas.width - player.radius;
      if (player.y - player.radius < 0) player.y = player.radius;
      if (player.y + player.radius > canvas.height) player.y = canvas.height - player.radius;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new enemies
      enemySpawnCounter++;
      if (enemySpawnCounter >= enemySpawnRate) {
        spawnEnemy();
        enemySpawnCounter = 0;
      }

      // Update and draw enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        
        // Move towards player
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 0) {
          enemy.x += (dx / dist) * enemy.speed;
          enemy.y += (dy / dist) * enemy.speed;
        }

        // Check collision with player
        if (dist < player.radius + enemy.radius) {
          isGameOver = true;
          setGameOver(true);
          break;
        }

        // Draw enemy
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        
        // Add subtle border to enemy
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#a8a29e"; // tailwind stone-400
        ctx.stroke();
        ctx.closePath();
      }

      // Draw the player
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
      ctx.fillStyle = player.color;
      ctx.fill();

      // Add a stroke
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#2563eb"; // tailwind blue-600
      ctx.stroke();
      ctx.closePath();

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="h-full w-full dark:bg-stone-950 bg-stone-100 flex flex-col flex-1 relative overflow-hidden min-h-[calc(100vh-100px)]">
      {gameOver && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg z-10 text-3xl font-bold uppercase tracking-wider">
          Game Over
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="block w-full h-full outline-none touch-none"
        tabIndex={0}
      />
    </main>
  );
}
