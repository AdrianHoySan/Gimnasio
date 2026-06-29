// ==========================================================================
// STATE MANAGEMENT & INITIAL DEMO DATA
// ==========================================================================

const DEFAULT_GOALS = {
  calories: 2300,
  protein: 160,
  carbs: 250,
  fats: 70,
  weight: 78.5,
  height: 178
};

const DEFAULT_ROUTINES = [
  {
    id: "r1",
    name: "Martes: DÍA 1 — Fuerza y Estabilidad",
    exercises: [
      {
        id: "e1",
        name: "Prensa de piernas",
        sets: [
          { weight: 150, reps: 10, done: false },
          { weight: 160, reps: 10, done: false },
          { weight: 170, reps: 8, done: false },
          { weight: 170, reps: 8, done: false }
        ]
      },
      {
        id: "e2",
        name: "Gemelos (en máquina o prensa)",
        sets: [
          { weight: 60, reps: 12, done: false },
          { weight: 60, reps: 12, done: false },
          { weight: 60, reps: 12, done: false },
          { weight: 60, reps: 12, done: false }
        ]
      },
      {
        id: "e3",
        name: "Jalón al pecho",
        sets: [
          { weight: 55, reps: 10, done: false },
          { weight: 60, reps: 10, done: false },
          { weight: 60, reps: 10, done: false },
          { weight: 65, reps: 8, done: false }
        ]
      },
      {
        id: "e4",
        name: "Press de banca con mancuernas",
        sets: [
          { weight: 24, reps: 8, done: false },
          { weight: 24, reps: 8, done: false },
          { weight: 26, reps: 8, done: false },
          { weight: 26, reps: 8, done: false }
        ]
      },
      {
        id: "e5",
        name: "Face Pull",
        sets: [
          { weight: 20, reps: 15, done: false },
          { weight: 20, reps: 15, done: false },
          { weight: 20, reps: 15, done: false }
        ]
      },
      {
        id: "e6",
        name: "Extensión de tríceps en polea (Agarre supino)",
        sets: [
          { weight: 15, reps: 12, done: false },
          { weight: 15, reps: 12, done: false },
          { weight: 15, reps: 12, done: false }
        ]
      },
      {
        id: "e7",
        name: "Curl de bíceps en polea",
        sets: [
          { weight: 20, reps: 12, done: false },
          { weight: 20, reps: 12, done: false },
          { weight: 20, reps: 12, done: false }
        ]
      }
    ]
  },
  {
    id: "r2",
    name: "Jueves: DÍA 2 — Variantes de Fuerza",
    exercises: [
      {
        id: "e8",
        name: "Sentadilla hack o multipower",
        sets: [
          { weight: 60, reps: 8, done: false },
          { weight: 70, reps: 8, done: false },
          { weight: 70, reps: 8, done: false },
          { weight: 80, reps: 8, done: false }
        ]
      },
      {
        id: "e9",
        name: "Curl de piernas acostado (Femoral)",
        sets: [
          { weight: 40, reps: 12, done: false },
          { weight: 45, reps: 10, done: false },
          { weight: 45, reps: 10, done: false },
          { weight: 45, reps: 10, done: false }
        ]
      },
      {
        id: "e10",
        name: "Remo en polea baja o máquina",
        sets: [
          { weight: 50, reps: 10, done: false },
          { weight: 55, reps: 10, done: false },
          { weight: 55, reps: 10, done: false },
          { weight: 60, reps: 8, done: false }
        ]
      },
      {
        id: "e11",
        name: "Press inclinado con mancuernas",
        sets: [
          { weight: 20, reps: 10, done: false },
          { weight: 22, reps: 10, done: false },
          { weight: 22, reps: 10, done: false },
          { weight: 22, reps: 10, done: false }
        ]
      },
      {
        id: "e12",
        name: "Elevaciones laterales en polea",
        sets: [
          { weight: 7.5, reps: 15, done: false },
          { weight: 7.5, reps: 12, done: false },
          { weight: 7.5, reps: 12, done: false }
        ]
      },
      {
        id: "e13",
        name: "Extensión de tríceps tras nuca en polea",
        sets: [
          { weight: 17.5, reps: 12, done: false },
          { weight: 17.5, reps: 12, done: false },
          { weight: 17.5, reps: 12, done: false }
        ]
      },
      {
        id: "e14",
        name: "Curl de bíceps alterno con mancuernas",
        sets: [
          { weight: 12, reps: 12, done: false },
          { weight: 12, reps: 12, done: false },
          { weight: 12, reps: 12, done: false }
        ]
      }
    ]
  },
  {
    id: "r3",
    name: "Sábado: DÍA 3 — Detalle e Intensidad en Pierna",
    exercises: [
      {
        id: "e16",
        name: "Máquina de Abductores (Fuera)",
        sets: [
          { weight: 50, reps: 15, done: false },
          { weight: 55, reps: 15, done: false },
          { weight: 55, reps: 15, done: false },
          { weight: 55, reps: 15, done: false }
        ]
      },
      {
        id: "e17",
        name: "Máquina de Aductores (Dentro)",
        sets: [
          { weight: 60, reps: 15, done: false },
          { weight: 65, reps: 15, done: false },
          { weight: 65, reps: 15, done: false },
          { weight: 65, reps: 15, done: false }
        ]
      },
      {
        id: "e18",
        name: "Remo unilateral con mancuerna",
        sets: [
          { weight: 26, reps: 10, done: false },
          { weight: 28, reps: 10, done: false },
          { weight: 28, reps: 10, done: false },
          { weight: 30, reps: 10, done: false }
        ]
      },
      {
        id: "e19",
        name: "Pec-deck",
        sets: [
          { weight: 35, reps: 12, done: false },
          { weight: 40, reps: 12, done: false },
          { weight: 40, reps: 12, done: false },
          { weight: 40, reps: 12, done: false }
        ]
      },
      {
        id: "e15",
        name: "Máquina de hombros",
        sets: [
          { weight: 25, reps: 12, done: false },
          { weight: 30, reps: 10, done: false },
          { weight: 30, reps: 10, done: false },
          { weight: 30, reps: 10, done: false }
        ]
      },
      {
        id: "e20",
        name: "Patada de tríceps en polea (Cable)",
        sets: [
          { weight: 10, reps: 12, done: false },
          { weight: 10, reps: 12, done: false },
          { weight: 10, reps: 12, done: false }
        ]
      },
      {
        id: "e21",
        name: "Curl de bíceps predicador",
        sets: [
          { weight: 25, reps: 12, done: false },
          { weight: 25, reps: 10, done: false },
          { weight: 25, reps: 10, done: false }
        ]
      }
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

const DEFAULT_DIET = [
  // Lunes (DayIndex 0)
  {
    dayName: "Lunes",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Queso fresco batido 0% (250 g)", calories: 120, protein: 20, carbs: 9, fats: 0, completed: false }
      ],
      Comida: [
        { name: "Pechuga de pollo (220 g)", calories: 240, protein: 50, carbs: 0, fats: 3, completed: false },
        { name: "Arroz integral (100 g)", calories: 350, protein: 7, carbs: 77, fats: 1, completed: false },
        { name: "Pimientos + Calabacín", calories: 40, protein: 1, carbs: 8, fats: 0, completed: false }
      ],
      Cena: [
        { name: "Hamburguesas de pollo y calabacín", calories: 280, protein: 35, carbs: 5, fats: 12, completed: false },
        { name: "Pepino", calories: 15, protein: 1, carbs: 3, fats: 0, completed: false }
      ]
    }
  },
  // Martes (DayIndex 1)
  {
    dayName: "Martes",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Pavo en lonchas (100 g)", calories: 100, protein: 20, carbs: 1, fats: 1, completed: false },
        { name: "Fruta (1 unidad)", calories: 80, protein: 0, carbs: 20, fats: 0, completed: false }
      ],
      Comida: [
        { name: "Libre controlado (Estimado)", calories: 700, protein: 40, carbs: 70, fats: 25, completed: false }
      ],
      Cena: [
        { name: "Tortilla de 2 huevos", calories: 150, protein: 13, carbs: 1, fats: 10, completed: false },
        { name: "Pollo a la plancha (150 g)", calories: 170, protein: 35, carbs: 0, fats: 2, completed: false },
        { name: "Patata hervida (250 g)", calories: 220, protein: 5, carbs: 50, fats: 0, completed: false }
      ]
    }
  },
  // Miércoles (DayIndex 2)
  {
    dayName: "Miércoles",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Huevos cocidos o revueltos (2 unidades)", calories: 150, protein: 13, carbs: 1, fats: 10, completed: false },
        { name: "Fruta (1 unidad)", calories: 80, protein: 0, carbs: 20, fats: 0, completed: false }
      ],
      Comida: [
        { name: "Albóndigas de pollo", calories: 320, protein: 38, carbs: 8, fats: 14, completed: false },
        { name: "Pasta (90 g)", calories: 320, protein: 11, carbs: 65, fats: 1, completed: false },
        { name: "Pimientos", calories: 20, protein: 0, carbs: 4, fats: 0, completed: false }
      ],
      Cena: [
        { name: "Alitas de pollo (5-6 piezas completas)", calories: 480, protein: 35, carbs: 0, fats: 36, completed: false },
        { name: "Calabacín o Pepino", calories: 20, protein: 1, carbs: 4, fats: 0, completed: false }
      ]
    }
  },
  // Jueves (DayIndex 3)
  {
    dayName: "Jueves",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Queso fresco batido 0% (250 g)", calories: 120, protein: 20, carbs: 9, fats: 0, completed: false }
      ],
      Comida: [
        { name: "Fajitas integrales (3 tortillas)", calories: 270, protein: 9, carbs: 45, fats: 5, completed: false },
        { name: "Pollo troceado (220 g)", calories: 240, protein: 50, carbs: 0, fats: 3, completed: false },
        { name: "Pimientos + Calabacín", calories: 40, protein: 1, carbs: 8, fats: 0, completed: false }
      ],
      Cena: [
        { name: "Hamburguesas de pollo y calabacín", calories: 280, protein: 35, carbs: 5, fats: 12, completed: false },
        { name: "Pepino", calories: 15, protein: 1, carbs: 3, fats: 0, completed: false }
      ]
    }
  },
  // Viernes (DayIndex 4)
  {
    dayName: "Viernes",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Pavo en lonchas (100 g)", calories: 100, protein: 20, carbs: 1, fats: 1, completed: false },
        { name: "Fruta (1 unidad)", calories: 80, protein: 0, carbs: 20, fats: 0, completed: false }
      ],
      Comida: [
        { name: "Pescado Emperador (220 g)", calories: 260, protein: 44, carbs: 0, fats: 8, completed: false },
        { name: "Patata asada (350 g)", calories: 300, protein: 7, carbs: 70, fats: 0, completed: false },
        { name: "Pimientos", calories: 20, protein: 0, carbs: 4, fats: 0, completed: false }
      ],
      Cena: [
        { name: "Tortilla de 2 huevos", calories: 150, protein: 13, carbs: 1, fats: 10, completed: false },
        { name: "Carne picada de pollo (150 g)", calories: 210, protein: 30, carbs: 0, fats: 9, completed: false }
      ]
    }
  },
  // Sábado (DayIndex 5)
  {
    dayName: "Sábado",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Huevos cocidos o revueltos (2 unidades)", calories: 150, protein: 13, carbs: 1, fats: 10, completed: false },
        { name: "Fruta (1 unidad)", calories: 80, protein: 0, carbs: 20, fats: 0, completed: false }
      ],
      Comida: [
        { name: "Muslo de pollo deshuesado (220 g)", calories: 350, protein: 42, carbs: 0, fats: 18, completed: false },
        { name: "Arroz (100 g)", calories: 350, protein: 7, carbs: 77, fats: 1, completed: false },
        { name: "Pimientos", calories: 20, protein: 0, carbs: 4, fats: 0, completed: false }
      ],
      Cena: [
        { name: "Pechuga de pollo (200 g)", calories: 220, protein: 46, carbs: 0, fats: 3, completed: false },
        { name: "Boniato al horno (250 g)", calories: 215, protein: 4, carbs: 50, fats: 0, completed: false }
      ]
    }
  },
  // Domingo (DayIndex 6)
  {
    dayName: "Domingo",
    meals: {
      Desayuno: [
        { name: "Avena", calories: 300, protein: 10, carbs: 53, fats: 5, completed: false },
        { name: "Leche semidesnatada (300 ml)", calories: 140, protein: 10, carbs: 14, fats: 5, completed: false },
        { name: "Plátano", calories: 100, protein: 1, carbs: 25, fats: 0, completed: false },
        { name: "Yogur proteico", calories: 80, protein: 12, carbs: 5, fats: 0, completed: false }
      ],
      Almuerzo: [
        { name: "Sándwich integral (100 g pavo + pan integral)", calories: 240, protein: 26, carbs: 27, fats: 3, completed: false }
      ],
      Comida: [
        { name: "Salmón a la plancha (220 g)", calories: 440, protein: 44, carbs: 0, fats: 28, completed: false },
        { name: "Patata hervida (300 g)", calories: 260, protein: 6, carbs: 60, fats: 0, completed: false },
        { name: "Calabacín", calories: 20, protein: 1, carbs: 4, fats: 0, completed: false }
      ],
      Cena: [
        { name: "Tortilla de 2 huevos", calories: 150, protein: 13, carbs: 1, fats: 10, completed: false },
        { name: "Pavo en lonchas (100 g)", calories: 100, protein: 20, carbs: 1, fats: 1, completed: false }
      ]
    }
  }
];

