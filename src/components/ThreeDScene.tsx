import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { useLocation } from "@tanstack/react-router";

/**
 * Global helper to notify the 3D scene of section transitions.
 * Accessible from both page mounts and scroll intersection triggers.
 */
export function set3DSceneSection(section: string) {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("primeace-section-change", { detail: section });
    window.dispatchEvent(event);
  }
}

/**
 * Sticky 3D centerpiece behind the user interface.
 * Listens for active section triggers and handles mouse parallax.
 */
export function ThreeDScene() {
  const [section, setSection] = useState("home");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSection(customEvent.detail);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleScroll = () => {
      if (isHome) return;
      
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = scrollY / maxScroll;

      // Map subpage scroll progress to home page travel sections
      if (progress < 0.15) {
        setSection("home");
      } else if (progress < 0.4) {
        setSection("services");
      } else if (progress < 0.65) {
        setSection("about");
      } else if (progress < 0.85) {
        setSection("portfolio");
      } else {
        setSection("contact");
      }
    };

    // Initialize position on mount for subpages
    if (!isHome) {
      handleScroll();
    }

    window.addEventListener("primeace-section-change", handleSectionChange);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("primeace-section-change", handleSectionChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 15 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#2B6EFF" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#2B6EFF" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#7B5BFF" />
        <pointLight position={[0, 5, -5]} intensity={0.8} color="#00ffcc" />

        <SceneController section={section} mouseX={mouse.x} mouseY={mouse.y} isHome={isHome} />
      </Canvas>
    </div>
  );
}

function SceneController({
  section,
  mouseX,
  mouseY,
  isHome,
}: {
  section: string;
  mouseX: number;
  mouseY: number;
  isHome: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;
  
  // Interpolation targets for group transformations
  const [targetPos, setTargetPos] = useState<[number, number, number]>([0, 0, 0]);
  const [targetScale, setTargetScale] = useState<number>(1);
  const [targetRotation, setTargetRotation] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    // Determine mobile status using viewport units
    const isMobile = width < 5;

    switch (section) {
      case "home":
        if (isHome) {
          // Align right on desktop; center lower down on mobile to avoid covering header
          const x = isMobile ? 0 : width * 0.25;
          const y = isMobile ? -height * 0.22 : -0.1;
          const scale = isMobile ? 0.75 : 0.9;
          setTargetPos([x, y, 0]);
          setTargetScale(scale);
        } else {
          setTargetPos([width * 0.3, 0, 0]);
          setTargetScale(0.8);
        }
        setTargetRotation([-0.1, Math.PI / 8, 0]);
        break;
      case "gap":
      case "home_page_globe":
        setTargetPos([0, 0, 0]);
        setTargetScale(isHome ? 1.2 : 1.2);
        setTargetRotation([0.1, 0, 0]);
        break;
      case "services":
        if (isHome) {
          const x = isMobile ? width * 0.25 : width * 0.35;
          const y = isMobile ? height * 0.2 : 1.1;
          const scale = isMobile ? 0.35 : 0.4;
          setTargetPos([x, y, 0]);
          setTargetScale(scale);
        } else {
          setTargetPos([width * 0.22, 0.2, 0]);
          setTargetScale(0.85);
        }
        setTargetRotation([0.2, -Math.PI / 6, 0]);
        break;
      case "about":
        if (isHome) {
          const x = isMobile ? -width * 0.25 : -width * 0.35;
          const y = isMobile ? -height * 0.2 : -1.0;
          const scale = isMobile ? 0.35 : 0.45;
          setTargetPos([x, y, 0]);
          setTargetScale(scale);
        } else {
          setTargetPos([width * 0.22, -0.2, 0]);
          setTargetScale(0.85);
        }
        setTargetRotation([-0.1, Math.PI / 8, 0]);
        break;
      case "portfolio":
        if (isHome) {
          const x = isMobile ? -width * 0.25 : -width * 0.38;
          const y = isMobile ? height * 0.2 : 1.0;
          const scale = isMobile ? 0.35 : 0.4;
          setTargetPos([x, y, 0]);
          setTargetScale(scale);
        } else {
          setTargetPos([width * 0.22, -0.1, 0]);
          setTargetScale(0.85);
        }
        setTargetRotation([0.1, -Math.PI / 4, -0.05]);
        break;
      case "process":
        if (isHome) {
          const x = isMobile ? width * 0.25 : width * 0.35;
          const y = isMobile ? -height * 0.2 : -0.8;
          const scale = isMobile ? 0.35 : 0.45;
          setTargetPos([x, y, 0]);
          setTargetScale(scale);
        } else {
          setTargetPos([0, 0.4, 0]);
          setTargetScale(1.1);
        }
        setTargetRotation([0.3, Math.PI / 2, 0]);
        break;
      case "contact":
      case "quote":
        if (isHome) {
          const x = isMobile ? width * 0.2 : width * 0.3;
          const y = isMobile ? 0 : 0;
          const scale = isMobile ? 0.4 : 0.5;
          setTargetPos([x, y, 0]);
          setTargetScale(scale);
        } else {
          setTargetPos([width * 0.22, 0.2, 0]);
          setTargetScale(0.8);
        }
        setTargetRotation([0.2, -Math.PI / 3, 0]);
        break;
      default:
        setTargetPos([0, 0, 0]);
        setTargetScale(1);
    }
  }, [section, isHome, width, height]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // 1. Mouse pointer parallax (eased rotation)
    const mouseParallaxRY = mouseX * 0.2;
    const mouseParallaxRX = mouseY * 0.15;

    // 2. Smoothly interpolate group transformations towards their section targets
    groupRef.current.position.x += (targetPos[0] - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetPos[1] - groupRef.current.position.y) * 0.05;
    groupRef.current.position.z += (targetPos[2] - groupRef.current.position.z) * 0.05;

    const currentScale = groupRef.current.scale.x;
    const newScale = currentScale + (targetScale - currentScale) * 0.05;
    groupRef.current.scale.set(newScale, newScale, newScale);

    groupRef.current.rotation.x += (targetRotation[0] + mouseParallaxRX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotation[1] + mouseParallaxRY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.z += (targetRotation[2] - groupRef.current.rotation.z) * 0.05;

    // 3. Subtle background breathing float
    const elapsed = state.clock.getElapsedTime();
    groupRef.current.position.y += Math.sin(elapsed * 0.8) * 0.003;
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Sub-Scenes fading/morphing in & out */}
      <Suspense fallback={null}>
        <RealisticGlobe active={true} />
      </Suspense>
      <HomeWorkspace active={!isHome && section === "home"} />
      <ServicesFloatingCards active={!isHome && section === "services"} />
      <AboutCollaborationNetwork active={!isHome && section === "about"} />
      <PortfolioScreens active={!isHome && section === "portfolio"} />
      <ProcessRoadmap active={!isHome && section === "process"} />
      <ContactCommunication active={!isHome && (section === "contact" || section === "quote")} />
      
      {/* Universal dynamic particle field */}
      <Particles count={150} />
    </group>
  );
}

