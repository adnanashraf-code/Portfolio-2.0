import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RotatingSphere() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main parent group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0xef4444, 3, 10);
    centerLight.position.set(0, 0, 0);
    scene.add(centerLight);

    // ----------------------------------------------------
    // LAYER 1: CENTER DARK CORE WITH RED WIREFRAME NUCLEUS
    // ----------------------------------------------------

    // 1a. Inner Red Wireframe Octahedron
    const redCoreGeo = new THREE.OctahedronGeometry(0.65, 1);
    const redCoreMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const redCoreMesh = new THREE.Mesh(redCoreGeo, redCoreMat);
    mainGroup.add(redCoreMesh);

    // 1b. Dark Semi-Transparent Core Sphere (Blends with page background)
    const darkSphereGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const darkSphereMat = new THREE.MeshBasicMaterial({
      color: 0x030712,
      transparent: true,
      opacity: 0.35,
    });
    const darkSphereMesh = new THREE.Mesh(darkSphereGeo, darkSphereMat);
    mainGroup.add(darkSphereMesh);

    // ----------------------------------------------------
    // LAYER 2: INNER ELECTRIC CYAN WIREFRAME CAGE (Counter-Rotating)
    // ----------------------------------------------------
    const innerCyanGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const innerCyanMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Electric Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerCyanMesh = new THREE.Mesh(innerCyanGeo, innerCyanMat);
    mainGroup.add(innerCyanMesh);

    // Inner Cyan Vertex Dots
    const innerDotsMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.055,
      transparent: true,
      opacity: 0.9,
    });
    const innerDots = new THREE.Points(innerCyanGeo, innerDotsMat);
    mainGroup.add(innerDots);

    // ----------------------------------------------------
    // LAYER 3: OUTER GOLDEN AMBER WIREFRAME SHELL
    // ----------------------------------------------------
    const outerGoldGeo = new THREE.IcosahedronGeometry(2.0, 2);
    const outerGoldMat = new THREE.MeshBasicMaterial({
      color: 0xd97706, // Golden Amber
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const outerGoldMesh = new THREE.Mesh(outerGoldGeo, outerGoldMat);
    mainGroup.add(outerGoldMesh);

    // Outer Gold Vertex Dots
    const outerDotsMat = new THREE.PointsMaterial({
      color: 0xfef08a, // Glowing Light Gold
      size: 0.065,
      transparent: true,
      opacity: 0.9,
    });
    const outerDots = new THREE.Points(outerGoldGeo, outerDotsMat);
    mainGroup.add(outerDots);

    // ----------------------------------------------------
    // LAYER 4: EQUATORIAL MULTI-COLOR PARTICLE DUST BAND
    // ----------------------------------------------------
    const dustCount = 360;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    const dustPalette = [
      new THREE.Color("#38bdf8"), // Cyan
      new THREE.Color("#facc15"), // Gold
      new THREE.Color("#f472b6"), // Pink
      new THREE.Color("#c084fc"), // Purple
      new THREE.Color("#ffffff"), // White
    ];

    for (let i = 0; i < dustCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.08 + Math.random() * 1.35;
      const yOffset = (Math.random() - 0.5) * 0.35;

      dustPositions[i * 3] = Math.cos(angle) * radius;
      dustPositions[i * 3 + 1] = yOffset;
      dustPositions[i * 3 + 2] = Math.sin(angle) * radius;

      const col = dustPalette[Math.floor(Math.random() * dustPalette.length)];
      dustColors[i * 3] = col.r;
      dustColors[i * 3 + 1] = col.g;
      dustColors[i * 3 + 2] = col.b;
    }

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    dustGeo.setAttribute("color", new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
    });
    const particleDust = new THREE.Points(dustGeo, dustMat);
    mainGroup.add(particleDust);

    // ----------------------------------------------------
    // LAYER 5: 3D ORBITAL RINGS WITH ORBITING PLANET ORBS
    // ----------------------------------------------------

    // Ring 1: Double Gold Ring with Orbiting White Planet
    const ring1Geo = new THREE.TorusGeometry(2.38, 0.016, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.rotation.y = Math.PI / 10;
    mainGroup.add(ring1);

    // Orbiting Planet Orb 1 on Gold Ring
    const orb1Geo = new THREE.SphereGeometry(0.12, 20, 20);
    const orb1Mat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
    const orb1Mesh = new THREE.Mesh(orb1Geo, orb1Mat);
    ring1.add(orb1Mesh);

    // Ring 2: Light Cyan Ring with Orbiting Cyan Planet
    const ring2Geo = new THREE.TorusGeometry(2.38, 0.016, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa5f3fc,
      transparent: true,
      opacity: 0.88,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.8;
    ring2.rotation.y = -Math.PI / 3.5;
    mainGroup.add(ring2);

    // Orbiting Planet Orb 2 on Cyan Ring
    const orb2Geo = new THREE.SphereGeometry(0.11, 20, 20);
    const orb2Mat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
    const orb2Mesh = new THREE.Mesh(orb2Geo, orb2Mat);
    ring2.add(orb2Mesh);

    // Ring 3: Soft Lavender Ring with Orbiting Purple Planet
    const ring3Geo = new THREE.TorusGeometry(2.95, 0.012, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xe9d5ff,
      transparent: true,
      opacity: 0.7,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 3;
    ring3.rotation.y = Math.PI / 4;
    mainGroup.add(ring3);

    // Orbiting Planet Orb 3 on Lavender Ring
    const orb3Geo = new THREE.SphereGeometry(0.09, 20, 20);
    const orb3Mat = new THREE.MeshBasicMaterial({ color: 0xf3e8ff });
    const orb3Mesh = new THREE.Mesh(orb3Geo, orb3Mat);
    ring3.add(orb3Mesh);

    // ----------------------------------------------------
    // MOUSE PARALLAX HOVER TILT + 360° DRAG CONTROLS
    // ----------------------------------------------------
    let mousePos = { x: 0, y: 0 };
    let lerpedMouse = { x: 0, y: 0 };

    const handleMouseMoveWindow = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mousePos.x = (e.clientX - windowHalfX) * 0.0004;
      mousePos.y = (e.clientY - windowHalfY) * 0.0004;
    };
    window.addEventListener("mousemove", handleMouseMoveWindow);

    let isDragging = false;
    let previousPointerPos = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      previousPointerPos = { x: e.clientX, y: e.clientY };
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousPointerPos.x;
      const deltaY = e.clientY - previousPointerPos.y;

      const sensitivity = 0.004;
      mainGroup.rotation.y += deltaX * sensitivity;
      mainGroup.rotation.x += deltaY * sensitivity;

      velocity = {
        x: deltaY * sensitivity,
        y: deltaX * sensitivity,
      };

      previousPointerPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    const domElement = renderer.domElement;
    domElement.style.cursor = "grab";
    domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // 1. Zero-G Floating Bobbing Animation
      mainGroup.position.y = Math.sin(elapsed * 0.7) * 0.08;

      // 2. Calibrated Slow & Luxurious Orbital Line Movements
      ring1.rotation.z = elapsed * 0.035;
      ring1.rotation.x = Math.PI / 2.3 + Math.sin(elapsed * 0.3) * 0.08;

      ring2.rotation.z = -elapsed * 0.04;
      ring2.rotation.y = -Math.PI / 3.5 + Math.cos(elapsed * 0.35) * 0.08;

      ring3.rotation.z = elapsed * 0.025;
      ring3.rotation.x = -Math.PI / 3 + Math.sin(elapsed * 0.25) * 0.06;

      // 3. Orbiting Planets sliding on Ring Perimeters
      orb1Mesh.position.set(Math.cos(elapsed * 1.4) * 2.38, Math.sin(elapsed * 1.4) * 2.38, 0);
      orb2Mesh.position.set(Math.cos(-elapsed * 1.6) * 2.38, Math.sin(-elapsed * 1.6) * 2.38, 0);
      orb3Mesh.position.set(Math.cos(elapsed * 1.1) * 2.95, Math.sin(elapsed * 1.1) * 2.95, 0);

      // 4. Counter-Rotating Multi-Layer Geodesic Cages
      outerGoldMesh.rotation.y += 0.0006;
      outerDots.rotation.y += 0.0006;

      innerCyanMesh.rotation.y -= 0.0018;
      innerCyanMesh.rotation.x += 0.0009;
      innerDots.rotation.y -= 0.0018;
      innerDots.rotation.x += 0.0009;

      redCoreMesh.rotation.y += 0.003;
      redCoreMesh.rotation.x += 0.0015;

      particleDust.rotation.y += 0.0009;

      // Pulsing Lights
      centerLight.intensity = 3.0 + Math.sin(elapsed * 2.5) * 1.2;

      // 5. Mouse Parallax Hover Tilt + Drag Inertia Damping
      lerpedMouse.x += (mousePos.x - lerpedMouse.x) * 0.05;
      lerpedMouse.y += (mousePos.y - lerpedMouse.y) * 0.05;

      if (!isDragging) {
        mainGroup.rotation.y += velocity.y + 0.0005;
        mainGroup.rotation.x += velocity.x;

        mainGroup.rotation.z = lerpedMouse.x * 0.5;

        velocity.x *= 0.93; // Smooth damping
        velocity.y *= 0.93;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMoveWindow);
      domElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      resizeObserver.disconnect();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      redCoreGeo.dispose();
      redCoreMat.dispose();
      darkSphereGeo.dispose();
      darkSphereMat.dispose();
      innerCyanGeo.dispose();
      innerCyanMat.dispose();
      innerDotsMat.dispose();
      outerGoldGeo.dispose();
      outerGoldMat.dispose();
      outerDotsMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      orb1Geo.dispose();
      orb1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      orb2Geo.dispose();
      orb2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      orb3Geo.dispose();
      orb3Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="hero-three-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "460px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "none",
        background: "transparent",
        overflow: "visible",
      }}
    >
      {/* Soft Ambient Radial Atmosphere Glow */}
      <div
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(217, 119, 6, 0.14) 0%, rgba(14, 165, 233, 0.12) 45%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* WebGL Canvas */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          overflow: "visible",
        }}
      />
    </div>
  );
}
