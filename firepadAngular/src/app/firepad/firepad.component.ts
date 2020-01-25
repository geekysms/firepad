import { Component, OnInit } from '@angular/core';
import firepad from 'firepad';
import firebase from 'firebase/app';
import 'firebase/database';
import { environment } from 'src/environments/environment';
export default firepad;
@Component({
  selector: 'app-firepad',
  templateUrl: './firepad.component.html',
  styleUrls: ['./firepad.component.css']
})
export class FirepadComponent implements OnInit {
  editor: any;

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code= '';
  firebaseRef: any;
  firePadRef: any;

  constructor() {
    firebase.initializeApp(environment.firebase);
    this.firebaseRef = firebase.database().ref();
    console.log(this.firebaseRef, 'firebaseref');
  }

  ngOnInit() {
    this.firePadRef = this.getExampleRef();
  }

  initMonaco(e) {
    this.editor = e;
    console.log(this.editor, 'editor here');
    console.log(this.firePadRef, 'firepadRef here');
    // setTimeout(() => {
    firepad.fromMonaco(this.firePadRef, this.editor);
    // firepad.setUserColor('#ff0000');
    // }, 100);

    firepad.on('ready', function() {
      console.log('coming here');
    });
  }

  getExampleRef() {
    let ref = this.firebaseRef;
    let hash = window.location.hash.replace(/#/g, '');
    if (hash) {
        ref = ref.child(hash);
    } else {
        ref = ref.push(); // generate unique location.
        const location = (window.location + '#' + ref.key);
        window.location.href = location;
        // window.location = location ; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
    }
    return ref;
}

}
