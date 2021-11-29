// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faTrashAlt,
  faFacebook,
  faInstagram,
  faTwitter
  // more icons go here
);

export default library;
