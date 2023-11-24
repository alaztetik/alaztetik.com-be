import { boot, app } from "./boot.js";

app.get('/', (req, res) => {
    res.send('Hello');
});

boot();