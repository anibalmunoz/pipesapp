import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'anibal';
  public nameUpper: string = 'ANIBAL';
  public fullName: string = 'aNiBaL MuNoZ';
}
