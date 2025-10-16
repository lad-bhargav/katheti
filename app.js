// app.js
import { connectDB } from "./Utils/mongooseconnect.js";
import Auth from "./Schema/authSchema.js";

(async () => {
  try {
    await connectDB();
    console.log("connected with DB");

    const user = await Auth.create({
      name: "sam",
      email: "sam@example.com",
      password: "123456",
    });

    console.log("user added:", user);
  } catch (err) {
    console.error("Error:", err);
  }
})();


//50589C
//636CCB
//6E8CFB