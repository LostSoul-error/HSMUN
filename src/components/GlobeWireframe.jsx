import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Lightweight wireframe globe rendered with three.js.
 * Rotates slowly and reacts to mouse position.
 */
export default function GlobeWireframe({ className = "", opacity = 0.28 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer, scene, camera, globe, inner, raf;
    let targetRotX = 0, targetRotY = 0;

    scene = new THREE.Scene();
    const w = mount.clientWidth, h = mount.clientHeight;
    camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 3.4;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    mount.appendChild(renderer.domElement);

    const geo = new THREE.SphereGeometry(1.15, 28, 18);
    const wire = new THREE.WireframeGeometry(geo);
    const mat = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: opacity,
      blending: THREE.AdditiveBlending
    });
    globe = new THREE.LineSegments(wire, mat);
    scene.add(globe);

    const innerMat = new THREE.MeshBasicMaterial({ color: 0x0B241D, transparent: true, opacity: 0.55 });
    inner = new THREE.Mesh(new THREE.SphereGeometry(1.12, 32, 24), innerMat);
    scene.add(inner);

    const onResize = () => {
      const nw = mount.clientWidth, nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    const onMouse = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5);
      const ny = (e.clientY / window.innerHeight - 0.5);
      targetRotY = nx * 0.9;
      targetRotX = ny * 0.6;
    };
    window.addEventListener("mousemove", onMouse);

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!reduce) {
        globe.rotation.y += 0.0016;
        globe.rotation.x += (targetRotX - globe.rotation.x) * 0.04;
        globe.rotation.y += (targetRotY - globe.rotation.y) * 0.04 + 0.0016;
        inner.rotation.copy(globe.rotation);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      renderer.dispose();
      geo.dispose();
      wire.dispose();
      mat.dispose();
      innerMat.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, [opacity]);

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} aria-hidden="true" />;
}