export default function Login() {
  function login() {
    localStorage.setItem("admin", "true")
    window.location.href = "/dashboard"
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Login</h2>
      <button onClick={login}>Login as Admin</button>
    </div>
  )
}
