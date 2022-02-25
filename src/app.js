import { LightningElement } from "lwc";

export default class App extends LightningElement {
  // @track name;

  // connectedCallback() {
  //   this.getTime();
  //   setInterval(() => {
  //       this.getTime();
  //       console.log("Called");
  //   }, 1000);
  // }

  name = 'Electra X4';
  description = 'A sweet bike built for comfort.';
  category = 'Mountain';
  material = 'Steel';
  price = '$2,700';
  pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';


}

