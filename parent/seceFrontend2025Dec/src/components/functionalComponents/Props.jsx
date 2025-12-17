const Props =({hi,grade,age,img}) =>{
    return(
        <div>
            <h1>This is props component</h1>
           <ol>
            <li>Props are:</li>
                <ul>
                    <li> {hi}I completed my {grade} Grade by the age of {age}</li>
                    <li><img src={img}/></li>
                </ul>
           </ol>
        </div>
    )
}
export default Props;