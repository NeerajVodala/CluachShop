import "../Auth.css";

export const Signup = () => {
  return (
    <>
      <main class="auth-page flex-row align-center justify-center">
        <div class="auth-container flex-row align-center justify-center shadow-1 br-s">
          <div class="input-section">
            <h3>Signup</h3>
            <div class="flex-row align-center justify-center gp-2xl">
              <div class="input-container">
                <label for="first-name" class="label">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  class="input"
                  id="first-name"
                />
              </div>
              <div class="input-container">
                <label for="last-name" class="label">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  class="input"
                  id="last-name"
                />
              </div>
            </div>
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
            <div class="input-container">
              <label for="password" class="label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                class="input"
                id="password"
              />
            </div>
            <div>
              <input type="checkbox" id="terms" />
              <label for="terms" class="label">
                {" "}
                I accept all Terms & Conditions
              </label>
            </div>
            <button class="btn btn-m solid br-s">Create New Account</button>
            <div class="text-center">
              <a href="/pages/authentication/login.html">
                Already have an account
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
