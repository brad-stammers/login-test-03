if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_login-test-03', domain: 'login-test-03'
else
  Rails.application.config.session_store :cookie_store, key: '_login-test-03'
end