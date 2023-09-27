function Slider(props) {
    let bakuCity = props.baku
    return (
        <div>
          <p style={{background:'black'}}>{props.index ? 'True' : 'False'}</p>
        
          <h1>{bakuCity}</h1>
          <h1>{props.astana}</h1>
          <h1>{props.moskva.userName}</h1>
          <h1>{props.paris}</h1>
        </div>
    );
  }
  
  export default Slider;
  