// App State
let state = {
  routines: [],
  logs: {},
  dietLogs: {}, // Stores diet day logs by YYYY-MM-DD
  goals: {},
  activeRoutineId: "",
  activeDietDayIndex: 0
};

// Global Chart instance
let progressChart = null;

// Helper to get YYYY-MM-DD date string for a day of the current week (0 = Mon, 6 = Sun)
function getDateStringForDayIndex(dayIndex) {
  const today = new Date();
  const currentDayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, etc.
  const diff = (dayIndex + 1) - (currentDayOfWeek === 0 ? 7 : currentDayOfWeek);
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);
  
  const yyyy = targetDate.getFullYear();
  const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const dd = String(targetDate.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

function initApp() {
  // Load from local storage or set defaults
  if (localStorage.getItem("fitTrackState")) {
    try {
      state = JSON.parse(localStorage.getItem("fitTrackState"));
      
      // Migración a dietLogs calendarizado o si es la versión anterior de rutinas/dieta
      const hasOldRoutines = state.routines && state.routines[0] && state.routines[0].exercises[0] && state.routines[0].exercises[0].name === "Press de Banca con Barra";
      const hasOldSabadoPrensa = state.routines && state.routines.some(r => r.id === "r3" && r.exercises.some(e => e.name === "Prensa de piernas (Detalle)"));
      const hasOldSabadoOrder = state.routines && state.routines.some(r => r.id === "r3" && r.exercises[0] && r.exercises[0].name === "Máquina de hombros");
      
      const needsMigration = state.diet || !state.dietLogs || hasOldRoutines || hasOldSabadoPrensa || hasOldSabadoOrder;
      
      if (needsMigration) {
        console.log("Migrando base de datos a formato personalizado del usuario...");
        state.dietLogs = {};
        delete state.diet;
        loadDefaults();
      }
    } catch (e) {
      console.error("Error reading localStorage, loading defaults instead", e);
      loadDefaults();
    }
  } else {
    loadDefaults();
  }

  // Ensure default states exist
  if (!state.routines || state.routines.length === 0) loadDefaults();

  // Set Current Date in Header
  setCurrentDateHeader();

  // Initialize UI components
  initTabNavigation();
  initRoutineSelectDropdown();
  initProgressTabDropdowns();
  initDietDaySelector();
  initProfileInputs();
  initModals();

  // Render everything
  renderActiveRoutine();
  renderDiet();
  renderProfile();
  updateChart();

  // Initialize Lucide Icons
  lucide.createIcons();
}

function loadDefaults() {
  state.routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
  state.logs = JSON.parse(JSON.stringify(DEFAULT_LOGS));
  state.dietLogs = {};
  state.goals = JSON.parse(JSON.stringify(DEFAULT_GOALS));
  state.activeRoutineId = state.routines[0].id;
  state.activeDietDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // Match today's day (0=Mon, 6=Sun)
  saveState();
}

function saveState() {
  localStorage.setItem("fitTrackState", JSON.stringify(state));
}

function setCurrentDateHeader() {
  const options = { weekday: 'long', day: 'numeric', month: 'short' };
  const today = new Date();
  let dateString = today.toLocaleDateString('es-ES', options);
  // Capitalize first letter
  dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);
  document.getElementById("current-date").textContent = dateString;
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

      // Set active nav item
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      // Set active pane
      tabPanes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === targetTabId) {
          pane.classList.add("active");
        }
      });

      // Special action on Tab entry
      if (targetTabId === "tab-progress") {
        setTimeout(updateChart, 50); // Small delay to let canvas layout trigger correctly
      }
    });
  });

  // Logo button/header avatar links to profile tab
  document.getElementById("header-profile-btn").addEventListener("click", () => {
    const profileNavItem = document.querySelector('.nav-item[data-tab="tab-profile"]');
    if (profileNavItem) profileNavItem.click();
  });
}

