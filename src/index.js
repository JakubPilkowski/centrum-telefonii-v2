import "./modal.css";
import "./nav.css";
import "./styles.css";
import "./header.css";
import "./button.css";
import "./offer.css";
import "./timers.css";
import "./map.css";
import "./news.css";
import "./footer.css";

import "./services.js";
import "./nav.js";
import "./header.js";
import "./offer.js";
import "./counter.js";
import "./map.js";
import "./utils";
import { closeModal } from "./utils";

$(document).ready(function () {
  $(".modal-container button").click(() => {
    closeModal();
  });
});
