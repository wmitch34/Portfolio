import '../App.css';

export default function Tile (props){
    const{hint, id, children, className, onClick} = props
    let hintClass;
    hint? hintClass = className+' hint-pulse': hintClass = className;
    console.log(hintClass)
    return (
        <div className={hintClass} onClick={onclick} id = {id}>
            {children}
        </div>
    )
}