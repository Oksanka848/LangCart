import style from './button.module.scss';
export default function Button(props) {
  const { text } = props;
  return (
    <>{
      <div className={style.button}>{text}</div>
    }
      <div className={style.btn_grp} >
        <div className={style.btn}>&#x270E;</div>
        <div className={style.btn}>&#x1F5D1;</div></div></>
  )
}
