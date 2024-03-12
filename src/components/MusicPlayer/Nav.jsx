import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ onLibraryClicked }) {
  return (
    <nav>
      <h1>Tunes to vibe to</h1>
      <button onClick={onLibraryClicked}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
