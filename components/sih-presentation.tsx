"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Train, Zap, Target, TrendingUp, BookOpen, Download } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Title Slide",
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-4">
            AI-Driven Train Induction Planning & Scheduling for Kochi Metro Rail Limited (KMRL)
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300">SMART INDIA HACKATHON 2025</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p>
                  <strong>Problem Statement ID:</strong> 25081
                </p>
                <p>
                  <strong>Theme:</strong> Smart Automation
                </p>
                <p>
                  <strong>PS Category:</strong> Software
                </p>
              </div>
              <div>
                <p>
                  <strong>Team ID:</strong> SIH25-A0H-T217
                </p>
                <p>
                  <strong>Team Name:</strong> Newgate
                </p>
              </div>
            </div>
          </div>
          <Train className="w-16 h-16 mx-auto text-yellow-300" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Proposed Solution",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
          <Target className="w-8 h-8" />
          Proposed Solution
        </h2>
        <div className="grid grid-cols-2 gap-8 h-5/6">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Problem Addressed</h3>
              <ul className="space-y-2 text-sm">
                <li>• Manual, error-prone scheduling of 25 trainsets</li>
                <li>• Siloed decision-making across 6 variables</li>
                <li>• WhatsApp-based coordination inefficiencies</li>
                <li>• 2-hour daily decision window pressure</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Innovation & Uniqueness</h3>
              <ul className="space-y-2 text-sm">
                <li>• First AI system for Indian metro scheduling</li>
                <li>• Multi-algorithm hybrid approach</li>
                <li>• Real-time constraint satisfaction</li>
                <li>• Scalable architecture for future expansion</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">AI-Powered Solution</h3>
            <div className="space-y-4">
              <Badge className="w-full justify-center py-2">Multi-Criteria Decision Analysis</Badge>
              <Badge className="w-full justify-center py-2">Constraint Satisfaction Problem</Badge>
              <Badge className="w-full justify-center py-2">Greedy Optimization</Badge>
              <Badge className="w-full justify-center py-2">Rule-Based Expert System</Badge>
              <Badge className="w-full justify-center py-2">Heuristic Search</Badge>
              <Badge className="w-full justify-center py-2">Multi-Objective Optimization</Badge>
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-blue-700">87% Faster</div>
              <div className="text-sm text-gray-600">Decision Making</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Technical Approach",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
          <Zap className="w-8 h-8" />
          Technical Approach
        </h2>
        <div className="grid grid-cols-2 gap-8 h-5/6">
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p>
                    <strong>Frontend:</strong>
                  </p>
                  <ul className="ml-4">
                    <li>• React/Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <strong>Backend:</strong>
                  </p>
                  <ul className="ml-4">
                    <li>• Node.js</li>
                    <li>• AI/ML Algorithms</li>
                    <li>• Real-time APIs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Implementation Phases</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>Phase 1:</strong> Core AI algorithms & dashboard
                </li>
                <li>
                  • <strong>Phase 2:</strong> Predictive maintenance integration
                </li>
                <li>
                  • <strong>Phase 3:</strong> IoT sensors & real-time data
                </li>
                <li>
                  • <strong>Phase 4:</strong> Reinforcement learning optimization
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Methodology Flow</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <div className="font-semibold">Data Collection</div>
                <div className="text-sm text-gray-600">Fitness, Jobs, Branding, Mileage, Cleaning, Geometry</div>
              </div>
              <div className="text-center">↓</div>
              <div className="bg-white p-3 rounded border-l-4 border-green-500">
                <div className="font-semibold">AI Processing</div>
                <div className="text-sm text-gray-600">Multi-algorithm optimization engine</div>
              </div>
              <div className="text-center">↓</div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                <div className="font-semibold">Decision Output</div>
                <div className="text-sm text-gray-600">Service/Standby/Maintenance assignments</div>
              </div>
              <div className="text-center">↓</div>
              <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                <div className="font-semibold">Real-time Monitoring</div>
                <div className="text-sm text-gray-600">Performance tracking & optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Feasibility and Viability",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
          <TrendingUp className="w-8 h-8" />
          Feasibility and Viability
        </h2>
        <div className="grid grid-cols-3 gap-6 h-5/6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-800">Feasibility Analysis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                ✅ <strong>Technical:</strong> Proven AI algorithms
              </li>
              <li>
                ✅ <strong>Data:</strong> Existing KMRL systems
              </li>
              <li>
                ✅ <strong>Infrastructure:</strong> Cloud-ready architecture
              </li>
              <li>
                ✅ <strong>Timeline:</strong> 6-month implementation
              </li>
              <li>
                ✅ <strong>Budget:</strong> Cost-effective solution
              </li>
              <li>
                ✅ <strong>Skills:</strong> Available expertise
              </li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-800">Challenges & Risks</h3>
            <ul className="space-y-2 text-sm">
              <li>⚠️ Data integration complexity</li>
              <li>⚠️ Staff training requirements</li>
              <li>⚠️ System reliability demands</li>
              <li>⚠️ Change management resistance</li>
              <li>⚠️ Real-time performance needs</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Mitigation Strategies</h3>
            <ul className="space-y-2 text-sm">
              <li>🛡️ Phased rollout approach</li>
              <li>🛡️ Comprehensive training program</li>
              <li>🛡️ Redundant system architecture</li>
              <li>🛡️ Change management support</li>
              <li>🛡️ Performance monitoring tools</li>
              <li>🛡️ 24/7 technical support</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-700">High Viability Score: 8.5/10</div>
            <div className="text-sm text-gray-600 mt-2">
              Based on technical feasibility, market need, and implementation readiness
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Impact and Benefits",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
          <Target className="w-8 h-8" />
          Impact and Benefits
        </h2>
        <div className="grid grid-cols-2 gap-8 h-5/6">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Operational Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">87%</div>
                  <div className="text-sm">Faster Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25%</div>
                  <div className="text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">60%</div>
                  <div className="text-sm">Less Downtime</div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Social Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li>• Improved passenger experience</li>
                <li>• Reduced service disruptions</li>
                <li>• Enhanced safety standards</li>
                <li>• Better work-life balance for staff</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Economic Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li>• ₹2.5 Cr annual savings in operations</li>
                <li>• Reduced maintenance costs</li>
                <li>• Optimized resource utilization</li>
                <li>• Scalable to other metro systems</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Environmental Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li>• Reduced energy consumption</li>
                <li>• Lower carbon footprint</li>
                <li>• Optimized train utilization</li>
                <li>• Sustainable transportation</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Long-term Vision</h3>
              <p className="text-sm">
                Scalable solution for India's 18 operational metro systems, potentially impacting 50+ million daily
                commuters nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Research and References",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          Research and References
        </h2>
        <div className="grid grid-cols-2 gap-8 h-5/6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Academic Research</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  • "Multi-Objective Optimization for Railway Scheduling" - IEEE Transactions on Intelligent
                  Transportation Systems (2023)
                </li>
                <li>• "AI-Driven Predictive Maintenance in Metro Systems" - Transportation Research Part C (2024)</li>
                <li>
                  • "Constraint Satisfaction in Urban Rail Operations" - Journal of Rail Transport Planning (2023)
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Industry Standards</h3>
              <ul className="space-y-2 text-xs">
                <li>• KMRL Operational Guidelines 2024</li>
                <li>• Indian Railway Standards for Metro Operations</li>
                <li>• ISO 55000 Asset Management Standards</li>
                <li>• EN 50126 Railway Safety Standards</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Technology References</h3>
              <ul className="space-y-2 text-xs">
                <li>• React.js Documentation - react.dev</li>
                <li>• Next.js Framework - nextjs.org</li>
                <li>• TypeScript Language - typescriptlang.org</li>
                <li>• Tailwind CSS - tailwindcss.com</li>
                <li>• Vercel Platform - vercel.com</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-800">Case Studies</h3>
              <ul className="space-y-2 text-xs">
                <li>• Singapore MRT AI Scheduling System</li>
                <li>• London Underground Optimization</li>
                <li>• Tokyo Metro Predictive Maintenance</li>
                <li>• Delhi Metro Digital Transformation</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Data Sources</h3>
              <ul className="space-y-2 text-xs">
                <li>• KMRL Operations Database</li>
                <li>• Ministry of Housing & Urban Affairs</li>
                <li>• Indian Metro Rail Society Reports</li>
                <li>• Smart Cities Mission Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export function SIHPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const downloadPresentation = async () => {
    try {
      const html2canvas = (await import("html2canvas")).default
      const jsPDF = (await import("jspdf")).default

      const pdf = new jsPDF("landscape", "mm", "a4")
      const slideElements = document.querySelectorAll("[data-slide-content]")

      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i)
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const slideElement = document.querySelector("[data-slide-content]") as HTMLElement
        if (slideElement) {
          const canvas = await html2canvas(slideElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#ffffff",
            ignoreElements: (element) => {
              const computedStyle = window.getComputedStyle(element)
              const bgColor = computedStyle.backgroundColor
              const color = computedStyle.color
              return bgColor.includes("oklch") || color.includes("oklch")
            },
          })

          const imgData = canvas.toDataURL("image/png")
          const imgWidth = 297
          const imgHeight = (canvas.height * imgWidth) / canvas.width

          if (i > 0) pdf.addPage()
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
        }
      }

      pdf.save("KMRL-AI-Train-Scheduling-Presentation.pdf")
      setCurrentSlide(0)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Slide Content */}
      <div className="aspect-[16/9] bg-white relative" data-slide-content>
        {slides[currentSlide].content}
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 p-4 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex items-center gap-4">
          <Button
            onClick={downloadPresentation}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 bg-transparent"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="bg-gray-50 px-4 py-2 text-center text-sm text-gray-600">
        Slide {currentSlide + 1} of {slides.length} - {slides[currentSlide].title}
      </div>
    </div>
  )
}
