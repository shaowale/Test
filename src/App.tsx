import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { SkillCreatePage } from './pages/SkillCreatePage';
import { SkillDetailPage } from './pages/SkillDetailPage';
import { SkillsPage } from './pages/SkillsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'skills/new', element: <SkillCreatePage /> },
      { path: 'skills/:id', element: <SkillDetailPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
