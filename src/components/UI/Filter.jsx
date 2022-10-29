import classes from "./Filter.module.css";

export default function Filter(props) {
  return (
    <div id={props.id} className={classes.filterTag}>
      <div className={classes.filterItem}>{props.name}</div>
      <div className={classes.closeButton} onClick={props.onRemoveFilter}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 16"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          pointerEvents={"none"}
          style={{ margin: "3px 0 0 3px" }}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  );
}
