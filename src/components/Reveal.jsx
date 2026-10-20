import { useEffect, useRef } from "react";

/* Scroll-reveal wrapper used by every section */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={"reveal " + className} style={{ transitionDelay: delay + "ms" }}>
      {children}
    </div>
  );
}
