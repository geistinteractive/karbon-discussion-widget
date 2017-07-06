/**
 * loads initial JSON from this stub in development
 * but when in production it loads it from a script tag injected by FileMaker
 */

if (process.env.NODE_ENV !== "production") {
  // stubb this out with test data
  window.initialData = {
    editCommentScript : "WVEditComment",
    post: {
      title: "this could be very interesting",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ullamcorper tellus, a molestie ipsum. Nulla facilisi.<br/>Proin eu ante interdum, rhoncus orci at, posuere nunc. Suspendisse potenti. Aliquam vel dapibus nulla. Donec tincidunt lorem vitae tincidunt congue. Etiam cursus eu sem sed scelerisque. Vestibulum sodales metus in lorem ultricies, ac vehicula ante viverra. Praesent tincidunt ex ut tellus sagittis, a molestie odio rhoncus. Donec congue, elit eget fermentum gravida, purus dui pharetra ante, vel dignissim sem arcu id augue. Cras placerat lorem eros, ac pellentesque mauris posuere eu. Aenean interdum fermentum vulputate. Vestibulum consectetur, urna eget dapibus viverra, neque nisi bibendum nibh, ac aliquam tellus augue sed diam. Morbi auctor tellus ut ligula sollicitudin condimentum. Curabitur lacus augue, placerat in mi eget, accumsan eleifend dolor. Nam elementum urna ornare, semper magna ut, bibendum est. Vestibulum elementum velit sed orci pulvinar tempor. In placerat libero id sapien ornare, et posuere elit imperdiet. Fusce quis justo diam. Vivamus gravida et odio quis efficitur. Ut tincidunt risus eu dui semper, vel laoreet massa rhoncus. Sed eget lacus eget ipsum pellentesque blandit. Aenean dapibus tincidunt velit, vitae malesuada lectus volutpat ac. Proin sollicitudin sollicitudin mi in fringilla. Proin pulvinar, dui tristique pellentesque mattis, justo felis tempor enim, ac laoreet sem quam id enim."
    },
    comments: [
      { body: "well nifty", person: "Dave Graham" },
      {
        person: "Todd Geist",
        id: "GUISD",
        body:
          "Vivamus ornare a felis at euismod. Suspendisse massa ligula, tristique ac purus at, bibendum mollis nulla. Nullam at rhoncus tellus. Phasellus placerat quam eget enim viverra, eget finibus enim cursus. Vivamus "
      },
      { body: "well nifty", person: "Dave Graham" },
      {
        person: "Todd Geist",
        body:
          "Vivamus ornare a felis at euismod. Suspendisse massa ligula, tristique ac purus at, bibendum mollis nulla. Nullam at rhoncus tellus. Phasellus placerat quam eget enim viverra, eget finibus enim cursus. Vivamus "
      },
      { body: "well nifty", person: "Dave Graham" },
      {
        person: "Todd Geist",
        body:
          "Vivamus ornare a felis at euismod. Suspendisse massa ligula, tristique ac purus at, bibendum mollis nulla. Nullam at rhoncus tellus. Phasellus placerat quam eget enim viverra, eget finibus enim cursus. Vivamus "
      },
      { body: "well nifty", person: "Dave Graham" },
      {
        person: "Todd Geist",
        body:
          "Vivamus ornare a felis at euismod. Suspendisse massa ligula, tristique ac purus at, bibendum mollis nulla. Nullam at rhoncus tellus. Phasellus placerat quam eget enim viverra, eget finibus enim cursus. Vivamus "
      }
    ]
  };
}

export default null;
