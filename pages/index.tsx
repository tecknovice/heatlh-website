import type { ReactElement } from 'react'
import ClientLayout from '../layouts/client.layout'
import Dashboard from '../components/Dashboard'

export default function Index() {
  return <Dashboard />
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>
}
