/* ════════════════════════════════════════════════
   CASA DE COBRANZAS DEL PUTUMAYO E.U.
   v2.0 — app.js
════════════════════════════════════════════════ */
'use strict';

/* ══════════════════════════════════════════════
   CATÁLOGOS (extensibles por el usuario)
══════════════════════════════════════════════ */
let JUZGADOS = [
  { id: 1, nombre: 'PRIMERO CIVIL MUNICIPAL' },
  { id: 2, nombre: 'SEGUNDO CIVIL MUNICIPAL' },
  { id: 3, nombre: 'TERCERO CIVIL MUNICIPAL' },
  { id: 4, nombre: 'PROMISCUO MUNICIPAL' },
  { id: 5, nombre: 'PRIMERO CIVIL CIRCUITO' },
  { id: 6, nombre: 'SEGUNDO CIVIL CIRCUITO' },
];

let MEDIDAS = [
  { id: 1, nombre: 'EMBARGO Y SECUESTRO', descripcion: 'Embargo y secuestro de bienes del deudor' },
  { id: 2, nombre: 'EMBARGO Y RETENCIÓN', descripcion: 'Embargo y retención de recursos financieros' },
  { id: 3, nombre: 'SOLO EMBARGO', descripcion: '' },
  { id: 4, nombre: 'SECUESTRO DE BIENES INMUEBLES', descripcion: '' },
  { id: 5, nombre: 'INMOVILIZACIÓN DE VEHÍCULO', descripcion: '' },
  { id: 6, nombre: 'NINGUNA', descripcion: '' },
];

let TIPOS_SECUESTRO = [
  { id: 1, nombre: 'SECUESTRO BIEN INMUEBLE', descripcion: '' },
  { id: 2, nombre: 'RETENCIÓN VEHÍCULO', descripcion: '' },
  { id: 3, nombre: 'REMATE PROGRAMADO', descripcion: '' },
  { id: 4, nombre: 'REMANENTES', descripcion: '' },
  { id: 5, nombre: 'DILIGENCIA DE SECUESTRO', descripcion: '' },
];

let ESTADOS = [
  { id: 1,  nombre: 'TERMINADO' },
  { id: 2,  nombre: 'PERSUASIVO' },
  { id: 3,  nombre: 'AVALÚO INMUEBLE' },
  { id: 4,  nombre: 'AVALÚO ESTABLECIMIENTO' },
  { id: 5,  nombre: 'TRÁMITE PROCESAL' },
  { id: 6,  nombre: 'INMOVILIZACIÓN' },
  { id: 7,  nombre: 'MEDIDA REGISTRADA' },
  { id: 8,  nombre: 'NOTIFICACIÓN' },
  { id: 9,  nombre: 'MANDAMIENTO DE PAGO' },
  { id: 10, nombre: 'SEGUIR ADELANTE' },
  { id: 11, nombre: 'ADMISIÓN DEMANDA' },
  { id: 12, nombre: 'INADMITE DEMANDA' },
  { id: 13, nombre: 'SUBSANA DEMANDA' },
  { id: 14, nombre: 'SECUESTRO' },
  { id: 15, nombre: 'TÍTULOS JUDICIALES' },
  { id: 16, nombre: 'INSCRIPCIÓN MEDIDA' },
  { id: 17, nombre: 'REMATE' },
  { id: 18, nombre: 'ACUERDO DE PAGO' },
  { id: 19, nombre: 'EN LIQUIDACIÓN' },
  { id: 20, nombre: 'EN ACTUALIZACIÓN LIQUIDACIÓN' },
];

let NIVELES = [
  { id: 1, nombre: 'ALTO' },
  { id: 2, nombre: 'MEDIO' },
  { id: 3, nombre: 'BAJO' },
];

/* ══════════════════════════════════════════════
   DATOS PRINCIPALES
══════════════════════════════════════════════ */
let CARTERAS = [
  {
    id: 1, nombre: 'FOGADE',
    nit: '900.123.456-1', representante: 'FONDO DE GARANTÍAS Y DESARROLLO S.A.S.',
    telefono: '(6) 4215 000', correo: 'juridico@fogade.com.co',
    observaciones: 'Cartera principal. Corte de reporte: trimestral.', fecha_creacion: '2023-01-10'
  },
  {
    id: 2, nombre: 'FINAGRO',
    nit: '800.134.339-9', representante: 'FONDO PARA EL FINANCIAMIENTO DEL SECTOR AGROPECUARIO',
    telefono: '(1) 745 5000', correo: 'cobranzas@finagro.com.co',
    observaciones: 'Cartera agropecuaria regional Putumayo.', fecha_creacion: '2023-06-15'
  },
];

let OBLIGACIONES = [
  {
    id: 1, cartera_id: 1,
    deudores: [
      { cedula: '1122783274', nombre: 'BRENDA CATALINA CAMPAÑA CUELLAR',
        contactos: [{ tipo: 'celular', valor: '3105678901' }] }
    ],
    codeudores: [
      { cedula: '18129602',   nombre: 'DAVILA SOLARTE EMMANUEL', contactos: [] },
      { cedula: '1007748243', nombre: 'LEIDY ESTEFANI PAZU MORALES', contactos: [] }
    ],
    no_credito: '500000959', no_pagare: '5813', saldo_capital: 942439,
    municipio: 'Mocoa', fecha_demanda: '2024-02-10',
    juzgado_id: 2, radicado: '2024-59',
    medida_id: 1,
    mandamiento: '2024-04-05',
    notificaciones: [
      { tipo: 'deudor', idx: 0, nombre: 'Brenda Campaña', fecha: '2024-04-11' },
      { tipo: 'codeudor', idx: 0, nombre: 'Emmanuel Dávila', fecha: '2024-04-16' }
    ],
    auto: '2024-08-12', liquidacion: '',
    secuestro_id: 5, secuestro_desc: 'Bien inmueble M.I. 440-62423 - ORIP Mocoa',
    estado_id: 3, nivel_id: 1,
    recaudos: [{ fecha: '2026-02-13', monto: 0 }],
    observaciones_list: [
      { fecha: '2026-02-13', texto: 'Juzgado aprueba liquidación de crédito', autor: 'Flor Abigail Vallejo' },
      { fecha: '2026-03-07', texto: 'Se hace consulta de bienes susceptibles de embargo: respuesta negativa.', autor: 'Flor Abigail Vallejo' }
    ]
  },
  {
    id: 2, cartera_id: 1,
    deudores: [{ cedula: '1125413000', nombre: 'LEIDER JEREMIAS GÓMEZ ÁLVAREZ', contactos: [{ tipo: 'celular', valor: '3009876543' }] }],
    codeudores: [{ cedula: '69023148', nombre: 'SONIA NELSY ÁLVAREZ CORPUS', contactos: [] }],
    no_credito: '0300000066', no_pagare: '7426', saldo_capital: 5710158,
    municipio: 'Mocoa', fecha_demanda: '2024-05-12',
    juzgado_id: 2, radicado: '2025-00210',
    medida_id: 1,
    mandamiento: '2024-06-15',
    notificaciones: [{ tipo: 'deudor', idx: 0, nombre: 'Leider Gómez', fecha: '2024-07-20' }],
    auto: '2024-09-28', liquidacion: '',
    secuestro_id: 7, secuestro_desc: 'Moto placas UUJ88F, modelo 2022',
    estado_id: 7, nivel_id: 2,
    recaudos: [{ fecha: '2026-05-07', monto: 0 }],
    observaciones_list: [
      { fecha: '2026-05-07', texto: 'Se radica liquidación de crédito.', autor: 'Flor Abigail Vallejo' },
      { fecha: '2026-06-22', texto: 'Consulta de bienes susceptibles de embargo, respuesta: Negativa.', autor: 'Flor Abigail Vallejo' }
    ]
  },
  {
    id: 3, cartera_id: 1,
    deudores: [{ cedula: '18127111', nombre: 'CARLOS WEIMAR ARDILA CORAL', contactos: [] }],
    codeudores: [],
    no_credito: '500001575', no_pagare: '6553', saldo_capital: 7545249,
    municipio: 'Puerto Asís', fecha_demanda: '2024-01-20',
    juzgado_id: 1, radicado: '2024-03',
    medida_id: 2,
    mandamiento: '2024-03-10',
    notificaciones: [],
    auto: '2024-07-05', liquidacion: '2024-11-01',
    secuestro_id: null, secuestro_desc: '',
    estado_id: 19, nivel_id: 1,
    recaudos: [{ fecha: '2025-12-01', monto: 1500000 }],
    observaciones_list: [
      { fecha: '2025-12-01', texto: 'Se registra abono de $1.500.000 mediante pago en efectivo.', autor: 'Flor Abigail Vallejo' }
    ]
  },
  {
    id: 4, cartera_id: 1,
    deudores: [{ cedula: '18125130', nombre: 'ALVARO ENRIQUE FAJARDO PANTOJA', contactos: [] }],
    codeudores: [{ cedula: '18121045', nombre: 'JULIO OLIVIO FAJARDO PANTOJA', contactos: [] }],
    no_credito: '500002114', no_pagare: '8138', saldo_capital: 4875823,
    municipio: 'Villagarzón', fecha_demanda: '2023-10-05',
    juzgado_id: 4, radicado: '2023-88',
    medida_id: 1,
    mandamiento: '2023-12-01',
    notificaciones: [],
    auto: '', liquidacion: '',
    secuestro_id: null, secuestro_desc: '',
    estado_id: 2, nivel_id: 3,
    recaudos: [],
    observaciones_list: [
      { fecha: '2024-01-15', texto: 'Proceso en etapa persuasiva. Contacto telefónico realizado sin éxito.', autor: 'Flor Abigail Vallejo' }
    ]
  },
  {
    id: 5, cartera_id: 2,
    deudores: [{ cedula: '97425980', nombre: 'LUIS ADAN BUITRAGO NASTACUAS', contactos: [] }],
    codeudores: [{ cedula: '69010200', nombre: 'AURA ELIZA GUERRA', contactos: [] }],
    no_credito: '300000262', no_pagare: '10947', saldo_capital: 2066840,
    municipio: 'San Miguel', fecha_demanda: '2024-08-01',
    juzgado_id: 3, radicado: '2024-75',
    medida_id: 3,
    mandamiento: '',
    notificaciones: [],
    auto: '', liquidacion: '',
    secuestro_id: null, secuestro_desc: '',
    estado_id: 11, nivel_id: 2,
    recaudos: [],
    observaciones_list: []
  },
];

