const express = require('express')
const app = express();
const PORT = 8000;


// LISTENER
app.listen(PORT, () => {
    console.log(`Server is Connected at PORT: ${PORT}`)
})