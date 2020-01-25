import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FirepadComponent } from './firepad/firepad.component';


const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: './assets', // configure base path for monaco editor default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  // tslint:disable-next-line: max-line-length
  onMonacoLoad: () => { console.log(( window as any).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};
@NgModule({
  declarations: [
    AppComponent,
    FirepadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
