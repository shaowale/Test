import { Link, NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <Link className="brand" to="/">
          SkillBox
        </Link>
        <nav className="main-nav" aria-label="Main">
          <NavLink to="/">首页</NavLink>
          <NavLink to="/skills">Skill 列表</NavLink>
          <NavLink to="/skills/new">创建 Skill</NavLink>
        </nav>
      </header>
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}