/* ══════════════════════════════════════════════
   ESTADO DE LA APP
══════════════════════════════════════════════ */
let currentCarteraId = null;
let filteredObligaciones = [];
let currentPage = 1;
const PAGE_SIZE = 10;

// Mini-modal callback
let miniModalCallback = null;
let miniModalCatalog = null;

// Contadores para campos dinámicos
let deudorCount = 0;
let codeudorCount = 0;
let notifCount = 0;
let recaudoCount = 0;
let obsEntries = [];

// SearchableSelect instances
const ssInstances = {};

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateDate();
  setupNavigation();
  setupSidebar();
  setupGlobalSearch();
  updateSidebarBadge();
  buildDashboard();
  buildCarterasGrid();
  buildReports();
  buildJuzgados();
  buildFilterOptions();

  document.getElementById('btnNuevaCartera').addEventListener('click', openCarteraModal);
  document.getElementById('btnNuevaObligacion').addEventListener('click', () => openNuevaObligacion());
  document.getElementById('btnAddDeudor').addEventListener('click', () => addDeudorEntry());
  document.getElementById('btnAddCOdeudor').addEventListener('click', () => addCOdeudorEntry());
  document.getElementById('btnAddNotif').addEventListener('click', () => addNotifEntry());
  document.getElementById('btnAddRecaudo').addEventListener('click', () => addRecaudoEntry());
});

/* ══════════════════════════════════════════════
   NAVEGACIÓN
══════════════════════════════════════════════ */
function setupNavigation() {
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      openPage(item.dataset.page);
    });
  });
}
function openPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
}
function goBackToCartera() {
  openPage('cartera-detalle');
}
function setupSidebar() {
  document.getElementById('sidebarToggle').addEventListener('click', () =>
    document.getElementById('sidebar').classList.toggle('open')
  );
}
function updateSidebarBadge() {
  document.getElementById('nb-carteras').textContent = CARTERAS.length;
}
function buildFilterOptions() {
  const se = document.getElementById('filterEstado');
  const sj = document.getElementById('filterJuzgado');
  ESTADOS.forEach(e => { const o = document.createElement('option'); o.value = e.nombre; o.textContent = e.nombre; se.appendChild(o); });
  JUZGADOS.forEach(j => { const o = document.createElement('option'); o.value = j.nombre; o.textContent = j.nombre; sj.appendChild(o); });
}

/* ══════════════════════════════════════════════
   DATE
══════════════════════════════════════════════ */
function updateDate() {
  const el = document.getElementById('topbarDate');
  if (!el) return;
  el.textContent = new Date().toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
}

/* ══════════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════════ */
function buildDashboard() {
  const totalCapital = OBLIGACIONES.reduce((s, o) => s + o.saldo_capital, 0);
  const totalRecaudo = OBLIGACIONES.reduce((s, o) => s + o.recaudos.reduce((a, r) => a + r.monto, 0), 0);
  const persuasivos  = OBLIGACIONES.filter(o => { const e = ESTADOS.find(e => e.id === o.estado_id); return e && e.nombre === 'PERSUASIVO'; }).length;
  const pct = totalCapital > 0 ? Math.round((totalRecaudo / totalCapital) * 100) : 0;

  const kpis = [
    { label: 'Total Obligaciones',  value: OBLIGACIONES.length, trend: `en ${CARTERAS.length} carteras`, trendUp: true,  color: '#2e7d32', icon: kpiIconUser()     },
    { label: 'Cartera Total',       value: formatCurrency(totalCapital), trend: 'saldo capital demandado', trendUp: false, color: '#e65100', icon: kpiIconMoney()    },
    { label: 'Total Recaudado',     value: formatCurrency(totalRecaudo), trend: `${pct}% de recuperación`, trendUp: true,  color: '#0891b2', icon: kpiIconCheck()    },
    { label: 'Procesos Persuasivos',value: persuasivos, trend: 'en etapa persuasiva', trendUp: false, color: '#d97706', icon: kpiIconAlert() },
  ];
  const kpiGrid = document.getElementById('dashKpis');
  if (!kpiGrid) return;
  kpiGrid.innerHTML = kpis.map(k => `
    <div class="kpi-card" style="--kpi-color:${k.color}">
      <div class="kpi-icon" style="background:${k.color}22">${k.icon}</div>
      <div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-label">${k.label}</div>
      </div>
      <div class="kpi-trend ${k.trendUp ? 'up' : ''}">${k.trend}</div>
    </div>
  `).join('');

  buildDonut();
  buildBarChart();
  buildRecentTable();
}
function kpiIconUser()  { return `<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2e7d32" stroke-width="1.8"/><circle cx="9" cy="7" r="4" stroke="#2e7d32" stroke-width="1.8"/></svg>`; }
function kpiIconMoney() { return `<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><line x1="12" y1="1" x2="12" y2="23" stroke="#e65100" stroke-width="1.8" stroke-linecap="round"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#e65100" stroke-width="1.8" stroke-linecap="round"/></svg>`; }
function kpiIconCheck() { return `<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><polyline points="20 6 9 17 4 12" stroke="#0891b2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`; }
function kpiIconAlert() { return `<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke="#d97706" stroke-width="1.8"/><line x1="12" y1="9" x2="12" y2="13" stroke="#d97706" stroke-width="1.8" stroke-linecap="round"/></svg>`; }

/* DONUT */
function buildDonut() {
  const svg = document.getElementById('donutChart');
  const legend = document.getElementById('donutLegend');
  if (!svg || !legend) return;
  svg.innerHTML = ''; legend.innerHTML = '';

  // Group by estado
  const groups = {};
  OBLIGACIONES.forEach(o => {
    const e = ESTADOS.find(e => e.id === o.estado_id);
    const name = e ? e.nombre : 'SIN ESTADO';
    groups[name] = (groups[name] || 0) + 1;
  });
  const colors = ['#2e7d32','#e65100','#0891b2','#7c3aed','#d97706','#0e9f6e','#f05252','#6366f1'];
  const entries = Object.entries(groups).sort((a,b) => b[1]-a[1]).slice(0,6);
  const total = entries.reduce((s,[,v]) => s+v, 0);
  const cx=80,cy=80,r=54,stroke=18;
  const circ = 2*Math.PI*r;
  let off=0;
  entries.forEach(([name,val],i) => {
    const pct=val/total, dash=pct*circ;
    const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',cx); c.setAttribute('cy',cy); c.setAttribute('r',r);
    c.setAttribute('fill','none'); c.setAttribute('stroke',colors[i%colors.length]);
    c.setAttribute('stroke-width',stroke);
    c.setAttribute('stroke-dasharray',`${dash} ${circ-dash}`);
    c.setAttribute('stroke-dashoffset',-off);
    c.setAttribute('transform',`rotate(-90 ${cx} ${cy})`);
    svg.appendChild(c);
    off+=dash;
    const li=document.createElement('div'); li.className='legend-item';
    li.innerHTML=`<span class="legend-dot" style="background:${colors[i%colors.length]}"></span>${name.length>18?name.slice(0,18)+'…':name} <strong style="color:var(--text);margin-left:auto;padding-left:.4rem">${val}</strong>`;
    legend.appendChild(li);
  });
  ['text','text'].forEach((tag,i)=>{
    const t=document.createElementNS('http://www.w3.org/2000/svg',tag);
    t.setAttribute('x',cx); t.setAttribute('y', i===0?cy-4:cy+14);
    t.setAttribute('text-anchor','middle'); t.setAttribute('fill', i===0?'#e6edf3':'#8b9db5');
    t.setAttribute('font-size', i===0?'20':'9'); t.setAttribute('font-weight', i===0?'800':'400');
    t.setAttribute('font-family','Inter,sans-serif');
    t.textContent = i===0 ? total : 'Procesos';
    svg.appendChild(t);
  });
}

/* BAR CHART (carteras) */
function buildBarChart() {
  const wrap = document.getElementById('barChart');
  if (!wrap) return;
  wrap.innerHTML = '';
  const maxH = 100;
  CARTERAS.forEach(c => {
    const obs = OBLIGACIONES.filter(o => o.cartera_id === c.id);
    const cap = obs.reduce((s,o)=>s+o.saldo_capital,0);
    const rec = obs.reduce((s,o)=>s+o.recaudos.reduce((a,r)=>a+r.monto,0),0);
    const maxVal = cap || 1;
    const capH = Math.max(4, Math.round((cap/maxVal)*maxH));
    const recH = Math.max(0, Math.round((rec/maxVal)*maxH));
    const col = document.createElement('div');
    col.className = 'bar-col';
    col.style.gap = '.2rem';
    col.innerHTML = `
      <div style="display:flex;align-items:flex-end;gap:3px;height:${maxH}px">
        <div class="bar-fill" style="height:${capH}px;width:18px;background:linear-gradient(180deg,#388e3c,#1b5e20)" title="Cartera: ${formatCurrency(cap)}"></div>
        <div class="bar-fill" style="height:${recH}px;width:18px;background:linear-gradient(180deg,#e65100,#bf360c)" title="Recaudo: ${formatCurrency(rec)}"></div>
      </div>
      <span class="bar-label">${c.nombre}</span>
    `;
    wrap.appendChild(col);
  });
  // Leyenda
  const leg = document.createElement('div');
  leg.style = 'display:flex;gap:1rem;align-items:center;padding:.5rem 0 0;font-size:.72rem;color:var(--text-3)';
  leg.innerHTML = `<span style="display:flex;align-items:center;gap:.3rem"><span style="width:10px;height:10px;border-radius:2px;background:#2e7d32;display:inline-block"></span>Cartera</span><span style="display:flex;align-items:center;gap:.3rem"><span style="width:10px;height:10px;border-radius:2px;background:#e65100;display:inline-block"></span>Recaudo</span>`;
  wrap.parentElement.appendChild(leg);
}

