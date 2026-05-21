import { SITE } from '../data/site'
import './StatsSection.css'

const stats = [
  { value: SITE.yearEstablished, label: 'Year Established' },
  { value: SITE.projectsCompleted, label: 'Projects Completed' },
  { value: SITE.clientsServed, label: 'Clients Served' },
  { value: SITE.servicesCount, label: 'Services Offered' },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-section__grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
