export default function List(props) {
  return (
    <ul className={props.listClass}>
      {props.list.map((item) => (
        <li className={props.itemClass} onClick={props.click} key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}