/* RECENT TABLE */
function buildRecentTable() {
  const wrap = document.getElementById('recentTable');
  if (!wrap) return;
  const recent = [...OBLIGACIONES].sort((a,b)=>b.id-a.id).slice(0,5);
  wrap.innerHTML = `
    <table class="data-table">
      <thead><tr><th>Deudor Principal</th><th>Cédula</th><th>Cartera</th><th>Saldo Capital</th><th>Estado</th><th>Nivel</th></tr></thead>
      <tbody>${recent.map(o=>{
        const d = o.deudores[0]||{};
        const c = CARTERAS.find(c=>c.id===o.cartera_id);
        const e = ESTADOS.find(e=>e.id===o.estado_id);
        const n = NIVELES.find(n=>n.id===o.nivel_id);
        return `<tr style="cursor:pointer" onclick="openDetail(${o.id})">
          <td class="td-name">${d.nombre||'—'}</td>
          <td class="td-mono">${d.cedula||'—'}</td>
          <td><span class="badge b-default">${c?c.nombre:'—'}</span></td>
          <td class="td-amount">${formatCurrency(o.saldo_capital)}</td>
          <td>${estadoBadge(e?e.nombre:'')}</td>
          <td>${nivelBadge(n?n.nombre:'')}</td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
}

/* ══════════════════════════════════════════════
   CARTERAS GRID
══════════════════════════════════════════════ */
function buildCarterasGrid() {
  const wrap = document.getElementById('carterasGrid');
  if (!wrap) return;
  wrap.innerHTML = CARTERAS.map(c => {
    const obs = OBLIGACIONES.filter(o => o.cartera_id === c.id);
    const totalCap = obs.reduce((s,o)=>s+o.saldo_capital,0);
    const totalRec = obs.reduce((s,o)=>s+o.recaudos.reduce((a,r)=>a+r.monto,0),0);
    const pct = totalCap>0 ? Math.round((totalRec/totalCap)*100) : 0;
    return `
    <div class="cartera-card" onclick="enterCartera(${c.id})">
      <div class="cartera-card-head">
        <div>
          <div class="cartera-name">${c.nombre}</div>
          <div class="cartera-nit">${c.nit||''}</div>
        </div>
        <span class="cartera-badge">${obs.length} obligaciones</span>
      </div>
      <div style="font-size:.78rem;color:var(--text-3);margin-bottom:.5rem">${c.representante||''}</div>
      <div class="cartera-stats">
        <div class="cartera-stat">
          <span class="cartera-stat-val">${formatCurrencyShort(totalCap)}</span>
          <span class="cartera-stat-label">Cartera Total</span>
        </div>
        <div class="cartera-stat">
          <span class="cartera-stat-val" style="color:var(--green-light)">${formatCurrencyShort(totalRec)}</span>
          <span class="cartera-stat-label">Recaudado</span>
        </div>
      </div>
      <div class="cartera-progress">
        <div class="cartera-progress-label">
          <span>Recuperación</span><span>${pct}%</span>
        </div>
        <div class="cartera-progress-bar">
          <div class="cartera-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    </div>`;
  }).join('') + `
    <div class="cartera-card" style="border-style:dashed;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem;cursor:pointer;min-height:180px" onclick="openCarteraModal()">
      <div style="width:44px;height:44px;border-radius:50%;background:var(--green-s);display:flex;align-items:center;justify-content:center">
        <svg viewBox="0 0 24 24" fill="none" style="width:22px;height:22px;color:var(--green-light)"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      <span style="font-size:.85rem;font-weight:600;color:var(--text-3)">Nueva Cartera</span>
    </div>`;
}

function enterCartera(id) {
  currentCarteraId = id;
  const c = CARTERAS.find(c=>c.id===id);
  document.getElementById('carteraDetalleTitle').textContent = `Cartera de ${c.nombre}`;
  document.getElementById('breadcrumbCartera').textContent = c.nombre;
  filteredObligaciones = OBLIGACIONES.filter(o=>o.cartera_id===id);
  currentPage = 1;
  buildTable();
  openPage('cartera-detalle');
}

/* ══════════════════════════════════════════════
   TABLA OBLIGACIONES
══════════════════════════════════════════════ */
function buildTable() {
  const wrap = document.getElementById('tableWrap');
  if (!wrap) return;
  const start = (currentPage-1)*PAGE_SIZE;
  const data = filteredObligaciones.slice(start, start+PAGE_SIZE);

  wrap.innerHTML = `
    <table class="data-table">
      <thead><tr>
        <th>#</th><th>Deudor(es)</th><th>Cédula</th><th>Codeudor(es)</th>
        <th>Municipio</th><th>Juzgado</th><th>Radicado</th>
        <th>Saldo Capital</th><th>Recaudo</th><th>Estado</th><th>Nivel</th><th>Acciones</th>
      </tr></thead>
      <tbody>${data.length===0
        ? `<tr><td colspan="12" style="text-align:center;padding:3rem;color:var(--text-3)">No se encontraron obligaciones</td></tr>`
        : data.map((o,i)=>{
          const d0 = o.deudores[0]||{};
          const c0 = o.codeudores[0]||{};
          const juz = JUZGADOS.find(j=>j.id===o.juzgado_id);
          const est = ESTADOS.find(e=>e.id===o.estado_id);
          const niv = NIVELES.find(n=>n.id===o.nivel_id);
          const recTotal = o.recaudos.reduce((a,r)=>a+r.monto,0);
          const extraD = o.deudores.length>1 ? `<span class="td-chip-more">+${o.deudores.length-1}</span>` : '';
          const extraC = o.codeudores.length>1 ? `<span class="td-chip-more">+${o.codeudores.length-1}</span>` : '';
          const coInfo = c0.nombre ? `${c0.nombre}${c0.cedula?'<br><span class="td-mono">'+c0.cedula+'</span>':''}` : '—';
          return `<tr>
            <td class="td-mono">${start+i+1}</td>
            <td class="td-name">${d0.nombre||'—'}${extraD}</td>
            <td class="td-mono">${d0.cedula||'—'}</td>
            <td style="font-size:.78rem">${coInfo}${extraC}</td>
            <td>${o.municipio||'—'}</td>
            <td style="font-size:.76rem;max-width:140px">${juz?juz.nombre:'—'}</td>
            <td class="td-mono">${o.radicado||'—'}</td>
            <td class="td-amount">${formatCurrency(o.saldo_capital)}</td>
            <td class="td-amount-rec">${formatCurrency(recTotal)}</td>
            <td>${estadoBadge(est?est.nombre:'')}</td>
            <td>${nivelBadge(niv?niv.nombre:'')}</td>
            <td><div class="row-actions">
              <button class="action-btn" title="Ver detalle" onclick="openDetail(${o.id})">
                <svg viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="action-btn" title="Editar" onclick="openEdit(${o.id})">
                <svg viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="1.8"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
            </div></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;
  buildPagination();
}

function buildPagination() {
  const pag = document.getElementById('tablePagination');
  if (!pag) return;
  const total = Math.ceil(filteredObligaciones.length/PAGE_SIZE);
  let html = `<span style="font-size:.78rem;color:var(--text-2);margin-right:.4rem">${filteredObligaciones.length} registros</span>`;
  html += `<button class="pag-btn" onclick="changePage(${currentPage-1})" ${currentPage===1?'disabled':''}>‹</button>`;
  for(let p=1;p<=total;p++){
    html+=`<button class="pag-btn ${p===currentPage?'active':''}" onclick="changePage(${p})">${p}</button>`;
  }
  html += `<button class="pag-btn" onclick="changePage(${currentPage+1})" ${currentPage===total||total===0?'disabled':''}>›</button>`;
  pag.innerHTML = html;
}

function changePage(p) {
  const t = Math.max(1,Math.ceil(filteredObligaciones.length/PAGE_SIZE));
  if(p<1||p>t) return;
  currentPage=p; buildTable();
}

function filterTable() {
  const q = (document.getElementById('tableSearch').value||'').toLowerCase().trim();
  const est = document.getElementById('filterEstado').value;
  const juz = document.getElementById('filterJuzgado').value;
  const niv = document.getElementById('filterNivel').value;
  const base = OBLIGACIONES.filter(o=>o.cartera_id===currentCarteraId);
  filteredObligaciones = base.filter(o=>{
    const d0=o.deudores[0]||{};
    const matchQ = !q || d0.nombre?.toLowerCase().includes(q) || d0.cedula?.includes(q) || o.radicado?.toLowerCase().includes(q) || o.deudores.some(d=>d.nombre?.toLowerCase().includes(q));
    const estNombre = ESTADOS.find(e=>e.id===o.estado_id)?.nombre||'';
    const juzNombre = JUZGADOS.find(j=>j.id===o.juzgado_id)?.nombre||'';
    const nivNombre = NIVELES.find(n=>n.id===o.nivel_id)?.nombre||'';
    return matchQ && (!est||estNombre===est) && (!juz||juzNombre===juz) && (!niv||nivNombre===niv);
  });
  currentPage=1; buildTable();
}
function clearFilters() {
  document.getElementById('tableSearch').value='';
  document.getElementById('filterEstado').value='';
  document.getElementById('filterJuzgado').value='';
  document.getElementById('filterNivel').value='';
  filteredObligaciones = OBLIGACIONES.filter(o=>o.cartera_id===currentCarteraId);
  currentPage=1; buildTable();
}

