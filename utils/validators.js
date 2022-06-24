module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username field must not be emptpy';
  }
  if (email.trim() === '') {
    errors.email = 'Email field must not be emptpy';
  } else {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email adress';
    }
  }

  if (password.trim() === '') {
    errors.password = 'Password must not be emptpy';
  } else {
    if (password.trim() !== confirmPassword.trim()) {
      errors.password = 'Passwords does not match';
    }
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
module.exports.validateLoginInput = (email, password) => {
  const errors = {};
  if (email.trim() === '') {
    errors.email = 'Email field must not be emptpy';
  } else {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email adress';
    }
  }

  if (password.trim() === '') {
    errors.password = 'Password must not be emptpy';
  } 
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
