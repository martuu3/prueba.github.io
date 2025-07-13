const cursos = [
    // Nivel 1
    {
        id: 'MCST1007',
        nombre: 'SALUD Y SOCIEDAD',
        creditos: 0,
        semestre: 1,
        prerrequisitos: [],
        descripcion: 'Curso introductorio sobre la salud en el contexto social.',
        estado: 'pendiente'
    },
    {
        id: 'NANT1001',
        nombre: 'ANATOMÍA HUMANA',
        creditos: 0,
        semestre: 1,
        prerrequisitos: [],
        descripcion: 'Estudio de la estructura del cuerpo humano.',
        estado: 'pendiente'
    },
    {
        id: 'NPST1004',
        nombre: 'PSICOLOGÍA EN EL CURSO DE LA VIDA',
        creditos: 0,
        semestre: 1,
        prerrequisitos: [],
        descripcion: 'Exploración de los procesos psicológicos a lo largo del desarrollo humano.',
        estado: 'pendiente'
    },
    {
        id: 'NQBT1004',
        nombre: 'QUÍMICA Y BIOQUÍMICA',
        creditos: 0,
        semestre: 1,
        prerrequisitos: [],
        descripcion: 'Fundamentos de química y bioquímica aplicados a la salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUB1021',
        nombre: 'INTEGRADO HISTOEMBRIOLOGÍA',
        creditos: 0,
        semestre: 1,
        prerrequisitos: [],
        descripcion: 'Estudio integrado de histología y embriología.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1001',
        nombre: 'FUNDAMENTO DE LA MATRONERÍA',
        creditos: 0,
        semestre: 1,
        prerrequisitos: [],
        descripcion: 'Bases y principios fundamentales de la matronería.',
        estado: 'pendiente'
    },

    // Nivel 2
    {
        id: 'NCBT1008',
        nombre: 'MICROBIOLOGÍA',
        creditos: 0,
        semestre: 2,
        prerrequisitos: [],
        descripcion: 'Estudio de microorganismos y su relación con la salud.',
        estado: 'pendiente'
    },
    {
        id: 'NPST1005',
        nombre: 'PSICOLOGÍA PARA LA ATENCIÓN EN SALUD',
        creditos: 0,
        semestre: 2,
        prerrequisitos: ['NPST1004'],
        descripcion: 'Aplicación de principios psicológicos en la atención de salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1002',
        nombre: 'SEMIOLOGÍA GENERAL',
        creditos: 0,
        semestre: 2,
        prerrequisitos: ['NANT1001'],
        descripcion: 'Principios y técnicas de la semiología médica general.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1003',
        nombre: 'ANATOMÍA GINECOOBSTETRICIA',
        creditos: 0,
        semestre: 2,
        prerrequisitos: ['NANT1001'],
        descripcion: 'Estudio anatómico del sistema reproductivo femenino y estructuras relacionadas con la obstetricia.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1004',
        nombre: 'BASES DEL FUNCIONAMIENTO HUMANO Y SUS ALTERACIONES',
        creditos: 0,
        semestre: 2,
        prerrequisitos: ['NQBT1004', 'OPUB1021'],
        descripcion: 'Exploración de la fisiología humana y las principales patologías.',
        estado: 'pendiente'
    },
    {
        id: 'OPUL1001',
        nombre: 'ELECTIVO 1 OBSTETRICIA Y PUERICULTURA',
        creditos: 0,
        semestre: 2,
        prerrequisitos: [],
        descripcion: 'Asignatura electiva en obstetricia y puericultura.',
        estado: 'pendiente'
    },

    // Nivel 3
    {
        id: 'OPUD1007',
        nombre: 'OBSTETRICIA I',
        creditos: 0,
        semestre: 3,
        prerrequisitos: ['OPUD1003', 'OPUD1004'],
        descripcion: 'Introducción a los principios básicos de la obstetricia.',
        estado: 'pendiente'
    },
    {
        id: 'MCST1006',
        nombre: 'SALUD FAMILIAR Y COMUNITARIA',
        creditos: 0,
        semestre: 3,
        prerrequisitos: ['OPUD1001', 'MCST1007'],
        descripcion: 'Enfoque en la salud desde la perspectiva familiar y comunitaria.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1005',
        nombre: 'CUIDADOS CLÍNICOS EN MATRONERÍA',
        creditos: 0,
        semestre: 3,
        prerrequisitos: ['OPUD1002'],
        descripcion: 'Práctica de cuidados clínicos esenciales en el ámbito de la matronería.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1008',
        nombre: 'NEONATOLOGÍA I',
        creditos: 0,
        semestre: 3,
        prerrequisitos: ['OPUD1004'],
        descripcion: 'Introducción a los cuidados y patologías del recién nacido.',
        estado: 'pendiente'
    },
    {
        id: 'NSPT1002',
        nombre: 'SALUD PÚBLICA',
        creditos: 0,
        semestre: 3,
        prerrequisitos: [],
        descripcion: 'Principios y fundamentos de la salud pública.',
        estado: 'pendiente'
    },
    {
        id: 'OPUL1002',
        nombre: 'ELECTIVO 2 OBSTETRICIA Y PUERICULTURA',
        creditos: 0,
        semestre: 3,
        prerrequisitos: [],
        descripcion: 'Asignatura electiva avanzada en obstetricia y puericultura.',
        estado: 'pendiente'
    },

    // Nivel 4
    {
        id: 'MCST1001',
        nombre: 'BIOÉTICA',
        creditos: 0,
        semestre: 4,
        prerrequisitos: [],
        descripcion: 'Principios éticos aplicados a la biología y la medicina.',
        estado: 'pendiente'
    },
    {
        id: 'MCST1004',
        nombre: 'INTELIGENCIA ARTIFICIAL APLICADA A LA SALUD',
        creditos: 0,
        semestre: 4,
        prerrequisitos: [],
        descripcion: 'Introducción a la IA y sus aplicaciones en el sector salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1009',
        nombre: 'FARMACOLOGÍA DISCIPLINAR',
        creditos: 0,
        semestre: 4,
        prerrequisitos: ['NCBT1008', 'OPUD1004'],
        descripcion: 'Estudio de los fármacos y su acción, específicos para la disciplina.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1010',
        nombre: 'SEXUALIDAD, GÉNERO Y DIVERSIDADES',
        creditos: 0,
        semestre: 4,
        prerrequisitos: ['NPST1005', 'OPUD1003'],
        descripcion: 'Análisis de la sexualidad, género y las diversidades desde una perspectiva de salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1011',
        nombre: 'OBSTETRICIA II',
        creditos: 0,
        semestre: 4,
        prerrequisitos: ['OPUD1005', 'OPUD1007'],
        descripcion: 'Continuación de obstetricia, profundizando en aspectos clínicos.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1012',
        nombre: 'NEONATOLOGÍA II',
        creditos: 0,
        semestre: 4,
        prerrequisitos: ['OPUD1005', 'OPUD1008'],
        descripcion: 'Estudio avanzado de los cuidados y patologías neonatales.',
        estado: 'pendiente'
    },

    // Nivel 5
    {
        id: 'OPUD1014',
        nombre: 'MATRONERÍA INTEGRADA I',
        creditos: 0,
        semestre: 5,
        prerrequisitos: ['MCST1006', 'OPUD1011', 'OPUD1012'],
        descripcion: 'Integración de conocimientos de matronería en casos clínicos complejos.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1015',
        nombre: 'SEXOLOGÍA',
        creditos: 0,
        semestre: 5,
        prerrequisitos: ['OPUD1004', 'OPUD1010'],
        descripcion: 'Estudio de la sexología en el contexto de la salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1016',
        nombre: 'GINECOLOGÍA I',
        creditos: 0,
        semestre: 5,
        prerrequisitos: ['MCST1006', 'OPUD1009'],
        descripcion: 'Introducción a la ginecología y sus afecciones.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1017',
        nombre: 'OBSTETRICIA III',
        creditos: 0,
        semestre: 5,
        prerrequisitos: ['OPUD1009', 'OPUD1011'],
        descripcion: 'Profundización en temas complejos de obstetricia.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1018',
        nombre: 'NEONATOLOGÍA III',
        creditos: 0,
        semestre: 5,
        prerrequisitos: ['OPUD1009', 'OPUD1012'],
        descripcion: 'Aspectos avanzados de neonatología y situaciones críticas.',
        estado: 'pendiente'
    },

    // Nivel 6
    {
        id: 'NMAT1004',
        nombre: 'BIOESTADÍSTICA',
        creditos: 0,
        semestre: 6,
        prerrequisitos: [],
        descripcion: 'Aplicación de la estadística en el ámbito de la salud y la biología.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1019',
        nombre: 'REGULACIÓN DE LA FECUNDIDAD',
        creditos: 0,
        semestre: 6,
        prerrequisitos: ['OPUD1015', 'OPUD1016'],
        descripcion: 'Estudio de los métodos y políticas de regulación de la fecundidad.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1020',
        nombre: 'GINECOLOGÍA II',
        creditos: 0,
        semestre: 6,
        prerrequisitos: ['OPUD1016'],
        descripcion: 'Continuación del estudio de la ginecología, abordando más patologías y tratamientos.',
        estado: 'pendiente'
    },
    {
        id: 'OPUL1003',
        nombre: 'ELECTIVO 3 OBSTETRICIA Y PUERICULTURA',
        creditos: 0,
        semestre: 6,
        prerrequisitos: [],
        descripcion: 'Tercera asignatura electiva en obstetricia y puericultura.',
        estado: 'pendiente'
    },

    // Nivel 7
    {
        id: 'NACT1002',
        nombre: 'MÉTODOS DE INVESTIGACIÓN EN SALUD',
        creditos: 0,
        semestre: 7,
        prerrequisitos: ['NMAT1004'],
        descripcion: 'Aprendizaje de metodologías para la investigación en el área de la salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1021',
        nombre: 'MATRONERÍA INTEGRADA II',
        creditos: 0,
        semestre: 7,
        prerrequisitos: ['OPUD1014', 'OPUD1017', 'OPUD1018', 'OPUD1019', 'OPUD1020'],
        descripcion: 'Integración avanzada de conocimientos de matronería y gestión de casos complejos.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1022',
        nombre: 'GESTIÓN Y CALIDAD EN SALUD',
        creditos: 0,
        semestre: 7,
        prerrequisitos: [],
        descripcion: 'Principios de gestión y aseguramiento de la calidad en servicios de salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1023',
        nombre: 'HABILIDADES PARA EL DESEMPEÑO PROFESIONAL',
        creditos: 0,
        semestre: 7,
        prerrequisitos: [],
        descripcion: 'Desarrollo de competencias clave para el ejercicio profesional.',
        estado: 'pendiente'
    },
    {
        id: 'OPUL1004',
        nombre: 'ELECTIVO 4 OBSTETRICIA Y PUERICULTURA',
        creditos: 0,
        semestre: 7,
        prerrequisitos: [],
        descripcion: 'Cuarta asignatura electiva en obstetricia y puericultura.',
        estado: 'pendiente'
    },

    // Nivel 8
    {
        id: 'NEMT1004',
        nombre: 'PROYECTO DE EMPRENDIMIENTO E INNOVACIÓN',
        creditos: 0,
        semestre: 8,
        prerrequisitos: [],
        descripcion: 'Desarrollo de proyectos de emprendimiento e innovación en salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1024',
        nombre: 'GESTIÓN Y LIDERAZGO EN SALUD',
        creditos: 0,
        semestre: 8,
        prerrequisitos: ['OPUD1022'],
        descripcion: 'Formación en liderazgo y gestión estratégica para profesionales de la salud.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1025',
        nombre: 'PROYECTO DE INVESTIGACIÓN',
        creditos: 0,
        semestre: 8,
        prerrequisitos: ['NACT1002'],
        descripcion: 'Desarrollo y ejecución de un proyecto de investigación en el área.',
        estado: 'pendiente'
    },
    {
        id: 'OPUL1005',
        nombre: 'ELECTIVO 5 OBSTETRICIA Y PUERICULTURA',
        creditos: 0,
        semestre: 8,
        prerrequisitos: [],
        descripcion: 'Quinta y última asignatura electiva en obstetricia y puericultura.',
        estado: 'pendiente'
    },

    // Nivel 9 (Internados)
    {
        id: 'OPUD1026',
        nombre: 'INTERNADO NEONATOLOGÍA',
        creditos: 0,
        semestre: 9,
        prerrequisitos: ['TODAS_CURRICULARES'], // Prerrequisito especial, manejar en la lógica
        descripcion: 'Práctica profesional intensiva en el área de neonatología.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1027',
        nombre: 'INTERNADO GINECO-OBSTETRICIA',
        creditos: 0,
        semestre: 9,
        prerrequisitos: ['TODAS_CURRICULARES'], // Prerrequisito especial
        descripcion: 'Práctica profesional intensiva en ginecología y obstetricia.',
        estado: 'pendiente'
    },
    {
        id: 'OPUD1028',
        nombre: 'INTERNADO SALUD FAMILIAR Y COMUNITARIA',
        creditos: 0,
        semestre: 9,
        prerrequisitos: ['TODAS_CURRICULARES'], // Prerrequisito especial
        descripcion: 'Práctica profesional intensiva en salud familiar y comunitaria.',
        estado: 'pendiente'
    }
];

