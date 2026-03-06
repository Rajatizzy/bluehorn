import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSplitText = () => {
  useEffect(() => {
    const splitElements = document.querySelectorAll(".text-animate");

    splitElements.forEach((el) => {
      if (el.dataset.gsapSplit) return;

      const originalHTML = el.innerHTML;
      el.innerHTML = "";

      const temp = document.createElement("div");
      temp.innerHTML = originalHTML;

      const walkNodes = (node, parentColor = null, parentClass = "") => {
        // TEXT NODE
        if (node.nodeType === 3) {
          node.textContent.split(" ").forEach((word, i, arr) => {
            const wordDiv = document.createElement("div");
            wordDiv.className = "word";

            [...word].forEach((char) => {
              const charDiv = document.createElement("div");
              charDiv.className = "char";
              charDiv.textContent = char;

              if (parentColor) charDiv.style.color = parentColor;
              if (parentClass) charDiv.classList.add(parentClass);

              wordDiv.appendChild(charDiv);
            });

            el.appendChild(wordDiv);

            if (i < arr.length - 1)
              el.appendChild(document.createTextNode(" "));
          });
        }

        // ELEMENT NODE (preserve class + color)
        if (node.nodeType === 1) {
          const color = window.getComputedStyle(node).color;
          const cls = node.className || "";

          [...node.childNodes].forEach((child) => walkNodes(child, color, cls));
        }
      };

      [...temp.childNodes].forEach((n) => walkNodes(n));

      el.dataset.gsapSplit = "true";

      gsap.fromTo(
        el.querySelectorAll(".char"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        },
      );
    });
  }, []);
};
