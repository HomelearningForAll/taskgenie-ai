src/Dashboard.jsx
export default function Dashboard() {
  if (!localStorage.getItem("admin")) {
    window.location.href = "/login"
    return null
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard ✅</h2>
      <p>You are logged in.</p>
    </div>
  )
}
