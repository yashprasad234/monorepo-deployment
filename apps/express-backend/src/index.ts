import express, { Request, Response } from "express";
import { UserInput } from "@repo/common";

const port = 3002;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    let parsedUser = UserInput.safeParse(req.body);
    if (!parsedUser.success) {
        res.send('Incorrect input for harkirat!')
        return;
    }
    res.send('correct input!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});