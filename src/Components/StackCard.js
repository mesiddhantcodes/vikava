"use client";
import { useLayoutEffect, useRef, useCallback, useMemo, useState, useEffect } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({
  children,
  itemClassName = "",
  number,
  title,
  subtitle,
  image,
  index,
}) => {
  // Determine background color based on index (1,3,5 = red, 2,4 = black)
  const isRed = index % 2 === 1;
  const bgGradient = isRed
    ? "bg-gradient-to-br from-red-600 to-red-700"
    : "bg-gradient-to-br from-gray-900 to-black";

  return (
    <div
      className={`
        scroll-stack-card 
        relative 
        w-full 
        h-[380px] md:h-[440px] lg:h-[500px]
        my-6 md:my-8
        rounded-2xl 
        overflow-hidden 
        shadow-[0_10px_40px_rgba(0,0,0,0.2)] 
        box-border 
        ${itemClassName}
      `.trim()}
    >
      <div
        className={`
          absolute inset-0 
          bg-[#050505] 
          ${bgGradient} 
          px-5 md:px-6 lg:px-8
          pt-4 md:pt-5 lg:pt-3
          pb-4 md:pb-5 lg:pb-6
          flex flex-col
        `}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          {number && (
            <div className="text-white/80 text-[clamp(14px,4vw,24px)] font-light">
              {number}
            </div>
          )}

          {subtitle && (
            <div
              className="text-white/70 text-[clamp(10px,3.2vw,24px)] font-light leading-[0.9]"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
        </div>

        {/* Title */}
        {title && (
          <h2 className="text-white text-[clamp(18px,6vw,40px)] font-light leading-tight mb-3 md:mb-4">
            {title}
          </h2>
        )}

        {/* Image */}
        {image && (
          <div className="mt-2 flex-1 relative rounded-none overflow-hidden">
            <img
              src={image}
              alt={title || ""}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Fallback */}
        {!image && !title && children}
      </div>
    </div>
  );
};

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "20%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  bottomPadding = "100rem",
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const containerDataRef = useRef({
    stackPositionPx: 0,
    scaleEndPositionPx: 0,
    endElementTop: 0,
    cardData: [],
  });

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }
    const scroller = scrollerRef.current;
    if (!scroller) return null;

    return {
      scrollTop: scroller.scrollTop,
      containerHeight: scroller.clientHeight,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element) => {
      if (!element) return 0;

      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll]
  );

  // Adjusted calculations for mobile
  const recalculateLayout = useCallback(() => {
    const scrollData = getScrollData();
    if (!scrollData || !cardsRef.current.length) return;

    const { containerHeight } = scrollData;

    // Use props directly instead of mobile overrides
    const mobileStackPosition = stackPosition;
    const mobileStackDistance = itemStackDistance;
    const mobileItemScale = itemScale;

    const stackPositionPx = parsePercentage(mobileStackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end");

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    const cardData = cardsRef.current
      .map((card, i) => {
        if (!card) return null;

        const cardTop = getElementOffset(card);
        const triggerStart = cardTop - stackPositionPx - mobileStackDistance * i;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = cardTop - stackPositionPx - mobileStackDistance * i;
        const pinEnd = endElementTop - containerHeight / 2;

        const mobileBaseScale = baseScale;
        const targetScale = mobileBaseScale + i * mobileItemScale;

        return {
          element: card,
          index: i,
          cardTop,
          triggerStart,
          triggerEnd,
          pinStart,
          pinEnd,
          targetScale,
          triggerRange: triggerEnd - triggerStart,
          mobileStackDistance,
        };
      })
      .filter(Boolean);

    containerDataRef.current = {
      stackPositionPx,
      scaleEndPositionPx,
      endElementTop,
      cardData,
      containerHeight,
    };
  }, [
    getScrollData,
    parsePercentage,
    stackPosition,
    scaleEndPosition,
    useWindowScroll,
    getElementOffset,
    itemStackDistance,
    baseScale,
    itemScale,
    isMobile,
  ]);

  const updateCardTransforms = useCallback(() => {
    const scrollData = getScrollData();
    if (!scrollData) return;

    const { scrollTop } = scrollData;
    const { cardData, stackPositionPx } = containerDataRef.current;

    if (!cardData.length) return;

    cardData.forEach((data, i) => {
      const {
        element,
        triggerStart,
        triggerEnd,
        pinStart,
        pinEnd,
        targetScale,
        cardTop,
        triggerRange,
        mobileStackDistance,
      } = data;

      // Calculate scale progress
      let scaleProgress = 0;
      if (scrollTop < triggerStart) {
        scaleProgress = 0;
      } else if (scrollTop > triggerEnd) {
        scaleProgress = 1;
      } else {
        scaleProgress = (scrollTop - triggerStart) / triggerRange;
      }

      // On mobile, use constant scale (targetScale) to avoid "small to big" animation.
      const scale = isMobile ? targetScale : (1 - scaleProgress * (1 - targetScale));
      // Disable rotation on mobile for performance
      const rotation = (!isMobile && rotationAmount) ? i * rotationAmount * scaleProgress : 0;

      // Calculate blur (disable on mobile for performance)
      let blur = 0;
      if (blurAmount && !isMobile) {
        let topCardIndex = 0;
        for (let j = 0; j < cardData.length; j++) {
          if (scrollTop >= cardData[j].triggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          blur = (topCardIndex - i) * blurAmount;
        }
      }

      // Calculate translateY
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - cardTop + stackPositionPx + mobileStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + mobileStackDistance * i;
      }

      // Apply transform
      const transform =
        rotation !== 0
          ? `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`
          : `translate3d(0, ${translateY}px, 0) scale(${scale})`;

      element.style.transform = transform;

      if (blur > 0) {
        element.style.filter = `blur(${blur}px)`;
      } else if (element.style.filter) {
        element.style.filter = "";
      }

      // Check stack completion
      if (i === cardData.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [getScrollData, rotationAmount, blurAmount, onStackComplete]);

  // Mobile-optimized Lenis config
  const lenisConfig = useMemo(
    () => ({
      duration: isMobile ? 0.5 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isMobile,
      touchMultiplier: isMobile ? 1 : 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: isMobile ? 0.1 : 0.15,
      syncTouch: false, // Disable syncTouch on mobile to avoid conflicts
    }),
    [isMobile]
  );

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis(lenisConfig);

      lenis.on("scroll", () => {
        updateCardTransforms();
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const content = scroller.querySelector(".scroll-stack-inner");
    if (!content) return;

    const lenis = new Lenis({
      ...lenisConfig,
      wrapper: scroller,
      content,
    });

    lenis.on("scroll", () => {
      updateCardTransforms();
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [useWindowScroll, lenisConfig, updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller?.querySelectorAll(".scroll-stack-card") || []
    );

    if (!cards.length) return;

    cardsRef.current = cards;

    // Initialize cards
    cards.forEach((card, i) => {
      card.style.transform = "translate3d(0, 0, 0) scale(1)";
      card.style.transformOrigin = "top center";
      card.style.willChange = "transform";
      card.style.backfaceVisibility = "hidden";
      card.style.WebkitBackfaceVisibility = "hidden";

      if (i < cards.length - 1) {
        // Reduce margin on mobile
        const margin = isMobile ? itemDistance * 0.6 : itemDistance;
        card.style.marginBottom = `${margin}px`;
      }
    });

    requestAnimationFrame(() => {
      recalculateLayout();
      const lenis = setupLenis();
      requestAnimationFrame(() => {
        updateCardTransforms();
      });
    });

    let prevWidth = window.innerWidth;
    let resizeTimeout;
    const handleResize = () => {
      // On mobile, ignore vertical resizes (address bar toggle)
      if (isMobile && window.innerWidth === prevWidth) return;
      prevWidth = window.innerWidth;

      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        recalculateLayout();
        updateCardTransforms();
      }, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      stackCompletedRef.current = false;
      cardsRef.current = [];
      containerDataRef.current = {
        stackPositionPx: 0,
        scaleEndPositionPx: 0,
        endElementTop: 0,
        cardData: [],
      };
    };
  }, [
    itemDistance,
    useWindowScroll,
    setupLenis,
    updateCardTransforms,
    recalculateLayout,
    isMobile,
  ]);

  const containerStyles = useMemo(
    () => ({
      WebkitOverflowScrolling: "touch",
      overscrollBehavior: "none",
      ...(useWindowScroll
        ? {}
        : {
          willChange: "scroll-position",
        }),
    }),
    [useWindowScroll]
  );

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-hidden ${className}`.trim();

  return (
    <div
      className={containerClassName}
      ref={scrollerRef}
      style={containerStyles}
    >
      <div
        className="scroll-stack-inner pt-[20vh] px-0 md:px-20 min-h-screen"
        style={{ paddingBottom: bottomPadding }}
      >
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