// ==========================================================================
// GYM ROUTINES COMPONENT
// ==========================================================================

function initRoutineSelectDropdown() {
  const select = document.getElementById("routine-select");
  select.innerHTML = "";
  
  state.routines.forEach(routine => {
    const option = document.createElement("option");
    option.value = routine.id;
    option.textContent = routine.name;
    if (routine.id === state.activeRoutineId) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    state.activeRoutineId = e.target.value;
    saveState();
    renderActiveRoutine();
  });
}

function renderActiveRoutine() {
  const container = document.getElementById("active-routine-container");
  container.innerHTML = "";

  const activeRoutine = state.routines.find(r => r.id === state.activeRoutineId);
  if (!activeRoutine) {
    container.innerHTML = "<p class='text-muted'>No hay rutinas creadas. Haz clic en 'Nueva' para añadir una.</p>";
    return;
  }

  // Render header info
  const headerInfo = document.createElement("div");
  headerInfo.className = "routine-header-info";
  headerInfo.innerHTML = `
    <span class="routine-title-text">${activeRoutine.name}</span>
    <button class="btn-icon delete-btn" title="Eliminar Rutina" onclick="deleteRoutine('${activeRoutine.id}')">
      <i data-lucide="trash-2"></i>
    </button>
  `;
  container.appendChild(headerInfo);

  // Render exercises
  if (activeRoutine.exercises.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "settings-card";
    emptyMsg.innerHTML = `
      <p class="text-muted" style="text-align:center; padding: 12px 0;">No tienes ejercicios en esta rutina.</p>
      <button class="btn-primary" onclick="openAddExerciseModal()">Añadir Ejercicio</button>
    `;
    container.appendChild(emptyMsg);
    lucide.createIcons();
    return;
  }

  activeRoutine.exercises.forEach((exercise, exerciseIndex) => {
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.setAttribute("data-exercise-id", exercise.id);

    // Exercise Header
    const exHeader = document.createElement("div");
    exHeader.className = "exercise-header";
    exHeader.innerHTML = `
      <div class="exercise-name-container">
        <div class="exercise-icon-indicator"></div>
        <span class="exercise-name">${exercise.name}</span>
      </div>
      <div class="exercise-actions">
        <button class="btn-icon delete-btn" title="Eliminar Ejercicio" onclick="deleteExercise('${activeRoutine.id}', '${exercise.id}')">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `;
    card.appendChild(exHeader);

    // Dynamic set rows
    const setsContainer = document.createElement("div");
    setsContainer.className = "sets-container";
    
    // Header for sets
    const setsHeader = document.createElement("div");
    setsHeader.className = "sets-table-header";
    setsHeader.innerHTML = `
      <span>Serie</span>
      <span style="text-align: center;">kg</span>
      <span style="text-align: center;">Reps</span>
      <span>Acción</span>
    `;
    setsContainer.appendChild(setsHeader);

    exercise.sets.forEach((set, setIndex) => {
      const setRow = document.createElement("div");
      setRow.className = `set-row ${set.done ? 'completed' : ''}`;
      setRow.innerHTML = `
        <span class="set-number">${setIndex + 1}</span>
        <div class="set-input-wrapper">
          <input type="number" step="0.5" class="set-input weight-input" value="${set.weight}" 
            onchange="updateSetData('${activeRoutine.id}', '${exercise.id}', ${setIndex}, 'weight', this.value)" 
            ${set.done ? 'disabled' : ''}>
        </div>
        <div class="set-input-wrapper">
          <input type="number" class="set-input reps-input" value="${set.reps}" 
            onchange="updateSetData('${activeRoutine.id}', '${exercise.id}', ${setIndex}, 'reps', this.value)" 
            ${set.done ? 'disabled' : ''}>
        </div>
        <button class="set-check-btn" onclick="toggleSetDone('${activeRoutine.id}', '${exercise.id}', ${setIndex})">
          <i data-lucide="${set.done ? 'check' : 'square'}"></i>
        </button>
      `;
      setsContainer.appendChild(setRow);
    });

    card.appendChild(setsContainer);

    // Add Set / Log controls
    const addSetBtn = document.createElement("button");
    addSetBtn.className = "btn-add-set";
    addSetBtn.innerHTML = `<i data-lucide="plus"></i> Añadir Serie`;
    addSetBtn.addEventListener("click", () => {
      addSetToExercise(activeRoutine.id, exercise.id);
    });
    card.appendChild(addSetBtn);

    // History summary inside card
    const exerciseHistory = state.logs[exercise.id] || [];
    if (exerciseHistory.length > 0) {
      const lastLog = exerciseHistory[exerciseHistory.length - 1];
      const historyBadge = document.createElement("div");
      historyBadge.className = "exercise-history-badge";
      historyBadge.innerHTML = `
        <span>Semana anterior:</span>
        <span class="history-weight">${lastLog.weight} kg × ${lastLog.reps} reps <small class="text-muted">(${lastLog.date})</small></span>
      `;
      card.appendChild(historyBadge);
    }

    container.appendChild(card);
  });

  // Render a master "Añadir Ejercicio" button at the bottom of the exercises list
  const bottomAction = document.createElement("div");
  bottomAction.style.marginTop = "8px";
  bottomAction.innerHTML = `
    <button class="btn-primary" onclick="openAddExerciseModal()">
      <i data-lucide="plus-circle"></i> Añadir Ejercicio
    </button>
  `;
  container.appendChild(bottomAction);

  lucide.createIcons();
}

