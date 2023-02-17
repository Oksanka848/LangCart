import style from './button.module.scss';

export default function Button(props) {
  const {text}=props;
  return (
    <>{
      <div className={style.button}>{text}</div>

    }</>
  )
}
