/* ════════════════════════════════════════════════
   CASA DE COBRANZAS DEL PUTUMAYO E.U.
   Sistema de Gestión — app.js
════════════════════════════════════════════════ */

'use strict';

/* ── SAMPLE DATA ── */
const RECORDS = [
  {
    id: 1, cedula: '1075234567', nombre: 'CARLOS ANDRÉS MORA BURBANO',
    codeudor: 'SANDRA MILENA MORA', municipio: 'Mocoa',
    fecha_credito: '2021-03-15', no_credito: 'FOG-2021-0031', no_pagare: 'PAG-2021-031',
    saldo_capital: 18500000, fecha_demanda: '2024-02-10', juzgado: 'PRIMERO CIVIL MUNICIPAL',
    radicado: '2024-12', medida: 'EMBARGO DE SALARIOS',
    mandamiento: '2024-04-05', notificacion: '2024-05-20', auto: '', liquidacion: '',
    estado: 'EN MANDAMIENTO', recaudo: 2500000, nivel: 'MEDIO',
    observacion: 'Deudor con empleo estable. Acuerdo de pago propuesto para septiembre 2024.'
  },
  {
    id: 2, cedula: '36289401', nombre: 'LUZ MARINA TORRES CÓRDOBA',
    codeudor: '', municipio: 'Puerto Asís',
    fecha_credito: '2020-07-22', no_credito: 'FOG-2020-0089', no_pagare: 'PAG-2020-089',
    saldo_capital: 32000000, fecha_demanda: '2024-01-15', juzgado: 'SEGUNDO CIVIL MUNICIPAL',
    radicado: '2024-03', medida: 'EMBARGO DE BIENES',
    mandamiento: '2024-03-10', notificacion: '2024-04-18', auto: '2024-07-01', liquidacion: '',
    estado: 'EN LIQUIDACIÓN', recaudo: 5000000, nivel: 'ALTO',
    observacion: 'Bien inmueble identificado en Mocoa. Remate programado.'
  },
  {
    id: 3, cedula: '12873401', nombre: 'JOSÉ FERNEY GUERRERO ERAZO',
    codeudor: 'MARÍA CLAUDIA ERAZO', municipio: 'Villagarzón',
    fecha_credito: '2019-11-05', no_credito: 'FOG-2019-0142', no_pagare: 'PAG-2019-142',
    saldo_capital: 45000000, fecha_demanda: '2023-08-20', juzgado: 'PROMISCUO MUNICIPAL',
    radicado: '2023-59', medida: 'EMBARGO DE CUENTAS',
    mandamiento: '2023-10-01', notificacion: '2023-11-15', auto: '2024-02-20', liquidacion: '2024-06-01',
    estado: 'SENTENCIA', recaudo: 18000000, nivel: 'ALTO',
    observacion: 'Sentencia ejecutoriada. En proceso de cobro coactivo.'
  },
  {
    id: 4, cedula: '52910234', nombre: 'DIANA PATRICIA CABRERA LUNA',
    codeudor: '', municipio: 'Orito',
    fecha_credito: '2022-05-10', no_credito: 'FOG-2022-0055', no_pagare: 'PAG-2022-055',
    saldo_capital: 12000000, fecha_demanda: '2024-05-12', juzgado: 'PRIMERO CIVIL MUNICIPAL',
    radicado: '2024-31', medida: 'EMBARGO DE SALARIOS',
    mandamiento: '', notificacion: '', auto: '', liquidacion: '',
    estado: 'ACTIVO', recaudo: 0, nivel: 'BAJO',
    observacion: 'Demanda reciente. En espera de mandamiento de pago.'
  },
  {
    id: 5, cedula: '71234890', nombre: 'RODRIGO ENRIQUE MUÑOZ SALCEDO',
    codeudor: 'ESPERANZA SALCEDO', municipio: 'Sibundoy',
    fecha_credito: '2021-09-30', no_credito: 'FOG-2021-0078', no_pagare: 'PAG-2021-078',
    saldo_capital: 28000000, fecha_demanda: '2023-12-05', juzgado: 'TERCERO CIVIL MUNICIPAL',
    radicado: '2023-95', medida: 'SECUESTRO DE BIENES',
    mandamiento: '2024-01-20', notificacion: '2024-02-28', auto: '', liquidacion: '',
    estado: 'SUSPENDIDO', recaudo: 3000000, nivel: 'CRITICO',
    observacion: 'Proceso suspendido por acuerdo de reestructuración. Vence 15/09/2024.'
  },
  {
    id: 6, cedula: '1049800231', nombre: 'ASTRID CAROLINA PORTILLA FAJARDO',
    codeudor: '', municipio: 'Mocoa',
    fecha_credito: '2020-02-14', no_credito: 'FOG-2020-0021', no_pagare: 'PAG-2020-021',
    saldo_capital: 9800000, fecha_demanda: '2022-11-01', juzgado: 'SEGUNDO CIVIL MUNICIPAL',
    radicado: '2022-88', medida: 'NINGUNA',
    mandamiento: '2023-01-10', notificacion: '2023-03-22', auto: '2023-07-14', liquidacion: '2023-11-01',
    estado: 'ARCHIVO', recaudo: 9800000, nivel: 'ALTO',
    observacion: 'Proceso finalizado. Deuda cancelada en su totalidad.'
  },
  {
    id: 7, cedula: '36712345', nombre: 'NUBIA STELLA DELGADO RIVAS',
    codeudor: 'PEDRO RIVAS', municipio: 'Puerto Caicedo',
    fecha_credito: '2023-01-20', no_credito: 'FOG-2023-0014', no_pagare: 'PAG-2023-014',
    saldo_capital: 52000000, fecha_demanda: '2024-06-01', juzgado: 'PROMISCUO MUNICIPAL',
    radicado: '2024-47', medida: 'EMBARGO DE BIENES',
    mandamiento: '', notificacion: '', auto: '', liquidacion: '',
    estado: 'ACTIVO', recaudo: 0, nivel: 'CRITICO',
    observacion: 'Mayor valor en cartera. Seguimiento prioritario.'
  },
  {
    id: 8, cedula: '10758231', nombre: 'HERNÁN DARÍO RUIZ PANTOJA',
    codeudor: '', municipio: 'San Francisco',
    fecha_credito: '2021-06-15', no_credito: 'FOG-2021-0060', no_pagare: 'PAG-2021-060',
    saldo_capital: 22000000, fecha_demanda: '2024-03-10', juzgado: 'PRIMERO CIVIL MUNICIPAL',
    radicado: '2024-19', medida: 'EMBARGO DE SALARIOS',
    mandamiento: '2024-05-01', notificacion: '2024-06-10', auto: '', liquidacion: '',
    estado: 'EN MANDAMIENTO', recaudo: 4500000, nivel: 'MEDIO',
    observacion: 'Parcialmente notificado. Pendiente ratificación.'
  },
];

