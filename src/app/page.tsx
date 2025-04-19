import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components with loading fallbacks
const Nav = dynamic(() => import("@/components/nav"), {
  ssr: true,
  loading: () => <div className="h-16 bg-[#020817]"></div>,
});

const Hero = dynamic(() => import("@/components/hero"), {
  ssr: true,
  loading: () => (
    <div className="h-screen bg-[#020817] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  ),
});

const Skills = dynamic(() => import("@/components/skills"), {
  ssr: true,
  loading: () => (
    <div className="py-20 bg-[#020817]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-800 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/projects"), {
  ssr: true,
  loading: () => (
    <div className="py-20 bg-[#020817]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-800 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/contact"), {
  ssr: true,
  loading: () => (
    <div className="py-20 bg-[#020817]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-800 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  ),
});

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
  loading: () => <div className="h-16 bg-[#020817]"></div>,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Nav />
      <Suspense
        fallback={
          <div className="h-screen bg-[#020817] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
        }
      >
        <Hero />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-20 bg-[#020817]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4"></div>
                <div className="h-6 w-96 bg-gray-800 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        }
      >
        <Skills />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-20 bg-[#020817]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4"></div>
                <div className="h-6 w-96 bg-gray-800 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        }
      >
        <Projects />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-20 bg-[#020817]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4"></div>
                <div className="h-6 w-96 bg-gray-800 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        }
      >
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
}
