import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto grid gap-10">

        {/* HERO */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">Deborah E. B. Keller</h1>
          <p className="text-xl mt-3 font-medium text-purple-700">
            Strategic | Data-Driven | Inclusive Leader
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            Director of Programs, Animal Welfare
          </p>
        </motion.div>

        {/* ABOUT */}
        <Card className="rounded-2xl shadow-xl bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-4 text-pink-600">Professional Biography</h2>
            <p className="text-lg leading-relaxed text-center mb-4">
              Deborah Keller is a seasoned leader with over two decades of experience spanning federal government, consulting, and nonprofit advocacy. Her career reflects a consistent dedication to building systems that empower people, improve access to information, and drive meaningful impact.
            </p>
            <p className="text-lg leading-relaxed text-center">
              With a foundation in research and knowledge management, Deborah has evolved into a strategic leader known for her integrity, analytical mindset, and ability to connect people and ideas. Her transition into animal welfare leadership represents a natural extension of her lifelong commitment to compassion and community.
            </p>
          </CardContent>
        </Card>

        {/* DETAILED BACKGROUND */}
        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-6 text-purple-700">Career Background & Impact</h2>
            <p className="mb-4 text-lg">
              Deborah began her professional journey in library and information science, where she quickly distinguished herself as a forward-thinking innovator in knowledge management. Her work with federal agencies involved designing systems that improved access to critical information and supported national-level decision-making.
            </p>
            <p className="mb-4 text-lg">
              At the U.S. Department of Homeland Security, she managed complex research infrastructures and led initiatives that served diverse organizational components. Her leadership extended beyond operations—she influenced policy, contributed to presidential-level reports, and represented her agency in intergovernmental councils.
            </p>
            <p className="text-lg">
              As a consultant and entrepreneur, Deborah helped organizations refine their messaging and strategy, ensuring their value was clearly communicated and sustainable over time. Her ability to translate complexity into clarity has made her a trusted advisor and speaker.
            </p>
          </CardContent>
        </Card>

        {/* EXPERIENCE */}
        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-6 text-purple-700">Expanded Professional Experience</h2>
            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-semibold text-xl">Founder & CEO – Waypoint Well-Being</h3>
                <p>
                  Provides patient advocacy services, guiding individuals through complex healthcare and insurance systems. Designs and delivers educational workshops, builds support communities, and champions disability rights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Principal – Keller and Associates</h3>
                <p>
                  Delivered strategic consulting services focused on communication, branding, and organizational clarity. Frequently invited speaker and contributor to professional publications.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">DHS – Acting Library Program Manager</h3>
                <p>
                  Oversaw a $5M research portfolio, led cross-agency initiatives, and developed enterprise-wide systems to improve access to knowledge and information sharing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">US Army Corps – Engineering Librarian</h3>
                <p>
                  Built foundational knowledge systems, contributed to organizational doctrine, and enhanced collaboration across geographically distributed teams.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DOCUMENT DOWNLOADS */}
        <Card className="rounded-2xl shadow-xl bg-gradient-to-r from-yellow-100 to-pink-100">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-6">Professional Documents</h2>
            <p className="text-center text-lg mb-6">
              Explore detailed supporting documents including executive biography, strategic analysis, and leadership reports.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <a href="#" className="text-center bg-white p-4 rounded-xl shadow hover:scale-105 transition">
                📄 Executive Bio (PDF)
              </a>

              <a href="#" className="text-center bg-white p-4 rounded-xl shadow hover:scale-105 transition">
                📊 SWOT Assessment (PDF)
              </a>

              <a href="#" className="text-center bg-white p-4 rounded-xl shadow hover:scale-105 transition">
                📘 SLB Report (PDF)
              </a>

              <a href="#" className="text-center bg-white p-4 rounded-xl shadow hover:scale-105 transition">
                📗 LIB Report (PDF)
              </a>

              <a href="#" className="text-center bg-white p-4 rounded-xl shadow hover:scale-105 transition">
                📙 SEPD Report (PDF)
              </a>
            </div>
          </CardContent>
        </Card>

        {/* ANIMAL WELFARE */}
        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-4 text-green-600">Animal Welfare Leadership</h2>
            <p className="text-lg text-center mb-4">
              Deborah has dedicated over a decade to hands-on animal rescue work, focusing on behavioral rehabilitation and successful adoption placements.
            </p>
            <p className="text-lg text-center">
              Her work reflects patience, empathy, and a deep understanding of both animal behavior and human relationships—qualities that translate directly into effective program leadership.
            </p>
          </CardContent>
        </Card>

        {/* EDUCATION */}
        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-4 text-blue-600">Education & Academic Foundation</h2>
            <ul className="text-center text-lg space-y-2">
              <li>MA – History (Geography Minor)</li>
              <li>MLIS – Library & Information Science</li>
              <li>AB – Chemistry & History (High Honors)</li>
            </ul>
          </CardContent>
        </Card>

        {/* CONTACT */}
        <Card className="rounded-2xl shadow-xl bg-gradient-to-r from-blue-200 to-purple-200">
          <CardContent className="p-6">
            <h2 className="text-3xl text-center font-bold mb-4">Contact</h2>
            <div className="text-center text-lg space-y-2">
              <p>Email: deborahlovescats@gmail.com</p>
              <p>Phone: 703-678-8189</p>
              <p>LinkedIn: linkedin.com/deborahkeller</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
