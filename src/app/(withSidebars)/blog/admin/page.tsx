import { getAllTags } from '@/services/tags'
import AdminPanel from '@/components/blog/AdminPanel'

const AdminPanelPage = async () => {
  const tags = await getAllTags()
  return <AdminPanel tags={tags || []} />
}

export default AdminPanelPage
