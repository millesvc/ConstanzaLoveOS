/* ══════════════════════════════════════════
   CONSTANZA LOVE OS — script.js
   Dos mundos: Noe (espacio/noche) · Nini (jardín/día)
══════════════════════════════════════════ */

// ════════════════════════════════════════
// CONTENIDO EDITABLE POR PERSONAJE
// ════════════════════════════════════════

const CHAR_DATA = {

  // ── NOE: mundo espacio, recolecta estrellas ──
  noe: {
    collectible: "⭐",        // símbolo recolectable
    collectibleLabel: "ESTRELLAS",
    hudColor: "#a0c8ff",

    // Intro narrativa
    intro: [
      "Las estrellas que iluminan el sistema se han apagado...",
      "Noe debe recorrer el cosmos para recuperarlas.",
      "Solo así podrá enviar el mensaje más importante.",
    ],

    // Mensajes al recolectar cada estrella
    messages: [
      "⭐ Primera estrella recuperada. El sistema respira.",
      "🌙 Esta estrella brilla igual que tus ojos.",
      "🚀 Noe avanza sin miedo. Como tú ante los desafíos.",
      "💫 El cosmos guarda tus mejores momentos.",
      "🌟 Mitad del camino. Noe siente que no está solo.",
      "🛸 Error 404: No se encontró nadie mejor en el universo.",
      "✨ Cada estrella es un día que me alegró tenerte cerca.",
      "🌌 El sistema recupera energía. Y yo también, contigo.",
      "🪐 Casi listo. Una última estrella guarda el secreto.",
      "💥 ¡Sistema restaurado! Gracias por llegar hasta aquí.",
    ],

    // Logros
    achievements: [
      { at: 1,  icon: "🚀", name: "Despegue exitoso" },
      { at: 3,  icon: "🌙", name: "Navegante lunar" },
      { at: 5,  icon: "🪐", name: "Explorador cósmico" },
      { at: 8,  icon: "🌌", name: "Maestro del cosmos" },
      { at: 10, icon: "👑", name: "Persona Favorita del Universo" },
    ],

    // Carta final
    letterFile: "mensaje_estelar.love",
    letter: [
      `<span class="saludo">Querida Constanza,</span>`,
      `Noe recorrió cada rincón del universo buscando estrellas, pero la verdad es que la más brillante ya la tenía cerca: eras tú.`,
      `Cada estrella que recolectaste guarda una versión de un momento en que pensé "qué bueno que existe esta persona". Son muchos esos momentos.`,
      `No necesito el cosmos para saber que contigo los días son mejores. Solo necesito que estés cerca, con tu forma de ser única e irrepetible.`,
      `Gracias por jugar. Gracias por ser tú. Gracias por existir en mi mundo — que es mucho mejor con una estrella como tú en él.`,
      `<span class="firma">Con todo el universo, ❤️ Noe</span>`,
    ],

    // Final emotivo — textos
    endLines: [
      "Misión espacial completada.",
      "El universo está restaurado ❤️",
      "Estrella favorita: Constanza",
      "Gracias por explorar conmigo.",
    ],
    endSymbols: ["⭐","🌙","💫","🚀","🌟","✨","🪐","💥"],
    endBg: "linear-gradient(160deg, #0a0020, #1a0040, #0d0030)",
  },

  // ── NINI: mundo jardín, recolecta flores ──
  nini: {
    collectible: "🌸",
    collectibleLabel: "FLORES",
    hudColor: "#ffb3d1",

    // Intro narrativa
    intro: [
      "Las flores del jardín del sistema han desaparecido...",
      "Nini deberá buscarlas entre colinas y nubes de algodón.",
      "Solo así florecerá el mensaje guardado en el corazón.",
    ],

    // Mensajes al recolectar cada flor
    messages: [
      "🌸 Primera flor encontrada. El jardín vuelve a oler bien.",
      "🌺 Esta flor es tan dulce como tú cuando sonríes.",
      "🦋 Una mariposa siguió a Nini. Como todo lo bonito te sigue a ti.",
      "🌼 El jardín recuerda cada momento especial que has vivido.",
      "🌷 Mitad del camino. Nini baila entre las flores.",
      "🍀 Encontraste un trébol de 4 hojas: suerte del bueno.",
      "🌻 Esta flor girasol siempre mira hacia donde estás tú.",
      "🌈 El jardín se llena de colores. Como mis días contigo.",
      "🌿 Última flor cerca. El jardín está casi completo.",
      "💐 ¡Jardín restaurado! Este ramo es todo para ti.",
    ],

    // Logros
    achievements: [
      { at: 1,  icon: "🌱", name: "Primera brote" },
      { at: 3,  icon: "🦋", name: "Amiga de las mariposas" },
      { at: 5,  icon: "🌼", name: "Guardiana del jardín" },
      { at: 8,  icon: "🌈", name: "Pintora de arcoíris" },
      { at: 10, icon: "👑", name: "La Flor más Especial" },
    ],

    // Carta final
    letterFile: "carta_del_jardin.love",
    letter: [
      `<span class="saludo">Querida Constanza,</span>`,
      `Nini recorrió cada rincón del jardín buscando flores, pero las más bonitas siempre fueron las que florecían cuando tú reías.`,
      `Cada flor que encontraste guarda un recuerdo: una conversación que me alegró el día, un momento donde pensé "me alegra tanto tenerte cerca".`,
      `Eres de esas personas que hacen que el mundo se sienta más cálido, más colorido, más bonito. Y eso no es poca cosa.`,
      `Gracias por jugar con Nini. Gracias por ser exactamente como eres. Este jardín siempre tendrá una flor con tu nombre.`,
      `<span class="firma">Con flores y cariño, ❤️ Nini</span>`,
    ],

    // Final emotivo — textos
    endLines: [
      "Jardín completamente restaurado.",
      "Estado del sistema: Florecido ❤️",
      "Flor favorita: Constanza",
      "Gracias por caminar por aquí.",
    ],
    endSymbols: ["🌸","🌺","🌼","🌷","🦋","🌻","🍀","💐"],
    endBg: "linear-gradient(160deg, #fde8f5, #e8f8e8, #fff0d0)",
  },
};

