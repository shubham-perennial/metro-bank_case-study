import app from "./index";
import connect from "./config/db";

app.listen(2244, async () => {
    await connect();
  console.log("listen on port 2244");
});
