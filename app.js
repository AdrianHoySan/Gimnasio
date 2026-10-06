// ==========================================================================
// STATE MANAGEMENT & INITIAL DATA
// ==========================================================================

// Bump this when the default plan changes so existing users get the new plan
const DATA_VERSION = 4;

const DAY_NAMES = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DAY_SHORT = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const GROUP_COLORS = {
  "Pierna": "#34d399",
  "Pecho": "#f472b6",
  "Espalda": "#60a5fa",
  "Hombro": "#fbbf24",
  "Bíceps": "#a78bfa",
  "Tríceps": "#fb7185",
  "Abdomen": "#2dd4bf",
  "Final": "#94a3b8"
};

const MEAL_ICONS = {
  "Desayuno": "sunrise",
  "Almuerzo": "coffee",
  "Comida": "utensils",
  "Merienda": "apple",
  "Cena": "moon"
};

const DEFAULT_GOALS = {
  calories: 2300,
  protein: 160,
  carbs: 250,
  fats: 70,
  weight: 78.5,
  height: 178
};

// Helper to build N identical sets
function sets(count, weight, reps) {
  return Array.from({ length: count }, () => ({ weight, reps, done: false }));
}

// Same exercise on different days shares its id so its progress history is unified
const DEFAULT_ROUTINES = [
  {
    id: "lun",
    weekday: 0,
    name: "Full Body A",
    exercises: [
      { id: "e1", group: "Pierna", name: "Prensa", sets: [
        { weight: 150, reps: 10, done: false },
        { weight: 160, reps: 10, done: false },
        { weight: 170, reps: 8, done: false },
        { weight: 170, reps: 8, done: false }
      ] },
      { id: "e9", group: "Pierna", name: "Curl femoral", sets: sets(3, 45, 10) },
      { id: "e4", group: "Pecho", name: "Press banca mancuernas", sets: [
        { weight: 24, reps: 8, done: false },
        { weight: 24, reps: 8, done: false },
        { weight: 26, reps: 8, done: false },
        { weight: 26, reps: 8, done: false }
      ] },
      { id: "e3", group: "Espalda", name: "Jalón al pecho", sets: [
        { weight: 55, reps: 10, done: false },
        { weight: 60, reps: 10, done: false },
        { weight: 60, reps: 10, done: false },
        { weight: 65, reps: 8, done: false }
      ] },
      { id: "e22", group: "Hombro", name: "Press militar", sets: sets(3, 30, 10) },
      { id: "e7", group: "Bíceps", name: "Curl de bíceps", sets: sets(3, 20, 12) },
      { id: "e6", group: "Tríceps", name: "Extensión en polea", sets: sets(3, 15, 12) },
      { id: "e23", group: "Abdomen", name: "Crunch en polea", optional: true, sets: sets(3, 30, 15) },
      { id: "e2", group: "Final", name: "Gemelos", sets: sets(4, 60, 12) },
      { id: "e16", group: "Final", name: "Abductores", sets: sets(3, 55, 15) }
    ]
  },
  {
    id: "mie",
    weekday: 2,
    name: "Full Body B",
    exercises: [
      { id: "e8", group: "Pierna", name: "Hack", sets: [
        { weight: 60, reps: 8, done: false },
        { weight: 70, reps: 8, done: false },
        { weight: 70, reps: 8, done: false },
        { weight: 80, reps: 8, done: false }
      ] },
      { id: "e24", group: "Pierna", name: "Extensión de cuádriceps", sets: sets(3, 45, 12) },
      { id: "e11", group: "Pecho", name: "Press inclinado mancuernas", sets: [
        { weight: 20, reps: 10, done: false },
        { weight: 22, reps: 10, done: false },
        { weight: 22, reps: 10, done: false },
        { weight: 22, reps: 10, done: false }
      ] },
      { id: "e25", group: "Espalda", name: "Remo en T", sets: sets(4, 40, 10) },
      { id: "e12", group: "Hombro", name: "Elevaciones laterales", sets: sets(3, 7.5, 12) },
      { id: "e26", group: "Bíceps", name: "Curl martillo", sets: sets(3, 12, 12) },
      { id: "e27", group: "Tríceps", name: "Press francés", sets: sets(3, 20, 10) },
      { id: "e28", group: "Abdomen", name: "Elevación de piernas", optional: true, sets: sets(3, 0, 12) },
      { id: "e2", group: "Final", name: "Gemelos", sets: sets(4, 60, 12) },
      { id: "e17", group: "Final", name: "Aductores", sets: sets(3, 65, 15) }
    ]
  },
  {
    id: "vie",
    weekday: 4,
    name: "Full Body C",
    exercises: [
      { id: "e1", group: "Pierna", name: "Prensa", sets: [
        { weight: 150, reps: 10, done: false },
        { weight: 160, reps: 10, done: false },
        { weight: 170, reps: 8, done: false },
        { weight: 170, reps: 8, done: false }
      ] },
      { id: "e29", group: "Pierna", name: "Peso muerto rumano", optional: true, sets: sets(3, 50, 10) },
      { id: "e19", group: "Pecho", name: "Peck deck", sets: sets(3, 35, 12) },
      { id: "e18", group: "Espalda", name: "Remo a una mano", sets: [
        { weight: 26, reps: 10, done: false },
        { weight: 28, reps: 10, done: false },
        { weight: 28, reps: 10, done: false },
        { weight: 30, reps: 10, done: false }
      ] },
      { id: "e5", group: "Hombro", name: "Face pulls", sets: sets(3, 20, 15) },
      { id: "e7", group: "Bíceps", name: "Curl de bíceps", sets: sets(3, 20, 12) },
      { id: "e30", group: "Tríceps", name: "Extensión katana", sets: sets(3, 10, 12) },
      { id: "e31", group: "Abdomen", name: "Plancha", optional: true, unit: "seg", sets: sets(3, 0, 45) },
      { id: "e2", group: "Final", name: "Gemelos", sets: sets(4, 60, 12) }
    ]
  }
];