/* ══════════════════════════════════════════════
   GLOBAL SEARCH
══════════════════════════════════════════════ */
function setupGlobalSearch() {
  document.getElementById('globalSearch').addEventListener('input', function() {
    const q = this.value.trim();
    if(q.length<2) return;
    const results = OBLIGACIONES.filter(o=> {
      const d0=o.deudores[0]||{};
      return d0.nombre?.toLowerCase().includes(q.toLowerCase())
        || d0.cedula?.includes(q)
        || o.radicado?.toLowerCase().includes(q.toLowerCase());
    });
    if(results.length>0){
      const carteraId = results[0].cartera_id;
      enterCartera(carteraId);
      document.getElementById('tableSearch').value = q;
      filterTable();
    }
  });
}

/* ══════════════════════════════════════════════
   SEARCHABLE SELECT COMPONENT
══════════════════════════════════════════════ */
class SearchableSelect {
  constructor(containerId, { options, placeholder='Seleccionar…', allowCreate=false, createLabel='Registrar nuevo', onCreateClick, onChange }) {
    this.containerId = containerId;
    this.options = [...options];
    this.placeholder = placeholder;
    this.allowCreate = allowCreate;
    this.createLabel = createLabel;
    this.onCreateClick = onCreateClick;
    this.onChange = onChange;
    this.selectedId = null;
    this.selectedName = '';
    this.isOpen = false;
    this.render();
  }
  render() {
    const wrap = document.getElementById(this.containerId);
    if(!wrap) return;
    wrap.innerHTML = `
      <div class="ss-wrap" id="${this.containerId}-ss">
        <div class="ss-display placeholder" id="${this.containerId}-display">
          <span class="ss-display-text" id="${this.containerId}-text">${this.placeholder}</span>
          <svg class="ss-chevron" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
        <div class="ss-dropdown" id="${this.containerId}-drop">
          <input class="ss-search-input" type="text" id="${this.containerId}-search" placeholder="Buscar…" autocomplete="off"/>
          <div class="ss-options" id="${this.containerId}-opts"></div>
        </div>
      </div>`;
    document.getElementById(`${this.containerId}-display`).addEventListener('click', () => this.toggle());
    document.getElementById(`${this.containerId}-search`).addEventListener('input', e => this.filter(e.target.value));
    document.addEventListener('click', e => {
      if(!document.getElementById(`${this.containerId}-ss`)?.contains(e.target)) this.close();
    });
    this.renderOptions(this.options);
  }
  renderOptions(opts) {
    const wrap = document.getElementById(`${this.containerId}-opts`);
    if(!wrap) return;
    if(opts.length===0) { wrap.innerHTML=`<div class="ss-option no-results">Sin resultados</div>`; }
    else wrap.innerHTML = opts.map(o=>`
      <div class="ss-option ${this.selectedId===o.id?'selected':''}" data-id="${o.id}" data-name="${o.nombre}">
        ${o.nombre}
      </div>`).join('');
    wrap.querySelectorAll('.ss-option:not(.no-results)').forEach(el=>el.addEventListener('click',()=>this.select(+el.dataset.id, el.dataset.name)));
    if(this.allowCreate) {
      const cr=document.createElement('div'); cr.className='ss-option create-new';
      cr.innerHTML=`<svg viewBox="0 0 24 24" fill="none" style="width:13px;height:13px"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>${this.createLabel}`;
      cr.addEventListener('click',()=>{ this.close(); if(this.onCreateClick) this.onCreateClick(); });
      wrap.appendChild(cr);
    }
  }
  filter(q) {
    const filtered = this.options.filter(o=>o.nombre.toLowerCase().includes(q.toLowerCase()));
    this.renderOptions(filtered);
  }
  select(id, name) {
    this.selectedId=id; this.selectedName=name;
    const disp=document.getElementById(`${this.containerId}-display`);
    const txt=document.getElementById(`${this.containerId}-text`);
    if(disp) disp.classList.remove('placeholder');
    if(txt) txt.textContent=name;
    this.close();
    if(this.onChange) this.onChange(id,name);
  }
  toggle() { this.isOpen ? this.close() : this.open(); }
  open() {
    this.isOpen=true;
    document.getElementById(`${this.containerId}-drop`)?.classList.add('open');
    document.getElementById(`${this.containerId}-display`)?.classList.add('open');
    document.getElementById(`${this.containerId}-search`)?.focus();
  }
  close() {
    this.isOpen=false;
    document.getElementById(`${this.containerId}-drop`)?.classList.remove('open');
    document.getElementById(`${this.containerId}-display`)?.classList.remove('open');
  }
  addOption(opt) {
    this.options.push(opt);
    this.renderOptions(this.options);
  }
  getValue() { return this.selectedId; }
  reset() {
    this.selectedId=null; this.selectedName='';
    const disp=document.getElementById(`${this.containerId}-display`);
    const txt=document.getElementById(`${this.containerId}-text`);
    if(disp) disp.classList.add('placeholder');
    if(txt) txt.textContent=this.placeholder;
  }
}

/* ══════════════════════════════════════════════
   MINI MODAL (crear nueva opción de catálogo)
══════════════════════════════════════════════ */
function openMiniModal({ title, label, showDesc=true, catalog, onSave }) {
  document.getElementById('miniModalTitle').textContent = title;
  document.getElementById('miniModalLabel').textContent = label||'Nombre *';
  document.getElementById('miniModalInput').value = '';
  document.getElementById('miniModalDesc').value = '';
  document.getElementById('miniModalDescWrap').style.display = showDesc ? 'flex' : 'none';
  miniModalCallback = onSave;
  miniModalCatalog = catalog;
  document.getElementById('miniModalOverlay').classList.add('open');
}
function closeMiniModal(e) {
  if(e && e.target!==document.getElementById('miniModalOverlay')) return;
  document.getElementById('miniModalOverlay').classList.remove('open');
}
function saveMiniModal() {
  const name = document.getElementById('miniModalInput').value.trim();
  const desc = document.getElementById('miniModalDesc').value.trim();
  if(!name) { showToast('⚠️ Ingrese un nombre'); return; }
  if(miniModalCallback) miniModalCallback(name, desc);
  document.getElementById('miniModalOverlay').classList.remove('open');
}

/* ══════════════════════════════════════════════
   MODAL CARTERA
══════════════════════════════════════════════ */
function openCarteraModal() {
  document.getElementById('mc_nombre').value='';
  document.getElementById('mc_nit').value='';
  document.getElementById('mc_representante').value='';
  document.getElementById('mc_telefono').value='';
  document.getElementById('mc_correo').value='';
  document.getElementById('mc_obs').value='';
  document.getElementById('modalCarteraOverlay').classList.add('open');
}
function closeCarteraModal(e) {
  if(e && e.target!==document.getElementById('modalCarteraOverlay')) return;
  document.getElementById('modalCarteraOverlay').classList.remove('open');
}
function saveCartera() {
  const nombre = document.getElementById('mc_nombre').value.trim().toUpperCase();
  if(!nombre) { showToast('⚠️ Ingrese el nombre de la entidad'); return; }
  const id = CARTERAS.length>0 ? Math.max(...CARTERAS.map(c=>c.id))+1 : 1;
  CARTERAS.push({
    id, nombre,
    nit: document.getElementById('mc_nit').value.trim(),
    representante: document.getElementById('mc_representante').value.trim(),
    telefono: document.getElementById('mc_telefono').value.trim(),
    correo: document.getElementById('mc_correo').value.trim(),
    observaciones: document.getElementById('mc_obs').value.trim(),
    fecha_creacion: new Date().toISOString().slice(0,10)
  });
  document.getElementById('modalCarteraOverlay').classList.remove('open');
  buildCarterasGrid();
  updateSidebarBadge();
  showToast(`✓ Cartera "${nombre}" creada exitosamente`);
}

/* ══════════════════════════════════════════════
   NUEVA OBLIGACIÓN — FORM
══════════════════════════════════════════════ */
function openNuevaObligacion(obId=null) {
  const c = CARTERAS.find(c=>c.id===currentCarteraId);
  if(!c) return;
  document.getElementById('formObligacionTitle').textContent = obId ? 'Editar Obligación' : 'Nueva Obligación';
  document.getElementById('formObligacionSub').textContent = `Cartera: ${c.nombre}`;
  document.getElementById('breadcrumbFormCartera').textContent = c.nombre;
  document.getElementById('labelNoCredito').textContent = `Nro. Crédito ${c.nombre} *`;

  // Reset form state
  deudorCount=0; codeudorCount=0; notifCount=0; recaudoCount=0; obsEntries=[];
  document.getElementById('deudoresContainer').innerHTML='';
  document.getElementById('codeudoresContainer').innerHTML='';
  document.getElementById('notificacionesContainer').innerHTML='';
  document.getElementById('recaudoContainer').innerHTML='';
  document.getElementById('bitacoraList').innerHTML='';
  document.getElementById('f_obs_nueva').value='';
  document.getElementById('f_no_credito').value='';
  document.getElementById('f_no_pagare').value='';
  document.getElementById('f_saldo_capital').value='';
  document.getElementById('f_municipio').value='';
  document.getElementById('f_fecha_demanda').value='';
  document.getElementById('f_radicado').value='';
  document.getElementById('f_mandamiento').value='';
  document.getElementById('f_auto').value='';
  document.getElementById('f_liquidacion').value='';

  // Ensure sections are open
  document.querySelectorAll('.form-card').forEach(fc=>fc.classList.remove('collapsed'));

  // Build searchable selects
  initFormSearchableSelects();

  // Add first deudor entry
  addDeudorEntry();

  openPage('nueva-obligacion');
}