/**
 * NEW: Realistic Earth Globe mapped with LOCAL high-res textures
 * Uses native visibility toggling to prevent React unmount bugs.
 */
function RealisticGlobe({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const opacity = useRef(0);
  
  // Load textures from LOCAL public folder to guarantee they never fail
  const [colorMap, normalMap, specularMap] = useTexture([
    '/textures/planets/earth_atmos_2048.jpg',
    '/textures/planets/earth_normal_2048.jpg',
    '/textures/planets/earth_specular_2048.jpg'
  ]);

  useFrame(() => {
    // Fade in/out
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (groupRef.current) {
      groupRef.current.visible = opacity.current > 0.01;
      groupRef.current.scale.setScalar(opacity.current);
      
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = scrollY / maxScroll;
      
      const targetRotation = progress * Math.PI * 4;
      groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sun Light (strong white light) that fades with opacity to prevent scene pollution */}
      <directionalLight position={[5, 3, 5]} intensity={4 * opacity.current} color="#ffffff" />
      {/* Earth Shine / Dark side fill light (subtle blue light from opposite side) */}
      <directionalLight position={[-5, -3, -5]} intensity={1.2 * opacity.current} color="#3b82f6" />

      <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(1.2, 1.2)}
          specularMap={specularMap}
          specular={new THREE.Color(0x999999)}
          shininess={35}
          transparent
          opacity={1}
        />
      </Sphere>
      {/* Soft atmospheric glow around the earth, faded with the globe */}
      <Sphere args={[1.54, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#85b1ff"
          transparent
          opacity={0.2 * opacity.current}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
}

/**
 * 1. HOME: Floating holographic code grids and glowing morphing core sphere
 */
function HomeWorkspace({ active }: { active: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const opacity = useRef(0);

  useFrame((_, delta) => {
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (meshRef.current) {
      // Use native Three.js visibility toggle
      meshRef.current.visible = opacity.current > 0.01;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.scale.setScalar(opacity.current);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Morphing glass sphere core */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#2B6EFF"
            distort={0.4}
            speed={2.2}
            roughness={0.1}
            metalness={0.8}
            emissive="#0a2a8a"
            emissiveIntensity={0.6}
            transparent
            opacity={opacity.current}
          />
        </Sphere>
      </Float>

      {/* Futuristic Orbit Rings */}
      <Torus args={[1.8, 0.02, 16, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshStandardMaterial
          color="#7B5BFF"
          emissive="#7B5BFF"
          emissiveIntensity={0.5 * opacity.current}
          transparent
          opacity={opacity.current}
        />
      </Torus>
      
      <Torus args={[2.2, 0.015, 16, 100]} rotation={[-Math.PI / 3, 0.5, 0]}>
        <meshStandardMaterial
          color="#00ffcc"
          emissive="#00ffcc"
          emissiveIntensity={0.6 * opacity.current}
          transparent
          opacity={opacity.current}
        />
      </Torus>
    </group>
  );
}

/**
 * 2. SERVICES: Floating service cards (translucent glass panels)
 */
function ServicesFloatingCards({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const opacity = useRef(0);

  useFrame((state, delta) => {
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (groupRef.current) {
      groupRef.current.visible = opacity.current > 0.01;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.scale.setScalar(opacity.current);
    }
  });

  const cardParams = [
    { pos: [0, 1.2, 0] as [number, number, number], col: "#2B6EFF" },
    { pos: [1.1, 0.2, 0.8] as [number, number, number], col: "#7B5BFF" },
    { pos: [-1.1, 0.2, -0.8] as [number, number, number], col: "#00ffcc" },
    { pos: [0.8, -0.8, -0.8] as [number, number, number], col: "#2B6EFF" },
    { pos: [-0.8, -0.8, 0.8] as [number, number, number], col: "#7B5BFF" },
  ];

  return (
    <group ref={groupRef}>
      {cardParams.map((c, i) => (
        <Float key={i} speed={1.8} floatIntensity={0.8} rotationIntensity={0.5}>
          <Box args={[0.8, 0.55, 0.08]} position={c.pos}>
            <meshStandardMaterial
              color={c.col}
              emissive={c.col}
              emissiveIntensity={0.4 * opacity.current}
              metalness={0.9}
              roughness={0.15}
              transparent
              opacity={0.8 * opacity.current}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

/**
 * 3. ABOUT: Connected glowing team constellation network nodes
 */
function AboutCollaborationNetwork({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const opacity = useRef(0);

  useFrame((state) => {
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (groupRef.current) {
      groupRef.current.visible = opacity.current > 0.01;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
      groupRef.current.scale.setScalar(opacity.current);
    }
  });

  // Render a futuristic geometric crystal (Icosahedron) as a collaboration metaphor
  return (
    <group ref={groupRef}>
      <Float speed={1.2} floatIntensity={1} rotationIntensity={1.5}>
        <Icosahedron args={[1.3, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#2B6EFF"
            emissive="#7B5BFF"
            emissiveIntensity={0.7 * opacity.current}
            wireframe
            transparent
            opacity={0.75 * opacity.current}
            metalness={1}
            roughness={0.1}
          />
        </Icosahedron>
        
        {/* Inner solid node core */}
        <Sphere args={[0.4, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#00ffcc"
            emissive="#00ffcc"
            emissiveIntensity={0.8 * opacity.current}
            transparent
            opacity={opacity.current}
          />
        </Sphere>
      </Float>
    </group>
  );
}

/**
 * 4. PORTFOLIO: Sleek digital screens / device mockups
 */
function PortfolioScreens({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const opacity = useRef(0);

  useFrame((state, delta) => {
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (groupRef.current) {
      groupRef.current.visible = opacity.current > 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
      groupRef.current.scale.setScalar(opacity.current);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Laptop Panel (Central screen) */}
      <Float speed={1.5} floatIntensity={0.5}>
        <Box args={[1.8, 1.1, 0.05]} position={[0, 0.2, 0]}>
          <meshStandardMaterial
            color="#070a1e"
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={opacity.current}
          />
        </Box>
        {/* Glowing border screen plane */}
        <Box args={[1.82, 1.12, 0.01]} position={[0, 0.2, -0.01]}>
          <meshStandardMaterial
            color="#2B6EFF"
            emissive="#2B6EFF"
            emissiveIntensity={0.8 * opacity.current}
            transparent
            opacity={opacity.current}
          />
        </Box>
      </Float>

      {/* Floating Mobile screen (Layered offset) */}
      <Float speed={2} floatIntensity={0.8}>
        <Box args={[0.5, 0.95, 0.04]} position={[1.1, -0.4, 0.6]} rotation={[0, -0.2, 0.1]}>
          <meshStandardMaterial
            color="#00ffcc"
            emissive="#00ffcc"
            emissiveIntensity={0.3 * opacity.current}
            metalness={0.95}
            roughness={0.1}
            transparent
            opacity={opacity.current}
          />
        </Box>
      </Float>
    </group>
  );
}

/**
 * 5. PROCESS: 3D animated pipeline roadmap curve and phase nodes
 */
function ProcessRoadmap({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const opacity = useRef(0);

  useFrame((state) => {
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (groupRef.current) {
      groupRef.current.visible = opacity.current > 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.08;
      groupRef.current.scale.setScalar(opacity.current);
    }
  });

  const steps = [
    { pos: [-1.8, -0.6, 0] as [number, number, number], col: "#2B6EFF" },
    { pos: [-1.2, -0.2, 0.3] as [number, number, number], col: "#7B5BFF" },
    { pos: [-0.6, 0.2, 0.5] as [number, number, number], col: "#00ffcc" },
    { pos: [0, 0.4, 0.6] as [number, number, number], col: "#2B6EFF" },
    { pos: [0.6, 0.2, 0.5] as [number, number, number], col: "#7B5BFF" },
    { pos: [1.2, -0.2, 0.3] as [number, number, number], col: "#00ffcc" },
    { pos: [1.8, -0.6, 0] as [number, number, number], col: "#2B6EFF" },
  ];

  return (
    <group ref={groupRef}>
      {/* Core Connecting Pipeline Tube */}
      <Torus args={[2, 0.015, 16, 50]} rotation={[Math.PI / 2, 0.2, 0]} position={[0, -0.4, 0]}>
        <meshStandardMaterial
          color="#7B5BFF"
          emissive="#7B5BFF"
          emissiveIntensity={0.5 * opacity.current}
          transparent
          opacity={opacity.current}
        />
      </Torus>

      {/* Nodes mapping */}
      {steps.map((s, i) => (
        <group key={i} position={s.pos}>
          <Float speed={2} floatIntensity={0.5} delay={i * 0.1}>
            <Sphere args={[0.16, 16, 16]}>
              <meshStandardMaterial
                color={s.col}
                emissive={s.col}
                emissiveIntensity={0.8 * opacity.current}
                transparent
                opacity={opacity.current}
              />
            </Sphere>
          </Float>
        </group>
      ))}
    </group>
  );
}

/**
 * 6. CONTACT: Futuristic contact scene with floating envelope/mail wireframe and rings
 */
function ContactCommunication({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const opacity = useRef(0);

  useFrame((state, delta) => {
    opacity.current += ((active ? 1 : 0) - opacity.current) * 0.08;
    if (groupRef.current) {
      groupRef.current.visible = opacity.current > 0.01;
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.scale.setScalar(opacity.current);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central message box/envelope shape */}
      <Float speed={1.5} floatIntensity={1}>
        <Box args={[1.1, 0.7, 0.3]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#2B6EFF"
            emissive="#0a2a8a"
            emissiveIntensity={0.5 * opacity.current}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8 * opacity.current}
          />
        </Box>
      </Float>

      {/* Futuristic Orbit Halos */}
      <Torus args={[1.5, 0.01, 8, 80]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <meshStandardMaterial
          color="#00ffcc"
          emissive="#00ffcc"
          emissiveIntensity={0.7 * opacity.current}
          transparent
          opacity={opacity.current}
        />
      </Torus>
      
      <Torus args={[1.2, 0.015, 8, 80]} rotation={[-Math.PI / 4, -Math.PI / 6, 0]}>
        <meshStandardMaterial
          color="#7B5BFF"
          emissive="#7B5BFF"
          emissiveIntensity={0.6 * opacity.current}
          transparent
          opacity={opacity.current}
        />
      </Torus>
    </group>
  );
}

/**
 * UNIVERSAL: Animated tech code/star particle background system
 */
function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);

  // Generate random positions orbiting around center
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#7DA8FF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
