import { Button } from '@/components/ui/button'
import { useAccounts } from '@/hooks/useAccounts'
import { useUIStore } from '@/store/uiStore'
import { Download, Upload } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const openExportDialog = useUIStore((state) => state.openExportDialog)
  const openImportDialog = useUIStore((state) => state.openImportDialog)
  const { accounts } = useAccounts()

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Stremio Account Manager</h1>
            <p className="text-sm text-muted-foreground">
              Manage multiple Stremio accounts and addons
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={openImportDialog}>
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={openExportDialog}
              disabled={accounts.length === 0}
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mt-4 border-b">
          <Link
            to="/"
            className={`pb-2 px-1 border-b-2 transition-colors duration-150 ${
              location.pathname === '/' || location.pathname.startsWith('/account/')
                ? 'border-primary text-foreground font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            Accounts
          </Link>
          <Link
            to="/saved-addons"
            className={`pb-2 px-1 border-b-2 transition-colors duration-150 ${
              location.pathname === '/saved-addons'
                ? 'border-primary text-foreground font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            Saved Addons
          </Link>
          <Link
            to="/faq"
            className={`pb-2 px-1 border-b-2 transition-colors duration-150 ${
              location.pathname === '/faq'
                ? 'border-primary text-foreground font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            FAQ
          </Link>
        </div>
      </div>
    </header>
  )
}
