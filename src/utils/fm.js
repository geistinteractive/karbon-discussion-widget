/**
   * FileMaker Callback Object
   * provides the ability to call a FileMaker Script
   * and include data loaded into the calced window
   */
function FM() {
  var url = "[[FMFileURL]]";
  var isFMWebWidget = url.startsWith("fmp://");
  var result;

  var runScript = function(name, data) {
    var param;
    if (data !== null && typeof data === "object") {
      param = data;
    } else {
      param = { data: data };
    }
    param = JSON.stringify(param);
    if (isFMWebWidget) {
      if (window.clipboardData) {
        window.clipboardData.setData("Text", param);
        window.location.href =
          url + "?script=" + encodeURIComponent(name) + "&param=cliboard";
      } else {
        window.location.href =
          url +
          "?script=" +
          encodeURIComponent(name) +
          "&param=" +
          encodeURIComponent(param);
      }
    } else {
      console.log(url);
      console.log("Script", name);
      console.log("param", data);
    }
  };

  return {
    url: url,
    isFMWebWidget: isFMWebWidget,
    runScript
  };
}

export default FM();
