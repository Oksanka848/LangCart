import React from 'react'
import '../diction.json';
import style from './style.module.scss';

/*import Button from '../Button/Button';*/
/*<div class="button">
 <p>Write to Us &#x270E; </p>
    	</div>
        export default function AddWord() {
   
      const [isEditMode, setIsEditMode] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const saveCancelBtns = () => {
     
  return (
    <>
       
                         
                    <input type="text" className={style.input} ></input>
                    <input type="text" className={style.input} ></input>
                    <input type="text" className={style.input} ></input>
                                        <div className={style.buttons}>
                        <div className={style.button} >Сохранить</div>
                        <div className={style.button}  onClick={handleCancel}>Отмена</div>
                    </div>
                </>
                )
    }

    const editDeleteBtns = () => {
        return (
           
                <>
                    
                    <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
        
    
                                       <div className={style.buttons}>
                        <div className={style.btn}></div>
                        <div className={style.button} onClick={handleEditMode}>Добавить</div>
                    </div>

                </>
            )}
        
            return (
               <Words>{isEditMode ? saveCancelBtns() : editDeleteBtns()}</Words>
                
                
                    
               
            )
        }*/
        function AddToCartButton() {

            return (

                <div className="button">Из&#x270E;</div>
       )};
        function AddToCartForm(props) {
            return (
                <div className={style.container}>
    <div className={style.listcontainer}>
                    <input type="text" className={style.input} value={props.addedToCart}>`${props.ru}`</input>
                    <input type="text" className={style.input} value={props.addedToCart}>`${props}`</input>
                    <input type="text" className={style.input} value={props.addedToCart}>`${props}`</input>

                    </div >

</div>
            );
        }
        export default class AddWord extends React.Component {
            render() {
                const {en, ru, tr, addedToCart } = this.props;
                
                        return (
                    <>
                    <div className={style.container}>
    <div className={style.listcontainer}>
        <div className={style.item}>{en}</div>
        <div className={style.item}>{ru}</div>
        <div className={style.item}>{tr}</div>
        
   


{addedToCart
                                ? <AddToCartForm addedToCart={addedToCart} />
                                : <AddToCartButton />
                            }</div></div>
</>);
        
                           
                       
                   
       
            }
        }
