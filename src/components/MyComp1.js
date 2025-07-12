//1. Import area

//2. Function Definition area
function MyComp1(props){
    let surname='Sinha'; //Local variable

    //Every function return something
    // HTML Structure in JSX (every tag should have closing tag)
    return <h1>Hello {props.name} {surname}, How are you?</h1>

}

//3. Export Area
// you can export anything like function,class,variable,array
export default MyComp1;