// Gym routine logic helpers
window.updateSetData = function(routineId, exerciseId, setIndex, field, value) {
  const routine = state.routines.find(r => r.id === routineId);
  const exercise = routine.exercises.find(e => e.id === exerciseId);
  exercise.sets[setIndex][field] = parseFloat(value) || 0;
  saveState();
};

window.toggleSetDone = function(routineId, exerciseId, setIndex) {
  const routine = state.routines.find(r => r.id === routineId);
  const exercise = routine.exercises.find(e => e.id === exerciseId);
  const set = exercise.sets[setIndex];
  
  set.done = !set.done;

  // If completing set, automatically push to exercise history logs (only if it's the last completed set)
  if (set.done) {
    // Generate/update weekly log history for the Progress tab
    const dateToday = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    
    if (!state.logs[exerciseId]) {
      state.logs[exerciseId] = [];
    }

    // Check if there is already an entry for today to avoid duplicates, or update it
    const existingLogIdx = state.logs[exerciseId].findIndex(l => l.date === dateToday);
    const logData = { date: dateToday, weight: set.weight, reps: set.reps };

    if (existingLogIdx >= 0) {
      // Overwrite with latest completed set weight
      state.logs[exerciseId][existingLogIdx] = logData;
    } else {
      state.logs[exerciseId].push(logData);
    }
  }

  saveState();
  renderActiveRoutine();
  initProgressTabDropdowns(); // Refresh progress selections
};