function initFormSearchableSelects() {
  // Destroy & rebuild ss instances
  ['sw-juzgado','sw-medida','sw-secuestro','sw-estado','sw-nivel'].forEach(id=>{
    const el = document.getElementById(id); if(el) el.innerHTML='';
    delete ssInstances[id];
  });

  ssInstances['sw-juzgado'] = new SearchableSelect('sw-juzgado', {
    options: JUZGADOS, placeholder: 'Seleccionar juzgado…', allowCreate: true,
    createLabel: '+ Registrar nuevo juzgado',
    onCreateClick: () => openMiniModal({
      title: 'Nuevo Juzgado', label: 'Nombre del Juzgado *', showDesc: false,
      onSave: (name) => {
        const newJ = { id: Math.max(...JUZGADOS.map(j=>j.id))+1, nombre: name.toUpperCase() };
        JUZGADOS.push(newJ);
        ssInstances['sw-juzgado']?.addOption(newJ);
        ssInstances['sw-juzgado']?.select(newJ.id, newJ.nombre);
        showToast(`✓ Juzgado "${newJ.nombre}" registrado`);
      }
    })
  });

  ssInstances['sw-medida'] = new SearchableSelect('sw-medida', {
    options: MEDIDAS, placeholder: 'Seleccionar medida…', allowCreate: true,
    createLabel: '+ Registrar nueva medida',
    onCreateClick: () => openMiniModal({
      title: 'Nueva Medida Cautelar', label: 'Nombre de la Medida *', showDesc: true,
      onSave: (name, desc) => {
        const newM = { id: Math.max(...MEDIDAS.map(m=>m.id))+1, nombre: name.toUpperCase(), descripcion: desc };
        MEDIDAS.push(newM);
        ssInstances['sw-medida']?.addOption(newM);
        ssInstances['sw-medida']?.select(newM.id, newM.nombre);
        showToast(`✓ Medida "${newM.nombre}" registrada`);
      }
    })
  });

  ssInstances['sw-secuestro'] = new SearchableSelect('sw-secuestro', {
    options: TIPOS_SECUESTRO, placeholder: 'Seleccionar tipo…', allowCreate: true,
    createLabel: '+ Registrar nueva opción',
    onCreateClick: () => openMiniModal({
      title: 'Nuevo Tipo de Secuestro/Remate', label: 'Nombre *', showDesc: true,
      onSave: (name, desc) => {
        const newT = { id: Math.max(...TIPOS_SECUESTRO.map(t=>t.id))+1, nombre: name.toUpperCase(), descripcion: desc };
        TIPOS_SECUESTRO.push(newT);
        ssInstances['sw-secuestro']?.addOption(newT);
        ssInstances['sw-secuestro']?.select(newT.id, newT.nombre);
        showToast(`✓ Tipo "${newT.nombre}" registrado`);
      }
    })
  });

  ssInstances['sw-estado'] = new SearchableSelect('sw-estado', {
    options: ESTADOS, placeholder: 'Seleccionar estado…', allowCreate: true,
    createLabel: '+ Crear nuevo estado',
    onCreateClick: () => openMiniModal({
      title: 'Nuevo Estado', label: 'Nombre del Estado *', showDesc: true,
      onSave: (name, desc) => {
        const newE = { id: Math.max(...ESTADOS.map(e=>e.id))+1, nombre: name.toUpperCase(), descripcion: desc };
        ESTADOS.push(newE);
        ssInstances['sw-estado']?.addOption(newE);
        ssInstances['sw-estado']?.select(newE.id, newE.nombre);
        showToast(`✓ Estado "${newE.nombre}" creado`);
      }
    })
  });

  ssInstances['sw-nivel'] = new SearchableSelect('sw-nivel', {
    options: NIVELES, placeholder: 'Seleccionar nivel…', allowCreate: true,
    createLabel: '+ Crear nuevo nivel',
    onCreateClick: () => openMiniModal({
      title: 'Nuevo Nivel de Recuperación', label: 'Nombre del Nivel *', showDesc: false,
      onSave: (name) => {
        const newN = { id: Math.max(...NIVELES.map(n=>n.id))+1, nombre: name.toUpperCase() };
        NIVELES.push(newN);
        ssInstances['sw-nivel']?.addOption(newN);
        ssInstances['sw-nivel']?.select(newN.id, newN.nombre);
        showToast(`✓ Nivel "${newN.nombre}" creado`);
      }
    })
  });
}

/* ── CAMPOS DINÁMICOS: DEUDORES ── */
function addDeudorEntry(data={}) {
  deudorCount++;
  const idx = deudorCount;
  const html = `
    <div class="persona-entry" id="deudor-${idx}">
      <div class="persona-entry-head">
        <span class="persona-entry-label">Deudor ${idx}</span>
        ${idx>1 ? `<button type="button" class="btn-danger" onclick="removeEntry('deudor-${idx}')"><svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>Eliminar</button>` : ''}
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>N° Identificación ${idx===1?'*':''}</label>
          <input type="text" id="d_cedula_${idx}" placeholder="Cédula o NIT" value="${data.cedula||''}" ${idx===1?'required':''}/>
        </div>
        <div class="form-group">
          <label>Nombre Completo ${idx===1?'*':''}</label>
          <input type="text" id="d_nombre_${idx}" placeholder="Nombre del deudor" value="${data.nombre||''}" ${idx===1?'required':''}/>
        </div>
      </div>
      <div class="contactos-wrap">
        <div style="font-size:.76rem;font-weight:600;color:var(--text-3);margin-bottom:.5rem">Contactos del Deudor ${idx}</div>
        <div id="contactos-d-${idx}"></div>
        <button type="button" class="btn-add-more" onclick="addContactoEntry('d',${idx})" style="margin-top:.4rem;font-size:.76rem;padding:.35rem .7rem">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          Agregar contacto
        </button>
      </div>
    </div>`;
  document.getElementById('deudoresContainer').insertAdjacentHTML('beforeend', html);
  if(data.contactos?.length) data.contactos.forEach(c=>addContactoEntry('d',idx,c));
}

function addCOdeudorEntry(data={}) {
  codeudorCount++;
  const idx=codeudorCount;
  const html = `
    <div class="persona-entry" id="codeudor-${idx}">
      <div class="persona-entry-head">
        <span class="persona-entry-label">Codeudor ${idx}</span>
        <button type="button" class="btn-danger" onclick="removeEntry('codeudor-${idx}')"><svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>Eliminar</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>N° Identificación</label>
          <input type="text" id="co_cedula_${idx}" placeholder="Cédula" value="${data.cedula||''}"/>
        </div>
        <div class="form-group">
          <label>Nombre Completo</label>
          <input type="text" id="co_nombre_${idx}" placeholder="Nombre del codeudor" value="${data.nombre||''}"/>
        </div>
      </div>
      <div class="contactos-wrap">
        <div style="font-size:.76rem;font-weight:600;color:var(--text-3);margin-bottom:.5rem">Contactos del Codeudor ${idx}</div>
        <div id="contactos-co-${idx}"></div>
        <button type="button" class="btn-add-more" onclick="addContactoEntry('co',${idx})" style="margin-top:.4rem;font-size:.76rem;padding:.35rem .7rem">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          Agregar contacto
        </button>
      </div>
    </div>`;
  document.getElementById('codeudoresContainer').insertAdjacentHTML('beforeend', html);
}

let contactoCounts = {};
function addContactoEntry(prefix, personaIdx, data={}) {
  const key = `${prefix}-${personaIdx}`;
  contactoCounts[key] = (contactoCounts[key]||0)+1;
  const ci = contactoCounts[key];
  const html=`
    <div class="contacto-row" id="cont-${prefix}-${personaIdx}-${ci}">
      <select id="ct_tipo_${prefix}_${personaIdx}_${ci}">
        <option value="celular" ${data.tipo==='celular'?'selected':''}>📱 Celular</option>
        <option value="correo"  ${data.tipo==='correo'?'selected':''}>📧 Correo</option>
        <option value="fijo"    ${data.tipo==='fijo'?'selected':''}>☎️ Fijo</option>
      </select>
      <input type="text" id="ct_val_${prefix}_${personaIdx}_${ci}" placeholder="${data.tipo==='correo'?'correo@ejemplo.com':'312 345 6789'}" value="${data.valor||''}"/>
      <button type="button" class="btn-danger" onclick="removeEntry('cont-${prefix}-${personaIdx}-${ci}')" style="width:28px;height:28px;padding:0;justify-content:center">
        <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>`;
  document.getElementById(`contactos-${prefix}-${personaIdx}`).insertAdjacentHTML('beforeend',html);
}

/* ── NOTIFICACIONES ── */
function addNotifEntry() {
  notifCount++;
  const idx=notifCount;
  // Build options based on current deudores/codeudores
  let opts='<option value="">Seleccionar destinatario…</option>';
  for(let i=1;i<=deudorCount;i++){
    const n=document.getElementById(`d_nombre_${i}`)?.value||`Deudor ${i}`;
    opts+=`<option value="deudor-${i}">Deudor: ${n}</option>`;
  }
  for(let i=1;i<=codeudorCount;i++){
    const n=document.getElementById(`co_nombre_${i}`)?.value||`Codeudor ${i}`;
    opts+=`<option value="codeudor-${i}">Codeudor: ${n}</option>`;
  }
  const html=`
    <div class="notif-entry" id="notif-${idx}">
      <div class="notif-grid">
        <div class="form-group" style="margin:0"><label style="font-size:.73rem">Notificado</label>
          <select id="notif_dest_${idx}">${opts}</select>
        </div>
        <div class="form-group" style="margin:0"><label style="font-size:.73rem">Fecha de Notificación</label>
          <input type="date" id="notif_fecha_${idx}"/>
        </div>
        <div class="form-group" style="margin:0"><label style="font-size:.73rem">Observación</label>
          <input type="text" id="notif_obs_${idx}" placeholder="Notas…"/>
        </div>
        <button type="button" class="btn-danger" onclick="removeEntry('notif-${idx}')" style="width:28px;height:28px;padding:0;justify-content:center;align-self:flex-end">
          <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>`;
  document.getElementById('notificacionesContainer').insertAdjacentHTML('beforeend',html);
}

