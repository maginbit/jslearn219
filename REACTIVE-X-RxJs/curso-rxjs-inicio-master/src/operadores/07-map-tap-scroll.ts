import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML =`

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas diam a justo dictum hendrerit. Nunc mattis metus vel orci maximus, vitae dictum enim consequat. Quisque in nisi tincidunt, suscipit risus id, pulvinar leo. Duis vel dui tortor. Vivamus finibus iaculis urna, a tempor justo porttitor ac. Mauris scelerisque at ex eget tincidunt. Vestibulum vehicula tempor magna eget blandit. Ut venenatis felis vitae varius aliquet. Aenean porttitor sem justo, a cursus arcu volutpat vel. Nulla in enim ligula. Mauris ut scelerisque odio. Cras ultricies, augue a dignissim malesuada, metus lacus pretium leo, nec aliquam urna odio quis turpis.
<br/><br/>
Sed sollicitudin purus in tincidunt ultrices. Etiam tincidunt metus lacinia ipsum vestibulum, quis viverra nulla blandit. Integer augue purus, scelerisque vitae sem vitae, consequat imperdiet mauris. Suspendisse dapibus dapibus sem, vestibulum vulputate justo aliquet sed. Nulla sit amet condimentum erat. Morbi pharetra est magna, cursus tempus sapien consequat fermentum. Etiam eget accumsan ligula, ac sodales massa. Donec egestas lectus a fringilla vestibulum. Proin eget lacus blandit, porta neque eget, efficitur risus. Integer vel egestas turpis, sed volutpat massa. Pellentesque sagittis libero eu justo fermentum, eu tincidunt nunc fringilla. Morbi et bibendum risus, ac luctus velit. Curabitur nec imperdiet neque. Ut faucibus condimentum nisi, sit amet suscipit mauris rhoncus eu. Donec fermentum, urna lobortis tristique mollis, sapien tortor feugiat sapien, et aliquam est nisl ac lacus.
<br/><br/>
Fusce venenatis consequat neque sed volutpat. Curabitur mattis molestie feugiat. Sed in odio id ipsum facilisis semper. Vestibulum et convallis justo. Vivamus sit amet ligula magna. Proin ac elit aliquet, tempus risus at, convallis eros. Cras aliquet ex volutpat leo consectetur efficitur. Ut sed nibh id enim finibus iaculis id quis odio.
<br/><br/>
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
Sed vulputate, neque et facilisis scelerisque, odio purus varius lacus, non bibendum sem augue non tellus. Vivamus venenatis, lectus at fringilla feugiat, nibh metus finibus nunc, sed auctor tortor arcu ut nulla. Pellentesque interdum lectus ac nisi dictum, id efficitur lectus tempor. Proin ut neque placerat, pulvinar felis ac, accumsan mauris. Mauris erat nulla, pretium a orci venenatis, fermentum efficitur nisl. Morbi congue, enim vitae aliquam sollicitudin, massa dui ultrices felis, eu fermentum nisi nunc ut libero. Nullam lacus dui, mattis vel magna at, imperdiet finibus nunc.
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
Proin dignissim urna et enim varius, quis maximus nisi ornare. Aliquam mi lorem, tempor at lacus a, viverra dictum augue. Integer id posuere ex. Curabitur porta est vel facilisis scelerisque. Suspendisse rhoncus nulla vel neque interdum, in aliquet massa pulvinar. Duis nibh nunc, placerat nec mollis non, lobortis ut risus. Phasellus sit amet consequat justo. Proin elementum pulvinar ex varius scelerisque.
<br/><br/>
`;
// funcion calcular porcentaje.
const calcularPorcentaje = (event ) =>{

    // console.log(event);
    const { scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
    // console.log(scrollHeight, scrollTop, clientHeight);

    return ( scrollTop /( scrollHeight - clientHeight)) * 100
}



const body = document.querySelector('body');

body.append(texto);

// progressbar

const progressBar =  document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map( event => calcularPorcentaje(event)),
    tap(console.log)
);

// subcripcion
progress$.subscribe( porcentaje => {
    progressBar.style.width =  `${porcentaje}%`;
});
// scroll$.subscribe(console.log);