// Referencias a elementos del DOM
const mallaContainer = document.getElementById('malla-container');
const courseModal = document.getElementById('course-modal');
const closeModalButton = document.querySelector('.close-button');
const modalCourseName = document.getElementById('modal-course-name');
const modalCourseId = document.getElementById('modal-course-id'); // Agregado para mostrar el ID
const modalCourseSemestre = document.getElementById('modal-course-semestre');
const modalCoursePrerrequisitos = document.getElementById('modal-course-prerrequisitos');
const modalCourseDescription = document.getElementById('modal-course-description');
const markAsAprobadoBtn = document.getElementById('mark-as-aprobado');
const markAsCursandoBtn = document.getElementById('mark-as-cursando');
const markAsPendienteBtn = document.getElementById('mark-as-pendiente');

let currentCourse = null; // Variable para almacenar el curso actualmente seleccionado

// --- Funciones de Lógica de Negocio ---

function getCursoById(id) {
    return cursos.find(curso => curso.id === id);
}

function arePrerequisitesMet(curso) {
    // Si no tiene prerrequisitos, siempre está habilitado
    if (!curso.prerrequisitos || curso.prerrequisitos.length === 0) {
        return true;
    }

    // Caso especial para los internados que requieren "TODAS LAS ASIGNATURA CURRICULARES"
    if (curso.prerrequisitos.includes('TODAS_CURRICULARES')) {
        // Filtra todos los cursos que NO son electivos y son anteriores o del mismo semestre
        // Ajusta la condición de electivos (id.startsWith('OPUL')) si tus electivos deben contarse.
        const cursosNoElectivosPrevios = cursos.filter(c => 
            !c.id.startsWith('OPUL') && // Excluir electivos
            c.semestre < curso.semestre // Todos los cursos de semestres anteriores
        );
        
        // Verifica si todos estos cursos no electivos previos están aprobados.
        // Si hay algún curso no electivo previo que no esté aprobado, los prerrequisitos no se cumplen.
        const allPrevCurricularApproved = cursosNoElectivosPrevios.every(c => c.estado === 'aprobado');
        
        return allPrevCurricularApproved;
    }

    // Verificar prerrequisitos normales: todos los prerrequisitos deben estar aprobados
    return curso.prerrequisitos.every(prereqId => {
        const prereqCurso = getCursoById(prereqId);
        return prereqCurso && prereqCurso.estado === 'aprobado';
    });
}

