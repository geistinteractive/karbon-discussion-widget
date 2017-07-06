var inline = require("inline-source"),
  fs = require("fs"),
  path = require("path"),
  htmlpath = path.resolve("./build/index.html");

inline(
  htmlpath,
  {
    compress: false,
    attribute: false
  },
  function(err, html) {
    if (err) return console.error(err);
    fs.writeFileSync("./build/inline.html", html);
    console.log("-");
    console.info('"index.html" inlined to "inline.html"');
  }
);
