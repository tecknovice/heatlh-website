import type { ReactElement } from 'react'
import ClientLayout from '../layouts/client.layout'
import Column from '../components/Column'

export default function ColumnPage() {
  return <Column />
}

ColumnPage.getLayout = function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>
}
