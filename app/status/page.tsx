'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, XCircle, Activity, Globe, Server, Key, Webhook, Clock, RefreshCw, Loader2 } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

type Status = 'operational' | 'degraded' | 'outage' | 'maintenance' | 'checking'

interface ComponentStatus {
  name: string
  description: string
  status: Status
  icon: React.ReactNode
  key: string
}

interface Incident {
  id: string
  title: string
  status: 'resolved' | 'monitoring' | 'investigating' | 'identified'
  date: string
  updates: {
    time: string
    message: string
    status: 'resolved' | 'monitoring' | 'investigating' | 'identified'
  }[]
}

interface HealthResponse {
  status: 'ok' | 'degraded' | 'error'
  services: {
    api: 'operational' | 'degraded' | 'outage'
    database: 'operational' | 'degraded' | 'outage'
    auth: 'operational' | 'degraded' | 'outage'
    webhooks: 'operational' | 'degraded' | 'outage'
  }
  timestamp: string
}

const incidents: Incident[] = [
  // Add incidents here when they occur
]

function getStatusConfig(status: Status) {
  switch (status) {
    case 'operational':
      return {
        label: 'Operational',
        icon: <CheckCircle className="w-5 h-5" />,
        bgClass: 'bg-bare-safe/10',
        textClass: 'text-bare-safe',
        borderClass: 'border-bare-safe/20',
      }
    case 'degraded':
      return {
        label: 'Degraded',
        icon: <AlertCircle className="w-5 h-5" />,
        bgClass: 'bg-bare-warning/10',
        textClass: 'text-bare-warning',
        borderClass: 'border-bare-warning/20',
      }
    case 'outage':
      return {
        label: 'Outage',
        icon: <XCircle className="w-5 h-5" />,
        bgClass: 'bg-bare-danger/10',
        textClass: 'text-bare-danger',
        borderClass: 'border-bare-danger/20',
      }
    case 'maintenance':
      return {
        label: 'Maintenance',
        icon: <RefreshCw className="w-5 h-5" />,
        bgClass: 'bg-bare-accent/10',
        textClass: 'text-bare-accent',
        borderClass: 'border-bare-accent/20',
      }
    case 'checking':
      return {
        label: 'Checking...',
        icon: <Loader2 className="w-5 h-5 animate-spin" />,
        bgClass: 'bg-bare-muted/10',
        textClass: 'text-bare-muted',
        borderClass: 'border-bare-muted/20',
      }
  }
}

function getOverallStatus(components: ComponentStatus[]): Status {
  if (components.some(c => c.status === 'checking')) return 'checking'
  if (components.some(c => c.status === 'outage')) return 'outage'
  if (components.some(c => c.status === 'degraded')) return 'degraded'
  if (components.some(c => c.status === 'maintenance')) return 'maintenance'
  return 'operational'
}

function ComponentCard({ component }: { component: ComponentStatus }) {
  const config = getStatusConfig(component.status)
  return (
    <div className={`card flex items-center justify-between ${config.borderClass}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${config.bgClass} flex items-center justify-center ${config.textClass}`}>
          {component.icon}
        </div>
        <div>
          <h3 className="font-semibold text-bare-text">{component.name}</h3>
          <p className="text-sm text-bare-muted">{component.description}</p>
        </div>
      </div>
      <div className={`flex items-center gap-1.5 ${config.textClass}`}>
        {config.icon}
        <span className="text-sm font-medium hidden sm:inline">{config.label}</span>
      </div>
    </div>
  )
}

