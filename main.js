import dotent from 'dotenv';
import  express from 'express';

const app = express();
const port = process.env.PORT ?? 3000; //андифаинт (скрытая фукция сревнения)

app.get("/", (_req, res) => {
    res.send("hi!");
});

app.listen(port, () => {
    console.log('Server is listening on port ${port}');
});

app.listen(port, () => {
    pool.query('SELECT $1::text as message', ['hi!']);
    console.log('Server is listening on port ${PORT}');
});

app.listen(port, () => {
pool.query('SELECT $1: :text as message', ['Hello world!']); console.log("Server is listening on port ${port}");
});