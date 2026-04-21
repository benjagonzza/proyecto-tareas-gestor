const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

const pendientes = document.querySelector("#pendientes .tareas-container");
const progreso = document.querySelector("#en-progreso .tareas-container");
const completadas = document.querySelector("#completadas .tareas-container");

// =============================
// AGREGAR TAREA
// =============================
formulario.addEventListener("submit", function(e) {
    e.preventDefault();



    const tarea = document.getElementById("tarea").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const prioridad = document.getElementById("prioridad").value;
    const fecha = document.getElementById("fecha").value;

    if (!tarea || !descripcion || !prioridad || !fecha) {
        return;
    }

    

    // CREAR TARJETA
    const card = document.createElement("div");
    card.classList.add("tarea", "pendiente");

    card.innerHTML = `
        <h4>${tarea}</h4>
        <p>${descripcion}</p>
        <small>Prioridad: ${prioridad}</small><br>
        <small>Fecha: ${fecha}</small><br>
    `;

    // BOTONES
    const btnProgreso = document.createElement("button");
    btnProgreso.textContent = "→ En progreso";

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "✔ Completar";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    // EVENTOS BOTONES

    btnProgreso.addEventListener("click", () => {
    card.classList.remove("pendiente");
    card.classList.add("en-progreso");
    progreso.appendChild(card);
    actualizarContadores();
    });

    btnCompletar.addEventListener("click", () => {
        card.classList.remove("en-progreso");
        card.classList.add("completada");
        completadas.appendChild(card);
        actualizarContadores();
        
    });

    btnEliminar.addEventListener("click", () => {
        card.remove();
        actualizarContadores();
    });

    card.appendChild(btnProgreso);
    card.appendChild(btnCompletar);
    card.appendChild(btnEliminar);

    pendientes.appendChild(card);

    actualizarContadores();

    formulario.reset();

});

// =============================
// MENSAJE
// =============================
function mostrarMensaje(texto, color) {
    mensaje.textContent = texto;
    mensaje.style.color = color;
}

// =============================
// CONTADORES
// =============================
function actualizarContadores() {
    document.querySelector("#pendientes .contador").textContent =
        pendientes.children.length;

    document.querySelector("#en-progreso .contador").textContent =
        progreso.children.length;

    document.querySelector("#completadas .contador").textContent =
        completadas.children.length;
}