function IncidentCard({ incident }: { incident: Incident }) {
  const statusColors = {
    resolved: 'text-bare-safe',
    monitoring: 'text-bare-accent',
    investigating: 'text-bare-warning',
    identified: 'text-bare-warning',
  }

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-bare-text">{incident.title}</h3>
          <p className="text-sm text-bare-muted flex items-center gap-1.5 mt-1">
            <Clock className="w-4 h-4" />
            {incident.date}
          </p>
        </div>
        <span className={`text-sm font-medium capitalize ${statusColors[incident.status]}`}>
          {incident.status}
        </span>
      </div>
      <div className="border-t border-bare-card-border pt-3 space-y-2">
        {incident.updates.map((update, i) => (
          <div key={i} className="flex gap-3 text-sm">
            <span className="text-bare-muted font-mono w-12 flex-shrink-0">{update.time}</span>
            <span className="text-bare-text">{update.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const HEALTH_ENDPOINT = 'https://juno.bare.money/api/health'
const REFRESH_INTERVAL = 30000 // 30 seconds

export default function StatusPage() {
  const [lastChecked, setLastChecked] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [components, setComponents] = useState<ComponentStatus[]>([
    {
      name: 'Web App',
      description: 'juno.bare.money dashboard and UI',
      status: 'checking',
      icon: <Globe className="w-5 h-5" />,
      key: 'app',
    },
    {
      name: 'API',
      description: 'Core API and data processing',
      status: 'checking',
      icon: <Server className="w-5 h-5" />,
      key: 'api',
    },
    {
      name: 'Authentication',
      description: 'Magic links, passkeys, and sessions',
      status: 'checking',
      icon: <Key className="w-5 h-5" />,
      key: 'auth',
    },
    {
      name: 'Monzo Webhooks',
      description: 'Real-time transaction updates',
      status: 'checking',
      icon: <Webhook className="w-5 h-5" />,
      key: 'webhooks',
    },
  ])

  const checkHealth = useCallback(async () => {
    setIsRefreshing(true)

    try {
      const response = await fetch(HEALTH_ENDPOINT, {
        method: 'GET',
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error('Health check failed')
      }

      const data: HealthResponse = await response.json()

      setComponents(prev => prev.map(component => {
        let newStatus: Status = 'operational'

        switch (component.key) {
          case 'app':
            // If we got a response, the app is up
            newStatus = data.status === 'ok' ? 'operational' : data.status === 'degraded' ? 'degraded' : 'outage'
            break
          case 'api':
            newStatus = data.services.api
            break
          case 'auth':
            newStatus = data.services.auth
            break
          case 'webhooks':
            newStatus = data.services.webhooks
            break
        }

        return { ...component, status: newStatus }
      }))

      setLastChecked(new Date())
    } catch {
      // If fetch fails, mark everything as outage
      setComponents(prev => prev.map(component => ({
        ...component,
        status: 'outage' as Status,
      })))
      setLastChecked(new Date())
    } finally {
      setIsRefreshing(false)
    }
  }, [])

  useEffect(() => {
    // Initial check
    checkHealth()

    // Set up interval for periodic checks
    const interval = setInterval(checkHealth, REFRESH_INTERVAL)

    return () => clearInterval(interval)
  }, [checkHealth])

  const overallStatus = getOverallStatus(components)
  const overallConfig = getStatusConfig(overallStatus)

  return (
    <main className="min-h-screen bg-bare-bg px-6 py-12 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-bare-accent hover:text-bare-accent-hover transition-colors">
            ← Back
          </Link>
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">System Status</h1>
          <p className="text-bare-muted mb-8">
            Live status of bare.money services. Auto-refreshes every 30 seconds.
          </p>
        </motion.div>

        {/* Overall Status Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={`card ${overallConfig.bgClass} ${overallConfig.borderClass} mb-8`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center ${overallConfig.textClass}`}>
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  {overallConfig.icon}
                  <span className={`font-semibold ${overallConfig.textClass}`}>
                    {overallStatus === 'checking'
                      ? 'Checking Systems...'
                      : overallStatus === 'operational'
                      ? 'All Systems Operational'
                      : overallStatus === 'degraded'
                      ? 'Some Systems Degraded'
                      : overallStatus === 'outage'
                      ? 'System Outage'
                      : 'Scheduled Maintenance'}
                  </span>
                </div>
                <p className="text-sm text-bare-muted mt-1">
                  {lastChecked
                    ? `Last checked: ${lastChecked.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
                    : 'Checking...'}
                </p>
              </div>
            </div>
            <button
              onClick={checkHealth}
              disabled={isRefreshing}
              className="p-2 rounded-lg hover:bg-white/50 transition-colors disabled:opacity-50"
              title="Refresh status"
            >
              <RefreshCw className={`w-5 h-5 text-bare-muted ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </motion.section>

        {/* Component Status */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Components</h2>
          <div className="space-y-3">
            {components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
              >
                <ComponentCard component={component} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Incidents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Recent Incidents</h2>
          {incidents.length > 0 ? (
            <div className="space-y-4">
              {incidents.map((incident) => (
                <IncidentCard key={incident.id} incident={incident} />
              ))}
            </div>
          ) : (
            <div className="card text-center py-8">
              <CheckCircle className="w-10 h-10 text-bare-safe mx-auto mb-3" />
              <p className="text-bare-text font-medium">No recent incidents</p>
              <p className="text-sm text-bare-muted mt-1">All systems have been running smoothly</p>
            </div>
          )}
        </motion.section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="card bg-bare-accent-soft border-bare-accent/20"
        >
          <h2 className="font-display text-lg font-semibold text-bare-text mb-2">About This Page</h2>
          <p className="text-sm text-bare-muted">
            This page fetches live status from juno.bare.money every 30 seconds.
            If you&apos;re experiencing issues not shown here, try refreshing or contact support.
          </p>
        </motion.section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-bare-card-border">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold">
                <span className="gradient-text">bare</span>
                <span className="text-bare-muted">.money</span>
              </h2>
              <span className="text-bare-muted text-sm">— No B.S. budgeting</span>
            </div>
            <div className="flex items-center gap-6 text-bare-muted text-sm">
              <Link href="/privacy" className="hover:text-bare-text transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-bare-text transition-colors">
                Terms
              </Link>
              <Link href="/docs" className="hover:text-bare-text transition-colors">
                Docs
              </Link>
              <Link href="/changelog" className="hover:text-bare-text transition-colors">
                Changelog
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