const DEFAULT_LOGS = {
  "e1": [
    { date: "15 May", weight: 130, reps: 10 },
    { date: "22 May", weight: 140, reps: 10 },
    { date: "29 May", weight: 140, reps: 10 },
    { date: "05 Jun", weight: 150, reps: 10 },
    { date: "12 Jun", weight: 150, reps: 10 },
    { date: "19 Jun", weight: 160, reps: 10 }
  ],
  "e4": [
    { date: "15 May", weight: 20, reps: 8 },
    { date: "22 May", weight: 22, reps: 8 },
    { date: "29 May", weight: 22, reps: 8 },
    { date: "05 Jun", weight: 24, reps: 8 },
    { date: "12 Jun", weight: 24, reps: 8 },
    { date: "19 Jun", weight: 26, reps: 8 }
  ],
  "e8": [
    { date: "15 May", weight: 50, reps: 8 },
    { date: "22 May", weight: 60, reps: 8 },
    { date: "29 May", weight: 60, reps: 8 },
    { date: "05 Jun", weight: 70, reps: 8 },
    { date: "12 Jun", weight: 70, reps: 8 },
    { date: "19 Jun", weight: 80, reps: 8 }
  ]
};

// Food catalogue (macros are estimates)
function food(name, calories, protein, carbs, fats, note) {
  const item = { name, calories, protein, carbs, fats, completed: false };
  if (note) item.note = note;
  return item;
}

const BREAKFAST = () => [
  food("Leche semidesnatada (200 ml)", 95, 7, 10, 3),
  food("Weetabix Original (2 galletas)", 135, 5, 25, 1),
  food("Plátano", 100, 1, 25, 0),
  food("Yogur proteico", 80, 12, 5, 0)
];

const DEFAULT_DIET = [
  {
    dayName: "Lunes",
    meals: {
      Desayuno: BREAKFAST(),
      Comida: [
        food("Pechuga de pollo (200 g)", 220, 46, 0, 3),
        food("Arroz (2 vasitos)", 380, 8, 80, 4),
        food("Pimientos", 30, 1, 6, 0)
      ],
      Merienda: [
        food("Queso batido 0% (250 g)", 120, 20, 9, 0),
        food("Manzana", 80, 0, 21, 0),
        food("Yogur proteico", 80, 12, 5, 0)
      ],
      Cena: [
        food("Hamburguesas de pollo (1 pack)", 330, 40, 6, 16),
        food("1 huevo o 2 claras", 70, 6, 0, 5),
        food("Patata (200 g)", 155, 4, 34, 0),
        food("Calabacín", 25, 2, 4, 0)
      ]
    }
  },
  {
    dayName: "Martes",
    meals: {
      Desayuno: BREAKFAST(),
      Comida: [
        food("Pollo troceado (200 g) con calabacín", 245, 47, 4, 3),
        food("Macarrones (100 g en crudo)", 355, 12, 71, 2),
        food("Tomate (100 g)", 20, 1, 4, 0)
      ],
      Merienda: [
        food("3 huevos cocidos", 210, 19, 1, 15),
        food("Pera", 90, 1, 23, 0),
        food("Yogur proteico", 80, 12, 5, 0)
      ],
      Cena: [
        food("Salmón (150 g)", 310, 30, 0, 21),
        food("Espárragos", 30, 3, 4, 0),
        food("Patata (250 g)", 190, 5, 43, 0)
      ]
    }
  },
  {
    dayName: "Miércoles",
    meals: {
      Desayuno: BREAKFAST(),
      Comida: [
        food("Albóndigas (250 g)", 400, 42, 10, 20),
        food("Patata (250 g)", 190, 5, 43, 0),
        food("Pepino", 15, 1, 3, 0)
      ],
      Merienda: [
        food("Pavo (100 g)", 100, 20, 1, 1),
        food("Yogur proteico", 80, 12, 5, 0),
        food("Manzana", 80, 0, 21, 0)
      ],
      Cena: [
        food("3 tortillas de fajita", 270, 8, 45, 6),
        food("Pechuga de pollo (200 g) con pimientos", 250, 47, 6, 3)
      ]
    }
  },
  {
    dayName: "Jueves",
    meals: {
      Desayuno: BREAKFAST(),
      Comida: [
        food("Pinchos de pollo (2)", 260, 44, 2, 8),
        food("Arroz (2 vasitos)", 380, 8, 80, 4),
        food("Calabacín", 25, 2, 4, 0)
      ],
      Merienda: [
        food("Queso batido 0% (250 g)", 120, 20, 9, 0),
        food("Pera", 90, 1, 23, 0),
        food("Yogur proteico", 80, 12, 5, 0)
      ],
      Cena: [
        food("Atún (200 g)", 290, 46, 0, 10),
        food("Espárragos", 30, 3, 4, 0),
        food("Patata (300 g)", 230, 6, 52, 0)
      ]
    }
  },
  {
    dayName: "Viernes",
    note: "Cena libre: añade lo que comas",
    meals: {
      Desayuno: BREAKFAST(),
      Comida: [
        food("Pollo o pechuga (250 g)", 275, 57, 0, 4),
        food("Macarrones (100 g en crudo)", 355, 12, 71, 2),
        food("Pimientos y calabacín", 45, 2, 8, 0),
        food("Tomate (100 g)", 20, 1, 4, 0)
      ],
      Merienda: [
        food("Pavo (100 g)", 100, 20, 1, 1),
        food("Yogur proteico", 80, 12, 5, 0),
        food("Fruta", 80, 0, 20, 0)
      ],
      Cena: []
    }
  },
  {
    dayName: "Sábado",
    note: "Fin de semana: sin plan fijo, añade lo que comas",
    meals: { Desayuno: BREAKFAST(), Comida: [], Merienda: [], Cena: [] }
  },
  {
    dayName: "Domingo",
    note: "Fin de semana: sin plan fijo, añade lo que comas",
    meals: { Desayuno: BREAKFAST(), Comida: [], Merienda: [], Cena: [] }
  }
];