window.addSetToExercise = function(routineId, exerciseId) {
  const routine = state.routines.find(r => r.id === routineId);
  const exercise = routine.exercises.find(e => e.id === exerciseId);
  
  // Copy weights/reps of the last set if available, else standard default values
  let lastWeight = 20;
  let lastReps = 10;
  if (exercise.sets.length > 0) {
    const lastSet = exercise.sets[exercise.sets.length - 1];
    lastWeight = lastSet.weight;
    lastReps = lastSet.reps;
  }

  exercise.sets.push({ weight: lastWeight, reps: lastReps, done: false });
  saveState();
  renderActiveRoutine();
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
    if (state.routines.length > 0) {
      state.activeRoutineId = state.routines[0].id;
    } else {
      state.activeRoutineId = "";
    }
    saveState();
    initRoutineSelectDropdown();
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

  // Compile all exercises that have logs
  let exerciseOptions = [];
  state.routines.forEach(r => {
    r.exercises.forEach(e => {
      // Add to dropdown if not already added
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
    if (opt.id === previousValue) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    updateChart();
  });
}

function updateChart() {
  const select = document.getElementById("progress-exercise-select");
  const exerciseId = select.value;
  const historyListContainer = document.getElementById("exercise-history-list");
  historyListContainer.innerHTML = "";

  if (!exerciseId || !state.logs[exerciseId] || state.logs[exerciseId].length === 0) {
    // Show empty chart placeholder
    renderEmptyChart();
    historyListContainer.innerHTML = "<p class='text-muted' style='text-align:center;'>Completa series con pesos para ver el historial aquí.</p>";
    return;
  }

  const logs = state.logs[exerciseId];
  
  // Render History List
  // Show history backwards (newest first)
  const reversedLogs = [...logs].reverse();
  reversedLogs.forEach(log => {
    const item = document.createElement("div");
    item.className = "history-item";
    
    // Estimate 1RM
    const oneRepMax = Math.round(log.weight * (1 + log.reps / 30));

    item.innerHTML = `
      <div class="history-item-date">${log.date}</div>
      <div class="history-item-details">
        <div class="history-item-weight">${log.weight} kg</div>
        <div class="history-item-reps">${log.reps} reps <span style="color:var(--color-primary);">[Est 1RM: ${oneRepMax}kg]</span></div>
      </div>
    `;
    historyListContainer.appendChild(item);
  });

  // Render Line Chart
  const labels = logs.map(l => l.date);
  const dataPoints = logs.map(l => l.weight);

  const ctx = document.getElementById("progressChart").getContext("2d");
  
  if (progressChart) {
    progressChart.destroy();
  }

  // Create gradient
  const purpleGradient = ctx.createLinearGradient(0, 0, 0, 200);
  purpleGradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
  purpleGradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)');

  // Selected exercise text header
  const exerciseName = select.options[select.selectedIndex]?.text || "Ejercicio";
  document.getElementById("selected-exercise-chart-title").textContent = exerciseName;

  progressChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Carga Max (kg)',
        data: dataPoints,
        borderColor: '#8b5cf6',
        borderWidth: 3,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: true,
        backgroundColor: purpleGradient
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#1f1f29',
          titleColor: '#f3f4f6',
          bodyColor: '#9ca3af',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          displayColors: false,
          padding: 10,
          callbacks: {
            label: function(context) {
              return ` Peso: ${context.parsed.y} kg`;
            }
          }
        }
      },
      scales: {
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#9ca3af',
            font: {
              family: 'Outfit',
              size: 11
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#9ca3af',
            font: {
              family: 'Outfit',
              size: 11
            }
          }
        }
      }
    }
  });
}

