/**
 * SWITCHMAP() :
 * 
 */


 import { debounceTime, fromEvent, Observable } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { map, mergeAll, mergeMap, pluck, switchMap } from 'rxjs/operators';
 import { GitHubUser, GitHubUsersResp } from "../interfaces/githubuser-interfaces";
 
 
 
 
 const body = document.querySelector('body');
 const textInput = document.createElement('input');
 const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');
 const orderList = document.createElement('ol');
 
 body.append(textInput, orderList);
 const url = 'https://api.github.com/search/users';
 //helpers
 
 const mostrarUsuarios = (usuarios: GitHubUser[]) =>{
 
     orderList.innerHTML = '';
     console.log(usuarios);
 
     for(const usuario of usuarios){
 
 
         const li = document.createElement('li');
         const img = document.createElement('img');
 
         img.src = usuario.avatar_url;
         const anchor = document.createElement('a');
         anchor.text =  'ver pagina';
         anchor.href = usuario.html_url;
         anchor.target = '_blank';
 
         li.append(img);
         li.append(usuario.login + ' ');
         li.append(anchor);
 
         orderList.append(li);
 
 
     }
 }
 
 
 
 input$.pipe(
     debounceTime<KeyboardEvent>(500),
     // pluck<KeyboardEvent, string>('target', 'value'),
     map<KeyboardEvent, string>(evento => evento.target['value']),
     mergeMap<string, Observable<GitHubUsersResp>>(texto => ajax.getJSON(`${url}?q=${texto}`)),
     // pluck<any, GithubUser[]>('items')
     map<any, GitHubUser[]>(item => item.items)
 ); //.subscribe(mostrarUsuarios);

 const url1 = 'https://httpbin.org/delay/1?arg=';

 input$.pipe(
     pluck('target','value'),
     switchMap(texto => ajax.getJSON(url1 + texto))
 ).subscribe(console.log)