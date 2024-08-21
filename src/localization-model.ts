export const LocalizationKeys = {
    auth: {
      login: {
        title: { key: "auth.login.title", value: "Login" },
        email: { key: "auth.login.email", value: "Email" },
        password: { key: "auth.login.password", value: "Password" },
        submit: { key: "auth.login.submit", value: "Login" },
        forgot: { key: "auth.login.forgot", value: "Forgot password?" },
        register: { key: "auth.login.register", value: "Register" },
        error: {
          email: { key: "auth.login.error.email", value: "Email is required" },
          password: { key: "auth.login.error.password", value: "Password is required" },
          wrongCredentials: { key: "auth.login.error.wrongCredentials", value: "Wrong email or password" },
        },
      },
      register: {
        error: {
          createPersonError: { key: "auth.register.error.createPersonError", value: "There was an error while creating person" },
          signupError: { key: "auth.register.error.signupError", value: "There was an error while signing up" },
        },
      },
    },
    calendar: {
      availability: {
        error: {
          invalidDayOrTime: { key: "calendar.availability.error.invalidDayOrTime", value: "Invalid day or time selected" },
        },
      },
    },
  };
  