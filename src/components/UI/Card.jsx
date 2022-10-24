import classes from "./Card.module.css";

export default function Card(props) {

    let cardClasses = props.featured ? classes.container +' '+classes.featuredCard : classes.container;

  return (
    <div className={cardClasses}>
      <div className={classes.left}>
        <img src={props.logo} alt="company logo" />
        <div className={classes.info}>
          <div className={classes.infoTop}>
            <h4 className={classes.company}>{props.company}</h4>
            {props.new && <span className={classes.new}>NEW!</span>}
            {props.featured && (
              <span className={classes.featured}>FEATURED</span>
            )}
          </div>
          <h2 className={classes.role}>{props.position}</h2>
          <div className={classes.infoBottom}>
            <span>{props.postedAt}</span>
            <span>&#9671;</span>
            <span>{props.contract}</span>
            <span>&#9671;</span>
            <span>{props.location}</span>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.tag}>{props.role}</div>
        <div className={classes.tag}>{props.level}</div>
        {props.languages.map((lang) => (
          <div className={classes.tag}>{lang}</div>
        ))}
        {props.tools.map((tool) => (
          <div className={classes.tag}>{tool}</div>
        ))}
      </div>
    </div>
  );
}