/* ── RECAUDO ── */
function addRecaudoEntry() {
  recaudoCount++;
  const idx=recaudoCount;
  const hoy = new Date().toISOString().slice(0,10);
  const html=`
    <div class="recaudo-entry" id="recaudo-${idx}">
      <div class="form-group" style="margin:0">
        <label style="font-size:.73rem">Fecha del Abono</label>
        <input type="date" id="rec_fecha_${idx}" value="${hoy}"/>
      </div>
      <div class="form-group" style="margin:0">
        <label style="font-size:.73rem">Monto ($)</label>
        <input type="number" id="rec_monto_${idx}" placeholder="0" min="0"/>
      </div>
      <button type="button" class="btn-danger" onclick="removeEntry('recaudo-${idx}')" style="width:28px;height:28px;padding:0;justify-content:center;align-self:flex-end">
        <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>`;
  document.getElementById('recaudoContainer').insertAdjacentHTML('beforeend',html);
}

/* ── OBSERVACIÓN (bitácora) ── */
function addObsEntry() {
  const txt = document.getElementById('f_obs_nueva').value.trim();
  if(!txt) return;
  const entry = { fecha: new Date().toISOString(), texto: txt, autor: 'Flor Abigail Vallejo' };
  obsEntries.unshift(entry);
  document.getElementById('f_obs_nueva').value='';
  renderBitacora();
}
function renderBitacora() {
  const wrap=document.getElementById('bitacoraList');
  if(!wrap) return;
  wrap.innerHTML = obsEntries.length===0
    ? `<p style="color:var(--text-3);font-size:.82rem;font-style:italic">Sin observaciones aún.</p>`
    : obsEntries.map(e=>`
      <div class="bitacora-item">
        <div class="bitacora-meta">
          <svg viewBox="0 0 24 24" fill="none" style="width:12px;height:12px"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          <strong>${e.autor}</strong> · ${formatDatetime(e.fecha)}
        </div>
        <div class="bitacora-text">${e.texto}</div>
      </div>`).join('');
}

function removeEntry(id) {
  document.getElementById(id)?.remove();
}
function toggleSection(cardId) {
  document.getElementById(cardId)?.classList.toggle('collapsed');
}

/* ── GUARDAR OBLIGACIÓN ── */
function saveObligacion(e) {
  e.preventDefault();
  if(!currentCarteraId){ showToast('⚠️ Error: sin cartera seleccionada'); return; }
  const newId = OBLIGACIONES.length>0 ? Math.max(...OBLIGACIONES.map(o=>o.id))+1 : 1;

  // Recolectar deudores
  const deudores=[];
  for(let i=1;i<=deudorCount;i++){
    const cel=document.getElementById(`d_cedula_${i}`);
    const nom=document.getElementById(`d_nombre_${i}`);
    if(!cel||!nom) continue;
    const contactos=[];
    const cc=contactoCounts[`d-${i}`]||0;
    for(let ci=1;ci<=cc;ci++){
      const tipo=document.getElementById(`ct_tipo_d_${i}_${ci}`)?.value||'celular';
      const val=document.getElementById(`ct_val_d_${i}_${ci}`)?.value||'';
      if(val) contactos.push({tipo,valor:val});
    }
    deudores.push({cedula:cel.value.trim(),nombre:nom.value.trim().toUpperCase(),contactos});
  }
  if(!deudores[0]?.cedula||!deudores[0]?.nombre){ showToast('⚠️ Complete los datos del deudor principal'); return; }

  // Codeudores
  const codeudores=[];
  for(let i=1;i<=codeudorCount;i++){
    const cel=document.getElementById(`co_cedula_${i}`);
    const nom=document.getElementById(`co_nombre_${i}`);
    if(!cel||!nom) continue;
    const contactos=[];
    const cc=contactoCounts[`co-${i}`]||0;
    for(let ci=1;ci<=cc;ci++){
      const tipo=document.getElementById(`ct_tipo_co_${i}_${ci}`)?.value||'celular';
      const val=document.getElementById(`ct_val_co_${i}_${ci}`)?.value||'';
      if(val) contactos.push({tipo,valor:val});
    }
    if(cel.value.trim()||nom.value.trim()) codeudores.push({cedula:cel.value.trim(),nombre:nom.value.trim().toUpperCase(),contactos});
  }

  // Notificaciones
  const notificaciones=[];
  for(let i=1;i<=notifCount;i++){
    const dest=document.getElementById(`notif_dest_${i}`)?.value||'';
    const fecha=document.getElementById(`notif_fecha_${i}`)?.value||'';
    if(dest&&fecha) notificaciones.push({destinatario:dest,fecha});
  }

  // Recaudos
  const recaudos=[];
  for(let i=1;i<=recaudoCount;i++){
    const fecha=document.getElementById(`rec_fecha_${i}`)?.value||'';
    const monto=parseFloat(document.getElementById(`rec_monto_${i}`)?.value)||0;
    if(fecha) recaudos.push({fecha,monto});
  }

  const estado_id = ssInstances['sw-estado']?.getValue()||null;
  if(!estado_id){ showToast('⚠️ Seleccione el estado actual'); return; }

  const ob = {
    id: newId, cartera_id: currentCarteraId,
    deudores, codeudores,
    no_credito: document.getElementById('f_no_credito').value.trim(),
    no_pagare: document.getElementById('f_no_pagare').value.trim(),
    saldo_capital: parseFloat(document.getElementById('f_saldo_capital').value)||0,
    municipio: document.getElementById('f_municipio').value,
    fecha_demanda: document.getElementById('f_fecha_demanda').value,
    juzgado_id: ssInstances['sw-juzgado']?.getValue(),
    radicado: document.getElementById('f_radicado').value.trim(),
    medida_id: ssInstances['sw-medida']?.getValue(),
    mandamiento: document.getElementById('f_mandamiento').value,
    notificaciones,
    auto: document.getElementById('f_auto').value,
    liquidacion: document.getElementById('f_liquidacion').value,
    secuestro_id: ssInstances['sw-secuestro']?.getValue(),
    secuestro_desc: '',
    estado_id,
    nivel_id: ssInstances['sw-nivel']?.getValue(),
    recaudos,
    observaciones_list: [...obsEntries].reverse()
  };

  OBLIGACIONES.push(ob);
  filteredObligaciones = OBLIGACIONES.filter(o=>o.cartera_id===currentCarteraId);
  buildCarterasGrid();
  buildDashboard();
  goBackToCartera();
  showToast('✓ Obligación registrada correctamente');
}

