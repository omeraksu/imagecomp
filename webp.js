const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["sources/*.png", "sources/*.jpg", "sources/*.JPG"], "images", {
  use: [
    webp({
      quality: 50,
    }),
  ],
}).then(function () {
  console.log("Images converted!");
});