// App State
let state = {
  dataVersion: DATA_VERSION,
  routines: [],
  logs: {},
  dietLogs: {}, // Stores diet day logs by YYYY-MM-DD
  goals: {},
  activeRoutineId: "",
  activeDietDayIndex: 0
};

// Global Chart instance
let progressChart = null;

// 0 = Mon ... 6 = Sun
function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}

// Helper to get YYYY-MM-DD date string for a day of the current week (0 = Mon, 6 = Sun)
function getDateStringForDayIndex(dayIndex) {
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + (dayIndex - getTodayIndex()));

  const yyyy = targetDate.getFullYear();
  const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const dd = String(targetDate.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function esc(text) {
  return String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

function initApp() {
  // Load from local storage or set defaults
  const saved = localStorage.getItem("fitTrackState");
  if (saved) {
    try {
      state = JSON.parse(saved);
      if (!state.routines || !state.goals) {
        loadDefaults();
      } else if ((state.dataVersion || 1) < DATA_VERSION) {
        migrateToNewPlan(state.dataVersion || 1);
      }
    } catch (e) {
      console.error("Error reading localStorage, loading defaults instead", e);
      loadDefaults();
    }
  } else {
    loadDefaults();
  }

  // Jump to today's routine if today is a gym day
  const todaysRoutine = state.routines.find(r => r.weekday === getTodayIndex());
  if (todaysRoutine) state.activeRoutineId = todaysRoutine.id;
  if (!state.routines.some(r => r.id === state.activeRoutineId) && state.routines.length > 0) {
    state.activeRoutineId = state.routines[0].id;
  }
  state.activeDietDayIndex = getTodayIndex();
  saveState();

  // Set Current Date in Header
  setCurrentDateHeader();

  // Initialize UI components
  initTabNavigation();
  initProgressTabDropdowns();
  initDietDaySelector();
  initProfileInputs();
  initModals();

  // Render everything
  renderRoutineChips();
  renderActiveRoutine();
  renderDiet();
  renderProfile();
  updateChart();

  // Initialize Lucide Icons
  lucide.createIcons();
}

function loadDefaults() {
  state.dataVersion = DATA_VERSION;
  state.routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
  state.logs = JSON.parse(JSON.stringify(DEFAULT_LOGS));
  state.dietLogs = {};
  state.goals = JSON.parse(JSON.stringify(DEFAULT_GOALS));
  state.activeRoutineId = state.routines[0].id;
  state.activeDietDayIndex = getTodayIndex();
  saveState();
}

// Swap in the new plan but keep the user's history and goals
// v2: new routines + diet, v3: new diet only, v4: new breakfast only
function migrateToNewPlan(fromVersion) {
  if (fromVersion < 2) {
    state.routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
  }
  state.logs = state.logs || {};

  const weekStart = getDateStringForDayIndex(0);
  const dietLogs = state.dietLogs || {};
  Object.keys(dietLogs).forEach(date => {
    if (date < weekStart) return;
    if (fromVersion < 3) {
      // Drop this week's (and later) diet logs so they regenerate from the new plan
      delete dietLogs[date];
    } else if (fromVersion < 4 && dietLogs[date].meals) {
      dietLogs[date].meals.Desayuno = BREAKFAST();
    }
  });
  state.dietLogs = dietLogs;
  delete state.diet;

  state.dataVersion = DATA_VERSION;
  saveState();
}

function saveState() {
  localStorage.setItem("fitTrackState", JSON.stringify(state));
}

function setCurrentDateHeader() {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  let dateString = new Date().toLocaleDateString('es-ES', options);
  dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);
  document.getElementById("current-date").textContent = dateString;

  const todaysRoutine = state.routines.find(r => r.weekday === getTodayIndex());
  document.getElementById("welcome-subtitle").textContent = todaysRoutine
    ? `Hoy toca ${todaysRoutine.name} 💪`
    : "Hoy toca descanso 🧘";
}

// ==========================================================================
// NAVIGATION HANDLER (TAB SWAP)
// ==========================================================================

function initTabNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const tabPanes = document.querySelectorAll(".tab-pane");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetTabId = item.getAttribute("data-tab");

      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      tabPanes.forEach(pane => {
        pane.classList.toggle("active", pane.id === targetTabId);
      });

      document.querySelector(".app-content").scrollTop = 0;

      if (targetTabId === "tab-progress") {
        setTimeout(updateChart, 50); // Small delay to let canvas layout trigger correctly
      }
    });
  });

  document.getElementById("header-profile-btn").addEventListener("click", () => {
    const profileNavItem = document.querySelector('.nav-item[data-tab="tab-profile"]');
    if (profileNavItem) profileNavItem.click();
  });
}

// ==========================================================================
// GYM ROUTINES COMPONENT
// ==========================================================================

function renderRoutineChips() {
  const container = document.getElementById("routine-chips");
  container.innerHTML = "";
  const todayIdx = getTodayIndex();

  state.routines.forEach(routine => {
    const chip = document.createElement("button");
    const hasDay = typeof routine.weekday === "number";
    chip.className = `routine-chip ${routine.id === state.activeRoutineId ? "active" : ""}`;
    chip.innerHTML = hasDay
      ? `<span class="chip-day">${DAY_SHORT[routine.weekday]}</span><span class="chip-sub">${esc(routine.name)}</span>${routine.weekday === todayIdx ? '<span class="chip-today">Hoy</span>' : ""}`
      : `<span class="chip-day">${esc(routine.name)}</span><span class="chip-sub">Personal</span>`;
    chip.addEventListener("click", () => {
      state.activeRoutineId = routine.id;
      saveState();
      renderRoutineChips();
      renderActiveRoutine();
    });
    container.appendChild(chip);
  });
}

