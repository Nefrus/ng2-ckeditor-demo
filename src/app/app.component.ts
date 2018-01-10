import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CKEditorComponent} from 'ng2-ckeditor';
import {Config} from './config';

declare var CKEDITOR: any;
declare var angular: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

  ckeditorContent = '';

  @ViewChild(CKEditorComponent)
  cKEditorComponent: CKEditorComponent;

  config;

  constructor() {

  }

  ngOnInit(): void {
    this.config = {
      customConfig: '/assets/ckeditor/ckeditor/config.js'
    };
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      // console.log(this.cKEditorComponent.instance.elementPath());
    }, 1000);
  }

  click(e) {
    console.log(this.cKEditorComponent.instance.elementPath().block);
  }

  append(t) {
    if (!this.cKEditorComponent.instance.elementPath()) {
      console.log(this.cKEditorComponent.instance.document.$.getElementsByTagName('body')[0].appendChild(t.cloneNode(true)));
    } else {
      this.cKEditorComponent.instance.elementPath().block.appendText(t.cloneNode(true));
    }
  }
}