// --- Funciones de Renderizado y UI ---

function renderMalla() {
    mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    const semestres = [...new Set(cursos.map(curso => curso.semestre))].sort((a, b) => a - b);

    semestres.forEach(semestreNum => {
        const semestreDiv = document.createElement('div');
        semestreDiv.classList.add('semestre');
        semestreDiv.innerHTML = `<h2>Semestre ${semestreNum}</h2>`;
        
        const cursosEnSemestre = cursos.filter(curso => curso.semestre === semestreNum);
        cursosEnSemestre.forEach(curso => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.dataset.courseId = curso.id; // Almacenar el ID del curso
            courseCard.textContent = curso.nombre;

            const prerrequisitosCumplidos = arePrerequisitesMet(curso);

            // Aplica clases de estado y habilitación
            if (prerrequisitosCumplidos) {
                // Si los prerrequisitos están cumplidos, el curso está habilitado para interactuar
                courseCard.classList.add(`course-${curso.estado}`);
                courseCard.classList.remove('course-disabled'); // Asegurarse de quitar si ya no está deshabilitado
                courseCard.addEventListener('click', () => openCourseModal(curso));
            } else {
                // Si los prerrequisitos NO están cumplidos, el curso está deshabilitado visualmente
                courseCard.classList.add('course-disabled');
                // Quitar cualquier clase de estado de color para que predomine el deshabilitado
                courseCard.classList.remove('course-aprobado', 'course-cursando', 'course-pendiente'); 
                // Añadir un listener para informar al usuario por qué está deshabilitado
                courseCard.addEventListener('click', () => {
                    const prereqNames = curso.prerrequisitos.map(prereqId => {
                        const p = getCursoById(prereqId);
                        return p ? p.nombre : prereqId;
                    }).join(', ');
                    alert(`Para cursar "${curso.nombre}", necesitas aprobar: ${prereqNames}.`);
                });
            }
            semestreDiv.appendChild(courseCard);
        });
        mallaContainer.appendChild(semestreDiv);
    });
}

