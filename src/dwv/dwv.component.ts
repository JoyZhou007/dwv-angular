import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import * as dwv from 'dwv';

// gui overrides

// decode query
dwv.utils.decodeQuery = dwv.utils.base.decodeQuery
// progress
dwv.gui.displayProgress = function () {}
// window
dwv.gui.getWindowSize = dwv.gui.base.getWindowSize
// get element
dwv.gui.getElement = dwv.gui.base.getElement
// refresh element
dwv.gui.refreshElement = dwv.gui.base.refreshElement

@Component({
  selector: 'dwv-root',
  templateUrl: './dwv.component.html',
  styleUrls: ['./dwv.component.css']
})

export class DwvComponent {
  private legend: string;
  private dwvApp: any;

  constructor() {
    this.legend = 'Powered by dwv ' + dwv.getVersion() + ' and Angular ' + VERSION.full;
  }
  ngOnInit() {
    // create app
    this.dwvApp = new dwv.App();
    // initialise app
    this.dwvApp.init({
      'containerDivId': 'dwv',
      'fitToWindow': true,
      'tools': ['Scroll', 'WindowLevel', 'ZoomAndPan'],
      'isMobile': true
    });
  }
  onClick = function (event) {
    if ( this.dwvApp ) {
        this.dwvApp.onChangeTool(event);
    }
  };
}
