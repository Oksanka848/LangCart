import style from './button.module.scss';

export default function Button(props) {
  return (
    <>{
      <div className={style.button}>{props.text}</div>

    }</>
  )
}