function openCourseModal(curso) {
    currentCourse = curso;
    modalCourseName.textContent = curso.nombre;
    modalCourseId.textContent = curso.id; // Mostrar el ID del curso
    modalCourseSemestre.textContent = curso.semestre;
    modalCourseDescription.textContent = curso.descripcion;

    if (curso.prerrequisitos.length > 0 && !curso.prerrequisitos.includes('TODAS_CURRICULARES')) {
        const prerreqNombres = curso.prerrequisitos.map(prereqId => {
            const prereqCurso = getCursoById(prereqId);
            return prereqCurso ? prereqCurso.nombre : prereqId;
        }).join(', ');
        modalCoursePrerrequisitos.textContent = prerreqNombres;
    } else if (curso.prerrequisitos.includes('TODAS_CURRICULARES')) {
        modalCoursePrerrequisitos.textContent = 'Todas las asignaturas curriculares anteriores.';
    }
    else {
        modalCoursePrerrequisitos.textContent = 'Ninguno';
    }

    // Actualizar el estado de los botones del modal
    updateModalButtonsState(curso.estado);

    courseModal.style.display = 'flex'; // Usar 'flex' para centrado con flexbox
}

// Función para cerrar el modal
closeModalButton.addEventListener('click', () => {
    courseModal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target == courseModal) {
        courseModal.style.display = 'none';
    }
});

