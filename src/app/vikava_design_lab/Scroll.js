"use client";

import { useLayoutEffect, useRef, useCallback, useMemo } from "react";
import Lenis from "lenis";
import { motion, useTransform } from "framer-motion";

/* ---------- UPDATED STACK ITEM FOR YOUR CARDS ---------- */
const icons = [
  // index 0
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8686 4.13134L14.1615 3.42423L14.1615 3.42423L14.8686 4.13134ZM7.81459 7.48152L8.08931 8.44304L7.81459 7.48152ZM5.57564 9.83884L6.55004 10.0637V10.0637L5.57564 9.83884ZM3 21L2.02561 20.7751C1.94808 21.1111 2.04909 21.4633 2.29289 21.7071C2.5367 21.9509 2.8889 22.0519 3.22486 21.9744L3 21ZM14.1611 18.4243L13.9363 17.4499L13.9363 17.4499L14.1611 18.4243ZM16.5185 16.1854L15.5569 15.9107L16.5185 16.1854ZM19.8686 9.13134L20.5757 9.83845V9.83845L19.8686 9.13134ZM19.8686 6.8686L19.1615 7.57571H19.1615L19.8686 6.8686ZM17.1314 4.13134L17.8385 3.42423V3.42423L17.1314 4.13134ZM20.5368 8.30899L19.5858 7.99997L20.5368 8.30899ZM20.5368 7.69095L19.5858 7.99997L20.5368 7.69095ZM15.4404 18.0251L15.9601 18.8794H15.9601L15.4404 18.0251ZM16.0539 17.4424L16.8804 18.0054L16.8804 18.0054L16.0539 17.4424ZM6.55756 7.94607L7.12056 8.77253L7.12056 8.77253L6.55756 7.94607ZM5.97487 8.55957L6.82922 9.07928L6.82922 9.07928L5.97487 8.55957ZM15.691 3.46313L15.382 2.51207L15.691 3.46313ZM16.309 3.46313L16.618 2.51207L16.618 2.51207L16.309 3.46313ZM9.14645 16.2676C9.53697 15.8771 9.53697 15.2439 9.14644 14.8534C8.75591 14.4629 8.12275 14.4629 7.73223 14.8534L9.14645 16.2676ZM10 14.5C10 14.7761 9.77614 15 9.5 15V17C10.8807 17 12 15.8807 12 14.5H10ZM9.5 15C9.22386 15 9 14.7761 9 14.5H7C7 15.8807 8.11929 17 9.5 17V15ZM9 14.5C9 14.2238 9.22386 14 9.5 14V12C8.11929 12 7 13.1193 7 14.5H9ZM9.5 14C9.77614 14 10 14.2238 10 14.5H12C12 13.1193 10.8807 12 9.5 12V14ZM14.1615 3.42423L12.2929 5.29286L13.7071 6.70708L15.5757 4.83845L14.1615 3.42423ZM12.7253 5.03845L7.53987 6.51999L8.08931 8.44304L13.2747 6.96149L12.7253 5.03845ZM4.60125 9.61398L2.02561 20.7751L3.97439 21.2248L6.55004 10.0637L4.60125 9.61398ZM3.22486 21.9744L14.386 19.3987L13.9363 17.4499L2.77514 20.0256L3.22486 21.9744ZM17.48 16.4601L18.9615 11.2747L17.0385 10.7252L15.5569 15.9107L17.48 16.4601ZM18.7071 11.7071L20.5757 9.83845L19.1615 8.42424L17.2929 10.2929L18.7071 11.7071ZM20.5757 6.16149L17.8385 3.42423L16.4243 4.83845L19.1615 7.57571L20.5757 6.16149ZM20.5757 9.83845C20.7621 9.65211 20.9449 9.47038 21.0858 9.30446C21.2342 9.12961 21.3938 8.90772 21.4879 8.618L19.5858 7.99997C19.6057 7.93858 19.6292 7.92986 19.5611 8.01011C19.4854 8.09928 19.3712 8.21456 19.1615 8.42424L20.5757 9.83845ZM19.1615 7.57571C19.3712 7.78538 19.4854 7.90066 19.5611 7.98984C19.6292 8.07008 19.6057 8.06136 19.5858 7.99997L21.4879 7.38194C21.3938 7.09222 21.2342 6.87033 21.0858 6.69548C20.9449 6.52957 20.7621 6.34783 20.5757 6.16149L19.1615 7.57571ZM21.4879 8.618C21.6184 8.21632 21.6184 7.78362 21.4879 7.38194L19.5858 7.99997V7.99997L21.4879 8.618ZM14.386 19.3987C14.988 19.2598 15.5141 19.1507 15.9601 18.8794L14.9207 17.1708C14.8157 17.2346 14.6727 17.28 13.9363 17.4499L14.386 19.3987ZM15.5569 15.9107C15.3493 16.6373 15.2966 16.7778 15.2274 16.8794L16.8804 18.0054C17.1743 17.574 17.3103 17.0541 17.48 16.4601L15.5569 15.9107ZM15.9601 18.8794C16.3257 18.6571 16.6395 18.359 16.8804 18.0054L15.2274 16.8794C15.1471 16.9973 15.0426 17.0966 14.9207 17.1708L15.9601 18.8794ZM7.53987 6.51999C6.94585 6.68971 6.426 6.82571 5.99457 7.11961L7.12056 8.77253C7.22213 8.70334 7.36263 8.65066 8.08931 8.44304L7.53987 6.51999ZM6.55004 10.0637C6.71998 9.32729 6.76535 9.18427 6.82922 9.07928L5.12053 8.03986C4.84922 8.48586 4.74017 9.01202 4.60125 9.61398L6.55004 10.0637ZM5.99457 7.11961C5.64092 7.36052 5.34291 7.67429 5.12053 8.03986L6.82922 9.07928C6.90334 8.95742 7.00268 8.85283 7.12056 8.77253L5.99457 7.11961ZM15.5757 4.83845C15.7854 4.62878 15.9007 4.51459 15.9899 4.43889C16.0701 4.37076 16.0614 4.39424 16 4.41418L15.382 2.51207C15.0922 2.60621 14.8704 2.76578 14.6955 2.91421C14.5296 3.05506 14.3479 3.2379 14.1615 3.42423L15.5757 4.83845ZM17.8385 3.42423C17.6521 3.23789 17.4704 3.05506 17.3045 2.91421C17.1296 2.76578 16.9078 2.60621 16.618 2.51207L16 4.41418C15.9386 4.39424 15.9299 4.37077 16.0101 4.43889C16.0993 4.51459 16.2146 4.62877 16.4243 4.83845L17.8385 3.42423ZM16 4.41418H16L16.618 2.51207C16.2163 2.38156 15.7837 2.38156 15.382 2.51207L16 4.41418ZM12.2929 6.70708L17.2929 11.7071L18.7071 10.2929L13.7071 5.29286L12.2929 6.70708ZM7.73223 14.8534L2.29289 20.2929L3.70711 21.7071L9.14645 16.2676L7.73223 14.8534Z"
      fill="#000000"
    />
  </svg>,
  // index 1
  <svg
    viewBox="-1 0 19 19"
    className="h-8 w-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.12 2.361a.477.477 0 0 0-.036-.167.584.584 0 0 0-.14-.197l-.384-.385-.111-.109-.002-.002L9.162 8.62l-.003-.005-.285-.285-.801.801a1.172 1.172 0 0 1-.548.326 1.098 1.098 0 0 1-1.009-.244l-.01-.01-.017-.015-.175-.175a1.11 1.11 0 0 1-.333-.641 1.148 1.148 0 0 1 .042-.515 1.226 1.226 0 0 1 .261-.452l.008-.01.013-.013.593-.593-1.283-1.308-2.451 2.49.621.586.613.612a1.533 1.533 0 0 0-.032.46 2.07 2.07 0 0 0 .109.513 2.572 2.572 0 0 0 .267.547 3.263 3.263 0 0 0 .453.556L8.67 14.72a.457.457 0 0 0 .162.108.435.435 0 0 0 .164.025.291.291 0 0 0 .187-.088l.171-.17a.338.338 0 0 0 .077-.15.355.355 0 0 0-.002-.164.417.417 0 0 0-.124-.196l-.42-.424a.129.129 0 0 1-.003-.188l.084-.068a.088.088 0 0 1 .123 0l.64.628q.315.315.559.099l.17-.171a.408.408 0 0 0 .066-.088.248.248 0 0 0 .03-.124.368.368 0 0 0-.043-.16.744.744 0 0 0-.147-.191l-.618-.605a.137.137 0 0 1-.001-.193l.062-.063a.125.125 0 0 1 .182.003l.67.683c.023.024.054.054.094.09a.41.41 0 0 0 .132.083.308.308 0 0 0 .158.019.317.317 0 0 0 .173-.102l.216-.216a.408.408 0 0 0 .066-.088.247.247 0 0 0 .03-.124.373.373 0 0 0-.041-.157.576.576 0 0 0-.127-.172l-.646-.632a.171.171 0 0 1 .001-.243l.024-.027a.14.14 0 0 1 .204.006l.543.554c.015.015.04.04.078.074a.525.525 0 0 0 .133.088.347.347 0 0 0 .167.031.293.293 0 0 0 .184-.099l.171-.171a.346.346 0 0 0 .048-.07.248.248 0 0 0 .029-.124zm1.472-4.019-2.44-2.44-.905.905a6.486 6.486 0 0 0-.96-.127 3.228 3.228 0 0 0-.544.015 2.028 2.028 0 0 0-.513.127 1.254 1.254 0 0 0-.433.282L6.8 7.862l-.002.002a.543.543 0 0 0-.117.199l-.001.005a.47.47 0 0 0-.016.21.443.443 0 0 0 .138.248l.17.17a.42.42 0 0 0 .185.097l.004.001a.415.415 0 0 0 .198-.005.501.501 0 0 0 .228-.145L8.631 7.6a.345.345 0 0 1 .487 0l2.992 2.997.04.04.08-.12a2.521 2.521 0 0 0 .261-.534 2.06 2.06 0 0 0 .107-.506 1.7 1.7 0 0 0 0-.254.341.341 0 0 1 .02-.145zm-3.112 4.866.004-.003a.375.375 0 0 1-.035.022.443.443 0 0 1 .031-.02z"
      fill="#2156FF"
    />
  </svg>,
  // index 2
  <svg
    viewBox="-1.51 0 122.88 122.88"
    className="h-8 w-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FFE400"
      fillRule="evenodd"
      d="M60.69.67a6.56,6.56,0,1,1-5.24,7.66A6.56,6.56,0,0,1,60.69.67Zm43,77.68a7.45,7.45,0,0,0-2.94-2.9l1.71-.94a7.28,7.28,0,0,0,2.87-9.86h0a7.14,7.14,0,0,0-3.14-3l1.38-.76A7.28,7.28,0,0,0,106.47,51a7.29,7.29,0,0,0-9.86-2.86L95.2,49a7.26,7.26,0,0,0-10.72-7l-7.23,4a8.31,8.31,0,0,0-3.93-4h0a8.39,8.39,0,0,0-4.93-.73l.79-1.62a8.34,8.34,0,0,0-15-7.3l-.8,1.65a8.43,8.43,0,0,0-3.57-3.34,8.35,8.35,0,0,0-11.14,3.86L21.33,70a15.57,15.57,0,0,0-1.06,1.81h0l-1,2.09-.1-.26c-.7-1.84-1.34-3.72-1.59-4.42-1.63-4.76-4.75-7.12-7.9-7.57a7.94,7.94,0,0,0-4.11.48,8.38,8.38,0,0,0-3.38,2.49c-2.2,2.68-3.08,7-.95,12.17l0,.09h0c2.26,6.64,7.56,26.94,13.38,33.33,7.2,7.9,25.85,15.32,35.88,11.78a23.08,23.08,0,0,0,13.11-11.71l1-2.12q18.1-9.94,36.21-19.93a7.28,7.28,0,0,0,2.86-9.86ZM78,49.22c2.67-1.46,5.37-2.93,8.06-4.42a4,4,0,0,1,3-.33,3.93,3.93,0,0,1,2.37,1.89,4,4,0,0,1,.33,3,3.94,3.94,0,0,1-1.89,2.36l-8.2,4.51c-.27-.16-.53-.32-.82-.46h0A8.3,8.3,0,0,0,76.17,55l1-2A8.4,8.4,0,0,0,78,49.22Zm6.2,9.54,14-7.7a4,4,0,0,1,3-.32,3.9,3.9,0,0,1,2.36,1.89,4,4,0,0,1,.33,3A3.88,3.88,0,0,1,102,58L84.32,67.73l.38-.8a8.25,8.25,0,0,0,.37-6.36,8.37,8.37,0,0,0-.87-1.81ZM81.67,73.17l15.41-8.48a3.94,3.94,0,0,1,3-.33,3.9,3.9,0,0,1,2.37,1.89,4,4,0,0,1-1.56,5.37L80.1,83.06,81.69,86l13.76-7.57a4,4,0,0,1,3-.33A3.88,3.88,0,0,1,100.82,80a4,4,0,0,1,.33,3,3.9,3.9,0,0,1-1.89,2.37L67.16,103,81.67,73.17ZM60.21,108.61a19.27,19.27,0,0,1-11,9.81c-8.55,3-25.72-4.06-31.84-10.77C12.22,102,6.5,80.56,4.83,75.66a1.53,1.53,0,0,0-.08-.26L3,76.13l1.74-.73c-1.55-3.74-1.06-6.68.37-8.4A4.56,4.56,0,0,1,7,65.63a4.15,4.15,0,0,1,2.17-.27c1.87.28,3.77,1.84,4.88,5.06.26.74.93,2.7,1.63,4.54a23.84,23.84,0,0,0,2,4.28,1.85,1.85,0,0,0,.8.74h1.67l3.67-6.52C29.84,60.92,35.94,48.61,42.07,36a4.56,4.56,0,0,1,2.61-2.3,4.47,4.47,0,0,1,3.47.2,4.54,4.54,0,0,1,2.3,2.6,4.47,4.47,0,0,1-.2,3.47L38.36,64.43l3.52,1.72L57.59,33.86a4.53,4.53,0,0,1,8.38.52,4.49,4.49,0,0,1-.21,3.46L50.05,70.13l3.6,1.75L65.58,47.37a4.53,4.53,0,0,1,2.61-2.3,4.55,4.55,0,0,1,5.57,6.28L61.82,75.85l3.41,1.66L73.11,61.3A4.53,4.53,0,0,1,75.72,59a4.47,4.47,0,0,1,3.47.2,4.57,4.57,0,0,1,2.1,6.08Q70.75,86.94,60.21,108.61Z"
    />
  </svg>,
  <svg
    viewBox="-0.5 0 25 25"
    className="h-8 w-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.0006 9.03002C19.0007 8.10058 18.8158 7.18037 18.4565 6.32317C18.0972 5.46598 17.5709 4.68895 16.9081 4.03734C16.2453 3.38574 15.4594 2.87265 14.5962 2.52801C13.7331 2.18336 12.8099 2.01409 11.8806 2.03002C10.0966 2.08307 8.39798 2.80604 7.12302 4.05504C5.84807 5.30405 5.0903 6.98746 5.00059 8.77001C4.95795 9.9595 5.21931 11.1402 5.75999 12.2006C6.30067 13.2609 7.10281 14.1659 8.09058 14.83C8.36897 15.011 8.59791 15.2584 8.75678 15.5499C8.91565 15.8415 8.99945 16.168 9.00059 16.5V18.03H15.0006V16.5C15.0006 16.1689 15.0829 15.843 15.24 15.5515C15.3971 15.26 15.6241 15.0121 15.9006 14.83C16.8528 14.1911 17.6336 13.328 18.1741 12.3167C18.7147 11.3054 18.9985 10.1767 19.0006 9.03002Z"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 21.04C14.1345 21.6891 13.0819 22.04 12 22.04C10.9181 22.04 9.86548 21.6891 9 21.04"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9901 5.64001L10.3301 8.41998C10.2549 8.54184 10.2138 8.68167 10.2111 8.82483C10.2084 8.96799 10.2441 9.10925 10.3146 9.23389C10.3851 9.35852 10.4877 9.46195 10.6118 9.53339C10.7359 9.60482 10.8769 9.64165 11.0201 9.64001H13.0201C13.1617 9.63947 13.301 9.67657 13.4237 9.7475C13.5463 9.81843 13.6479 9.92063 13.7181 10.0437C13.7883 10.1668 13.8245 10.3063 13.8231 10.4479C13.8217 10.5896 13.7827 10.7283 13.7101 10.85L12.0301 13.64"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    viewBox="0 0 256 256"
    className="h-8 w-8"
    fill="#2156FF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M200,52H132V16a4,4,0,0,0-8,0V52H56A28.03146,28.03146,0,0,0,28,80V192a28.03146,28.03146,0,0,0,28,28H200a28.03146,28.03146,0,0,0,28-28V80A28.03146,28.03146,0,0,0,200,52Zm20,140a20.0226,20.0226,0,0,1-20,20H56a20.0226,20.0226,0,0,1-20-20V80A20.0226,20.0226,0,0,1,56,60H200a20.0226,20.0226,0,0,1,20,20Zm-56-52H92a24,24,0,0,0,0,48h72a24,24,0,0,0,0-48Zm-20,8v32H112V148ZM76,164a16.01833,16.01833,0,0,1,16-16h12v32H92A16.01833,16.01833,0,0,1,76,164Zm88,16H152V148h12a16,16,0,0,1,0,32ZM76,108a8,8,0,1,1,8,8A8.00009,8.00009,0,0,1,76,108Zm88,0a8,8,0,1,1,8,8A8.00009,8.00009,0,0,1,164,108Z"
      fill="#2156FF"
    />
  </svg>,
];