/* ══════════════════════════════════════════════
   MODAL DETALLE
══════════════════════════════════════════════ */
function openDetail(id) {
  const o = OBLIGACIONES.find(x=>x.id===id);
  if(!o) return;
  const d0=o.deudores[0]||{};
  const juz=JUZGADOS.find(j=>j.id===o.juzgado_id);
  const med=MEDIDAS.find(m=>m.id===o.medida_id);
  const sec=TIPOS_SECUESTRO.find(t=>t.id===o.secuestro_id);
  const est=ESTADOS.find(e=>e.id===o.estado_id);
  const niv=NIVELES.find(n=>n.id===o.nivel_id);
  const car=CARTERAS.find(c=>c.id===o.cartera_id);
  const recTotal=o.recaudos.reduce((a,r)=>a+r.monto,0);

  document.getElementById('modalTitle').textContent = d0.nombre||'Detalle de Obligación';
  document.getElementById('modalSub').textContent = `Cédula: ${d0.cedula||'—'} · Cartera: ${car?.nombre||'—'} · Radicado: ${o.radicado||'—'}`;

  // Deudores
  const deudoresHtml = o.deudores.map((d,i)=>`
    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:.7rem .85rem;margin-bottom:.4rem">
      <div style="font-weight:600;font-size:.85rem">${d.nombre}</div>
      <div style="font-size:.75rem;color:var(--text-3);font-family:'JetBrains Mono',monospace">${d.cedula}</div>
      ${d.contactos.length?`<div style="margin-top:.3rem;display:flex;gap:.4rem;flex-wrap:wrap">${d.contactos.map(c=>`<span style="background:var(--green-s);color:var(--green-light);padding:.15rem .45rem;border-radius:99px;font-size:.72rem">${c.tipo==='celular'?'📱':'📧'} ${c.valor}</span>`).join('')}</div>`:''}
    </div>`).join('');
  const codeudoresHtml = o.codeudores.length?o.codeudores.map(d=>`
    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:.7rem .85rem;margin-bottom:.4rem">
      <div style="font-weight:600;font-size:.85rem">${d.nombre}</div>
      <div style="font-size:.75rem;color:var(--text-3);font-family:'JetBrains Mono',monospace">${d.cedula}</div>
    </div>`).join(''):'<span style="color:var(--text-3);font-size:.82rem">Sin codeudores</span>';

  // Recaudos timeline
  const recHtml = o.recaudos.length
    ? o.recaudos.map(r=>`<div style="display:flex;justify-content:space-between;padding:.4rem 0;border-bottom:1px solid var(--border)"><span style="font-size:.8rem;color:var(--text-2)">${formatDate(r.fecha)}</span><span style="font-weight:700;color:var(--green-light);font-family:'JetBrains Mono',monospace">${formatCurrency(r.monto)}</span></div>`).join('')
    : '<span style="color:var(--text-3);font-size:.82rem">Sin abonos registrados</span>';

  // Bitácora
  const bitHtml = o.observaciones_list.length
    ? o.observaciones_list.map(ob=>`
      <div class="bitacora-item">
        <div class="bitacora-meta"><strong>${ob.autor}</strong> · ${formatDatetime(ob.fecha)}</div>
        <div class="bitacora-text">${ob.texto}</div>
      </div>`).join('')
    : '<span style="color:var(--text-3);font-size:.82rem">Sin observaciones</span>';

  document.getElementById('modalBody').innerHTML = `
    <div class="detail-grid">
      <div class="detail-section">Deudor(es)</div>
      <div style="grid-column:1/-1">${deudoresHtml}</div>
      <div class="detail-section">Codeudor(es)</div>
      <div style="grid-column:1/-1">${codeudoresHtml}</div>
      <hr class="detail-divider"/>
      <div class="detail-section">Datos del Crédito</div>
      <div class="detail-item"><span class="detail-label">Nro. Crédito ${car?.nombre||''}</span><span class="detail-value">${o.no_credito||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Nro. Pagaré</span><span class="detail-value">${o.no_pagare||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Saldo Capital</span><span class="detail-value" style="color:#60c080;font-weight:700">${formatCurrency(o.saldo_capital)}</span></div>
      <div class="detail-item"><span class="detail-label">Municipio</span><span class="detail-value">${o.municipio||'—'}</span></div>
      <hr class="detail-divider"/>
      <div class="detail-section">Proceso Jurídico</div>
      <div class="detail-item"><span class="detail-label">Juzgado</span><span class="detail-value">${juz?.nombre||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Radicado</span><span class="detail-value">${o.radicado||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Pres. Demanda</span><span class="detail-value">${formatDate(o.fecha_demanda)||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Medida Cautelar</span><span class="detail-value">${med?.nombre||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Mandamiento Pago</span><span class="detail-value">${formatDate(o.mandamiento)||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Auto Seguir Adelante</span><span class="detail-value">${formatDate(o.auto)||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Liquidación</span><span class="detail-value">${formatDate(o.liquidacion)||'—'}</span></div>
      <div class="detail-item"><span class="detail-label">Secuestro/Remate</span><span class="detail-value">${sec?.nombre||'—'}</span></div>
      <hr class="detail-divider"/>
      <div class="detail-section">Estado y Seguimiento</div>
      <div class="detail-item"><span class="detail-label">Estado Actual</span><span class="detail-value">${estadoBadge(est?.nombre||'')}</span></div>
      <div class="detail-item"><span class="detail-label">Nivel Recuperación</span><span class="detail-value">${nivelBadge(niv?.nombre||'')}</span></div>
      <div class="detail-item"><span class="detail-label">Total Recaudado</span><span class="detail-value" style="color:var(--green-light);font-weight:700">${formatCurrency(recTotal)}</span></div>
      <div class="detail-item"><span class="detail-label">% Recuperado</span><span class="detail-value">${o.saldo_capital>0?((recTotal/o.saldo_capital)*100).toFixed(1)+'%':'0%'}</span></div>
    </div>

    <div style="margin-top:1.25rem">
      <div class="subsection-title">Historial de Recaudo Trimestral</div>
      ${recHtml}
    </div>

    <div style="margin-top:1.25rem">
      <div class="subsection-title">Bitácora de Observaciones</div>
      <div class="bitacora-list">${bitHtml}</div>
    </div>
  `;

  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-outline" onclick="closeModalDirect()">Cerrar</button>
    <button class="btn-primary" onclick="openEdit(${id})">
      <svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" stroke="currentColor" stroke-width="2"/></svg>
      Editar
    </button>`;
  openModal();
}

/* ══════════════════════════════════════════════
   MODAL EDICIÓN
══════════════════════════════════════════════ */
function openEdit(id) {
  const o=OBLIGACIONES.find(x=>x.id===id);
  if(!o) return;
  const d0=o.deudores[0]||{};
  const est=ESTADOS.find(e=>e.id===o.estado_id);
  const niv=NIVELES.find(n=>n.id===o.nivel_id);

  document.getElementById('modalTitle').textContent='Editar Obligación';
  document.getElementById('modalSub').textContent=d0.nombre||'';

  const estOpts=ESTADOS.map(e=>`<option value="${e.id}" ${o.estado_id===e.id?'selected':''}>${e.nombre}</option>`).join('');
  const nivOpts=NIVELES.map(n=>`<option value="${n.id}" ${o.nivel_id===n.id?'selected':''}>${n.nombre}</option>`).join('');
  const recTotal=o.recaudos.reduce((a,r)=>a+r.monto,0);

  document.getElementById('modalBody').innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem">
      <div class="form-group" style="grid-column:1/-1">
        <label>Estado Actual *</label>
        <select id="e_estado">${estOpts}</select>
      </div>
      <div class="form-group">
        <label>Mandamiento de Pago</label>
        <input type="date" id="e_mandamiento" value="${o.mandamiento||''}"/>
      </div>
      <div class="form-group">
        <label>Auto Seguir Adelante</label>
        <input type="date" id="e_auto" value="${o.auto||''}"/>
      </div>
      <div class="form-group">
        <label>Liquidación Crédito</label>
        <input type="date" id="e_liquidacion" value="${o.liquidacion||''}"/>
      </div>
      <div class="form-group">
        <label>Nivel Recuperación</label>
        <select id="e_nivel">${nivOpts}</select>
      </div>
    </div>

    <div style="margin-top:1.5rem">
      <div class="subsection-title">Registrar Abono / Recaudo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.85rem;margin-bottom:.5rem">
        <div class="form-group"><label>Fecha del Abono</label><input type="date" id="e_rec_fecha" value="${new Date().toISOString().slice(0,10)}"/></div>
        <div class="form-group"><label>Monto ($)</label><input type="number" id="e_rec_monto" placeholder="0" min="0"/></div>
      </div>
      <div style="font-size:.78rem;color:var(--text-3);margin-top:.25rem">Recaudo total actual: <strong style="color:var(--green-light)">${formatCurrency(recTotal)}</strong></div>
    </div>

    <div style="margin-top:1.5rem">
      <div class="subsection-title">Agregar Observación a la Bitácora</div>
      <div class="form-group">
        <textarea id="e_obs" rows="3" placeholder="Novedad o actualización del proceso…"></textarea>
      </div>
    </div>
  `;

  document.getElementById('modalFooter').innerHTML=`
    <button class="btn-outline" onclick="openDetail(${id})">← Cancelar</button>
    <button class="btn-primary" onclick="saveEdit(${id})">
      <svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" stroke="currentColor" stroke-width="2"/><polyline points="17 21 17 13 7 13 7 21" stroke="currentColor" stroke-width="2"/></svg>
      Guardar Cambios
    </button>`;
  openModal();
}

function saveEdit(id){
  const idx=OBLIGACIONES.findIndex(x=>x.id===id);
  if(idx===-1) return;
  const o=OBLIGACIONES[idx];

  o.estado_id    = parseInt(document.getElementById('e_estado').value);
  o.nivel_id     = parseInt(document.getElementById('e_nivel').value);
  o.mandamiento  = document.getElementById('e_mandamiento').value;
  o.auto         = document.getElementById('e_auto').value;
  o.liquidacion  = document.getElementById('e_liquidacion').value;

  const recFecha=document.getElementById('e_rec_fecha').value;
  const recMonto=parseFloat(document.getElementById('e_rec_monto').value)||0;
  if(recFecha&&recMonto>0) o.recaudos.push({fecha:recFecha,monto:recMonto});

  const obsText=document.getElementById('e_obs').value.trim();
  if(obsText) o.observaciones_list.unshift({fecha:new Date().toISOString(),texto:obsText,autor:'Flor Abigail Vallejo'});

  filteredObligaciones=OBLIGACIONES.filter(ob=>ob.cartera_id===currentCarteraId);
  buildTable(); buildRecentTable(); buildDashboard();
  closeModalDirect();
  showToast('✓ Obligación actualizada');
}

/* ══════════════════════════════════════════════
   JUZGADOS PAGE
══════════════════════════════════════════════ */
let selectedJuzgadoId = null;

function buildJuzgados() {
  renderJuzgadoList();
  // Auto-select first juzgado that has obligations
  const firstWithObs = JUZGADOS.find(j => OBLIGACIONES.some(o => o.juzgado_id === j.id));
  if (firstWithObs) selectJuzgado(firstWithObs.id);
}

function renderJuzgadoList() {
  const list = document.getElementById('juzgadosList');
  if (!list) return;
  const counts = {};
  OBLIGACIONES.forEach(o => { if (o.juzgado_id) counts[o.juzgado_id] = (counts[o.juzgado_id] || 0) + 1; });

  list.innerHTML = JUZGADOS.map(j => {
    const c = counts[j.id] || 0;
    return `
      <div class="juzgado-item ${selectedJuzgadoId === j.id ? 'selected' : ''}"
           id="juzgado-item-${j.id}" onclick="selectJuzgado(${j.id})">
        <span class="juzgado-item-name">${j.nombre}</span>
        <span class="juzgado-item-count">${c}</span>
      </div>`;
  }).join('');

  // "Sin juzgado" bucket
  const sinJuzgado = OBLIGACIONES.filter(o => !o.juzgado_id).length;
  if (sinJuzgado > 0) {
    list.insertAdjacentHTML('beforeend', `
      <div class="juzgado-item ${selectedJuzgadoId === 0 ? 'selected' : ''}"
           id="juzgado-item-0" onclick="selectJuzgado(0)">
        <span class="juzgado-item-name" style="color:var(--text-3);font-style:italic">Sin juzgado asignado</span>
        <span class="juzgado-item-count">${sinJuzgado}</span>
      </div>`);
  }
}