// Función para actualizar el estado de los botones del modal
function updateModalButtonsState(currentState) {
    // Mostrar todos los botones por defecto
    markAsAprobadoBtn.style.display = 'block';
    markAsCursandoBtn.style.display = 'block';
    markAsPendienteBtn.style.display = 'block';

    // Ocultar el botón que representa el estado actual del curso
    if (currentState === 'aprobado') {
        markAsAprobadoBtn.style.display = 'none';
    } else if (currentState === 'cursando') {
        markAsCursandoBtn.style.display = 'none';
    } else if (currentState === 'pendiente') {
        markAsPendienteBtn.style.display = 'none';
    }
}

// Función para cambiar el estado de un curso
function changeCourseState(newState) {
    if (currentCourse) {
        const index = cursos.findIndex(c => c.id === currentCourse.id);
        if (index !== -1) {
            cursos[index].estado = newState;
            saveMallaState(); // Guardar el estado
            renderMalla(); // Volver a renderizar para actualizar visualmente
            courseModal.style.display = 'none'; // Cerrar modal después de cambiar estado
        }
    }
}

// Asignar eventos a los botones del modal
markAsAprobadoBtn.addEventListener('click', () => changeCourseState('aprobado'));
markAsCursandoBtn.addEventListener('click', () => changeCourseState('cursando'));
markAsPendienteBtn.addEventListener('click', () => changeCourseState('pendiente'));

// --- Funciones de Persistencia (LocalStorage) ---

function saveMallaState() {
    localStorage.setItem('mallaCurricularState', JSON.stringify(cursos));
}

function loadMallaState() {
    const savedState = localStorage.getItem('mallaCurricularState');
    if (savedState) {
        const loadedCursos = JSON.parse(savedState);
        // Aquí puedes hacer una validación si quieres asegurar que la estructura
        // de los cursos cargados coincide con la de `cursos` original,
        // o simplemente reemplazar el array. Para este caso, lo reemplazamos.
        cursos.length = 0; // Vaciar el array original
        cursos.push(...loadedCursos); // Llenarlo con los datos cargados
    }
}

// --- Inicialización ---

// Cargar estado al iniciar y renderizar la malla
document.addEventListener('DOMContentLoaded', () => {
    loadMallaState();
    renderMalla();
});