/* Simulated full records count */
const TOTAL_SIMULATED = 247;

/* ── STATE ── */
let currentPage = 1;
const PAGE_SIZE = 8;
let filteredRecords = [...RECORDS];
let editingRecord = null;
let allRecords = [...RECORDS];

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateDate();
  animateKPIs();
  buildDonut();
  buildBarChart();
  buildRecentTable();
  buildTable();
  buildJuzgados();
  buildReports();
  setupNavigation();
  setupSidebar();
  setupGlobalSearch();
});

/* ════════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════════ */
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
  // Close sidebar on mobile
  if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
}

function setupSidebar() {
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
}

/* ════════════════════════════════════════════════
   DATE
════════════════════════════════════════════════ */
function updateDate() {
  const el = document.getElementById('topbarDate');
  if (!el) return;
  const d = new Date();
  el.textContent = d.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
}

/* ════════════════════════════════════════════════
   KPI ANIMATION
════════════════════════════════════════════════ */
function animateKPIs() {
  document.querySelectorAll('.kpi-value').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const isCurrency = el.classList.contains('currency');
    const duration = 1500;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * target);
      el.textContent = isCurrency ? formatCurrency(val) : val.toLocaleString('es-CO') + (el.dataset.target === '63' ? '%' : '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ════════════════════════════════════════════════
   DONUT CHART
════════════════════════════════════════════════ */
const ESTADOS_DATA = [
  { label: 'Activo',         value: 72,  color: '#1a56db' },
  { label: 'En Mandamiento', value: 58,  color: '#9061f9' },
  { label: 'En Liquidación', value: 41,  color: '#0e9f6e' },
  { label: 'Sentencia',      value: 35,  color: '#ff5a1f' },
  { label: 'Archivo',        value: 29,  color: '#6e7681' },
  { label: 'Suspendido',     value: 12,  color: '#c27803' },
];

function buildDonut() {
  const svg = document.getElementById('donutChart');
  const legend = document.getElementById('donutLegend');
  if (!svg || !legend) return;

  const total = ESTADOS_DATA.reduce((s, d) => s + d.value, 0);
  const cx = 80, cy = 80, r = 58, stroke = 22;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  ESTADOS_DATA.forEach(d => {
    const pct = d.value / total;
    const dash = pct * circumference;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', d.color);
    circle.setAttribute('stroke-width', stroke);
    circle.setAttribute('stroke-dasharray', `${dash} ${circumference - dash}`);
    circle.setAttribute('stroke-dashoffset', -offset);
    circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
    circle.style.transition = 'stroke-dasharray .8s cubic-bezier(.22,1,.36,1)';
    svg.appendChild(circle);
    offset += dash;

    // Legend item
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-dot" style="background:${d.color}"></span>${d.label} <strong style="color:var(--text);margin-left:auto;padding-left:.5rem">${d.value}</strong>`;
    legend.appendChild(item);
  });

  // Center text
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', cx);
  text.setAttribute('y', cy - 6);
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('fill', '#e6edf3');
  text.setAttribute('font-size', '20');
  text.setAttribute('font-weight', '800');
  text.setAttribute('font-family', 'Inter, sans-serif');
  text.textContent = total;
  svg.appendChild(text);

  const sub = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  sub.setAttribute('x', cx);
  sub.setAttribute('y', cy + 14);
  sub.setAttribute('text-anchor', 'middle');
  sub.setAttribute('fill', '#8b949e');
  sub.setAttribute('font-size', '9');
  sub.setAttribute('font-family', 'Inter, sans-serif');
  sub.textContent = 'Procesos';
  svg.appendChild(sub);
}

/* ════════════════════════════════════════════════
   BAR CHART
════════════════════════════════════════════════ */
const MONTHLY_DATA = [
  { month: 'Ene', val: 42 },
  { month: 'Feb', val: 58 },
  { month: 'Mar', val: 35 },
  { month: 'Abr', val: 71 },
  { month: 'May', val: 53 },
  { month: 'Jun', val: 88 },
  { month: 'Jul', val: 67 },
  { month: 'Ago', val: 92 },
  { month: 'Sep', val: 75 },
  { month: 'Oct', val: 61 },
  { month: 'Nov', val: 84 },
  { month: 'Dic', val: 79 },
];

function buildBarChart() {
  const wrap = document.getElementById('barChart');
  if (!wrap) return;
  const max = Math.max(...MONTHLY_DATA.map(d => d.val));
  const containerH = 110; // px available for bars
  MONTHLY_DATA.forEach(d => {
    const h = Math.max(4, Math.round((d.val / max) * containerH));
    const col = document.createElement('div');
    col.className = 'bar-col';
    col.innerHTML = `
      <div class="bar-fill" style="height:${h}px" title="${d.val}M recaudado"></div>
      <span class="bar-label">${d.month}</span>
    `;
    wrap.appendChild(col);
  });
}

/* ════════════════════════════════════════════════
   RECENT TABLE (dashboard)
════════════════════════════════════════════════ */
function buildRecentTable() {
  const wrap = document.getElementById('recentTable');
  if (!wrap) return;
  const recent = RECORDS.slice(0, 5);
  wrap.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Nombre Deudor</th>
          <th>Cédula</th>
          <th>Municipio</th>
          <th>Saldo Capital</th>
          <th>Estado</th>
          <th>Nivel</th>
        </tr>
      </thead>
      <tbody>
        ${recent.map(r => `
          <tr style="cursor:pointer" onclick="openDetail(${r.id})">
            <td class="td-name">${r.nombre}</td>
            <td class="td-cedula">${r.cedula}</td>
            <td>${r.municipio}</td>
            <td class="td-amount">${formatCurrency(r.saldo_capital)}</td>
            <td>${estadoBadge(r.estado)}</td>
            <td>${nivelBadge(r.nivel)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

/* ════════════════════════════════════════════════
   MAIN TABLE
════════════════════════════════════════════════ */
function buildTable() {
  const wrap = document.getElementById('tableWrap');
  if (!wrap) return;
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageData = filteredRecords.slice(start, end);

  wrap.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Deudor</th>
          <th>Cédula</th>
          <th>Municipio</th>
          <th>Juzgado</th>
          <th>Radicado</th>
          <th>Saldo Capital</th>
          <th>Total Recaudo</th>
          <th>Estado</th>
          <th>Nivel</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${pageData.length === 0
          ? `<tr><td colspan="11" style="text-align:center;padding:3rem;color:var(--text-3)">No se encontraron registros</td></tr>`
          : pageData.map((r, i) => `
          <tr>
            <td class="td-mono">${start + i + 1}</td>
            <td class="td-name">${r.nombre}</td>
            <td class="td-cedula">${r.cedula}</td>
            <td>${r.municipio}</td>
            <td style="font-size:.78rem;max-width:160px">${r.juzgado}</td>
            <td class="td-mono">${r.radicado || '—'}</td>
            <td class="td-amount">${formatCurrency(r.saldo_capital)}</td>
            <td class="td-amount" style="color:#0e9f6e">${formatCurrency(r.recaudo)}</td>
            <td>${estadoBadge(r.estado)}</td>
            <td>${nivelBadge(r.nivel)}</td>
            <td>
              <div class="row-actions">
                <button class="action-btn" title="Ver detalle" onclick="openDetail(${r.id})">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>
                </button>
                <button class="action-btn" title="Editar" onclick="openEdit(${r.id})">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="1.8"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" stroke="currentColor" stroke-width="1.8"/></svg>
                </button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  buildPagination();
}

function buildPagination() {
  const pag = document.getElementById('tablePagination');
  if (!pag) return;
  const totalPages = Math.ceil(filteredRecords.length / PAGE_SIZE);
  let html = `<span style="font-size:.8rem;color:var(--text-2);margin-right:.5rem">${filteredRecords.length} registros</span>`;
  html += `<button class="pag-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>‹</button>`;
  for (let p = 1; p <= totalPages; p++) {
    if (totalPages > 7 && p > 3 && p < totalPages - 1 && Math.abs(p - currentPage) > 1) {
      if (p === 4 && currentPage > 5) html += `<span style="color:var(--text-3);padding:0 .25rem">…</span>`;
      continue;
    }
    html += `<button class="pag-btn ${p === currentPage ? 'active' : ''}" onclick="changePage(${p})">${p}</button>`;
  }
  html += `<button class="pag-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>›</button>`;
  pag.innerHTML = html;
}

function changePage(p) {
  const totalPages = Math.ceil(filteredRecords.length / PAGE_SIZE);
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  buildTable();
  document.getElementById('tableWrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── FILTERS ── */
function filterTable() {
  const q = document.getElementById('tableSearch').value.toLowerCase().trim();
  const estado = document.getElementById('filterEstado').value;
  const juzgado = document.getElementById('filterJuzgado').value;
  const nivel = document.getElementById('filterNivel').value;

  filteredRecords = allRecords.filter(r => {
    const matchQ = !q || r.nombre.toLowerCase().includes(q)
      || r.cedula.includes(q)
      || (r.radicado && r.radicado.toLowerCase().includes(q))
      || r.municipio.toLowerCase().includes(q);
    const matchEstado = !estado || r.estado === estado;
    const matchJuzgado = !juzgado || r.juzgado.includes(juzgado);
    const matchNivel = !nivel || r.nivel === nivel;
    return matchQ && matchEstado && matchJuzgado && matchNivel;
  });

  currentPage = 1;
  buildTable();
}

function clearFilters() {
  document.getElementById('tableSearch').value = '';
  document.getElementById('filterEstado').value = '';
  document.getElementById('filterJuzgado').value = '';
  document.getElementById('filterNivel').value = '';
  filteredRecords = [...allRecords];
  currentPage = 1;
  buildTable();
}

/* ── GLOBAL SEARCH ── */
function setupGlobalSearch() {
  const input = document.getElementById('globalSearch');
  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 2) return;
    document.getElementById('tableSearch').value = q;
    openPage('cartera');
    filteredRecords = allRecords.filter(r =>
      r.nombre.toLowerCase().includes(q.toLowerCase())
      || r.cedula.includes(q)
      || (r.radicado && r.radicado.toLowerCase().includes(q.toLowerCase()))
    );
    currentPage = 1;
    buildTable();
  });
}

/* ════════════════════════════════════════════════
   MODAL – DETAIL VIEW
════════════════════════════════════════════════ */
function openDetail(id) {
  const r = allRecords.find(x => x.id === id);
  if (!r) return;
  editingRecord = null;

  document.getElementById('modalTitle').textContent = r.nombre;
  document.getElementById('modalSub').textContent = `Cédula: ${r.cedula} · Radicado: ${r.radicado || '—'} · ${r.municipio}`;

  document.getElementById('modalBody').innerHTML = `
    <div class="detail-grid">
      <div class="detail-section">Información del Crédito</div>
      <div class="detail-item"><span class="detail-label">N° Crédito FOGADE</span><span class="detail-value">${r.no_credito}</span></div>
      <div class="detail-item"><span class="detail-label">N° Pagaré FOGADE</span><span class="detail-value">${r.no_pagare}</span></div>
      <div class="detail-item"><span class="detail-label">Fecha Crédito</span><span class="detail-value">${formatDate(r.fecha_credito)}</span></div>
      <div class="detail-item"><span class="detail-label">Municipio</span><span class="detail-value">${r.municipio}</span></div>
      <div class="detail-item"><span class="detail-label">Codeudor</span><span class="detail-value">${r.codeudor || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Saldo Capital</span><span class="detail-value" style="color:#60a5fa;font-weight:700">${formatCurrency(r.saldo_capital)}</span></div>

      <hr class="detail-divider"/>
      <div class="detail-section">Proceso Jurídico</div>
      <div class="detail-item"><span class="detail-label">Juzgado</span><span class="detail-value">${r.juzgado}</span></div>
      <div class="detail-item"><span class="detail-label">Radicado</span><span class="detail-value">${r.radicado || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Pres. Demanda</span><span class="detail-value">${formatDate(r.fecha_demanda)}</span></div>
      <div class="detail-item"><span class="detail-label">Medida Cautelar</span><span class="detail-value">${r.medida || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Mandamiento Pago</span><span class="detail-value">${formatDate(r.mandamiento) || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Notificación</span><span class="detail-value">${formatDate(r.notificacion) || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Auto Seguir Adelante</span><span class="detail-value">${formatDate(r.auto) || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Liquidación / Remates</span><span class="detail-value">${formatDate(r.liquidacion) || '—'}</span></div>

      <hr class="detail-divider"/>
      <div class="detail-section">Seguimiento y Recuperación</div>
      <div class="detail-item"><span class="detail-label">Estado Actual</span><span class="detail-value">${estadoBadge(r.estado)}</span></div>
      <div class="detail-item"><span class="detail-label">Nivel Recuperación</span><span class="detail-value">${nivelBadge(r.nivel)}</span></div>
      <div class="detail-item"><span class="detail-label">Total Recaudo</span><span class="detail-value" style="color:#0e9f6e;font-weight:700">${formatCurrency(r.recaudo)}</span></div>
      <div class="detail-item"><span class="detail-label">% Recuperado</span><span class="detail-value">${r.saldo_capital > 0 ? ((r.recaudo / r.saldo_capital) * 100).toFixed(1) + '%' : '0%'}</span></div>

      ${r.observacion ? `
      <hr class="detail-divider"/>
      <div style="grid-column:1/-1">
        <div class="detail-label" style="margin-bottom:.5rem">Observación</div>
        <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:1rem;font-size:.875rem;line-height:1.6;color:var(--text-2)">${r.observacion}</div>
      </div>
      ` : ''}
    </div>
  `;

  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-outline" onclick="closeModalDirect()">Cerrar</button>
    <button class="btn-primary" onclick="openEdit(${r.id})">
      <svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" stroke="currentColor" stroke-width="2"/></svg>
      Editar Registro
    </button>
  `;

  openModal();
}

/* ════════════════════════════════════════════════
   MODAL – EDIT VIEW
════════════════════════════════════════════════ */
function openEdit(id) {
  const r = allRecords.find(x => x.id === id);
  if (!r) return;
  editingRecord = id;

  document.getElementById('modalTitle').textContent = 'Editar Registro';
  document.getElementById('modalSub').textContent = r.nombre + ' · ' + r.cedula;

  document.getElementById('modalBody').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem">

      <div class="edit-field" style="grid-column:1/-1">
        <label>Estado Actual *</label>
        <select id="e_estado">
          ${['ACTIVO','EN MANDAMIENTO','EN LIQUIDACIÓN','SENTENCIA','ARCHIVO','SUSPENDIDO']
            .map(s => `<option value="${s}" ${r.estado === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>

      <div class="edit-field">
        <label>Total Recaudo a la Fecha</label>
        <input type="number" id="e_recaudo" value="${r.recaudo}" min="0"/>
      </div>

      <div class="edit-field">
        <label>Nivel de Recuperación Contratista</label>
        <select id="e_nivel">
          ${['ALTO','MEDIO','BAJO','CRITICO']
            .map(n => `<option value="${n}" ${r.nivel === n ? 'selected' : ''}>${n}</option>`).join('')}
        </select>
      </div>

      <div class="edit-field">
        <label>Mandamiento de Pago</label>
        <input type="date" id="e_mandamiento" value="${r.mandamiento || ''}"/>
      </div>

      <div class="edit-field">
        <label>Notificación</label>
        <input type="date" id="e_notificacion" value="${r.notificacion || ''}"/>
      </div>

      <div class="edit-field">
        <label>Auto Seguir Adelante</label>
        <input type="date" id="e_auto" value="${r.auto || ''}"/>
      </div>

      <div class="edit-field">
        <label>Liquidación / Remates</label>
        <input type="date" id="e_liquidacion" value="${r.liquidacion || ''}"/>
      </div>

      <div class="edit-field" style="grid-column:1/-1">
        <label>Observación</label>
        <textarea id="e_observacion" rows="4">${r.observacion || ''}</textarea>
      </div>
    </div>
  `;

  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-outline" onclick="openDetail(${id})">← Cancelar</button>
    <button class="btn-primary" onclick="saveEdit(${id})">
      <svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" stroke="currentColor" stroke-width="2"/><polyline points="17 21 17 13 7 13 7 21" stroke="currentColor" stroke-width="2"/><polyline points="7 3 7 8 15 8" stroke="currentColor" stroke-width="2"/></svg>
      Guardar Cambios
    </button>
  `;

  openModal();
}

function saveEdit(id) {
  const idx = allRecords.findIndex(x => x.id === id);
  if (idx === -1) return;
  allRecords[idx].estado      = document.getElementById('e_estado').value;
  allRecords[idx].recaudo     = parseFloat(document.getElementById('e_recaudo').value) || 0;
  allRecords[idx].nivel       = document.getElementById('e_nivel').value;
  allRecords[idx].mandamiento = document.getElementById('e_mandamiento').value;
  allRecords[idx].notificacion= document.getElementById('e_notificacion').value;
  allRecords[idx].auto        = document.getElementById('e_auto').value;
  allRecords[idx].liquidacion = document.getElementById('e_liquidacion').value;
  allRecords[idx].observacion = document.getElementById('e_observacion').value;

  filteredRecords = [...allRecords];
  buildTable();
  buildRecentTable();
  closeModalDirect();
  showToast('✓ Registro actualizado correctamente');
}

/* ════════════════════════════════════════════════
   NEW RECORD FORM
════════════════════════════════════════════════ */
function saveRecord(e) {
  e.preventDefault();
  const newId = allRecords.length + 1;
  const record = {
    id: newId,
    cedula:       document.getElementById('f_cedula').value,
    nombre:       document.getElementById('f_nombre').value.toUpperCase(),
    codeudor:     document.getElementById('f_codeudor').value,
    municipio:    document.getElementById('f_municipio').value,
    fecha_credito:document.getElementById('f_fecha_credito').value,
    no_credito:   document.getElementById('f_no_credito').value,
    no_pagare:    document.getElementById('f_no_pagare').value,
    saldo_capital:parseFloat(document.getElementById('f_saldo_capital').value) || 0,
    fecha_demanda:document.getElementById('f_fecha_demanda').value,
    juzgado:      document.getElementById('f_juzgado').value,
    radicado:     document.getElementById('f_radicado').value,
    medida:       document.getElementById('f_medida').value,
    mandamiento:  document.getElementById('f_mandamiento').value,
    notificacion: document.getElementById('f_notificacion').value,
    auto:         document.getElementById('f_auto').value,
    liquidacion:  document.getElementById('f_liquidacion').value,
    estado:       document.getElementById('f_estado').value,
    recaudo:      parseFloat(document.getElementById('f_recaudo').value) || 0,
    nivel:        document.getElementById('f_nivel').value,
    observacion:  document.getElementById('f_observacion').value,
  };

  allRecords.unshift(record);
  filteredRecords = [...allRecords];
  document.getElementById('formNuevo').reset();
  buildTable();
  buildRecentTable();
  openPage('cartera');
  showToast('✓ Nuevo registro creado exitosamente');
}

/* ════════════════════════════════════════════════
   JUZGADOS PAGE
════════════════════════════════════════════════ */
function buildJuzgados() {
  const wrap = document.getElementById('juzgadosContent');
  if (!wrap) return;
  const juzgados = [
    { name: 'PRIMERO CIVIL MUNICIPAL',   count: 89, color: '#1a56db' },
    { name: 'SEGUNDO CIVIL MUNICIPAL',   count: 74, color: '#9061f9' },
    { name: 'PROMISCUO MUNICIPAL',       count: 55, color: '#0e9f6e' },
    { name: 'TERCERO CIVIL MUNICIPAL',   count: 21, color: '#ff5a1f' },
    { name: 'PRIMERO CIVIL CIRCUITO',    count: 8,  color: '#c27803' },
  ];
  const total = juzgados.reduce((s, j) => s + j.count, 0);
  wrap.innerHTML = `<div class="juzgado-grid">${juzgados.map(j => `
    <div class="juzgado-card" style="border-top:3px solid ${j.color}">
      <div class="juzgado-name" style="color:${j.color}">${j.name}</div>
      <div class="juzgado-count">${j.count}</div>
      <div class="juzgado-label">procesos asignados</div>
      <div class="juzgado-bar-bg"><div class="juzgado-bar-fill" style="width:${(j.count/total*100).toFixed(0)}%;background:${j.color}"></div></div>
      <div style="font-size:.72rem;color:var(--text-3);margin-top:.4rem">${(j.count/total*100).toFixed(1)}% del total</div>
    </div>
  `).join('')}</div>`;
}

/* ════════════════════════════════════════════════
   REPORTS PAGE
════════════════════════════════════════════════ */
function buildReports() {
  const wrap = document.getElementById('reportsGrid');
  if (!wrap) return;
  const reports = [
    { icon: '📋', title: 'Informe General Cartera', desc: 'Listado completo de todos los procesos jurídicos activos e inactivos en el sistema.', color: '#1a56db20' },
    { icon: '💰', title: 'Informe de Recaudo', desc: 'Resumen de abonos, pagos y recuperación de cartera por período de tiempo.', color: '#0e9f6e20' },
    { icon: '⚖️', title: 'Informe por Juzgado', desc: 'Distribución de procesos asignados por juzgado con estado de avance.', color: '#9061f920' },
    { icon: '🚨', title: 'Procesos Críticos', desc: 'Listado de deudores en estado crítico o con procesos urgentes por atender.', color: '#f0525220' },
    { icon: '📅', title: 'Vencimientos y Fechas', desc: 'Seguimiento de fechas de mandamientos, notificaciones y audiencias próximas.', color: '#ff5a1f20' },
    { icon: '📊', title: 'Exportar a Excel', desc: 'Descarga la base de datos completa en formato Excel compatible con FOGADE.', color: '#c2780320' },
  ];
  wrap.innerHTML = reports.map(r => `
    <div class="report-card">
      <div class="report-icon" style="background:${r.color}">${r.icon}</div>
      <div>
        <div class="report-title">${r.title}</div>
        <div class="report-desc" style="margin-top:.35rem">${r.desc}</div>
      </div>
      <button class="report-btn" onclick="showToast('📄 Generando reporte: ${r.title}…')">Generar Reporte</button>
    </div>
  `).join('');
}

/* ════════════════════════════════════════════════
   MODAL HELPERS
════════════════════════════════════════════════ */
function openModal() {
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

/* ════════════════════════════════════════════════
   TOAST
════════════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ════════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════════ */
function formatCurrency(n) {
  if (!n && n !== 0) return '—';
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
}

function formatDate(d) {
  if (!d) return '';
  try {
    return new Date(d + 'T00:00:00').toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch { return d; }
}

function estadoBadge(estado) {
  const map = {
    'ACTIVO':          'badge-activo',
    'EN MANDAMIENTO':  'badge-mandamiento',
    'EN LIQUIDACIÓN':  'badge-liquidacion',
    'SENTENCIA':       'badge-sentencia',
    'ARCHIVO':         'badge-archivo',
    'SUSPENDIDO':      'badge-suspendido',
  };
  return `<span class="badge ${map[estado] || 'badge-archivo'}">${estado}</span>`;
}

function nivelBadge(nivel) {
  if (!nivel) return '<span style="color:var(--text-3)">—</span>';
  const map = {
    'ALTO':    'badge-nivel-alto',
    'MEDIO':   'badge-nivel-medio',
    'BAJO':    'badge-nivel-bajo',
    'CRITICO': 'badge-nivel-critico',
  };
  return `<span class="badge ${map[nivel] || ''}">${nivel}</span>`;
}
