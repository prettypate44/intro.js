// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  // Now you can access form values via req.body
  console.log(req.body.username); 
  res.send('Form received!');
});



const checkAuth = (req, res, next) => {
  const isLoggedIn = false; // Example logic
  if (isLoggedIn) {
    next(); // Let them through to the HTML page
  } else {
    res.status(401).send('Please log in first!'); // Block access
  }
};

// Only users who pass 'checkAuth' can see this page
app.get('/dashboard', checkAuth, (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});