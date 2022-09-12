(function () {
  var argus = [];
  J$.analysis = {
    invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
      if (f.name === "printName") {
        argus.push(args);
      }
    },
    invokeFun: function (
      iid,
      f,
      base,
      args,
      result,
      isConstructor,
      isMethod,
      functionIid,
      functionSid
    ) {
      if (f.name === "printName") {
        console.log("called x times: " + argus.length);
      }
    },
    /**
     * This callback is called when an execution terminates in node.js.  In a browser
     * environment, the callback is called if ChainedAnalyses.js or ChainedAnalysesNoCheck.js
     * is used and Alt-Shift-T is pressed.
     *
     * @returns {undefined} - Any return value is ignored
     */
    // endExecution: function () {
    //   console.log(argus);
    // },
  };
})();