function renderActiveRoutine() {
  const container = document.getElementById("active-routine-container");
  container.innerHTML = "";

  const activeRoutine = state.routines.find(r => r.id === state.activeRoutineId);
  if (!activeRoutine) {
    container.innerHTML = `
      <div class="empty-state">
        <i data-lucide="dumbbell"></i>
        <p>No hay rutinas creadas.<br>Pulsa <strong>Nueva</strong> para añadir una.</p>
      </div>`;
    lucide.createIcons();
    return;
  }

  const allSets = activeRoutine.exercises.flatMap(e => e.sets);
  const doneSets = allSets.filter(s => s.done).length;
  const percent = allSets.length ? Math.round((doneSets / allSets.length) * 100) : 0;
  const hasDay = typeof activeRoutine.weekday === "number";
  const isToday = hasDay && activeRoutine.weekday === getTodayIndex();

  // Hero summary card
  const hero = document.createElement("div");
  hero.className = "routine-hero";
  hero.innerHTML = `
    <div class="hero-top">
      <div>
        <span class="hero-kicker">${hasDay ? DAY_NAMES[activeRoutine.weekday] : "Rutina personal"}${isToday ? '<span class="badge-today">Hoy</span>' : ""}</span>
        <h3 class="hero-title">${esc(activeRoutine.name)}</h3>
      </div>
      <div class="hero-actions">
        <button class="btn-icon" title="Reiniciar series" onclick="resetRoutine('${activeRoutine.id}')">
          <i data-lucide="rotate-ccw"></i>
        </button>
        <button class="btn-icon delete-btn" title="Eliminar rutina" onclick="deleteRoutine('${activeRoutine.id}')">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><strong>${activeRoutine.exercises.length}</strong><span>ejercicios</span></div>
      <div class="hero-stat"><strong>${doneSets}/${allSets.length}</strong><span>series</span></div>
      <div class="hero-stat"><strong>${percent}%</strong><span>completado</span></div>
    </div>
    <div class="hero-progress"><div class="hero-progress-fill" style="width:${percent}%"></div></div>
  `;
  container.appendChild(hero);

  if (activeRoutine.exercises.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "empty-state";
    emptyMsg.innerHTML = `
      <i data-lucide="list-plus"></i>
      <p>No tienes ejercicios en esta rutina.</p>
      <button class="btn-primary" onclick="openAddExerciseModal()">Añadir Ejercicio</button>
    `;
    container.appendChild(emptyMsg);
    lucide.createIcons();
    return;
  }

  activeRoutine.exercises.forEach((exercise, exerciseIndex) => {
    const exDone = exercise.sets.filter(s => s.done).length;
    const allDone = exercise.sets.length > 0 && exDone === exercise.sets.length;
    const repsLabel = exercise.unit === "seg" ? "Seg" : "Reps";

    const card = document.createElement("div");
    card.className = `exercise-card ${allDone ? "all-done" : ""}`;
    card.setAttribute("data-exercise-id", exercise.id);
    card.style.setProperty("--group-color", GROUP_COLORS[exercise.group] || "var(--accent)");

    const exHeader = document.createElement("div");
    exHeader.className = "exercise-header";
    exHeader.innerHTML = `
      <div class="exercise-name-container">
        <span class="exercise-index">${allDone ? '<i data-lucide="check"></i>' : exerciseIndex + 1}</span>
        <div class="exercise-title-block">
          <span class="exercise-name">${esc(exercise.name)}</span>
          <div class="exercise-tags">
            ${exercise.group ? `<span class="tag tag-group">${exercise.group}</span>` : ""}
            ${exercise.optional ? '<span class="tag tag-optional">Opcional</span>' : ""}
            <span class="tag-count">${exDone}/${exercise.sets.length} series</span>
          </div>
        </div>
      </div>
      <button class="btn-icon delete-btn" title="Eliminar ejercicio" onclick="deleteExercise('${activeRoutine.id}', '${exercise.id}')">
        <i data-lucide="trash-2"></i>
      </button>
    `;
    card.appendChild(exHeader);

    const setsContainer = document.createElement("div");
    setsContainer.className = "sets-container";

    const setsHeader = document.createElement("div");
    setsHeader.className = "sets-table-header";
    setsHeader.innerHTML = `
      <span>Serie</span>
      <span>kg</span>
      <span>${repsLabel}</span>
      <span></span>
    `;
    setsContainer.appendChild(setsHeader);

    exercise.sets.forEach((set, setIndex) => {
      const setRow = document.createElement("div");
      setRow.className = `set-row ${set.done ? 'completed' : ''}`;
      setRow.innerHTML = `
        <span class="set-number">${setIndex + 1}</span>
        <input type="number" inputmode="decimal" step="0.5" class="set-input" value="${set.weight}"
          onchange="updateSetData('${activeRoutine.id}', '${exercise.id}', ${setIndex}, 'weight', this.value)"
          ${set.done ? 'disabled' : ''}>
        <input type="number" inputmode="numeric" class="set-input" value="${set.reps}"
          onchange="updateSetData('${activeRoutine.id}', '${exercise.id}', ${setIndex}, 'reps', this.value)"
          ${set.done ? 'disabled' : ''}>
        <button class="set-check-btn" aria-label="Marcar serie" onclick="toggleSetDone('${activeRoutine.id}', '${exercise.id}', ${setIndex})">
          <i data-lucide="check"></i>
        </button>
      `;
      setsContainer.appendChild(setRow);
    });

    card.appendChild(setsContainer);

    const addSetBtn = document.createElement("button");
    addSetBtn.className = "btn-add-set";
    addSetBtn.innerHTML = `<i data-lucide="plus"></i> Añadir serie`;
    addSetBtn.addEventListener("click", () => addSetToExercise(activeRoutine.id, exercise.id));
    card.appendChild(addSetBtn);

    const exerciseHistory = state.logs[exercise.id] || [];
    if (exerciseHistory.length > 0) {
      const lastLog = exerciseHistory[exerciseHistory.length - 1];
      const historyBadge = document.createElement("div");
      historyBadge.className = "exercise-history-badge";
      historyBadge.innerHTML = `
        <span><i data-lucide="history"></i> Último registro</span>
        <span class="history-weight">${lastLog.weight} kg × ${lastLog.reps} <small>(${lastLog.date})</small></span>
      `;
      card.appendChild(historyBadge);
    }

    container.appendChild(card);
  });

  const bottomAction = document.createElement("button");
  bottomAction.className = "btn-dashed";
  bottomAction.innerHTML = `<i data-lucide="plus-circle"></i> Añadir ejercicio`;
  bottomAction.addEventListener("click", () => openAddExerciseModal());
  container.appendChild(bottomAction);

  lucide.createIcons();
}

