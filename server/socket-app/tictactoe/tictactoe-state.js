const _ = require('lodash');

module.exports = function (injected) {

    var gamefull = false;

    return function (history) {
        function processEvent(event) {
          if (event.type === "GameJoined") {
            gamefull = true;
          }
        }
        function processEvents(history) {
            _.each(history, processEvent);
        }
        function gameFull() {
          return gamefull;
        }
        processEvents(history);

        return {
            gameFull:gameFull,
            processEvents: processEvents,
        }
    };
};