function renderEmptyChart() {
  const ctx = document.getElementById("progressChart").getContext("2d");
  if (progressChart) {
    progressChart.destroy();
  }
  
  document.getElementById("selected-exercise-chart-title").textContent = "Sin Datos Suficientes";

  progressChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [{
        data: [0, 0, 0, 0],
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: 'rgba(255,255,255,0.2)' } },
        x: { grid: { display: false }, ticks: { color: 'rgba(255,255,255,0.2)' } }
      }
    }
  });
}

// ==========================================================================
// DIETA (DIET) COMPONENT
// ==========================================================================

function initDietDaySelector() {
  const dayButtons = document.querySelectorAll(".day-btn");
  dayButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      dayButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeDietDayIndex = idx;
      saveState();
      renderDiet();
    });
  });
}

function renderDiet() {
  const dayButtons = document.querySelectorAll(".day-btn");
  dayButtons.forEach((btn, idx) => {
    // Update button text to include date
    const dateStr = getDateStringForDayIndex(idx);
    const dateParts = dateStr.split('-');
    const formattedDate = `${dateParts[2]}/${dateParts[1]}`;
    const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    btn.innerHTML = `${dayNames[idx]}<br><span style="font-size:0.65rem;opacity:0.6;font-weight:400;">${formattedDate}</span>`;
    
    if (idx === state.activeDietDayIndex) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Get date for the active day index
  const activeDateStr = getDateStringForDayIndex(state.activeDietDayIndex);
  
  // If no entry exists for this date, clone it from template
  if (!state.dietLogs) {
    state.dietLogs = {};
  }
  if (!state.dietLogs[activeDateStr]) {
    const template = DEFAULT_DIET[state.activeDietDayIndex];
    state.dietLogs[activeDateStr] = JSON.parse(JSON.stringify(template));
    saveState();
  }

  const dayData = state.dietLogs[activeDateStr];
  if (!dayData) return;

  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";

  // 1. Calculate totals for current day
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFats = 0;

  let eatenCalories = 0;
  let eatenProtein = 0;
  let eatenCarbs = 0;
  let eatenFats = 0;

  // Process all food items across meals
  const mealTypes = ["Desayuno", "Almuerzo", "Comida", "Cena"];
  
  mealTypes.forEach(mealKey => {
    const foods = dayData.meals[mealKey] || [];
    
    // Calculate totals
    foods.forEach(food => {
      totalCalories += food.calories || 0;
      totalProtein += food.protein || 0;
      totalCarbs += food.carbs || 0;
      totalFats += food.fats || 0;

      if (food.completed) {
        eatenCalories += food.calories || 0;
        eatenProtein += food.protein || 0;
        eatenCarbs += food.carbs || 0;
        eatenFats += food.fats || 0;
      }
    });

    // 2. Render UI Card for this meal type
    const mealSection = document.createElement("div");
    mealSection.className = "meal-section";

    // Header of meal (eg. Desayuno - 450 kcal)
    const mealSectionCal = foods.reduce((acc, curr) => acc + curr.calories, 0);
    const mealSectionHeader = document.createElement("div");
    mealSectionHeader.className = "meal-section-header";
    mealSectionHeader.innerHTML = `
      <div class="meal-title-group">
        <span class="meal-name">${mealKey}</span>
        <span class="meal-calories-summary">${mealSectionCal} kcal</span>
      </div>
      <button class="btn-primary-sm" onclick="openAddFoodModal('${state.activeDietDayIndex}', '${mealKey}')">
        <i data-lucide="plus"></i> Alimento
      </button>
    `;
    mealSection.appendChild(mealSectionHeader);

    // List of food items
    const cardItems = document.createElement("div");
    cardItems.className = "meal-card-items";

    if (foods.length === 0) {
      const emptyFood = document.createElement("div");
      emptyFood.className = "food-item-row";
      emptyFood.innerHTML = `<span class="text-muted" style="font-size:0.85rem; font-style:italic;">No hay alimentos registrados en esta comida.</span>`;
      cardItems.appendChild(emptyFood);
    } else {
      foods.forEach((food, foodIdx) => {
        const row = document.createElement("div");
        row.className = `food-item-row ${food.completed ? 'completed' : ''}`;
        
        row.innerHTML = `
          <div class="food-checkbox" onclick="toggleFoodEaten(${state.activeDietDayIndex}, '${mealKey}', ${foodIdx})">
            <i data-lucide="check"></i>
          </div>
          <div class="food-info" onclick="toggleFoodEaten(${state.activeDietDayIndex}, '${mealKey}', ${foodIdx})">
            <div class="food-title">${food.name}</div>
            <div class="food-macros">${food.calories} kcal • P: ${food.protein}g • HC: ${food.carbs}g • G: ${food.fats}g</div>
          </div>
          <div class="food-actions">
            <button class="btn-icon" onclick="openEditFoodModal(${state.activeDietDayIndex}, '${mealKey}', ${foodIdx})">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="btn-icon delete-btn" onclick="deleteFoodItem(${state.activeDietDayIndex}, '${mealKey}', ${foodIdx})">
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

  // 3. Update Progress Dashboard
  // Numbers
  document.getElementById("current-calories").textContent = eatenCalories;
  document.getElementById("target-calories").textContent = state.goals.calories;
  
  document.getElementById("current-protein").textContent = eatenProtein;
  document.getElementById("target-protein").textContent = state.goals.protein;
  
  document.getElementById("current-carbs").textContent = eatenCarbs;
  document.getElementById("target-carbs").textContent = state.goals.carbs;
  
  document.getElementById("current-fats").textContent = eatenFats;
  document.getElementById("target-fats").textContent = state.goals.fats;

  // Circular Calories Progress
  const circle = document.getElementById("calories-progress-ring");
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;

  const calPercent = Math.min(eatenCalories / state.goals.calories, 1);
  const offset = circumference - (calPercent * circumference);
  circle.style.strokeDashoffset = offset;

  // Progress Bars
  const pPercent = Math.min((eatenProtein / state.goals.protein) * 100, 100);
  document.getElementById("protein-progress-bar").style.width = `${pPercent}%`;

  const cPercent = Math.min((eatenCarbs / state.goals.carbs) * 100, 100);
  document.getElementById("carbs-progress-bar").style.width = `${cPercent}%`;

  const fPercent = Math.min((eatenFats / state.goals.fats) * 100, 100);
  document.getElementById("fats-progress-bar").style.width = `${fPercent}%`;

  lucide.createIcons();
}

window.toggleFoodEaten = function(dayIndex, mealKey, foodIdx) {
  const activeDateStr = getDateStringForDayIndex(dayIndex);
  const food = state.dietLogs[activeDateStr].meals[mealKey][foodIdx];
  food.completed = !food.completed;
  saveState();
  renderDiet();
};

window.deleteFoodItem = function(dayIndex, mealKey, foodIdx) {
  if (confirm("¿Seguro que quieres eliminar este alimento?")) {
    const activeDateStr = getDateStringForDayIndex(dayIndex);
    state.dietLogs[activeDateStr].meals[mealKey].splice(foodIdx, 1);
    saveState();
    renderDiet();
  }
};

// ==========================================================================
// PROFILE & SETTINGS COMPONENT
// ==========================================================================

function initProfileInputs() {
  // Sync HTML inputs from state
  document.getElementById("profile-weight").value = state.goals.weight;
  document.getElementById("profile-height").value = state.goals.height;
  document.getElementById("profile-calories").value = state.goals.calories;
  document.getElementById("profile-protein").value = state.goals.protein;
  document.getElementById("profile-carbs").value = state.goals.carbs;
  document.getElementById("profile-fats").value = state.goals.fats;

  // Event listener to save profile
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
    alert("¡Perfil y objetivos actualizados con éxito!");
  });

  // Shortcut inside Diet tab to go edit macros
  document.getElementById("btn-edit-diet-goals").addEventListener("click", () => {
    const profileTab = document.querySelector('.nav-item[data-tab="tab-profile"]');
    if (profileTab) profileTab.click();
    
    // Focus calories input
    setTimeout(() => {
      document.getElementById("profile-calories").focus();
      document.getElementById("profile-calories").scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  });

  // Reset and Clear Button Actions
  document.getElementById("btn-reset-demo").addEventListener("click", () => {
    if (confirm("¿Restablecer la base de datos a los valores por defecto de la demo? Perderás tus datos actuales.")) {
      loadDefaults();
      initRoutineSelectDropdown();
      initProgressTabDropdowns();
      renderActiveRoutine();
      renderDiet();
      renderProfile();
      updateChart();
      alert("Demo cargada correctamente.");
    }
  });

  document.getElementById("btn-clear-all").addEventListener("click", () => {
    if (confirm("ATENCIÓN: Se borrarán todas las rutinas, comidas e historiales. ¿Proceder?")) {
      state = {
        routines: [],
        logs: {},
        dietLogs: {},
        goals: { ...DEFAULT_GOALS },
        activeRoutineId: "",
        activeDietDayIndex: 0
      };
      saveState();
      initRoutineSelectDropdown();
      initProgressTabDropdowns();
      renderActiveRoutine();
      renderDiet();
      renderProfile();
      updateChart();
      alert("Todos los datos han sido eliminados.");
    }
  });
}

function renderProfile() {
  document.getElementById("profile-weight").value = state.goals.weight;
  document.getElementById("profile-height").value = state.goals.height;
  document.getElementById("profile-calories").value = state.goals.calories;
  document.getElementById("profile-protein").value = state.goals.protein;
  document.getElementById("profile-carbs").value = state.goals.carbs;
  document.getElementById("profile-fats").value = state.goals.fats;

  // Header Target calories updates
  document.getElementById("target-calories").textContent = state.goals.calories;
}

// ==========================================================================
// MODALS LOGIC
// ==========================================================================

function initModals() {
  // 1. Routine Modal Hooks
  const rModal = document.getElementById("routine-modal");
  const btnAddRoutine = document.getElementById("btn-add-routine");
  const btnCloseRoutine = document.getElementById("btn-close-routine-modal");
  const btnCancelRoutine = document.getElementById("btn-cancel-routine");
  const btnSaveRoutine = document.getElementById("btn-save-routine");

  btnAddRoutine.addEventListener("click", () => {
    document.getElementById("new-routine-name").value = "";
    rModal.classList.add("active");
  });

  const closeRoutineModal = () => rModal.classList.remove("active");
  btnCloseRoutine.addEventListener("click", closeRoutineModal);
  btnCancelRoutine.addEventListener("click", closeRoutineModal);

  btnSaveRoutine.addEventListener("click", () => {
    const name = document.getElementById("new-routine-name").value.trim();
    if (!name) {
      alert("Por favor, introduce un nombre para la rutina.");
      return;
    }
    const newRoutine = {
      id: "r_" + Date.now(),
      name: name,
      exercises: []
    };
    state.routines.push(newRoutine);
    state.activeRoutineId = newRoutine.id;
    saveState();
    
    // Refresh selects
    initRoutineSelectDropdown();
    renderActiveRoutine();
    closeRoutineModal();
  });

  // 2. Exercise Modal Hooks
  const eModal = document.getElementById("exercise-modal");
  const btnCloseExercise = document.getElementById("btn-close-exercise-modal");
  const btnCancelExercise = document.getElementById("btn-cancel-exercise");
  const btnSaveExercise = document.getElementById("btn-save-exercise");

  window.openAddExerciseModal = function() {
    document.getElementById("new-exercise-name").value = "";
    document.getElementById("new-exercise-sets").value = 3;
    eModal.classList.add("active");
  };

  const closeExerciseModal = () => eModal.classList.remove("active");
  btnCloseExercise.addEventListener("click", closeExerciseModal);
  btnCancelExercise.addEventListener("click", closeExerciseModal);

  btnSaveExercise.addEventListener("click", () => {
    const name = document.getElementById("new-exercise-name").value.trim();
    const setsCount = parseInt(document.getElementById("new-exercise-sets").value) || 3;

    if (!name) {
      alert("Por favor, introduce el nombre del ejercicio.");
      return;
    }

    const activeRoutine = state.routines.find(r => r.id === state.activeRoutineId);
    if (!activeRoutine) return;

    // Create empty sets
    const sets = Array.from({ length: setsCount }, () => ({
      weight: 20,
      reps: 10,
      done: false
    }));

    const newExercise = {
      id: "e_" + Date.now(),
      name: name,
      sets: sets
    };

    activeRoutine.exercises.push(newExercise);
    saveState();
    
    renderActiveRoutine();
    initProgressTabDropdowns(); // Refresh progress selections
    closeExerciseModal();
  });

  // 3. Meal / Food Modal Hooks
  const mModal = document.getElementById("meal-modal");
  const btnCloseMeal = document.getElementById("btn-close-meal-modal");
  const btnCancelMeal = document.getElementById("btn-cancel-meal");
  const btnSaveMeal = document.getElementById("btn-save-meal");

  window.openAddFoodModal = function(dayIndex, mealTypeName) {
    document.getElementById("meal-modal-title").textContent = `Añadir a ${mealTypeName}`;
    document.getElementById("meal-day-index").value = dayIndex;
    document.getElementById("meal-type-name").value = mealTypeName;
    document.getElementById("meal-item-index").value = "-1"; // indicates new food

    document.getElementById("meal-food-name").value = "";
    document.getElementById("meal-calories").value = 0;
    document.getElementById("meal-protein").value = 0;
    document.getElementById("meal-carbs").value = 0;
    document.getElementById("meal-fats").value = 0;

    mModal.classList.add("active");
  };

  window.openEditFoodModal = function(dayIndex, mealTypeName, foodIdx) {
    const activeDateStr = getDateStringForDayIndex(dayIndex);
    const food = state.dietLogs[activeDateStr].meals[mealTypeName][foodIdx];
    if (!food) return;

    document.getElementById("meal-modal-title").textContent = `Editar en ${mealTypeName}`;
    document.getElementById("meal-day-index").value = dayIndex;
    document.getElementById("meal-type-name").value = mealTypeName;
    document.getElementById("meal-item-index").value = foodIdx;

    document.getElementById("meal-food-name").value = food.name;
    document.getElementById("meal-calories").value = food.calories;
    document.getElementById("meal-protein").value = food.protein;
    document.getElementById("meal-carbs").value = food.carbs;
    document.getElementById("meal-fats").value = food.fats;

    mModal.classList.add("active");
  };

  const closeMealModal = () => mModal.classList.remove("active");
  btnCloseMeal.addEventListener("click", closeMealModal);
  btnCancelMeal.addEventListener("click", closeMealModal);

  btnSaveMeal.addEventListener("click", () => {
    const dayIndex = parseInt(document.getElementById("meal-day-index").value);
    const mealTypeName = document.getElementById("meal-type-name").value;
    const foodIdx = parseInt(document.getElementById("meal-item-index").value);

    const name = document.getElementById("meal-food-name").value.trim();
    const calories = parseInt(document.getElementById("meal-calories").value) || 0;
    const protein = parseInt(document.getElementById("meal-protein").value) || 0;
    const carbs = parseInt(document.getElementById("meal-carbs").value) || 0;
    const fats = parseInt(document.getElementById("meal-fats").value) || 0;

    if (!name) {
      alert("Por favor, introduce el nombre del alimento.");
      return;
    }

    const activeDateStr = getDateStringForDayIndex(dayIndex);
    const foodObject = {
      name,
      calories,
      protein,
      carbs,
      fats,
      completed: foodIdx >= 0 ? state.dietLogs[activeDateStr].meals[mealTypeName][foodIdx].completed : false
    };

    if (foodIdx >= 0) {
      // Editing
      state.dietLogs[activeDateStr].meals[mealTypeName][foodIdx] = foodObject;
    } else {
      // Creating new
      state.dietLogs[activeDateStr].meals[mealTypeName].push(foodObject);
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