// ════════════════════════════════════════
// ESTADO GLOBAL
// ════════════════════════════════════════
const State = {
  selectedChar: "noe",
  heartsCollected: 0,
  achievementsShown: new Set(),
};

// ════════════════════════════════════════
// UTILIDADES
// ════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function typeText(el, text, speed = 30) {
  return new Promise(resolve => {
    el.textContent = "";
    let i = 0;
    const tick = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) { clearInterval(tick); resolve(); }
    }, speed);
  });
}

const wait = ms => new Promise(r => setTimeout(r, ms));

// ════════════════════════════════════════
// FASE 1: BOOT TERMINAL
// ════════════════════════════════════════
const BOOT_LINES = [
  { text: "Inicializando sistema...",        cls: "" },
  { text: "Cargando recuerdos...",           cls: "" },
  { text: "Analizando felicidad...",         cls: "" },
  { text: "Buscando usuarios especiales...", cls: "" },
  { text: "Noe encontrado ✓",               cls: "special" },
  { text: "Nini encontrada ✓",              cls: "special" },
  { text: "Constanza encontrada ❤️",        cls: "special" },
  { text: "",                                cls: "" },
  { text: "Estado del sistema: Enamorado ❤️", cls: "final-state" },
];

async function runBoot() {
  const log = document.getElementById("boot-log");
  const btnStart = document.getElementById("btn-start-boot");

  for (const line of BOOT_LINES) {
    await wait(320);
    const span = document.createElement("span");
    span.className = `log-line ${line.cls}`;
    span.textContent = line.text;
    log.appendChild(span);
    log.scrollTop = log.scrollHeight;
  }
  await wait(600);
  btnStart.classList.remove("hidden");
  btnStart.onclick = () => { showScreen("screen-menu"); spawnMenuHearts(); };
}

// ════════════════════════════════════════
// FASE 2: MENÚ — corazones flotantes
// ════════════════════════════════════════
function spawnMenuHearts() {
  const container = document.getElementById("menu-hearts");
  const symbols = ["❤️","💕","✨","🌸","💖","⭐","🌙"];
  for (let i = 0; i < 22; i++) {
    const el = document.createElement("div");
    el.className = "fh";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-10px";
    el.style.animationDuration = (6 + Math.random() * 8) + "s";
    el.style.animationDelay    = (Math.random() * 6) + "s";
    el.style.fontSize = (0.8 + Math.random() * 1.2) + "rem";
    container.appendChild(el);
  }
}

// ════════════════════════════════════════
// FASE 4: INTRO NARRATIVA — por personaje
// ════════════════════════════════════════
async function runIntro() {
  const el  = document.getElementById("intro-text");
  const btn = document.getElementById("btn-start-mission");
  el.innerHTML = "";
  btn.classList.add("hidden");

  const lines = CHAR_DATA[State.selectedChar].intro;
  for (const line of lines) {
    const p = document.createElement("p");
    el.appendChild(p);
    await typeText(p, line, 28);
    await wait(400);
  }
  await wait(400);
  btn.classList.remove("hidden");
}

