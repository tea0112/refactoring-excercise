function app() {
  let invoices;
  let plays;

  const fs = require("fs");
  fs.readFile("./starting-point/invoices.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
    try {
      invoices = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
    }
  });
  fs.readFile("./starting-point/plays.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
    try {
      plays = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
    }
  });
}

app();
