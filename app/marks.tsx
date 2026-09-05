// Символьные знаки (✳ ✧ ↗ ↓ ↔ ↑) вынесены в SVG: ни Manrope, ни Onest их не
// содержат, поэтому браузер подставлял системный шрифт — на десктопе текстовый,
// а на iOS цветной эмодзи, и логотип превращался в зелёный квадрат.
//
// Каждый компонент рендерится на месте прежнего текстового узла, внутри того
// же span/b/i/label/small, поэтому все существующие CSS-правила (font-size,
// color, text-shadow → ниже переведён в drop-shadow, анимации) продолжают
// управлять размером и видом без изменений: размер задан в em от
// унаследованного font-size контейнера, цвет — currentColor.
//
// Пропорции и толщина обводки сняты промерами по канве с реального рендера
// Manrope на десктопе (bounding box, положение относительно базовой линии).

const strokeShape = {fill: 'none', stroke: 'currentColor', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const};

// ✳ — восемь спиц одинаковой длины из центра.
export function Asterisk() {
  return (
    <svg className="gm gm-ast" viewBox="0 0 100 100" strokeWidth="5.6" {...strokeShape} aria-hidden="true" focusable="false">
      <path d="M50 0V100M0 50H100M14.6 14.6 85.4 85.4M85.4 14.6 14.6 85.4"/>
    </svg>
  );
}

// ✧ — сплошная четырёхлучевая звезда с вогнутыми сторонами.
export function Star() {
  return (
    <svg className="gm gm-star" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M50 3.3Q56.5 44.5 96.7 50Q56.5 55.5 50 96.7Q43.5 55.5 3.3 50Q43.5 44.5 50 3.3Z"/>
    </svg>
  );
}

// ↗ — диагональ с угловым (не треугольным) наконечником, как в текстовом глифе.
export function ArrowNE() {
  return (
    <svg className="gm gm-ne" viewBox="0 0 50.5 50.5" strokeWidth="6.4" {...strokeShape} aria-hidden="true" focusable="false">
      <path d="M6 44.5 44.5 6M25 6h19.5V25.5"/>
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg className="gm gm-vert" viewBox="0 0 46 71.5" strokeWidth="6.5" {...strokeShape} aria-hidden="true" focusable="false">
      <path d="M23 3.25V68.25M3 48.25 23 68.25 43 48.25"/>
    </svg>
  );
}

export function ArrowUp() {
  return (
    <svg className="gm gm-vert" viewBox="0 0 46 71.5" strokeWidth="6.5" {...strokeShape} aria-hidden="true" focusable="false">
      <path d="M23 68.25V3.25M3 23.25 23 3.25 43 23.25"/>
    </svg>
  );
}

// ↔ — наконечники положе и длиннее, чем у вертикальных стрелок.
export function ArrowLR() {
  return (
    <svg className="gm gm-lr" viewBox="0 0 92 35.5" strokeWidth="4.7" {...strokeShape} aria-hidden="true" focusable="false">
      <path d="M2.5 17.75H89.5M24.6 2.5 2.5 17.75 24.6 33M67.4 2.5 89.5 17.75 67.4 33"/>
    </svg>
  );
}
