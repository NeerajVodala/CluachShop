import "../Auth.css";

export const Login = () => {
  return (
    <>
      <main class="auth-page flex-row align-center justify-center">
        <div class="auth-container flex-row align-center justify-center shadow-1 br-s">
          <div class="input-section">
            <h3>Login</h3>
            <div class="input-container">
              <label for="email" class="label">
                Email address
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                class="input"
                id="email"
              />
            </div>
            <div class="input-container">
              <label for="password" class="label">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                class="input"
                id="password"
              />
            </div>
            <div class="flex-row align-center justify-center gp-2xl">
              <div class="flex-row align-center gp-s">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me" class="label text-s">
                  {" "}
                  Remember me
                </label>
              </div>
              <div class="text-s">Forgot your Password?</div>
            </div>
            <button class="btn btn-m solid br-s">Login</button>
            <div class="text-center text-m">
              <a href="/pages/authentication/signup.html">Create New Account</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