// Gym routine logic helpers
function findExercise(routineId, exerciseId) {
  const routine = state.routines.find(r => r.id === routineId);
  return routine.exercises.find(e => e.id === exerciseId);
}

window.updateSetData = function(routineId, exerciseId, setIndex, field, value) {
  findExercise(routineId, exerciseId).sets[setIndex][field] = parseFloat(value) || 0;
  saveState();
};

window.toggleSetDone = function(routineId, exerciseId, setIndex) {
  const set = findExercise(routineId, exerciseId).sets[setIndex];
  set.done = !set.done;

  // When completing a set, record it in the exercise history for the Progress tab
  if (set.done) {
    const dateToday = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    if (!state.logs[exerciseId]) state.logs[exerciseId] = [];

    const existingLogIdx = state.logs[exerciseId].findIndex(l => l.date === dateToday);
    const logData = { date: dateToday, weight: set.weight, reps: set.reps };
    if (existingLogIdx >= 0) {
      state.logs[exerciseId][existingLogIdx] = logData;
    } else {
      state.logs[exerciseId].push(logData);
    }
  }

  saveState();
  renderActiveRoutine();
  initProgressTabDropdowns();
};

window.addSetToExercise = function(routineId, exerciseId) {
  const exercise = findExercise(routineId, exerciseId);
  const lastSet = exercise.sets[exercise.sets.length - 1];
  exercise.sets.push({ weight: lastSet ? lastSet.weight : 20, reps: lastSet ? lastSet.reps : 10, done: false });
  saveState();
  renderActiveRoutine();
};

window.resetRoutine = function(routineId) {
  const routine = state.routines.find(r => r.id === routineId);
  routine.exercises.forEach(e => e.sets.forEach(s => { s.done = false; }));
  saveState();
  renderActiveRoutine();
  showToast("Series reiniciadas");
};

window.deleteExercise = function(routineId, exerciseId) {
  if (confirm("¿Estás seguro de que quieres eliminar este ejercicio de la rutina?")) {
    const routine = state.routines.find(r => r.id === routineId);
    routine.exercises = routine.exercises.filter(e => e.id !== exerciseId);
    saveState();
    renderActiveRoutine();
  }
};

window.deleteRoutine = function(routineId) {
  if (confirm("¿Estás seguro de que quieres eliminar toda la rutina?")) {
    state.routines = state.routines.filter(r => r.id !== routineId);
    state.activeRoutineId = state.routines.length > 0 ? state.routines[0].id : "";
    saveState();
    renderRoutineChips();
    renderActiveRoutine();
  }
};

// ==========================================================================
// PROGRESS TAB COMPONENT (CHART.JS)
// ==========================================================================

function initProgressTabDropdowns() {
  const select = document.getElementById("progress-exercise-select");
  const previousValue = select.value;
  select.innerHTML = "";

  let exerciseOptions = [];
  state.routines.forEach(r => {
    r.exercises.forEach(e => {
      if (!exerciseOptions.some(op => op.id === e.id)) {
        exerciseOptions.push({ id: e.id, name: e.name });
      }
    });
  });

  if (exerciseOptions.length === 0) {
    const opt = document.createElement("option");
    opt.textContent = "Ningún ejercicio registrado";
    select.appendChild(opt);
    return;
  }

  exerciseOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.id;
    option.textContent = opt.name;
    if (opt.id === previousValue) option.selected = true;
    select.appendChild(option);
  });

  select.onchange = updateChart;
}

function setProgressStats(best, oneRepMax, count) {
  document.getElementById("stat-best").textContent = best;
  document.getElementById("stat-1rm").textContent = oneRepMax;
  document.getElementById("stat-count").textContent = count;
}

