import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * The 3D moment on the site: a slowly turning armature of platonic solids and
 * concentric rings, drawn as wireframe only.
 *
 * It is procedural on purpose. The practice is named Phenomenological
 * *Geometry* and keeps a Sacred Geometry project, so generated polyhedra are
 * the subject rather than decoration, and no model export is needed to ship
 * it. Showing the studio's own buildings in 3D would need .glb files from
 * SketchUp; this stands on its own until those exist.
 *
 * Lazy-loaded and client-only (see <GeometryPanel>): three.js never touches the
 * server render or the initial bundle.
 */

const CLAY = "#c1663f";
const INK = "#2b241e";

function Armature({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);

  // Built once, regenerating geometry each frame would be the expensive mistake.
  const solids = useMemo(
    () => ({
      icosahedron: new THREE.IcosahedronGeometry(1.55, 0),
      dodecahedron: new THREE.DodecahedronGeometry(1.15, 0),
      octahedron: new THREE.OctahedronGeometry(2.05, 0),
    }),
    [],
  );

  const rings = useMemo(
    () =>
      [0, 1, 2].map((i) => ({
        radius: 2.5 + i * 0.42,
        // Each ring tilts on a different axis so the armature reads as volume.
        rotation: [Math.PI / 2 + i * 0.38, i * 0.5, i * 0.22] as [number, number, number],
      })),
    [],
  );

  useFrame((state, delta) => {
    if (reduced) return;
    if (group.current) group.current.rotation.y += delta * 0.12;
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.18;
      inner.current.rotation.z += delta * 0.06;
      // A slow breath, so it never looks like a static render.
      const t = state.clock.elapsedTime;
      inner.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.04);
    }
  });

  return (
    <group ref={group} rotation={[0.25, 0, 0.1]}>
      {rings.map((ring, i) => (
        <lineSegments key={i} rotation={ring.rotation}>
          <edgesGeometry args={[new THREE.TorusGeometry(ring.radius, 0.002, 3, 96)]} />
          <lineBasicMaterial color={CLAY} transparent opacity={0.28 - i * 0.06} />
        </lineSegments>
      ))}

      <lineSegments>
        <edgesGeometry args={[solids.octahedron]} />
        <lineBasicMaterial color={INK} transparent opacity={0.35} />
      </lineSegments>

      <group ref={inner}>
        <lineSegments>
          <edgesGeometry args={[solids.icosahedron]} />
          <lineBasicMaterial color={CLAY} transparent opacity={0.85} />
        </lineSegments>
        <lineSegments rotation={[0.6, 0.4, 0]}>
          <edgesGeometry args={[solids.dodecahedron]} />
          <lineBasicMaterial color={INK} transparent opacity={0.55} />
        </lineSegments>
      </group>
    </group>
  );
}

export default function GeometryScene() {
  // Read once at mount rather than subscribing: this only decides whether the
  // armature turns, and the global CSS rule handles everything else.
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      // z=9.5 so the outermost ring (radius 3.34) sits inside the frame, at
      // 7.5 it clipped on every edge and read as an accident rather than a crop.
      camera={{ position: [0, 0, 9.5], fov: 42 }}
      // Cap DPR: a 3× phone would otherwise render nine times the pixels for
      // wireframes that gain nothing from it.
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
    >
      <Armature reduced={reduced} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.4}
        // Keep it near the horizon so it can never be spun into nonsense.
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </Canvas>
  );
}
