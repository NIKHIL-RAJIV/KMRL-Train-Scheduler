import { TrainSchedulingDashboard } from "@/components/train-scheduling-dashboard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Link href="/architecture">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
            View Architecture
          </Button>
        </Link>
        <Link href="/presentation">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
            View SIH Presentation
          </Button>
        </Link>
      </div>
      <TrainSchedulingDashboard />
    </main>
  )
}
