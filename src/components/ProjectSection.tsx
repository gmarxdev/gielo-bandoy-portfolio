import { ExternalLink, Github, ChevronLeft, ChevronRight, User, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import banca1 from "@/assets/banca1.jpg";
import dms1 from "@/assets/dms1.png";
import seaweed1 from "@/assets/seaweed-dryer-monitoring.jpg";
import eggGraderSorter from "@/assets/egg-grader-sorter.jpg";
import powerConsumptionMonitoring from "@/assets/power-consumption.jpg";
import trashbin from "@/assets/trashbin.jpg";
import restaurantPOS from "@/assets/restaurant-pos.png";
import homestayBooking from "@/assets/homestay-booking.png";

import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const personalProjects: Project[] = [
  {
    title: "BANCA Mobile App",
    description:
      "Project BANCA: Digital Sea Transport Optimization for Sustainable Island Tourism in Surigao del Norte.",
    image: banca1,
    tags: ["React Native", "Express", "Neon PostgreSQL", "PayMongo"],
    liveUrl: "https://banca-prototype.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Power Consumption Monitoring Device",
    description:
      "IoT-based smart energy meter for monitoring and analyzing power consumption in real-time. Help track the real-time energy usage of your appliances.",
    image: powerConsumptionMonitoring,
    tags: ["ESP32", "IoT", "PlatformIO", "OLEDB", "ZMPT101B", "ACS712", "HI LINK 5V 3W SMPS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Bin with Level Indicator using AT89S52",
    description:
      "IoT-based smart bin with level indicator using AT89S52 microcontroller with buzzer integrated for alerting when the bin is full.",
    image: trashbin,
    tags: ["AT89S52", "IoT", "Keil uVision5", "WLPRO", "Machine Language", "Keil C"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Homestay Booking System",
    description:
      "An Admin-Role Homestay Booking System is a web application for booking homestays.",
    image: homestayBooking,
    tags: ["PHP", "MySQL", "JQuery", "Bootstrap", "Croppy/Dropzone", "MPDF"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const clientProjects: Project[] = [
  {
    title: "Point of Sale for Restaurant/Cafe",
    description:
      "A mobile app Point of Sale (POS) system designed for restaurants and cafes, featuring order management, inventory tracking, and sales reporting.",
    image: restaurantPOS,
    tags: ["Ionic", "Vue", "Local Storage"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Mini Egg Grader & Sorter",
    description:
      "IoT prototype using Esp32, sensors, servo motors, and stepper motors for Egg grader and sorter automation, with web dashboard for remote monitoring and control.",
    image: eggGraderSorter,
    tags: ["ESP32", "IoT", "PlatformIO", "Vue", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dormitory Management System",
    description:
      "Full-stack web application built with PHP CodeIgniter 4 for managing dormitory operations, tenants, rooms, payments, and reports.",
    image: dms1,
    tags: ["PHP", "MySQL", "JQuery", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "IoT Automated Seaweed Dryer System (CAPSTONE PROJECT)",
    description:
      "Seaweed Dryer Monitoring System is an innovative Internet of Things (IoT) solution developed to modernize and optimize the traditional seaweed drying process.",
    image: seaweed1,
    tags: ["ESP32", "IoT", "PlatformIO", "Vue", "Django", "Firebase"],
    liveUrl: "https://seaweed-dryer-monitoring.web.app/dashboard",
    githubUrl: "#",
  },
];

// ─── Sub-component: ProjectCarousel ───────────────────────────────────────────

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-background border-2 border-primary/40 hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 px-2"
              >
                <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay with Links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                      <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Button size="sm" variant="secondary" asChild className="hover:scale-110 transition-transform">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild className="hover:scale-110 transition-transform">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-foreground shrink-0 mt-1">
                        {index + 1} / {projects.length}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-110"
                          style={{
                            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-background border-2 border-primary/40 hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-primary"
                : "w-2 bg-primary/30 hover:bg-primary/60"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

type Tab = "personal" | "client";

const PortfolioSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<Tab>("personal");

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-[720px] mx-auto">
          {/* Section Header */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 scroll-reveal ${sectionVisible ? "revealed" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div
              className="h-1 bg-primary mx-auto mb-6"
              style={{
                width: sectionVisible ? "80px" : "0px",
                transition: "width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of my recent work showcasing web, mobile, and IoT development
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border-2 border-primary/20 p-1 gap-1 bg-secondary/40 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("personal")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "personal"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Show personal projects"
              >
                <User className="h-4 w-4" />
                Personal Projects
              </button>
              <button
                onClick={() => setActiveTab("client")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "client"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Show client-based projects"
              >
                <Briefcase className="h-4 w-4" />
                Client-Based Projects
              </button>
            </div>
          </div>

          {/* Category Label */}
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
            {activeTab === "personal" ? "🚀 Personal Projects" : "🤝 Client-Based Projects"}
          </p>

          {/* Carousels */}
          {activeTab === "personal" ? (
            <ProjectCarousel key="personal" projects={personalProjects} />
          ) : (
            <ProjectCarousel key="client" projects={clientProjects} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