export const ScrollStackItem = ({ number, title, desc, index }) => {
  const bgVariant = index % 3;

  const bgClass =
    bgVariant === 0
      ? "bg-[#111111]"
      : bgVariant === 1
        ? "bg-[#2156FF]"
        : "bg-[#FFE400]";

  const isYellowCard = bgVariant === 2;
  const titleColor = isYellowCard ? "text-[#2156FF]" : "text-[#FFE400]";
  const descColor = isYellowCard ? "text-[#2156FF]" : "text-[#FFE400]";

  const icon = icons[index % icons.length];
  const iconBgClass = isYellowCard ? "bg-[#2156FF]" : "bg-[#FFE400]";
  const iconColorClass = isYellowCard ? "text-[#FFE400]" : "text-[#111111]";

  return (
    <div className="scroll-stack-card my-6 sm:my-8 flex justify-center px-4">
      <div
        className={`${bgClass} 
          w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[570px]
          h-[320px] sm:h-[320px] md:h-[340px] lg:h-[358px] 
          rounded-[12px] sm:rounded-[14px] 
          border border-white/10 
          px-6 sm:px-8 md:px-10 
          py-6 sm:py-8 
          box-border flex flex-col`}
      >
        {/* Top row: icon on the right */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span />
          <span
            className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full ${iconBgClass} ${iconColorClass}`}
          >
            {icon}
          </span>
        </div>

        {/* Text block pinned to bottom */}
        <div className="flex-1 flex flex-col justify-end gap-2 sm:gap-3">
          {title && (
            <h2
              className={`font-semibold poppins-medium leading-snug ${titleColor} 
                text-[clamp(14px,2.2vw,18px)] 
                sm:text-[clamp(16px,2.2vw,22px)] 
                md:text-[clamp(18px,2.5vw,26px)]`}
            >
              {title}
            </h2>
          )}
          {desc && (
            <p
              className={`leading-relaxed poppins-regular max-w-xl ${descColor}
                text-[clamp(13px,2.2vw,16px)] 
                sm:text-[clamp(14px,2.2vw,18px)] 
                md:text-[clamp(16px,2.2vw,22px)]`}
            >
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------- REST OF YOUR ScrollStack CODE (unchanged) ---------- */

/* keep your entire ScrollStack implementation exactly as you posted,
   and use <ScrollStackItem /> as the child cards inside <ScrollStack> */

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  disableLenis = false, // Add this prop
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
    [useWindowScroll],
  );

  // Pre-calculate all static data once
  const recalculateLayout = useCallback(() => {
    const scrollData = getScrollData();
    if (!scrollData || !cardsRef.current.length) return;

    const { containerHeight } = scrollData;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight,
    );

    const endElement = scrollerRef.current?.querySelector(".scroll-stack-end");

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    // Pre-calculate all card-specific data
    const cardData = cardsRef.current
      .map((card, i) => {
        if (!card) return null;

        const cardTop = getElementOffset(card);
        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
        const pinEnd = endElementTop - containerHeight / 9;
        const targetScale = baseScale + i * itemScale;

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
  ]);


  const updateCardTransforms = useCallback(() => {
    const scrollData = getScrollData();
    if (!scrollData) return;

    const { scrollTop } = scrollData;
    const {
      cardData,
      stackPositionPx,
      itemStackDistance: stackDist,
      containerHeight,
    } = containerDataRef.current;

    if (!cardData.length) return;

    // Single pass through all cards
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

      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Calculate blur
      let blur = 0;
      if (blurAmount) {
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
        translateY = scrollTop - cardTop + stackPositionPx;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx;
      }

      // 🔹 add alternating tilt based on index
      const baseTilt = 2; // degrees
      const tilt = (i % 2 === 0 ? 1 : -1) * baseTilt;

      // Apply transform (translate + small rotate)
      const transform = `translate3d(0, ${translateY}px, 0) rotate(${tilt}deg)`;
      element.style.transform = transform;

      // Check stack completion for last card
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
  }, [
    getScrollData,
    itemStackDistance,
    rotationAmount,
    blurAmount,
    onStackComplete,
  ]);

  // Memoize Lenis configuration with optimized settings
  const lenisConfig = useMemo(
    () => ({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.15, // Increased for smoother interpolation
      syncTouch: false, // Disabled for better performance
    }),
    [],
  );

  const setupLenis = useCallback(() => {
    if (disableLenis) return; // Skip if disabled

    if (useWindowScroll) {
      const lenis = new Lenis(lenisConfig);

      // Use Lenis's scroll event which fires on every frame
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
  }, [useWindowScroll, lenisConfig, updateCardTransforms, disableLenis]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller?.querySelectorAll(".scroll-stack-card") || [],
    );

    if (!cards.length) return;

    cardsRef.current = cards;

    // Initialize cards with GPU-accelerated styles
    cards.forEach((card, i) => {
      // Set initial transform
      card.style.transform = "translate3d(0, 0, 0) scale(1)";
      card.style.transformOrigin = "top center";
      card.style.willChange = "transform";
      card.style.backfaceVisibility = "hidden";
      card.style.WebkitBackfaceVisibility = "hidden";
      // Explicit z-index to ensure stacking order
      card.style.zIndex = i + 1;

      // Set margin
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
    });

    // Calculate layout after styles are applied
    requestAnimationFrame(() => {
      recalculateLayout();

      if (disableLenis) {
        // Fallback: Native scroll listener
        const handleScroll = () => {
          requestAnimationFrame(updateCardTransforms);
        };

        if (useWindowScroll) {
          window.addEventListener("scroll", handleScroll, { passive: true });
        } else if (scroller) {
          scroller.addEventListener("scroll", handleScroll, { passive: true });
        }

        // Apply initial transform
        updateCardTransforms();

        // Cleanup function for this specific block
        // (We attach this to the ref to clean it up in the main cleanup function if needed,
        // but easier to just use a separate ref for the listener if we were strict.
        // For now, we'll rely on the main cleanup below removing it.)
        // Actually, we need to store the listener reference to remove it!
        lenisRef.current = {
          destroy: () => {
            if (useWindowScroll) {
              window.removeEventListener("scroll", handleScroll);
            } else if (scroller) {
              scroller.removeEventListener("scroll", handleScroll);
            }
          }
        };

      } else {
        // Setup Lenis after layout calculation
        const lenis = setupLenis();
        // Initial transform update
        requestAnimationFrame(() => {
          updateCardTransforms();
        });
      }
    });

    // Recalculate on resize with debounce
    let resizeTimeout;
    const handleResize = () => {
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
    disableLenis,
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
    [useWindowScroll],
  );

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-hidden ${className}`.trim();

  // inside ScrollStack return:

  return (
    <div
      className={containerClassName}
      ref={scrollerRef}
      style={containerStyles}
    >
      <div className="scroll-stack-inner pt-[20vh] px-0 pb-[30vh] flex justify-end">
        <div className="w-[570px]">
          {children}
          <div className="scroll-stack-end w-full h-px" />
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
