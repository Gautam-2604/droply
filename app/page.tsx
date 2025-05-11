'use client'
import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  Image as ImageIcon,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Floating Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-20 md:py-32 px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 z-0"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="max-w-xl mx-auto lg:mx-0">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <span className="animate-pulse mr-2">•</span> Launching soon
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-default-900 leading-tight">
                    Store your <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">images</span> with elegance
                  </h1>
                  <p className="text-xl md:text-2xl text-default-600 leading-relaxed">
                    Simple. Secure. Seamless.
                  </p>
                </div>

                <div className="flex flex-wrap gap-5 pt-6 justify-center lg:justify-start">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button size="lg" variant="solid" color="primary" className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                        Get Started
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button size="lg" variant="flat" color="primary" className="rounded-xl hover:bg-primary/10 transition-all">
                        Sign In
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        variant="solid"
                        color="primary"
                        className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                        endContent={<ArrowRight className="h-4 w-4" />}
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>

              <div className="flex justify-center order-first lg:order-last">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
                  <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white/90 backdrop-blur rounded-3xl shadow-2xl flex items-center justify-center p-6 rotate-3 hover:rotate-0 transition-all duration-500">
                      <ImageIcon className="h-24 md:h-32 w-24 md:w-32 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-primary/70" />
          </div>
        </section>

        {/* Features section */}
        <section className="py-20 md:py-28 px-4 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-default-300 to-transparent"></div>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-default-900">
                What Makes Droply Special
              </h2>
              <p className="text-xl text-default-600 max-w-2xl mx-auto">
                Designed with simplicity in mind, built with cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              <Card className="border-0 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardBody className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 mb-6">
                    <CloudUpload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-default-900">
                    Lightning Fast Uploads
                  </h3>
                  <p className="text-default-600 text-lg">
                    Drag, drop, done. Our optimized pipeline delivers exceptional upload speeds.
                  </p>
                </CardBody>
              </Card>

              <Card className="border-0 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardBody className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 mb-6">
                    <Folder className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-default-900">
                    Intelligent Organization
                  </h3>
                  <p className="text-default-600 text-lg">
                    Advanced sorting and tagging systems ensure your library stays well-organized and searchable.
                  </p>
                </CardBody>
              </Card>

              <Card className="border-0 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <CardBody className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 mb-6">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-default-900">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-default-600 text-lg">
                    End-to-end encryption and rigorous access controls keep your content protected.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-primary/10 to-purple-500/10 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-default-300 to-transparent"></div>
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-default-900">
                Ready to Transform Your Image Storage Experience?
              </h2>
              <p className="text-xl text-default-600 mb-10">
                Join thousands of creatives, professionals, and businesses who trust Droply.
              </p>
              <SignedOut>
                <div className="flex flex-wrap justify-center gap-5 mt-8">
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      variant="solid"
                      color="primary"
                      className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                      endContent={<ArrowRight className="h-4 w-4" />}
                    >
                      Get Started Now
                    </Button>
                  </Link>
                </div>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="solid"
                    color="primary"
                    className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    endContent={<ArrowRight className="h-4 w-4" />}
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-default-200 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <CloudUpload className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Droply</h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-end gap-4 items-center">
              <div className="flex gap-6">
                <a href="#" className="text-default-600 hover:text-primary transition-colors">Terms</a>
                <a href="#" className="text-default-600 hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-default-600 hover:text-primary transition-colors">Contact</a>
              </div>
              <p className="text-default-500 text-sm md:ml-8">
                &copy; {new Date().getFullYear()} Droply. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}