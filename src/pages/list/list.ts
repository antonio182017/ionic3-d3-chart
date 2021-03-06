import { Component,AfterViewInit,ElementRef,ViewChild,NgZone   } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import  'jquery-knob/dist/jquery.knob.min.js';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  value:any=1;

  @ViewChild("knob") knobElementRef: ElementRef;

  constructor(public navCtrl: NavController,public zone: NgZone,  public navParams: NavParams) {



  }


  ngAfterViewInit(){

    console.log('AfterViewInit');
    this.initKnob();

  }


  change(){
    console.log('cc', this.value);



    // get native element
    let element = this.knobElementRef.nativeElement ;

    // init knob
    $(element)
      .val(this.value)
      .trigger('change');



  }


  initKnob(){

    // get native element
    let element = this.knobElementRef.nativeElement ;

    // init knob
    $(element).knob({

      width:"150",
      fgColor:"#ffec03",
      skin:"tron",
      thickness:".2",
      displayPrevious:true,
      'release' :  ()=> {
        // release
      },
      'change' :  ()=> {
        this.value = this.knobElementRef.nativeElement.value
      }
    });
  }


}