// ════════════════════════════════════════
// FASE 5: MINIJUEGO — dos mundos distintos
// ════════════════════════════════════════
const Game = (() => {
  const GRAVITY_NOE  = 0.55; // más pesado, movimiento rápido
  const GRAVITY_NINI = 0.35; // flotante, suave
  const JUMP_NOE     = -13;
  const JUMP_NINI    = -10;
  const SPEED_NOE    = 4.5;
  const SPEED_NINI   = 3.2;
  const PLAYER_W = 36, PLAYER_H = 36;
  const GROUND_H = 60;
  const ITEM_SIZE = 28;
  const MAX_ITEMS = 10;
  const WORLD_W   = 900; // ancho fijo del mundo (independiente del dispositivo)
  const WORLD_H   = 500; // alto fijo del mundo

  let canvas, ctx;
  let player, items, particles, clouds, decorations, platforms, bgObjects;
  let keys  = {};
  let touchDir = { left:false, right:false, up:false };
  let animId;
  let onItemCollected;
  let currentChar;
  let cameraX = 0; // posición horizontal de la cámara en el mundo

  // ── Paletas por personaje ──
  const WORLDS = {
    noe: {
      skyTop: "#050015", skyBot: "#0d0030",
      groundCol: "#1a0a3a", groundTop: "#2a1060",
      platformCol: "#2a1060", platformTop: "#4a2090",
      gravity: GRAVITY_NOE, jumpV: JUMP_NOE, speed: SPEED_NOE,
      playerBody: "#d4a97a", playerPaw: "#c09060",
      isNini: false,
    },
    nini: {
      skyTop: "#b8eaff", skyBot: "#e8f8f0",
      groundCol: "#7abf7a", groundTop: "#5a9b5a",
      platformCol: "#8fbc8f", platformTop: "#5a9b5a",
      gravity: GRAVITY_NINI, jumpV: JUMP_NINI, speed: SPEED_NINI,
      playerBody: "#f9c0d8", playerPaw: "#f0a8c0",
      isNini: true,
    },
  };

  function init(charName, callback) {
    canvas = document.getElementById("game-canvas");
    ctx    = canvas.getContext("2d");
    onItemCollected = callback;
    currentChar = charName;

    resize();
    window.addEventListener("resize", resize);
    setupControls();

    State.heartsCollected = 0;
    cameraX = 0;
    updateHUD();

    const w = WORLDS[charName];

    player = {
      x: 60, y: 300,
      vx: 0, vy: 0,
      onGround: false,
      facingRight: true,
      color: w.playerBody,
      pawColor: w.playerPaw,
      isNini: w.isNini,
      frameTimer: 0, frame: 0,
      gravity: w.gravity,
      jumpV: w.jumpV,
      speed: w.speed,
    };

    // Plataformas — distintas por personaje
    if (charName === "noe") {
      // Plataformas tipo asteroides/rocas flotantes
      platforms = [
        { x: 0,   y: virtualH() - GROUND_H, w: virtualW(), h: GROUND_H, isGround: true },
        { x: 80,  y: virtualH() - 170, w: 100, h: 14 },
        { x: 250, y: virtualH() - 220, w: 120, h: 14 },
        { x: 440, y: virtualH() - 180, w: 110, h: 14 },
        { x: 600, y: virtualH() - 240, w: 100, h: 14 },
        { x: 180, y: virtualH() - 300, w: 130, h: 14 },
        { x: 380, y: virtualH() - 330, w: 110, h: 14 },
        { x: 560, y: virtualH() - 360, w: 120, h: 14 },
      ];
    } else {
      // Plataformas tipo colinas/hongos
      platforms = [
        { x: 0,   y: virtualH() - GROUND_H, w: virtualW(), h: GROUND_H, isGround: true },
        { x: 60,  y: virtualH() - 150, w: 130, h: 18 },
        { x: 260, y: virtualH() - 190, w: 140, h: 18 },
        { x: 460, y: virtualH() - 160, w: 130, h: 18 },
        { x: 640, y: virtualH() - 210, w: 120, h: 18 },
        { x: 160, y: virtualH() - 280, w: 140, h: 18 },
        { x: 360, y: virtualH() - 310, w: 130, h: 18 },
        { x: 550, y: virtualH() - 340, w: 120, h: 18 },
      ];
    }

    // Items coleccionables — posiciones únicas por mundo
    items = [];
    const posNoe = [
      [110, virtualH()-210],[280, virtualH()-260],[470, virtualH()-220],
      [630, virtualH()-280],[210, virtualH()-340],[410, virtualH()-370],
      [590, virtualH()-400],[80,  virtualH()-130],[520, virtualH()-130],
      [330, virtualH()-130],
    ];
    const posNini = [
      [120, virtualH()-190],[290, virtualH()-230],[490, virtualH()-200],
      [670, virtualH()-250],[190, virtualH()-320],[390, virtualH()-350],
      [570, virtualH()-380],[70,  virtualH()-120],[500, virtualH()-120],
      [320, virtualH()-120],
    ];
    const pos = charName === "noe" ? posNoe : posNini;
    for (let i = 0; i < MAX_ITEMS; i++) {
      items.push({
        x: pos[i][0], y: pos[i][1],
        collected: false,
        bobOffset: Math.random() * Math.PI * 2,
        glowPhase: Math.random() * Math.PI * 2,
        spin: Math.random() * Math.PI * 2,
      });
    }

    particles = [];

    // Decoración de fondo por mundo
    if (charName === "noe") {
      // Estrellas de fondo + planetas
      bgObjects = [
        ...Array.from({ length: 60 }, () => ({
          type: "star",
          x: Math.random() * 900, y: Math.random() * 500,
          r: 0.5 + Math.random() * 2.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 2,
        })),
        { type:"planet", x:700, y:80,  r:28, col:"#8060d0", ring:true },
        { type:"planet", x:120, y:120, r:18, col:"#d07040", ring:false },
        { type:"planet", x:450, y:60,  r:12, col:"#40d0a0", ring:false },
      ];
      clouds = []; // sin nubes en espacio
    } else {
      // Nubes esponjosas + mariposas
      clouds = Array.from({ length: 5 }, (_, i) => ({
        x: i * 200, y: 30 + Math.random() * 70,
        w: 80 + Math.random() * 60, speed: 0.3 + Math.random() * 0.2,
      }));
      bgObjects = Array.from({ length: 8 }, () => ({
        type: "butterfly",
        x: Math.random() * 900, y: 60 + Math.random() * 250,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.5,
        col: ["#ffb3e6","#b3d9ff","#b3ffcc","#fff3b3"][Math.floor(Math.random()*4)],
      }));
    }

    // Decoraciones del suelo
    if (charName === "noe") {
      decorations = Array.from({ length: 16 }, (_, i) => ({
        x: 20 + i * 58, type: "crater",
        size: 3 + Math.random() * 6,
      }));
    } else {
      decorations = Array.from({ length: 14 }, (_, i) => ({
        x: 20 + i * 62, type: "flower",
        col: ["#ff9ec0","#ffd166","#c5e8a0","#a8d8f0","#c9b0f4"][i % 5],
      }));
    }

    if (animId) cancelAnimationFrame(animId);
    loop();
  }

  function virtualW() { return WORLD_W; }
  function virtualH() { return WORLD_H; }

  function resize() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    // el suelo siempre cubre el ancho del mundo y se posiciona al fondo del mundo
    if (platforms && platforms.length) {
      platforms[0].y = WORLD_H - GROUND_H;
      platforms[0].w = WORLD_W;
    }
  }

  function setupControls() {
    window.addEventListener("keydown", e => { keys[e.code] = true; });
    window.addEventListener("keyup",   e => { keys[e.code] = false; });

    const pressMap  = { "btn-left":()=>touchDir.left=true,  "btn-right":()=>touchDir.right=true,  "btn-up":()=>touchDir.up=true  };
    const releaseMap= { "btn-left":()=>touchDir.left=false, "btn-right":()=>touchDir.right=false, "btn-up":()=>touchDir.up=false };

    Object.entries(pressMap).forEach(([id, fn]) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener("touchstart", e => { e.preventDefault(); fn(); }, { passive:false });
      btn.addEventListener("mousedown", fn);
    });
    Object.entries(releaseMap).forEach(([id, fn]) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener("touchend",  e => { e.preventDefault(); fn(); }, { passive:false });
      btn.addEventListener("mouseup", fn);
    });
  }

  function loop() {
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  function update() {
    if (!player) return;
    const t  = Date.now() * 0.001;
    const vw = virtualW(), vh = virtualH();
    const w  = WORLDS[currentChar];

    const left  = keys["ArrowLeft"]  || keys["KeyA"] || touchDir.left;
    const right = keys["ArrowRight"] || keys["KeyD"] || touchDir.right;
    const jump  = keys["ArrowUp"]    || keys["KeyW"] || keys["Space"] || touchDir.up;

    if (left)  { player.vx = -w.speed; player.facingRight = false; }
    else if (right) { player.vx = w.speed; player.facingRight = true; }
    else player.vx *= 0.75;

    if (jump && player.onGround) player.vy = w.jumpV;

    player.vy += w.gravity;
    player.x  += player.vx;
    player.y  += player.vy;

    if (player.x < -PLAYER_W)     player.x = vw;
    if (player.x > vw + PLAYER_W) player.x = -PLAYER_W;

    player.onGround = false;
    for (const p of platforms) {
      if (
        player.x + PLAYER_W > p.x && player.x < p.x + p.w &&
        player.y + PLAYER_H > p.y && player.y + PLAYER_H < p.y + p.h + 12 &&
        player.vy >= 0
      ) {
        player.y = p.y - PLAYER_H;
        player.vy = 0;
        player.onGround = true;
      }
    }
    if (player.y > vh + 100) { player.y = 0; player.vy = 0; }

    player.frameTimer++;
    if (player.frameTimer > 8) { player.frame = (player.frame + 1) % 2; player.frameTimer = 0; }

    // Recolección
    for (const h of items) {
      if (h.collected) continue;
      const hx = h.x, hy = h.y + Math.sin(t * 2 + h.bobOffset) * 6;
      if (
        player.x + PLAYER_W > hx - ITEM_SIZE/2 && player.x < hx + ITEM_SIZE/2 &&
        player.y + PLAYER_H > hy - ITEM_SIZE/2 && player.y < hy + ITEM_SIZE/2
      ) {
        h.collected = true;
        spawnParticles(hx, hy);
        State.heartsCollected++;
        updateHUD();
        if (onItemCollected) onItemCollected(State.heartsCollected);
      }
    }

    // Cámara: sigue al jugador horizontalmente, centrada en pantalla
    const screenW = canvas ? canvas.width : window.innerWidth;
    const targetCamX = player.x + PLAYER_W / 2 - screenW / 2;
    cameraX = Math.max(0, Math.min(targetCamX, WORLD_W - screenW));
    if (WORLD_W <= screenW) cameraX = 0; // mundo más pequeño que pantalla: sin scroll

    // Partículas
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.life -= 2;
      if (p.life <= 0) particles.splice(i, 1);
    }

    // Nubes
    if (clouds) for (const c of clouds) {
      c.x -= c.speed;
      if (c.x + c.w < 0) c.x = vw + c.w;
    }

    // Mariposas
    if (bgObjects) for (const o of bgObjects) {
      if (o.type === "butterfly") {
        o.x += Math.sin(t * o.speed + o.phase) * 0.8;
        o.y += Math.cos(t * o.speed * 0.7 + o.phase) * 0.4;
      }
    }
  }

  function spawnParticles(x, y) {
    const isNoe = currentChar === "noe";
    const cols = isNoe
      ? ["#a0c8ff","#c0a0ff","#ffd166","#ffffff"]
      : ["#ff9ec0","#ffd166","#c5e8a0","#ffb3e6"];
    for (let i = 0; i < 14; i++) {
      const angle = (Math.PI * 2 / 14) * i;
      particles.push({
        x, y,
        vx: Math.cos(angle) * (1.5 + Math.random() * 3),
        vy: Math.sin(angle) * (1.5 + Math.random() * 3) - 2,
        life: 80 + Math.random() * 40,
        maxLife: 120,
        col: cols[Math.floor(Math.random() * cols.length)],
        size: 4 + Math.random() * 6,
        sym: isNoe ? "✦" : "✿",
      });
    }
  }

  // ──────────────────────────────────────
  // DRAW
  // ──────────────────────────────────────
  function draw() {
    if (!ctx || !player) return;
    const vw = virtualW(), vh = virtualH();
    const t  = Date.now() * 0.001;
    const w  = WORLDS[currentChar];
    const screenW = canvas.width;
    const screenH = canvas.height;

    // Escala vertical para que el mundo (WORLD_H) quepa en la pantalla
    const scaleY = screenH / WORLD_H;
    // Escala horizontal: en pantallas anchas no escala; en angostas escala igual que Y
    const scaleX = screenW >= WORLD_W ? 1 : scaleY;

    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.translate(-cameraX / scaleX, 0);

    // Fondo
    const sky = ctx.createLinearGradient(0, 0, 0, vh);
    sky.addColorStop(0, w.skyTop);
    sky.addColorStop(1, w.skyBot);
    ctx.fillStyle = sky;
    ctx.fillRect(cameraX / scaleX, 0, screenW / scaleX, vh);

    if (currentChar === "noe") {
      drawSpaceWorld(t, vw, vh, w);
    } else {
      drawGardenWorld(t, vw, vh, w);
    }

    // Partículas
    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.fillStyle = p.col;
      ctx.font = `${p.size}px serif`;
      ctx.textAlign = "center";
      ctx.fillText(p.sym, p.x, p.y);
      ctx.restore();
    }

    // Jugador
    drawPlayer(player, t);

    ctx.restore(); // cierra la transformación de cámara+escala
  }

  function drawSpaceWorld(t, vw, vh, w) {
    const gnd = platforms[0];

    // Objetos de fondo (estrellas, planetas)
    for (const o of bgObjects) {
      if (o.type === "star") {
        const alpha = 0.3 + 0.4 * Math.sin(t * o.speed + o.phase);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      } else if (o.type === "planet") {
        ctx.save();
        ctx.shadowColor = o.col; ctx.shadowBlur = 20;
        ctx.fillStyle = o.col;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
        // Anillo
        if (o.ring) {
          ctx.strokeStyle = `${o.col}99`;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.ellipse(o.x, o.y, o.r * 1.7, o.r * 0.4, -0.3, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Plataformas (asteroides)
    for (const p of platforms) {
      if (p.isGround) continue;
      ctx.save();
      ctx.fillStyle = w.platformCol;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, p.w, p.h, 7);
      ctx.fill();
      ctx.fillStyle = w.platformTop;
      ctx.fillRect(p.x, p.y, p.w, 5);
      // Cratercitos decorativos
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(p.x + 15 + i * 25, p.y + 8, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // Suelo lunar
    ctx.fillStyle = w.groundCol;
    ctx.fillRect(gnd.x, gnd.y, gnd.w, gnd.h);
    ctx.fillStyle = w.groundTop;
    ctx.fillRect(gnd.x, gnd.y, gnd.w, 8);
    // Cráteres en el suelo
    for (const d of decorations) {
      if (d.type !== "crater") continue;
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(d.x, gnd.y + 20, d.size * 2, d.size * 0.6, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Items: estrellas con glow
    for (const h of items) {
      if (h.collected) continue;
      const bob  = Math.sin(t * 2 + h.bobOffset) * 6;
      const glow = 0.5 + 0.5 * Math.sin(t * 3 + h.glowPhase);
      ctx.save();
      ctx.shadowColor = `rgba(180,220,255,${glow})`;
      ctx.shadowBlur  = 14 + glow * 10;
      ctx.font = `${ITEM_SIZE}px serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("⭐", h.x, h.y + bob);
      ctx.restore();
    }
  }

  function drawGardenWorld(t, vw, vh, w) {
    const gnd = platforms[0];

    // Nubes
    for (const c of clouds) drawCloud(c.x, c.y, c.w);

    // Mariposas
    for (const o of bgObjects) {
      if (o.type !== "butterfly") continue;
      ctx.save();
      ctx.globalAlpha = 0.7;
      const flutter = Math.sin(t * 8 + o.phase) * 4;
      ctx.fillStyle = o.col;
      // Ala izq
      ctx.beginPath();
      ctx.ellipse(o.x - 5, o.y - flutter, 7, 5, -0.5, 0, Math.PI * 2);
      ctx.fill();
      // Ala der
      ctx.beginPath();
      ctx.ellipse(o.x + 5, o.y - flutter, 7, 5, 0.5, 0, Math.PI * 2);
      ctx.fill();
      // Cuerpo
      ctx.fillStyle = "#5a3a1a";
      ctx.beginPath();
      ctx.ellipse(o.x, o.y, 2, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Plataformas (tipo hongo/colina)
    for (const p of platforms) {
      if (p.isGround) continue;
      ctx.save();
      ctx.fillStyle = w.platformCol;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, p.w, p.h, 9);
      ctx.fill();
      ctx.fillStyle = w.platformTop;
      ctx.fillRect(p.x, p.y, p.w, 6);
      // Florecitas en plataforma
      ctx.font = "10px serif";
      ctx.textAlign = "center";
      for (let i = 0; i < Math.floor(p.w / 28); i++) {
        ctx.fillText("🌸", p.x + 14 + i * 28, p.y - 2);
      }
      ctx.restore();
    }

    // Suelo
    ctx.fillStyle = w.groundCol;
    ctx.fillRect(gnd.x, gnd.y, gnd.w, gnd.h);
    ctx.fillStyle = w.groundTop;
    ctx.fillRect(gnd.x, gnd.y, gnd.w, 10);
    // Flores en el suelo
    for (const d of decorations) {
      if (d.type !== "flower") continue;
      drawFlower(d.x, gnd.y, d.col, t);
    }

    // Items: flores con glow rosado
    for (const h of items) {
      if (h.collected) continue;
      const bob  = Math.sin(t * 1.8 + h.bobOffset) * 5;
      const glow = 0.4 + 0.5 * Math.sin(t * 2.5 + h.glowPhase);
      ctx.save();
      ctx.shadowColor = `rgba(255,150,200,${glow})`;
      ctx.shadowBlur  = 12 + glow * 8;
      ctx.font = `${ITEM_SIZE}px serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("🌸", h.x, h.y + bob);
      ctx.restore();
    }
  }

  function drawCloud(x, y, w) {
    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.beginPath();
    ctx.arc(x + w*0.3, y+15, w*0.2, 0, Math.PI*2);
    ctx.arc(x + w*0.55, y+8,  w*0.25, 0, Math.PI*2);
    ctx.arc(x + w*0.75, y+15, w*0.18, 0, Math.PI*2);
    ctx.arc(x + w*0.1,  y+18, w*0.14, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  }

  function drawFlower(x, groundY, col, t) {
    const sway = Math.sin(t * 1.5 + x * 0.05) * 3;
    ctx.save();
    ctx.strokeStyle = "#4a8a4a"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, groundY);
    ctx.quadraticCurveTo(x+sway, groundY-10, x+sway*0.5, groundY-18);
    ctx.stroke();
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(x+sway*0.5, groundY-22, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.arc(x+sway*0.5, groundY-22, 2.5, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function drawPlayer(p, t) {
    if (!p) return;
    ctx.save();
    ctx.translate(p.x + PLAYER_W/2, p.y + PLAYER_H/2);
    if (!p.facingRight) ctx.scale(-1,1);
    const walk = p.onGround ? Math.sin(t * 8) * 2 : 0;
    ctx.translate(0, walk * 0.5);

    // Cuerpo
    ctx.fillStyle = p.color;
    ctx.beginPath(); ctx.ellipse(0, 6, 13, 10, 0, 0, Math.PI*2); ctx.fill();

    // Cabeza
    ctx.beginPath(); ctx.arc(0, -6, 12, 0, Math.PI*2); ctx.fill();

    // Orejas
    ctx.beginPath();
    ctx.moveTo(-8,-14); ctx.lineTo(-12,-22); ctx.lineTo(-3,-17); ctx.closePath();
    ctx.moveTo(8,-14);  ctx.lineTo(12,-22);  ctx.lineTo(3,-17);  ctx.closePath();
    ctx.fill();

    if (p.isNini) {
      ctx.fillStyle = "#ff7eb3";
      ctx.beginPath();
      ctx.moveTo(6,-17); ctx.bezierCurveTo(12,-22,16,-15,10,-13);
      ctx.bezierCurveTo(12,-8,6,-10,10,-13); ctx.fill();
    }

    // Ojos
    ctx.fillStyle = "#3a2a3a";
    ctx.beginPath();
    ctx.ellipse(-4,-7,3,3.5,0,0,Math.PI*2);
    ctx.ellipse( 4,-7,3,3.5,0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-3,-8.5,1,0,Math.PI*2); ctx.arc(5,-8.5,1,0,Math.PI*2); ctx.fill();

    // Nariz
    ctx.fillStyle = p.isNini ? "#ff7eb3" : "#e8516a";
    ctx.beginPath(); ctx.ellipse(0,-4,2.5,1.8,0,0,Math.PI*2); ctx.fill();

    // Mejillas
    ctx.fillStyle = "rgba(255,150,150,0.4)";
    ctx.beginPath();
    ctx.ellipse(-6,-3,4,2.5,0,0,Math.PI*2);
    ctx.ellipse( 6,-3,4,2.5,0,0,Math.PI*2); ctx.fill();

    // Patas
    const legOffset = p.onGround ? Math.sin(t*8)*3 : 0;
    ctx.fillStyle = p.pawColor;
    ctx.beginPath();
    ctx.ellipse(-6,16-legOffset,4,4,0,0,Math.PI*2);
    ctx.ellipse( 6,16+legOffset,4,4,0,0,Math.PI*2); ctx.fill();

    // Cola
    ctx.strokeStyle = p.color; ctx.lineWidth = 5; ctx.lineCap = "round";
    const tailWag = Math.sin(t*3)*20;
    ctx.beginPath();
    ctx.moveTo(12,6);
    ctx.quadraticCurveTo(18+tailWag,-2,20+tailWag*0.5,-10);
    ctx.stroke();

    ctx.restore();
  }

  function stop() {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  }

  function updateHUD() {
    const el   = document.getElementById("hud-hearts");
    const data = CHAR_DATA[State.selectedChar];
    if (el) el.textContent = `${data.collectible} ${State.heartsCollected}/10`;
  }

  return { init, stop };
})();

// ════════════════════════════════════════
// LOGROS — por personaje
// ════════════════════════════════════════
function checkAchievements(count) {
  const list = CHAR_DATA[State.selectedChar].achievements;
  const ach  = list.find(a => a.at === count);
  if (ach && !State.achievementsShown.has(count)) {
    State.achievementsShown.add(count);
    showAchievement(ach);
  }
}

function showAchievement(ach) {
  const toast = document.getElementById("overlay-achievement");
  document.getElementById("ach-icon").textContent = ach.icon;
  document.getElementById("ach-name").textContent = ach.name;
  toast.classList.remove("hidden");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 500);
  }, 3200);
}

// ════════════════════════════════════════
// OVERLAY MENSAJES
// ════════════════════════════════════════
let messageQueue = [];
let messageOpen  = false;

function queueMessage(msg) {
  messageQueue.push(msg);
  if (!messageOpen) showNextMessage();
}

function showNextMessage() {
  if (!messageQueue.length) { messageOpen = false; return; }
  messageOpen = true;
  const msg = messageQueue.shift();
  document.getElementById("message-text").textContent = msg;
  document.getElementById("overlay-message").classList.remove("hidden");
}

document.getElementById("btn-close-message").addEventListener("click", () => {
  document.getElementById("overlay-message").classList.add("hidden");
  messageOpen = false;
  if (messageQueue.length) setTimeout(showNextMessage, 200);
});

// ════════════════════════════════════════
// CALLBACK: ITEM RECOLECTADO
// ════════════════════════════════════════
function onItemCollected(count) {
  const data = CHAR_DATA[State.selectedChar];
  const msg  = data.messages[count - 1] || "❤️ ...";
  queueMessage(msg);
  checkAchievements(count);

  if (count >= 10) {
    const check = setInterval(() => {
      if (!messageOpen && !messageQueue.length) {
        clearInterval(check);
        Game.stop();
        runLetterPhase();
      }
    }, 500);
  }
}

// ════════════════════════════════════════
// FASE 8: CARTA FINAL — por personaje
// ════════════════════════════════════════
async function runLetterPhase() {
  showScreen("screen-letter");
  const data = CHAR_DATA[State.selectedChar];

  const bootEl   = document.getElementById("letter-boot");
  const bootText = document.getElementById("letter-boot-text");
  bootEl.style.display = "block";

  const bootLines = [
    "Accediendo al archivo protegido...",
    `Desencriptando ${data.letterFile}...`,
    "Archivo desbloqueado ❤️",
  ];
  for (const line of bootLines) {
    await typeText(bootText, line, 40);
    await wait(700);
  }

  await wait(400);
  bootEl.style.display = "none";

  const container = document.getElementById("letter-container");
  const content   = document.getElementById("letter-content");
  container.classList.remove("hidden");
  content.innerHTML = "";

  for (const line of data.letter) {
    const p = document.createElement("p");
    p.style.marginBottom = "16px";
    p.innerHTML = line;
    p.style.opacity = "0";
    p.style.transform = "translateY(10px)";
    p.style.transition = "opacity 0.6s, transform 0.6s";
    content.appendChild(p);
    await wait(100);
    p.style.opacity = "1";
    p.style.transform = "translateY(0)";
    await wait(500);
  }
}

// ════════════════════════════════════════
// FASE 9: FINAL EMOTIVO — por personaje
// ════════════════════════════════════════
async function runEndPhase() {
  const data = CHAR_DATA[State.selectedChar];

  // Cambiar colores del fondo del final según personaje
  const endScreen = document.getElementById("screen-end");
  endScreen.style.background = data.endBg;

  // Actualizar textos del final
  const ids = ["end-l1","end-l2","end-l3","end-l4"];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) { el.textContent = data.endLines[i]; el.classList.remove("visible"); }
  });

  showScreen("screen-end");
  spawnEndParticles(data.endSymbols);

  await wait(400);
  document.getElementById("end-cats").classList.add("ready");

  await wait(1200);
  for (const id of ids) {
    await wait(400);
    document.getElementById(id).classList.add("visible");
  }
}

function spawnEndParticles(symbols) {
  const bg = document.getElementById("end-bg");
  bg.innerHTML = "";
  for (let i = 0; i < 32; i++) {
    const el = document.createElement("div");
    el.className = "fh";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-10px";
    el.style.animationDuration = (5 + Math.random() * 8) + "s";
    el.style.animationDelay    = (Math.random() * 4) + "s";
    el.style.fontSize = (0.8 + Math.random() * 1.5) + "rem";
    bg.appendChild(el);
  }
}

// ════════════════════════════════════════
// REINICIO
// ════════════════════════════════════════
function restart() {
  State.heartsCollected = 0;
  State.achievementsShown.clear();
  messageQueue = [];
  messageOpen  = false;

  document.getElementById("letter-container").classList.add("hidden");
  document.getElementById("end-cats").classList.remove("ready");

  showScreen("screen-boot");
  document.getElementById("boot-log").innerHTML = "";
  document.getElementById("btn-start-boot").classList.add("hidden");
  setTimeout(runBoot, 200);
}

// ════════════════════════════════════════
// SETUP DE EVENTOS
// ════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {

  runBoot();

  document.getElementById("btn-menu-start").addEventListener("click", () => {
    showScreen("screen-select");
  });

  document.querySelectorAll(".btn-char").forEach(btn => {
    btn.addEventListener("click", e => {
      const card = e.target.closest(".char-card");
      State.selectedChar = card.dataset.char;
      const data = CHAR_DATA[State.selectedChar];
      document.getElementById("hud-char").textContent =
        State.selectedChar === "noe" ? "Noe" : "Nini";
      document.getElementById("hud-char").style.color = data.hudColor;
      showScreen("screen-intro");
      runIntro();
    });
  });

  document.getElementById("btn-start-mission").addEventListener("click", () => {
    showScreen("screen-game");
    Game.init(State.selectedChar, onItemCollected);
  });

  document.getElementById("btn-end").addEventListener("click", runEndPhase);
  document.getElementById("btn-restart").addEventListener("click", restart);
});