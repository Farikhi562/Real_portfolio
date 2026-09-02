const NODES = [
  { x: 40, y: 60 }, { x: 140, y: 30 }, { x: 230, y: 90 },
  { x: 90, y: 150 }, { x: 200, y: 170 }, { x: 320, y: 40 },
  { x: 340, y: 140 }, { x: 20, y: 190 },
]

const EDGES = [
  [0, 1], [1, 2], [0, 3], [3, 4], [4, 2], [2, 5], [5, 6], [4, 6], [3, 7],
]

export default function NodeField({ className = '' }) {
  return (
    <svg
      className={`node-field ${className}`}
      viewBox="0 0 360 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          className="node-edge"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 4.5 : 3}
          className="node-dot"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </svg>
  )
}
