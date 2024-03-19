import { startCase } from 'lodash'
import { auth } from '@clerk/nextjs'

export async function generateMetadata() {
  const { orgSlug } = auth()

  return {
    title: startCase(orgSlug || 'organization'),
  }
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default OrganizationIdLayout
