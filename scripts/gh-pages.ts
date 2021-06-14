var ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/yourproject", // <-- replace yourproject with your repo name
  {
    branch: "gh-pages",
    repo: "https://github.com/username/yourproject.git",
    user: {
      name: "Your name",
      email: "Your Email address",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
