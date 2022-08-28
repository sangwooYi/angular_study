import { Component } from '@angular/core';

@Component({
  // 이 명칭으로 html 태그에 쓸 수 있는 것 <app-root>
  selector: 'app-root',
  // 사용할 템플릿 templateUrl 변수명으로 쓰면 됨
  templateUrl: './app.component.html',
  // 사용할  CSS , Vue 랑 유사한 틀이라고 이해할 수 있다.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
}