function selectJuzgado(juzgadoId) {
  selectedJuzgadoId = juzgadoId;

  // Update selection highlight
  document.querySelectorAll('.juzgado-item').forEach(el => el.classList.remove('selected'));
  document.getElementById(`juzgado-item-${juzgadoId}`)?.classList.add('selected');

  const juz = JUZGADOS.find(j => j.id === juzgadoId);
  const juzNombre = juz ? juz.nombre : (juzgadoId === 0 ? 'Sin juzgado asignado' : '—');

  // Filter obligations
  const obs = juzgadoId === 0
    ? OBLIGACIONES.filter(o => !o.juzgado_id)
    : OBLIGACIONES.filter(o => o.juzgado_id === juzgadoId);

  const detail = document.getElementById('juzgadosDetail');
  if (!detail) return;

  if (obs.length === 0) {
    detail.innerHTML = `
      <div class="juzgados-detail-header">
        <div>
          <div class="juzgados-detail-title">${juzNombre}</div>
          <div class="juzgados-detail-sub">Sin procesos registrados en este despacho</div>
        </div>
      </div>
      <div class="juzgados-empty-state">
        <svg viewBox="0 0 64 64" fill="none" style="width:48px;height:48px;opacity:.2">
          <path d="M8 56h48M12 56V26l20-18 20 18v30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>No hay procesos asignados a este juzgado</p>
      </div>`;
    return;
  }

  // Compute stats
  const totalCap = obs.reduce((s, o) => s + o.saldo_capital, 0);
  const totalRec = obs.reduce((s, o) => s + o.recaudos.reduce((a, r) => a + r.monto, 0), 0);
  const carteras = [...new Set(obs.map(o => o.cartera_id))];

  // Group by cartera for the subtitle
  const carteraNames = carteras.map(cid => CARTERAS.find(c => c.id === cid)?.nombre || '').filter(Boolean).join(', ');

  detail.innerHTML = `
    <div class="juzgados-detail-header">
      <div>
        <div class="juzgados-detail-title">${juzNombre}</div>
        <div class="juzgados-detail-sub">
          ${obs.length} proceso${obs.length !== 1 ? 's' : ''} · Carteras: ${carteraNames || '—'}
        </div>
      </div>
      <div style="display:flex;gap:.5rem">
        <span style="font-size:.72rem;color:var(--text-3)">${carteras.length} cartera${carteras.length!==1?'s':''}</span>
      </div>
    </div>
    <div class="juzgados-stats-bar">
      <div class="jstat"><span class="jstat-val">${obs.length}</span><span class="jstat-label">Procesos</span></div>
      <div class="jstat"><span class="jstat-val" style="color:#60c080">${formatCurrencyShort(totalCap)}</span><span class="jstat-label">Capital Total</span></div>
      <div class="jstat"><span class="jstat-val" style="color:var(--green-light)">${formatCurrencyShort(totalRec)}</span><span class="jstat-label">Recaudado</span></div>
      <div class="jstat">
        <span class="jstat-val">${totalCap > 0 ? ((totalRec / totalCap) * 100).toFixed(1) + '%' : '0%'}</span>
        <span class="jstat-label">% Recuperación</span>
      </div>
    </div>
    <div class="juzgados-detail-body">
      <table class="data-table" style="min-width:680px">
        <thead><tr>
          <th>Deudor Principal</th><th>Cédula</th><th>Cartera</th>
          <th>Radicado</th><th>Saldo Capital</th><th>Recaudo</th><th>Estado</th><th>Acciones</th>
        </tr></thead>
        <tbody>
          ${obs.map(o => {
            const d0 = o.deudores[0] || {};
            const car = CARTERAS.find(c => c.id === o.cartera_id);
            const est = ESTADOS.find(e => e.id === o.estado_id);
            const recTotal = o.recaudos.reduce((a, r) => a + r.monto, 0);
            return `<tr style="cursor:pointer">
              <td class="td-name">${d0.nombre || '—'}${o.deudores.length > 1 ? `<span class="td-chip-more">+${o.deudores.length - 1}</span>` : ''}</td>
              <td class="td-mono">${d0.cedula || '—'}</td>
              <td>
                <span class="badge b-default" style="cursor:pointer" onclick="enterCartera(${o.cartera_id})" title="Ir a cartera ${car?.nombre||''}">
                  ${car?.nombre || '—'}
                </span>
              </td>
              <td class="td-mono">${o.radicado || '—'}</td>
              <td class="td-amount">${formatCurrency(o.saldo_capital)}</td>
              <td class="td-amount-rec">${formatCurrency(recTotal)}</td>
              <td>${estadoBadge(est?.nombre || '')}</td>
              <td>
                <div class="row-actions">
                  <button class="action-btn" title="Ver detalle" onclick="openDetail(${o.id})">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>
                  </button>
                  <button class="action-btn" title="Editar" onclick="openEdit(${o.id})">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="1.8"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" stroke="currentColor" stroke-width="1.8"/></svg>
                  </button>
                  <button class="action-btn" title="Ir a cartera" onclick="enterCartera(${o.cartera_id})" style="color:var(--green-light)">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="1.8"/><polyline points="15 3 21 3 21 9" stroke="currentColor" stroke-width="1.8"/><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="1.8"/></svg>
                  </button>
                </div>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

function addJuzgadoGlobal(name) {
  const newJ = { id: Math.max(0, ...JUZGADOS.map(j => j.id)) + 1, nombre: name.toUpperCase() };
  JUZGADOS.push(newJ);
  renderJuzgadoList();
  showToast(`✓ Juzgado "${newJ.nombre}" registrado`);
}



/* ══════════════════════════════════════════════
   REPORTES PAGE
══════════════════════════════════════════════ */
function buildReports() {
  const wrap=document.getElementById('reportsGrid');
  if(!wrap) return;
  const reports=[
    { icon:'📋', title:'Informe General Cartera', desc:'Listado completo de todas las obligaciones activas e inactivas, con estados y saldos.', color:'#2e7d3222' },
    { icon:'💰', title:'Informe de Recaudo', desc:'Resumen de abonos y recuperación de cartera por período trimestral, por cartera y total.', color:'#e6510022' },
    { icon:'🚨', title:'Procesos Persuasivos', desc:'Listado de deudores en etapa persuasiva pendientes de gestión y seguimiento inmediato.', color:'#d9770622' },
  ];
  wrap.innerHTML=reports.map(r=>`
    <div class="report-card">
      <div class="report-icon" style="background:${r.color}">${r.icon}</div>
      <div class="report-title">${r.title}</div>
      <div class="report-desc">${r.desc}</div>
      <button class="report-btn" onclick="showToast('📄 Generando: ${r.title}…')">Generar Reporte</button>
    </div>`).join('');
}

/* ══════════════════════════════════════════════
   MODAL HELPERS
══════════════════════════════════════════════ */
function openModal() { document.getElementById('modalOverlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeModalDirect() { document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow=''; }
function closeModal(e) { if(e.target===document.getElementById('modalOverlay')) closeModalDirect(); }

/* ══════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════ */
function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),3200);
}

/* ══════════════════════════════════════════════
   HELPERS DE FORMATO
══════════════════════════════════════════════ */
function formatCurrency(n) {
  if(n===null||n===undefined||n==='') return '—';
  return new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
}
function formatCurrencyShort(n) {
  if(!n) return '$0';
  if(n>=1e9) return `$${(n/1e9).toFixed(1)}B`;
  if(n>=1e6) return `$${(n/1e6).toFixed(1)}M`;
  if(n>=1e3) return `$${(n/1e3).toFixed(0)}K`;
  return formatCurrency(n);
}
function formatDate(d) {
  if(!d) return '';
  try { return new Date(d+'T00:00:00').toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'}); }
  catch { return d; }
}
function formatDatetime(d) {
  if(!d) return '';
  try { return new Date(d).toLocaleString('es-CO',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
  catch { return d; }
}

/* ── BADGES ── */
const ESTADO_BADGE_MAP = {
  'TERMINADO':                'b-terminado',
  'PERSUASIVO':               'b-persuasivo',
  'AVALÚO INMUEBLE':          'b-avaluo-inmueble',
  'AVALÚO ESTABLECIMIENTO':   'b-avaluo-estab',
  'TRÁMITE PROCESAL':         'b-tramite',
  'INMOVILIZACIÓN':           'b-inmovilizacion',
  'MEDIDA REGISTRADA':        'b-med-registrada',
  'NOTIFICACIÓN':             'b-notificacion',
  'MANDAMIENTO DE PAGO':      'b-mandamiento',
  'SEGUIR ADELANTE':          'b-seguir',
  'ADMISIÓN DEMANDA':         'b-admision',
  'INADMITE DEMANDA':         'b-inadmite',
  'SUBSANA DEMANDA':          'b-subsana',
  'SECUESTRO':                'b-secuestro',
  'TÍTULOS JUDICIALES':       'b-titulos',
  'INSCRIPCIÓN MEDIDA':       'b-inscripcion',
  'REMATE':                   'b-remate',
  'ACUERDO DE PAGO':          'b-acuerdo',
  'EN LIQUIDACIÓN':           'b-liquidacion',
  'EN ACTUALIZACIÓN LIQUIDACIÓN': 'b-act-liquidacion',
};
function estadoBadge(name) {
  if(!name) return '<span style="color:var(--text-3)">—</span>';
  const cls = ESTADO_BADGE_MAP[name] || 'b-default';
  return `<span class="badge ${cls}">${name}</span>`;
}
function nivelBadge(name) {
  if(!name) return '<span style="color:var(--text-3)">—</span>';
  const map = { 'ALTO':'b-nivel-alto', 'MEDIO':'b-nivel-medio', 'BAJO':'b-nivel-bajo' };
  return `<span class="badge ${map[name]||'b-default'}">${name}</span>`;
}
