"use client";

import { useEffect, useRef, useState } from "react";
import { ContactForm } from "../ContactForm";
import { HeaderAvatar } from "../HeadshotAvatar";

const TYPEWRITER_TEXT =
  "Glad you stopped in. we are currently performing some maintenance work on the site, check back soon!";
<ContactForm />
const EMAIL_ADDRESS = "hello@mainframe.co";
const VIDEO_URL =
  "/videos/robot_1080p_optimized.mp4";
const SCRUB_SENSITIVITY = 0.8;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function useTypewriter(
  text: string,
  speed = 38,
  startDelay = 600,
): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    setDisplayed("");
    setDone(false);

    const timeoutId = window.setTimeout(() => {
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId !== undefined) {
            window.clearInterval(intervalId);
          }
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [speed, startDelay, text]);

  return { displayed, done };
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="3"
        width="6"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect
        x="4.5"
        y="1.5"
        width="6"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function MainframeMaintenancePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const seekInFlightRef = useRef(false);
  const queuedSeekRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [actionsVisible, setActionsVisible] = useState(false);
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActionsVisible(true);
    }, 400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    document.body.style.overflow = menuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const video = videoRef.current;

      if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = event.clientX;
        return;
      }

      const delta = event.clientX - prevXRef.current;
      prevXRef.current = event.clientX;

      const nextTarget = clamp(
        targetTimeRef.current +
          (delta / window.innerWidth) * SCRUB_SENSITIVITY * video.duration,
        0,
        video.duration,
      );

      targetTimeRef.current = nextTarget;

      if (seekInFlightRef.current) {
        queuedSeekRef.current = true;
        return;
      }

      seekInFlightRef.current = true;

      try {
        video.currentTime = nextTarget;
      } catch {
        seekInFlightRef.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSeeked = () => {
    const video = videoRef.current;

    seekInFlightRef.current = false;

    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.03) {
      queuedSeekRef.current = false;
      seekInFlightRef.current = true;

      try {
        video.currentTime = targetTimeRef.current;
      } catch {
        seekInFlightRef.current = false;
      }

      return;
    }

    if (queuedSeekRef.current) {
      queuedSeekRef.current = false;
      seekInFlightRef.current = true;

      try {
        video.currentTime = targetTimeRef.current;
      } catch {
        seekInFlightRef.current = false;
      }
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
    } catch {
      // Silently fail if the clipboard is unavailable.
    }
  };

  const navLinks = [
    { label: "", href: "#labs" },
  ];

  const pillStyle = (visible: boolean) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(8px)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
  });

  return (
    <div className="maintenance-shell relative min-h-screen bg-white text-black">
      <video
        ref={videoRef}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
        style={{ objectPosition: "70% center" }}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        onLoadedMetadata={(event) => {
          const video = event.currentTarget;
          targetTimeRef.current = 0;
          prevXRef.current = null;
          seekInFlightRef.current = false;
          queuedSeekRef.current = false;

          if (Number.isFinite(video.duration) && video.duration > 0) {
            video.currentTime = 0;
          }
        }}
      />

      <header className="fixed inset-x-0 top-0 z-10 px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="group maintenance-logo flex items-center gap-3 text-[21px] tracking-tight text-black sm:text-[26px]"
            aria-label="Mainframe"
          >

            <HeaderAvatar />
            <span className="hidden sm:inline transition-all
      duration-300
      group-hover:opacity-70">
        Daniel Alswanger
        </span>
            <span
              className="select-none text-[25px] leading-none sm:text-[30px] hidden sm:inline"
              style={{ letterSpacing: "-0.02em" }}
              aria-hidden="true"
              
            >
              
            </span>
          </button>

          <nav className="hidden items-center gap-1 text-[23px] text-black md:flex">
            {navLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="transition-opacity hover:opacity-60"
                  onClick={(event) => event.preventDefault()}
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 ? <span>, </span> : null}
              </span>
            ))}
          </nav>

          

          <button
            type="button"
            className="flex flex-col gap-[5px] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mainframe-mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span
              className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="mainframe-mobile-menu"
        className={`fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[32px] font-medium text-black transition-opacity hover:opacity-60"
            onClick={(event) => {
              event.preventDefault();
              setMenuOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="text-[32px] font-medium text-black underline underline-offset-2 transition-opacity hover:opacity-60"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch
        </button>
      </div>

      <main className="relative z-10 flex min-h-screen flex-col justify-end pl-10 pr-5 pt-32 pb-12 sm:pl-16 sm:pr-8 md:pl-24 md:pr-10 md:justify-center md:pb-0">
        <div className="max-w-xl">
          <p
            className="pointer-events-none mb-5 select-none whitespace-pre-line text-black sm:mb-6"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.3,
              fontWeight: 400,
              filter: "blur(4px)",
            }}
          >
           Maintenance Mode

          The site is currently being updated.
          </p>

        <h1
  className="mb-6 max-w-4xl text-black"
  style={{
    fontSize: "clamp(24px, 20vw, 40px)",
    lineHeight: 0.95,
    fontWeight: 500,
    letterSpacing: "-0.05em",
  }}
>
  {displayed}
  {!done && (
    <span className="maintenance-cursor ml-1 inline-block h-[0.9em] w-[3px] bg-black align-middle" />
  )}
</h1>
 <div
            className="flex flex-wrap gap-y-1 mb-30"
            style={pillStyle(actionsVisible)}

          >
            <ContactForm/>
          </div>
         
        </div>
      </main>
    </div>
  );
}