function updateChart() {
  const select = document.getElementById("progress-exercise-select");
  const exerciseId = select.value;
  const historyListContainer = document.getElementById("exercise-history-list");
  historyListContainer.innerHTML = "";

  if (!exerciseId || !state.logs[exerciseId] || state.logs[exerciseId].length === 0) {
    renderEmptyChart();
    setProgressStats("–", "–", 0);
    historyListContainer.innerHTML = `
      <div class="empty-state">
        <i data-lucide="line-chart"></i>
        <p>Completa series de este ejercicio para ver aquí tu evolución.</p>
      </div>`;
    lucide.createIcons();
    return;
  }

  const logs = state.logs[exerciseId];
  const oneRepMaxOf = log => Math.round(log.weight * (1 + log.reps / 30));
  setProgressStats(
    `${Math.max(...logs.map(l => l.weight))} kg`,
    `${Math.max(...logs.map(oneRepMaxOf))} kg`,
    logs.length
  );

  // Newest first
  [...logs].reverse().forEach((log, i, arr) => {
    const prev = arr[i + 1];
    const diff = prev ? log.weight - prev.weight : 0;
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div class="history-item-date">${log.date}</div>
      <div class="history-item-details">
        <div class="history-item-weight">${log.weight} kg ${diff > 0 ? `<span class="trend-up">+${diff}</span>` : diff < 0 ? `<span class="trend-down">${diff}</span>` : ""}</div>
        <div class="history-item-reps">${log.reps} reps · 1RM est. ${oneRepMaxOf(log)} kg</div>
      </div>
    `;
    historyListContainer.appendChild(item);
  });

  const ctx = document.getElementById("progressChart").getContext("2d");
  if (progressChart) progressChart.destroy();

  const gradient = ctx.createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, 'rgba(167, 139, 250, 0.45)');
  gradient.addColorStop(1, 'rgba(167, 139, 250, 0)');

  document.getElementById("selected-exercise-chart-title").textContent =
    select.options[select.selectedIndex]?.text || "Ejercicio";

  progressChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: logs.map(l => l.date),
      datasets: [{
        label: 'Carga (kg)',
        data: logs.map(l => l.weight),
        borderColor: '#a78bfa',
        borderWidth: 3,
        pointBackgroundColor: '#a78bfa',
        pointBorderColor: '#14141c',
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.35,
        fill: true,
        backgroundColor: gradient
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1b1b26',
          titleColor: '#f4f4f6',
          bodyColor: '#a1a1b5',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          displayColors: false,
          padding: 10,
          callbacks: { label: context => ` ${context.parsed.y} kg` }
        }
      },
      scales: {
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          border: { display: false },
          ticks: { color: '#7c7c92', font: { family: 'Outfit', size: 11 } }
        },
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: '#7c7c92', font: { family: 'Outfit', size: 11 } }
        }
      }
    }
  });
}

function renderEmptyChart() {
  const ctx = document.getElementById("progressChart").getContext("2d");
  if (progressChart) progressChart.destroy();

  document.getElementById("selected-exercise-chart-title").textContent = "Sin datos todavía";

  progressChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [{
        data: [0, 0, 0, 0],
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        y: { grid: { color: 'rgba(255,255,255,0.03)' }, border: { display: false }, ticks: { color: 'rgba(255,255,255,0.2)' } },
        x: { grid: { display: false }, border: { display: false }, ticks: { color: 'rgba(255,255,255,0.2)' } }
      }
    }
  });
}

// ==========================================================================
// DIETA (DIET) COMPONENT
// ==========================================================================

function initDietDaySelector() {
  const container = document.querySelector(".day-selector");
  container.innerHTML = "";
  DAY_SHORT.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.className = "day-btn";
    btn.addEventListener("click", () => {
      state.activeDietDayIndex = idx;
      saveState();
      renderDiet();
    });
    container.appendChild(btn);
  });
}

function getDietDay(dayIndex) {
  const dateStr = getDateStringForDayIndex(dayIndex);
  if (!state.dietLogs) state.dietLogs = {};
  if (!state.dietLogs[dateStr]) {
    state.dietLogs[dateStr] = JSON.parse(JSON.stringify(DEFAULT_DIET[dayIndex]));
    saveState();
  }
  return state.dietLogs[dateStr];
}

function renderDiet() {
  const todayIdx = getTodayIndex();
  document.querySelectorAll(".day-btn").forEach((btn, idx) => {
    const day = getDateStringForDayIndex(idx).split('-')[2];
    const isGymDay = state.routines.some(r => r.weekday === idx);
    btn.innerHTML = `
      <span class="day-name">${DAY_SHORT[idx]}</span>
      <span class="day-date">${day}</span>
      <span class="gym-dot ${isGymDay ? "visible" : ""}"></span>
    `;
    btn.classList.toggle("active", idx === state.activeDietDayIndex);
    btn.classList.toggle("today", idx === todayIdx);
  });

  const dayIndex = state.activeDietDayIndex;
  const dayData = getDietDay(dayIndex);

  // Day banner: gym routine + plan note
  const banner = document.getElementById("diet-day-banner");
  const gymRoutine = state.routines.find(r => r.weekday === dayIndex);
  const bannerParts = [];
  if (gymRoutine) bannerParts.push(`<span class="banner-pill"><i data-lucide="dumbbell"></i> Gym · ${esc(gymRoutine.name)}</span>`);
  else bannerParts.push(`<span class="banner-pill rest"><i data-lucide="bed"></i> Descanso</span>`);
  if (dayData.note) bannerParts.push(`<span class="banner-note">${esc(dayData.note)}</span>`);
  banner.innerHTML = bannerParts.join("");

  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";

  const totals = { calories: 0, protein: 0, carbs: 0, fats: 0 };
  const eaten = { calories: 0, protein: 0, carbs: 0, fats: 0 };

  Object.keys(dayData.meals).forEach(mealKey => {
    const foods = dayData.meals[mealKey] || [];

    foods.forEach(f => {
      Object.keys(totals).forEach(k => {
        totals[k] += f[k] || 0;
        if (f.completed) eaten[k] += f[k] || 0;
      });
    });

    const mealSection = document.createElement("div");
    mealSection.className = "meal-section";

    const mealCalories = foods.reduce((acc, curr) => acc + (curr.calories || 0), 0);
    const mealDone = foods.length > 0 && foods.every(f => f.completed);
    const header = document.createElement("div");
    header.className = "meal-section-header";
    header.innerHTML = `
      <div class="meal-title-group">
        <span class="meal-icon ${mealDone ? "done" : ""}"><i data-lucide="${MEAL_ICONS[mealKey] || "utensils"}"></i></span>
        <div>
          <span class="meal-name">${esc(mealKey)}</span>
          <span class="meal-calories-summary">${mealCalories} kcal</span>
        </div>
      </div>
      <button class="btn-icon add-food-btn" title="Añadir alimento" onclick="openAddFoodModal(${dayIndex}, '${mealKey}')">
        <i data-lucide="plus"></i>
      </button>
    `;
    mealSection.appendChild(header);

    const cardItems = document.createElement("div");
    cardItems.className = "meal-card-items";

    if (foods.length === 0) {
      cardItems.innerHTML = `<div class="food-empty">Nada planificado</div>`;
    } else {
      foods.forEach((f, foodIdx) => {
        const row = document.createElement("div");
        row.className = `food-item-row ${f.completed ? 'completed' : ''}`;
        row.innerHTML = `
          <div class="food-checkbox" onclick="toggleFoodEaten(${dayIndex}, '${mealKey}', ${foodIdx})">
            <i data-lucide="check"></i>
          </div>
          <div class="food-info" onclick="toggleFoodEaten(${dayIndex}, '${mealKey}', ${foodIdx})">
            <div class="food-title">${esc(f.name)}</div>
            <div class="food-macros">
              <span class="kcal">${f.calories} kcal</span>
              <span class="m-p">P ${f.protein}</span>
              <span class="m-c">HC ${f.carbs}</span>
              <span class="m-f">G ${f.fats}</span>
            </div>
          </div>
          <div class="food-actions">
            <button class="btn-icon" title="Editar" onclick="openEditFoodModal(${dayIndex}, '${mealKey}', ${foodIdx})">
              <i data-lucide="pencil"></i>
            </button>
            <button class="btn-icon delete-btn" title="Eliminar" onclick="deleteFoodItem(${dayIndex}, '${mealKey}', ${foodIdx})">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        `;
        cardItems.appendChild(row);
      });
    }

    mealSection.appendChild(cardItems);
    mealsContainer.appendChild(mealSection);
  });

  // Dashboard numbers
  document.getElementById("current-calories").textContent = eaten.calories;
  document.getElementById("target-calories").textContent = state.goals.calories;
  document.getElementById("planned-calories").textContent = totals.calories;
  ["protein", "carbs", "fats"].forEach(k => {
    document.getElementById(`current-${k}`).textContent = eaten[k];
    document.getElementById(`target-${k}`).textContent = state.goals[k];
    document.getElementById(`${k}-progress-bar`).style.width =
      `${Math.min((eaten[k] / state.goals[k]) * 100, 100)}%`;
  });

  // Circular calories progress
  const circle = document.getElementById("calories-progress-ring");
  const circumference = circle.r.baseVal.value * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const calPercent = Math.min(eaten.calories / state.goals.calories, 1);
  circle.style.strokeDashoffset = circumference - calPercent * circumference;

  lucide.createIcons();
}

window.toggleFoodEaten = function(dayIndex, mealKey, foodIdx) {
  const f = getDietDay(dayIndex).meals[mealKey][foodIdx];
  f.completed = !f.completed;
  saveState();
  renderDiet();
};

window.deleteFoodItem = function(dayIndex, mealKey, foodIdx) {
  if (confirm("¿Seguro que quieres eliminar este alimento?")) {
    getDietDay(dayIndex).meals[mealKey].splice(foodIdx, 1);
    saveState();
    renderDiet();
  }
};

// ==========================================================================
// PROFILE & SETTINGS COMPONENT
// ==========================================================================

function refreshAll() {
  renderRoutineChips();
  initProgressTabDropdowns();
  renderActiveRoutine();
  renderDiet();
  renderProfile();
  updateChart();
}

function initProfileInputs() {
  document.getElementById("btn-save-profile").addEventListener("click", () => {
    state.goals.weight = parseFloat(document.getElementById("profile-weight").value) || DEFAULT_GOALS.weight;
    state.goals.height = parseInt(document.getElementById("profile-height").value) || DEFAULT_GOALS.height;
    state.goals.calories = parseInt(document.getElementById("profile-calories").value) || DEFAULT_GOALS.calories;
    state.goals.protein = parseInt(document.getElementById("profile-protein").value) || DEFAULT_GOALS.protein;
    state.goals.carbs = parseInt(document.getElementById("profile-carbs").value) || DEFAULT_GOALS.carbs;
    state.goals.fats = parseInt(document.getElementById("profile-fats").value) || DEFAULT_GOALS.fats;

    saveState();
    renderProfile();
    renderDiet();
    showToast("Perfil guardado ✓");
  });

  // Shortcut inside Diet tab to go edit macros
  document.getElementById("btn-edit-diet-goals").addEventListener("click", () => {
    const profileTab = document.querySelector('.nav-item[data-tab="tab-profile"]');
    if (profileTab) profileTab.click();
    setTimeout(() => {
      const input = document.getElementById("profile-calories");
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    }, 200);
  });

  document.getElementById("btn-reset-demo").addEventListener("click", () => {
    if (confirm("¿Cargar el plan por defecto (rutina + dieta)? Perderás tus datos actuales.")) {
      loadDefaults();
      refreshAll();
      showToast("Plan cargado ✓");
    }
  });

  document.getElementById("btn-clear-all").addEventListener("click", () => {
    if (confirm("ATENCIÓN: Se borrarán todas las rutinas, comidas e historiales. ¿Proceder?")) {
      state = {
        dataVersion: DATA_VERSION,
        routines: [],
        logs: {},
        dietLogs: {},
        goals: { ...DEFAULT_GOALS },
        activeRoutineId: "",
        activeDietDayIndex: getTodayIndex()
      };
      saveState();
      refreshAll();
      showToast("Datos borrados");
    }
  });
}

function renderProfile() {
  ["weight", "height", "calories", "protein", "carbs", "fats"].forEach(k => {
    document.getElementById(`profile-${k}`).value = state.goals[k];
  });

  const height = state.goals.height / 100;
  const bmi = height > 0 ? (state.goals.weight / (height * height)).toFixed(1) : "–";
  document.getElementById("profile-bmi").textContent = bmi;
  document.getElementById("profile-weight-stat").textContent = state.goals.weight;
  document.getElementById("profile-days").textContent =
    state.routines.filter(r => typeof r.weekday === "number").map(r => DAY_SHORT[r.weekday]).join(" · ") || "–";
}

// ==========================================================================
// MODALS LOGIC
// ==========================================================================

function initModals() {
  // Close any modal by tapping the backdrop
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.remove("active");
    });
  });

  // 1. Routine Modal Hooks
  const rModal = document.getElementById("routine-modal");
  const closeRoutineModal = () => rModal.classList.remove("active");

  document.getElementById("btn-add-routine").addEventListener("click", () => {
    document.getElementById("new-routine-name").value = "";
    rModal.classList.add("active");
  });
  document.getElementById("btn-close-routine-modal").addEventListener("click", closeRoutineModal);
  document.getElementById("btn-cancel-routine").addEventListener("click", closeRoutineModal);

  document.getElementById("btn-save-routine").addEventListener("click", () => {
    const name = document.getElementById("new-routine-name").value.trim();
    if (!name) {
      showToast("Introduce un nombre para la rutina");
      return;
    }
    const newRoutine = { id: "r_" + Date.now(), name, exercises: [] };
    state.routines.push(newRoutine);
    state.activeRoutineId = newRoutine.id;
    saveState();

    renderRoutineChips();
    renderActiveRoutine();
    closeRoutineModal();
  });

  // 2. Exercise Modal Hooks
  const eModal = document.getElementById("exercise-modal");
  const closeExerciseModal = () => eModal.classList.remove("active");

  window.openAddExerciseModal = function() {
    document.getElementById("new-exercise-name").value = "";
    document.getElementById("new-exercise-group").value = "";
    document.getElementById("new-exercise-sets").value = 3;
    eModal.classList.add("active");
  };
  document.getElementById("btn-close-exercise-modal").addEventListener("click", closeExerciseModal);
  document.getElementById("btn-cancel-exercise").addEventListener("click", closeExerciseModal);

  document.getElementById("btn-save-exercise").addEventListener("click", () => {
    const name = document.getElementById("new-exercise-name").value.trim();
    const group = document.getElementById("new-exercise-group").value;
    const setsCount = parseInt(document.getElementById("new-exercise-sets").value) || 3;

    if (!name) {
      showToast("Introduce el nombre del ejercicio");
      return;
    }

    const activeRoutine = state.routines.find(r => r.id === state.activeRoutineId);
    if (!activeRoutine) return;

    const newExercise = { id: "e_" + Date.now(), name, sets: sets(setsCount, 20, 10) };
    if (group) newExercise.group = group;
    activeRoutine.exercises.push(newExercise);
    saveState();

    renderActiveRoutine();
    initProgressTabDropdowns();
    closeExerciseModal();
  });

  // 3. Meal / Food Modal Hooks
  const mModal = document.getElementById("meal-modal");
  const closeMealModal = () => mModal.classList.remove("active");

  const fillFoodForm = (title, dayIndex, mealTypeName, foodIdx, f) => {
    document.getElementById("meal-modal-title").textContent = title;
    document.getElementById("meal-day-index").value = dayIndex;
    document.getElementById("meal-type-name").value = mealTypeName;
    document.getElementById("meal-item-index").value = foodIdx;
    document.getElementById("meal-food-name").value = f.name;
    document.getElementById("meal-calories").value = f.calories;
    document.getElementById("meal-protein").value = f.protein;
    document.getElementById("meal-carbs").value = f.carbs;
    document.getElementById("meal-fats").value = f.fats;
    mModal.classList.add("active");
  };

  window.openAddFoodModal = function(dayIndex, mealTypeName) {
    fillFoodForm(`Añadir a ${mealTypeName}`, dayIndex, mealTypeName, -1, food("", 0, 0, 0, 0));
  };

  window.openEditFoodModal = function(dayIndex, mealTypeName, foodIdx) {
    const f = getDietDay(dayIndex).meals[mealTypeName][foodIdx];
    if (f) fillFoodForm(`Editar en ${mealTypeName}`, dayIndex, mealTypeName, foodIdx, f);
  };

  document.getElementById("btn-close-meal-modal").addEventListener("click", closeMealModal);
  document.getElementById("btn-cancel-meal").addEventListener("click", closeMealModal);

  document.getElementById("btn-save-meal").addEventListener("click", () => {
    const dayIndex = parseInt(document.getElementById("meal-day-index").value);
    const mealTypeName = document.getElementById("meal-type-name").value;
    const foodIdx = parseInt(document.getElementById("meal-item-index").value);

    const name = document.getElementById("meal-food-name").value.trim();
    if (!name) {
      showToast("Introduce el nombre del alimento");
      return;
    }

    const meal = getDietDay(dayIndex).meals[mealTypeName];
    const foodObject = {
      ...(foodIdx >= 0 ? meal[foodIdx] : {}),
      name,
      calories: parseInt(document.getElementById("meal-calories").value) || 0,
      protein: parseInt(document.getElementById("meal-protein").value) || 0,
      carbs: parseInt(document.getElementById("meal-carbs").value) || 0,
      fats: parseInt(document.getElementById("meal-fats").value) || 0,
      completed: foodIdx >= 0 ? meal[foodIdx].completed : false
    };

    if (foodIdx >= 0) {
      meal[foodIdx] = foodObject;
    } else {
      meal.push(foodObject);
    }

    saveState();
    renderDiet();
    closeMealModal();
  });
}

// ==========================================================================
// START APP
// ==========================================================================
document.addEventListener("DOMContentLoaded", initApp);
