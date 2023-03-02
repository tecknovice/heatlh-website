import type { ReactElement } from 'react'
import ClientLayout from '../layouts/client.layout'
import Record from '../components/Record'

export default function RecordPage() {
  return <Record />
}

RecordPage.getLayout = function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>
}
