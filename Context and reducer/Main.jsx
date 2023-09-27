import Services from "./Services";
import Slider from "./Slider";

function Main() {
    let baku = 'Baku'
    let obj = {
        userName: "Sam"
    }
    return (
        <main>
          <h1>Main</h1>
          <Services/>
          <Slider index baku={baku} moskva={obj} paris='Paris' astana='Astana'/>
          <Slider baku={baku} moskva={obj} paris='Paris' astana='Astana'/>
          <Slider baku={baku} moskva={obj} paris='Paris' astana='Astana'/>
          <Slider baku={baku} moskva={obj} paris='Paris' astana='Astana'/>

        </main>
    );
  }
  
  export default Main;
  